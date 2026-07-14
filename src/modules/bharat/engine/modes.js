// Registry of Map Modes. Adding a mode over any existing/future category is a one-line
// entry here — no other code needs to change. Homepage topic browsing (grouping, icons)
// lives in src/modules/bharat/engine/topics.js; this registry only needs `categories` for
// pool filtering.
export const MODES = [
  {
    id: "state",
    label: "State Mode",
    tagline: "Click anywhere inside the correct state or UT's boundary.",
    categories: ["state"],
  },
  {
    id: "capital",
    label: "Capital Mode",
    tagline: "Pinpoint the capital city of the given state or UT.",
    categories: ["capital"],
  },
  {
    id: "mountain",
    label: "Mountain Mode",
    tagline: "Locate major mountain ranges and hill ranges across India.",
    categories: ["mountain", "hill"],
  },
  {
    id: "river",
    label: "River Mode",
    tagline: "Pinpoint the origin of India's major rivers.",
    categories: ["river"],
  },
  {
    id: "pass",
    label: "Pass Mode",
    tagline: "Locate high-altitude Himalayan mountain passes.",
    categories: ["pass"],
  },
  {
    id: "peak",
    label: "Peak Mode",
    tagline: "Pinpoint India's highest and most notable peaks.",
    categories: ["peak"],
  },
  {
    id: "plateau",
    label: "Plateau Mode",
    tagline: "Locate India's major plateau regions.",
    categories: ["plateau"],
  },
  {
    id: "lake",
    label: "Lake Mode",
    tagline: "Locate India's major lakes and lagoons.",
    categories: ["lake"],
  },
  {
    id: "island",
    label: "Island Mode",
    tagline: "Pinpoint India's notable islands.",
    categories: ["island"],
  },
  {
    id: "coastal-feature",
    label: "Coastal Feature Mode",
    tagline: "Locate gulfs, straits, channels and coastlines.",
    categories: ["coastal-feature"],
  },
  {
    id: "forest",
    label: "Forest & Wildlife Mode",
    tagline: "Locate national parks, tiger reserves, sanctuaries and biosphere reserves.",
    categories: ["forest"],
  },
  {
    id: "wetland",
    label: "Wetland Mode",
    tagline: "Pinpoint India's Ramsar wetland sites.",
    categories: ["wetland"],
  },
  {
    id: "mineral",
    label: "Mineral Mode",
    tagline: "Locate India's major mineral belts and mines.",
    categories: ["mineral"],
  },
  {
    id: "dam",
    label: "Dam Mode",
    tagline: "Locate India's major dams and barrages.",
    categories: ["dam"],
  },
  {
    id: "industry",
    label: "Industry Mode",
    tagline: "Locate steel plants, refineries, ports and power stations.",
    categories: ["industry"],
  },
  {
    id: "soil",
    label: "Soil Mode",
    tagline: "Locate India's major soil regions.",
    categories: ["soil"],
  },
  {
    id: "crop",
    label: "Crop Mode",
    tagline: "Locate India's major crop-growing belts and plantations.",
    categories: ["crop"],
  },
  {
    id: "unesco",
    label: "UNESCO Mode",
    tagline: "Pinpoint India's UNESCO World Heritage Sites.",
    categories: ["unesco"],
  },
  {
    id: "mixed",
    label: "Mixed Challenge",
    tagline: "A random sample across every category — the full test.",
    categories: [
      "state",
      "capital",
      "mountain",
      "hill",
      "pass",
      "peak",
      "plateau",
      "river",
      "lake",
      "wetland",
      "forest",
      "mineral",
      "soil",
      "crop",
      "island",
      "coastal-feature",
      "unesco",
      "dam",
      "industry",
    ],
  },
];

export function getMode(id) {
  return MODES.find((m) => m.id === id);
}
