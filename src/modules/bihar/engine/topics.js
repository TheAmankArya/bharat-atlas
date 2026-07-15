// The full topic taxonomy shown on the homepage's Categories section — mirrors
// src/modules/bharat/engine/topics.js's exact pattern: each entry either points at a real
// mode (+ optional subcategory/division narrowing) or is honestly marked `status: "soon"`
// when we don't have that data yet — never a dead link pretending to work. Only
// District/Division practice are live today; everything else is real content this app is
// architecturally ready for, just not yet populated.
export const TOPIC_CATEGORIES = [
  {
    id: "administrative",
    label: "Administrative Bihar",
    emoji: "🏛️",
    color: "political",
    blurb: "38 districts, 9 divisions, and the headquarters that govern them.",
    topics: [
      { label: "District Practice", modeId: "district" },
      { label: "Division Practice", modeId: "division" },
      { label: "District Headquarters", status: "soon" },
    ],
  },
  {
    id: "physical",
    label: "Physical Geography",
    emoji: "🗻",
    color: "physical",
    blurb: "Rivers, hills, plateaus and the shape of Bihar's land itself.",
    topics: [
      { label: "Rivers", status: "soon" },
      { label: "Tributaries", status: "soon" },
      { label: "Hills", status: "soon" },
      { label: "Plateaus", status: "soon" },
      { label: "Waterfalls", status: "soon" },
      { label: "Dams", status: "soon" },
      { label: "Barrages", status: "soon" },
      { label: "Canals", status: "soon" },
      { label: "Wetlands", status: "soon" },
      { label: "Soil Regions", status: "soon" },
      { label: "Natural Regions", status: "soon" },
    ],
  },
  {
    id: "environment",
    label: "Environment",
    emoji: "🌿",
    color: "environment",
    blurb: "The parks, reserves and sanctuaries that protect Bihar's wildlife.",
    topics: [
      { label: "Valmiki National Park", status: "soon" },
      { label: "Tiger Reserve", status: "soon" },
      { label: "Wildlife Sanctuaries", status: "soon" },
      { label: "Bird Sanctuaries", status: "soon" },
      { label: "Ramsar Sites", status: "soon" },
      { label: "Forest Regions", status: "soon" },
      { label: "Dolphin Sanctuary", status: "soon" },
      { label: "Protected Areas (all)", status: "soon" },
    ],
  },
  {
    id: "heritage",
    label: "Heritage & Tourism",
    emoji: "🏯",
    color: "heritage",
    blurb: "The monuments, circuits and sacred sites that trace Bihar's history.",
    topics: [
      { label: "UNESCO Sites", status: "soon" },
      { label: "Historical Sites", status: "soon" },
      { label: "Ancient Universities", status: "soon" },
      { label: "Religious Sites", status: "soon" },
      { label: "Archaeological Sites", status: "soon" },
      { label: "Forts", status: "soon" },
      { label: "Museums", status: "soon" },
      { label: "Tourist Places", status: "soon" },
      { label: "Buddhist Circuit", status: "soon" },
      { label: "Jain Sites", status: "soon" },
      { label: "Sikh Heritage", status: "soon" },
    ],
  },
  {
    id: "resources",
    label: "Resources & Infrastructure",
    emoji: "⛏️",
    color: "economic",
    blurb: "Agriculture, minerals, industry and the infrastructure that connects Bihar.",
    topics: [
      { label: "Agriculture Regions", status: "soon" },
      { label: "Crop Belts", status: "soon" },
      { label: "Minerals", status: "soon" },
      { label: "Industries", status: "soon" },
      { label: "Industrial Areas", status: "soon" },
      { label: "Power Plants", status: "soon" },
      { label: "Oil Refinery", status: "soon" },
      { label: "Airports", status: "soon" },
      { label: "Railway Junctions", status: "soon" },
      { label: "National Highways", status: "soon" },
      { label: "Major Bridges", status: "soon" },
    ],
  },
];

export function isTopicLive(topic) {
  return topic.status !== "soon" && Boolean(topic.modeId);
}
