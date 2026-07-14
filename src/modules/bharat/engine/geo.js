import { feature } from "topojson-client";
import { geoContains, geoMercator } from "d3-geo";
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

/** Point-in-polygon test against a state/UT's real boundary (handles MultiPolygon islands correctly). */
export function isPointInState(point, stateName) {
  const stateFeature = getStateFeatureByName(stateName);
  if (!stateFeature) return false;
  return geoContains(stateFeature, [point.lng, point.lat]);
}
