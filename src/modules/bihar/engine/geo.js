import { feature } from "topojson-client";
import { geoContains, geoMercator, geoCentroid } from "d3-geo";
import biharDistrictsTopo from "../../../data/bihar/geo/bihar-districts-topo.json";

const districtsFeatureCollection = feature(biharDistrictsTopo, biharDistrictsTopo.objects.districts);

// Shared base coordinate space for the map: the projection is fitted once to these
// dimensions, and MapCanvas renders its <svg viewBox> at the same size, so screen clicks
// can be inverted straight back to lat/lng via this exact projection instance. Mirrors
// src/modules/bharat/engine/geo.js exactly — see that file for the full click-detection
// rationale (ZoomableGroup CTM, sub-pixel fallback, etc.), all of which applies unchanged.
export const PROJECTION_WIDTH = 720;
export const PROJECTION_HEIGHT = 760;

export const biharProjection = geoMercator().fitSize(
  [PROJECTION_WIDTH, PROJECTION_HEIGHT],
  districtsFeatureCollection
);

export function getStateFeatures() {
  return districtsFeatureCollection.features;
}

export function getDistrictFeatureByName(name) {
  return districtsFeatureCollection.features.find((f) => f.properties.name === name);
}

// The bundle the shared, module-agnostic MapCanvas expects via its `mapGeo` prop — the
// exact same shape Bharat's own geo.js exports, so MapCanvas itself needs zero changes.
export const BIHAR_MAP_GEO = {
  getStateFeatures,
  projection: biharProjection,
  width: PROJECTION_WIDTH,
  height: PROJECTION_HEIGHT,
};

const EARTH_RADIUS_KM = 6371;

/** Great-circle distance between two {lat, lng} points, in kilometres. */
export function haversineDistanceKm(a, b) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

// No Bihar district projects to a sub-pixel size at this map's scale (smallest, Sheohar,
// is ~32x54 viewBox units — comfortably clickable), so unlike Bharat's Lakshadweep there's
// no coarse-tolerance fallback needed today. If a future district/division/protected-area
// entry ever needs one, mirror Bharat's MIN_VISIBLE_DIMENSION pattern here.

/** Point-in-polygon test against a district's real boundary. */
export function isPointInDistrict(point, districtName) {
  const districtFeature = getDistrictFeatureByName(districtName);
  if (!districtFeature) return false;
  return geoContains(districtFeature, [point.lng, point.lat]);
}

/** Which district (if any) a raw map click landed in — used by District Explorer's
 * browse-the-map navigation, not by quiz scoring (which goes through checkAnswer/
 * isPointInDistrict against a specific question's districts[] instead). */
export function findDistrictAtPoint(point) {
  const hit = districtsFeatureCollection.features.find((f) => geoContains(f, [point.lng, point.lat]));
  return hit?.properties.name ?? null;
}

// Raw topology geometries (with .arcs) — NOT the same as districtsFeatureCollection,
// which topojson-client's feature() already converted to real coordinates and no longer
// carries arc indices. Adjacency needs the raw arcs, so it reads from here instead.
const rawDistrictGeometries = biharDistrictsTopo.objects.districts.geometries;

/** Real topological neighbours of a district — any other district whose boundary shares
 * an arc with this one. Derived directly from the topojson's arc indices (a genuine
 * structural fact, not invented), so "Neighbour Districts" needs no separate data entry. */
export function getNeighbourDistrictNames(name) {
  const target = rawDistrictGeometries.find((g) => g.properties.name === name);
  if (!target) return [];

  const targetArcs = new Set(flattenArcIndices(target));
  return rawDistrictGeometries
    .filter((g) => g.properties.name !== name)
    .filter((g) => flattenArcIndices(g).some((arc) => targetArcs.has(arc)))
    .map((g) => g.properties.name);
}

function flattenArcIndices(geometry) {
  // Works for both Polygon (arcs: number[][]) and MultiPolygon (arcs: number[][][]) since
  // Infinity-depth flatten collapses either shape down to a flat list of arc indices.
  // Arc indices can be negative (meaning "reversed"); normalize with ~ (bitwise NOT) like
  // topojson itself does, so a shared border is detected regardless of winding direction.
  return geometry.arcs.flat(Infinity).map((i) => (i < 0 ? ~i : i));
}

export function getDistrictCentroid(name) {
  const districtFeature = getDistrictFeatureByName(name);
  if (!districtFeature) return null;
  const [lng, lat] = geoCentroid(districtFeature);
  return { lat, lng };
}

/** Attaches an approximate `path` to a reveal location that spans multiple districts and
 * doesn't already have a real one — mirrors Bharat's withRevealPath exactly, connecting
 * each district's centroid ordered along the group's dominant geographic axis. */
export function withRevealPath(location) {
  if (!location || location.path || location.districts.length < 2) return location;
  const centroids = location.districts.map(getDistrictCentroid).filter(Boolean);
  if (centroids.length < 2) return location;

  let maxDistance = -1;
  let ends = [0, 1];
  for (let i = 0; i < centroids.length; i += 1) {
    for (let j = i + 1; j < centroids.length; j += 1) {
      const distance = haversineDistanceKm(centroids[i], centroids[j]);
      if (distance > maxDistance) {
        maxDistance = distance;
        ends = [i, j];
      }
    }
  }
  const [a, b] = [centroids[ends[0]], centroids[ends[1]]];
  const dx = b.lng - a.lng;
  const dy = b.lat - a.lat;
  const projectOntoAxis = (p) => (p.lng - a.lng) * dx + (p.lat - a.lat) * dy;
  const path = [...centroids].sort((p1, p2) => projectOntoAxis(p1) - projectOntoAxis(p2));
  return { ...location, path };
}
