import { feature } from "topojson-client";
import { geoContains, geoMercator, geoPath, geoCentroid } from "d3-geo";
import indiaStatesTopo from "../../../data/bharat/geo/india-states-topo.json";

const statesFeatureCollection = feature(indiaStatesTopo, indiaStatesTopo.objects.states);

// Shared base coordinate space for the map: the projection is fitted once to these
// dimensions, and MapCanvas renders its <svg viewBox> at the same size, so screen clicks
// can be inverted straight back to lat/lng via this exact projection instance.
export const PROJECTION_WIDTH = 720;
export const PROJECTION_HEIGHT = 820;

export const indiaProjection = geoMercator().fitSize(
  [PROJECTION_WIDTH, PROJECTION_HEIGHT],
  statesFeatureCollection
);

export function getStateFeatures() {
  return statesFeatureCollection.features;
}

export function getStateFeatureByName(name) {
  return statesFeatureCollection.features.find((f) => f.properties.name === name);
}

// The bundle the shared, module-agnostic MapCanvas expects via its `mapGeo` prop. A
// future Bihar module would export its own equivalent (district-level geometry, its own
// projection) from src/modules/bihar/engine/geo.js — MapCanvas itself needs no changes.
export const BHARAT_MAP_GEO = {
  getStateFeatures,
  projection: indiaProjection,
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

// States/UTs whose real boundary renders smaller than a screen pixel at this map's scale
// (currently just Lakshadweep — MapCanvas uses the same threshold to draw its small
// always-visible reference dot, since the polygon fill alone is otherwise invisible).
// Exact polygon containment is unplayable at that size: any sub-pixel rounding in the
// click math lands outside a well-under-1px-wide shape, so these fall back to a generous
// distance-to-centroid check instead.
const MIN_VISIBLE_DIMENSION = 2.5;
const COARSE_CLICK_RADIUS_KM = 80;

const coarseToleranceStateNames = new Set(
  (() => {
    const pathGenerator = geoPath(indiaProjection);
    return statesFeatureCollection.features
      .filter((f) => {
        const [[x0, y0], [x1, y1]] = pathGenerator.bounds(f);
        return Math.max(x1 - x0, y1 - y0) < MIN_VISIBLE_DIMENSION;
      })
      .map((f) => f.properties.name);
  })()
);

/** Point-in-polygon test against a state/UT's real boundary (handles MultiPolygon islands
 * correctly) — except for the handful of states too small to render at all, which use the
 * generous distance fallback above instead of exact containment. */
export function isPointInState(point, stateName) {
  const stateFeature = getStateFeatureByName(stateName);
  if (!stateFeature) return false;
  if (coarseToleranceStateNames.has(stateName)) {
    const [lng, lat] = geoCentroid(stateFeature);
    return haversineDistanceKm({ lat, lng }, point) <= COARSE_CLICK_RADIUS_KM;
  }
  return geoContains(stateFeature, [point.lng, point.lat]);
}

export function getStateCentroid(name) {
  const feature = getStateFeatureByName(name);
  if (!feature) return null;
  const [lng, lat] = geoCentroid(feature);
  return { lat, lng };
}

/**
 * For a feature spanning multiple states with no hand-curated `path` (rivers are the only
 * category with real researched waypoints) — approximates one by connecting each state's
 * centroid, ordered along the group's dominant geographic axis rather than whatever order
 * `states[]` happens to list them in. The axis is defined by the two farthest-apart
 * centroids; every point is sorted by its projection onto that line. It's a rough visual
 * aid ("this range/river runs through these states in this direction"), not a precise
 * trace — real geometry is what backs the actual correct/wrong scoring.
 */
export function getApproximateMultiStatePath(stateNames) {
  const points = stateNames.map(getStateCentroid).filter(Boolean);
  if (points.length < 2) return null;

  let maxDistance = -1;
  let ends = [0, 1];
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const distance = haversineDistanceKm(points[i], points[j]);
      if (distance > maxDistance) {
        maxDistance = distance;
        ends = [i, j];
      }
    }
  }
  const [a, b] = [points[ends[0]], points[ends[1]]];
  const dx = b.lng - a.lng;
  const dy = b.lat - a.lat;
  const projectOntoAxis = (p) => (p.lng - a.lng) * dx + (p.lat - a.lat) * dy;
  return [...points].sort((p1, p2) => projectOntoAxis(p1) - projectOntoAxis(p2));
}

/** Attaches an approximate `path` to a reveal location that spans multiple states and
 * doesn't already have a real one — a no-op for single-state/point locations and for
 * anything (like rivers) that already carries hand-curated waypoints. */
export function withRevealPath(location) {
  if (!location || location.path || location.states.length < 2) return location;
  const path = getApproximateMultiStatePath(location.states);
  return path ? { ...location, path } : location;
}
