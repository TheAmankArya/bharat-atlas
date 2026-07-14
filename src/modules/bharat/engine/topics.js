// The full topic taxonomy shown on the homepage's Categories section. Each entry either
// points at a real mode (+ optional subcategory/tag narrowing) or is honestly marked
// `status: "soon"` when we don't have that data yet — never a dead link pretending to work.
export const TOPIC_CATEGORIES = [
  {
    id: "physical",
    label: "Physical Geography",
    emoji: "🗻",
    color: "physical",
    blurb: "Mountains, rivers, plateaus and the shape of the land itself.",
    topics: [
      { label: "Mountains", modeId: "mountain" },
      { label: "Plateaus", modeId: "plateau" },
      { label: "Passes", modeId: "pass" },
      { label: "Peaks", modeId: "peak" },
      { label: "Rivers", modeId: "river" },
      { label: "Lakes", modeId: "lake" },
      { label: "Glaciers", status: "soon" },
      { label: "Waterfalls", status: "soon" },
      { label: "Islands", modeId: "island" },
      { label: "Coastal Features", modeId: "coastal-feature" },
    ],
  },
  {
    id: "political",
    label: "Political Geography",
    emoji: "🏛️",
    color: "political",
    blurb: "States, union territories and the capitals that govern them.",
    topics: [
      { label: "States", modeId: "state", subcategory: "state" },
      { label: "Union Territories", modeId: "state", subcategory: "union-territory" },
      { label: "Capitals", modeId: "capital" },
      { label: "Borders", status: "soon" },
      { label: "Districts", status: "soon" },
    ],
  },
  {
    id: "environment",
    label: "Environment",
    emoji: "🌿",
    color: "environment",
    blurb: "Parks, reserves and wetlands that protect India's wildlife.",
    topics: [
      { label: "National Parks", modeId: "forest", subcategory: "national-park" },
      { label: "Tiger Reserves", modeId: "forest", tag: "tiger-reserve" },
      { label: "Wildlife Sanctuaries", modeId: "forest", subcategory: "wildlife-sanctuary" },
      { label: "Biosphere Reserves", modeId: "forest", subcategory: "biosphere-reserve" },
      { label: "Elephant Reserves", status: "soon" },
      { label: "Ramsar Sites", modeId: "wetland" },
      { label: "Forests (all)", modeId: "forest" },
    ],
  },
  {
    id: "economic",
    label: "Economic Geography",
    emoji: "⛏️",
    color: "economic",
    blurb: "Minerals, industry and the crops and soils that feed a nation.",
    topics: [
      { label: "Minerals", modeId: "mineral" },
      { label: "Industries (all)", modeId: "industry" },
      { label: "Steel Plants", modeId: "industry", subcategory: "steel-plant" },
      { label: "Power Plants", modeId: "industry", subcategory: ["thermal-power", "nuclear-power"] },
      { label: "Ports", modeId: "industry", subcategory: "port" },
      { label: "Agriculture", modeId: "crop" },
      { label: "Soils", modeId: "soil" },
    ],
  },
  {
    id: "heritage",
    label: "Heritage",
    emoji: "🏯",
    color: "heritage",
    blurb: "The monuments and world heritage sites that trace India's history.",
    topics: [
      { label: "UNESCO Sites", modeId: "unesco" },
      { label: "Ancient Cities", status: "soon" },
      { label: "Important Temples", status: "soon" },
      { label: "Historical Places", status: "soon" },
    ],
  },
];

export function isTopicLive(topic) {
  return topic.status !== "soon" && Boolean(topic.modeId);
}
