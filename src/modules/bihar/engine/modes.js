// Registry of Map Modes — mirrors src/modules/bharat/engine/modes.js exactly. Adding a
// mode over any existing/future category is a one-line entry here, no other code needs to
// change. Only "district", "division", and "mixed" have real data behind them today;
// the rest are registered now (so the category/schema/topic wiring is all in place) but
// stay marked `status: "soon"` in topics.js's homepage UI until real content lands.
export const MODES = [
  {
    id: "district",
    label: "District Mode",
    tagline: "Click anywhere inside the correct district's boundary.",
    categories: ["district"],
  },
  {
    id: "division",
    label: "Division Mode",
    tagline: "Click anywhere inside any district belonging to the named division.",
    categories: ["division"],
  },
  {
    id: "river",
    label: "River Mode",
    tagline: "Locate Bihar's major rivers and tributaries.",
    categories: ["river"],
  },
  {
    id: "hill",
    label: "Hill Mode",
    tagline: "Locate Bihar's hill ranges.",
    categories: ["hill"],
  },
  {
    id: "plateau",
    label: "Plateau Mode",
    tagline: "Locate Bihar's plateau regions.",
    categories: ["plateau"],
  },
  {
    id: "waterfall",
    label: "Waterfall Mode",
    tagline: "Locate Bihar's waterfalls.",
    categories: ["waterfall"],
  },
  {
    id: "dam",
    label: "Dam Mode",
    tagline: "Locate Bihar's dams.",
    categories: ["dam"],
  },
  {
    id: "barrage",
    label: "Barrage Mode",
    tagline: "Locate Bihar's barrages.",
    categories: ["barrage"],
  },
  {
    id: "canal",
    label: "Canal Mode",
    tagline: "Locate Bihar's major canals.",
    categories: ["canal"],
  },
  {
    id: "wetland",
    label: "Wetland Mode",
    tagline: "Locate Bihar's wetlands.",
    categories: ["wetland"],
  },
  {
    id: "soil",
    label: "Soil Mode",
    tagline: "Locate Bihar's soil regions.",
    categories: ["soil"],
  },
  {
    id: "protected-area",
    label: "Protected Area Mode",
    tagline: "Locate Bihar's national parks, tiger reserve, sanctuaries and Ramsar sites.",
    categories: ["protected-area"],
  },
  {
    id: "heritage",
    label: "Heritage Mode",
    tagline: "Locate Bihar's UNESCO, historical and religious heritage sites.",
    categories: ["heritage"],
  },
  {
    id: "resource",
    label: "Resource Mode",
    tagline: "Locate Bihar's agriculture, mineral, industrial and infrastructure sites.",
    categories: ["resource"],
  },
  {
    id: "mixed",
    label: "Mixed Practice",
    tagline: "A random sample across every category with real data.",
    categories: [
      "district",
      "division",
      "river",
      "hill",
      "plateau",
      "waterfall",
      "dam",
      "barrage",
      "canal",
      "wetland",
      "soil",
      "protected-area",
      "heritage",
      "resource",
    ],
  },
];

export function getMode(id) {
  return MODES.find((m) => m.id === id);
}
