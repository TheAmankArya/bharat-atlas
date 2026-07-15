import { DISTRICT_LOCATIONS } from "./districts.js";

// Bihar's 9 real administrative divisions (pramandal), synthesized from the district data
// above rather than duplicated — mirrors Bharat's "state" category exactly: a division's
// `districts` lists every member district, so it's scored and highlighted with the same
// multi-membership logic already used for e.g. a river crossing several districts. The
// centroid is the average of its member districts' own (real, computed) centroids — a
// reasonable representative pin, not used for anything but the map marker.
function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const DIVISION_NAMES = [...new Set(DISTRICT_LOCATIONS.map((d) => d.division))];

export const DIVISION_LOCATIONS = DIVISION_NAMES.map((division) => {
  const members = DISTRICT_LOCATIONS.filter((d) => d.division === division);
  const avgLat = members.reduce((sum, d) => sum + d.coordinates.lat, 0) / members.length;
  const avgLng = members.reduce((sum, d) => sum + d.coordinates.lng, 0) / members.length;

  return {
    id: `${slug(division)}-division`,
    name: `${division} Division`,
    category: "division",
    subcategory: "division",
    coordinates: { lat: avgLat, lng: avgLng },
    districts: members.map((d) => d.name),
    division,
    difficulty: "medium",
    description: `${division} Division — one of Bihar's 9 administrative divisions, comprising ${members.length} district${members.length === 1 ? "" : "s"}: ${members.map((d) => d.name).join(", ")}.`,
    importance: "Detailed divisional facts are coming soon.",
    tags: ["division"],
  };
});
