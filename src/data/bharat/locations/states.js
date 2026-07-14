// States & Union Territories — the finite, easy-to-verify seed dataset (Phase 1 MVP).
// Drives "State Mode" (polygon click against the India TopoJSON) and "Capital Mode"
// (point click against a capital city's lat/lng). See src/data/geo/india-states-topo.json
// for the matching polygon geometry, keyed by the same `name` used below.

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Centroids computed with d3-geo's geoCentroid() directly from the topojson (not hand-eyeballed).
const CENTROIDS = {
  "Andhra Pradesh": { lat: 15.7529, lng: 79.9422 },
  "Arunachal Pradesh": { lat: 28.0425, lng: 94.6681 },
  Assam: { lat: 26.3596, lng: 92.8195 },
  Bihar: { lat: 25.6802, lng: 85.6069 },
  Chhattisgarh: { lat: 21.2541, lng: 82.0291 },
  Goa: { lat: 15.3636, lng: 74.0578 },
  Gujarat: { lat: 22.701, lng: 71.5775 },
  Haryana: { lat: 29.1957, lng: 76.3459 },
  "Himachal Pradesh": { lat: 31.9239, lng: 77.2491 },
  Jharkhand: { lat: 23.6545, lng: 85.5515 },
  Karnataka: { lat: 14.7008, lng: 76.1677 },
  Kerala: { lat: 10.4489, lng: 76.4121 },
  "Madhya Pradesh": { lat: 23.5403, lng: 78.2841 },
  Maharashtra: { lat: 19.4553, lng: 76.0935 },
  Manipur: { lat: 24.7295, lng: 93.8719 },
  Meghalaya: { lat: 25.5405, lng: 91.2775 },
  Mizoram: { lat: 23.3107, lng: 92.8318 },
  Nagaland: { lat: 26.06, lng: 94.4634 },
  Odisha: { lat: 20.511, lng: 84.4197 },
  Punjab: { lat: 30.8408, lng: 75.4166 },
  Rajasthan: { lat: 26.5784, lng: 73.852 },
  Sikkim: { lat: 27.5645, lng: 88.4735 },
  "Tamil Nadu": { lat: 11.011, lng: 78.4059 },
  Telangana: { lat: 17.7982, lng: 79.0067 },
  Tripura: { lat: 23.7537, lng: 91.7463 },
  "Uttar Pradesh": { lat: 26.9217, lng: 80.5907 },
  Uttarakhand: { lat: 30.1562, lng: 79.2143 },
  "West Bengal": { lat: 23.8201, lng: 87.9604 },
  "Andaman and Nicobar Islands": { lat: 11.2911, lng: 92.9542 },
  Chandigarh: { lat: 30.7245, lng: 76.779 },
  "Dadra and Nagar Haveli and Daman and Diu": { lat: 20.2345, lng: 72.9836 },
  Delhi: { lat: 28.6443, lng: 77.114 },
  "Jammu and Kashmir": { lat: 33.6428, lng: 74.8601 },
  Ladakh: { lat: 34.9456, lng: 76.8066 },
  Lakshadweep: { lat: 8.2709, lng: 73.0379 },
  Puducherry: { lat: 11.6221, lng: 79.8698 },
};

const STATE_META = [
  {
    name: "Andhra Pradesh",
    type: "state",
    region: "south",
    difficulty: "easy",
    capitals: [{ name: "Amaravati", coords: { lat: 16.5131, lng: 80.5165 } }],
    description:
      "Formed in 1956 on a linguistic basis for Telugu speakers; reorganized in 2014 when Telangana was carved out. Borders Odisha, Chhattisgarh, Telangana, Karnataka and Tamil Nadu, with a long Bay of Bengal coastline.",
    importance:
      "UPSC angle: capital history is high-yield — Hyderabad served as the joint capital of AP and Telangana under a 10-year arrangement (2014–2024) before AP's shift to Amaravati; the state also has India's second-longest coastline.",
    tags: ["coastal", "linguistic-reorganization-1956"],
  },
  {
    name: "Arunachal Pradesh",
    type: "state",
    region: "northeast",
    difficulty: "medium",
    capitals: [{ name: "Itanagar", coords: { lat: 27.0844, lng: 93.6053 } }],
    description:
      "Formerly the North-East Frontier Agency (NEFA); became a Union Territory in 1972 and a full state in 1987. Shares an international border with China (contested as part of 'South Tibet') and Bhutan and Myanmar.",
    importance:
      "UPSC angle: China-border state, McMahon Line, easternmost Indian state, sunrise point Dong (first place in India to see sunrise).",
    tags: ["china-border", "myanmar-border", "bhutan-border", "one-of-seven-sisters"],
  },
  {
    name: "Assam",
    type: "state",
    region: "northeast",
    difficulty: "easy",
    capitals: [{ name: "Dispur", coords: { lat: 26.1433, lng: 91.7898 } }],
    description:
      "Gateway to the Northeast, straddling the Brahmaputra valley. Dispur (within Guwahati) is the capital. Borders Bhutan and Bangladesh internationally, and Arunachal Pradesh, Nagaland, Manipur, Meghalaya, Tripura and Mizoram.",
    importance:
      "UPSC angle: 'chicken's neck' Siliguri Corridor connects Assam/the Northeast to the rest of India; major tea and petroleum belt; frequent floods from the Brahmaputra.",
    tags: ["bhutan-border", "bangladesh-border", "one-of-seven-sisters"],
  },
  {
    name: "Bihar",
    type: "state",
    region: "east",
    difficulty: "easy",
    capitals: [{ name: "Patna", coords: { lat: 25.5941, lng: 85.1376 } }],
    description:
      "Landlocked Gangetic plain state bordering Nepal internationally, and Uttar Pradesh, Jharkhand and West Bengal. Jharkhand was carved out of it in 2000.",
    importance: "UPSC angle: Nepal border, Ganga river system, ancient Magadha/Nalanda/Pataliputra history.",
    tags: ["nepal-border", "landlocked"],
  },
  {
    name: "Chhattisgarh",
    type: "state",
    region: "central",
    difficulty: "medium",
    capitals: [{ name: "Raipur", coords: { lat: 21.2514, lng: 81.6296 } }],
    description:
      "Carved out of Madhya Pradesh on 1 November 2000. A mineral-rich, heavily forested state bordering seven states including Odisha, Jharkhand and Maharashtra.",
    importance: "UPSC angle: major iron-ore/coal belt (Bailadila, Korba), extensive tribal population and forest cover.",
    tags: ["landlocked", "reorganized-2000", "mineral-rich"],
  },
  {
    name: "Goa",
    type: "state",
    region: "west",
    difficulty: "easy",
    capitals: [{ name: "Panaji", coords: { lat: 15.4909, lng: 73.8278 } }],
    description:
      "India's smallest state by area, liberated from Portuguese rule in 1961 (with Daman and Diu) and granted full statehood in 1987 — the same year as Arunachal Pradesh and Mizoram.",
    importance: "UPSC angle: former Portuguese colony, smallest state by area, Western Ghats + coastal geography.",
    tags: ["coastal", "smallest-state-by-area", "former-portuguese-colony"],
  },
  {
    name: "Gujarat",
    type: "state",
    region: "west",
    difficulty: "easy",
    capitals: [{ name: "Gandhinagar", coords: { lat: 23.2156, lng: 72.6369 } }],
    description:
      "Formed in 1960 when the bilingual Bombay State was split into Gujarat and Maharashtra. Borders Pakistan (Sindh) internationally, and Rajasthan, Madhya Pradesh and Maharashtra — with India's longest coastline.",
    importance:
      "UPSC angle: longest coastline of any state, Rann of Kutch, Gulf of Kutch/Khambhat, major petrochemical and port hub (Kandla, Mundra).",
    tags: ["pakistan-border", "coastal", "longest-coastline", "bombay-state-split-1960"],
  },
  {
    name: "Haryana",
    type: "state",
    region: "north",
    difficulty: "easy",
    capitals: [{ name: "Chandigarh", coords: { lat: 30.7245, lng: 76.779 }, shared: true }],
    description:
      "Carved out of Punjab in 1966 on linguistic lines; shares the planned city of Chandigarh as a joint capital with Punjab (Chandigarh itself is a separate Union Territory belonging to neither).",
    importance: "UPSC angle: joint capital arrangement, surrounds Delhi on three sides, Green Revolution heartland.",
    tags: ["landlocked", "shared-capital", "punjab-split-1966"],
  },
  {
    name: "Himachal Pradesh",
    type: "state",
    region: "north",
    difficulty: "easy",
    capitals: [{ name: "Shimla", coords: { lat: 31.1048, lng: 77.1734 } }],
    description:
      "A Union Territory until 1971, when it became India's 18th state. A Himalayan state bordering Tibet (China) via Ladakh/Uttarakhand and Jammu & Kashmir.",
    importance: "UPSC angle: hill state, source region for several Himalayan passes (Rohtang, Kunzum), apple economy.",
    tags: ["china-border", "himalayan"],
  },
  {
    name: "Jharkhand",
    type: "state",
    region: "east",
    difficulty: "medium",
    capitals: [{ name: "Ranchi", coords: { lat: 23.3441, lng: 85.3096 } }],
    description:
      "Carved out of Bihar on 15 November 2000 (Birsa Munda's birth anniversary). Sits on the mineral-rich Chota Nagpur Plateau.",
    importance: "UPSC angle: Chota Nagpur Plateau, largest coal and mica reserves, major steel towns (Jamshedpur, Bokaro).",
    tags: ["landlocked", "reorganized-2000", "mineral-rich", "plateau-state"],
  },
  {
    name: "Karnataka",
    type: "state",
    region: "south",
    difficulty: "easy",
    capitals: [{ name: "Bengaluru", coords: { lat: 12.9716, lng: 77.5946 } }],
    description:
      "Formed in 1956 as Mysore State (renamed Karnataka in 1973), unifying Kannada-speaking regions. Borders the Arabian Sea and shares the Western Ghats with Kerala, Goa and Maharashtra.",
    importance: "UPSC angle: Deccan Plateau, Western Ghats biodiversity hotspot, major IT/tech hub, Kudremukh iron ore.",
    tags: ["coastal", "western-ghats", "renamed-1973"],
  },
  {
    name: "Kerala",
    type: "state",
    region: "south",
    difficulty: "easy",
    capitals: [{ name: "Thiruvananthapuram", coords: { lat: 8.5241, lng: 76.9366 } }],
    description:
      "Formed in 1956 uniting Malayalam-speaking Travancore, Cochin and Malabar. A narrow coastal strip between the Arabian Sea and the Western Ghats, famous for its backwaters.",
    importance: "UPSC angle: highest literacy rate, backwaters/lagoons (Vembanad), spice trade history, monsoon onset point.",
    tags: ["coastal", "western-ghats", "linguistic-reorganization-1956"],
  },
  {
    name: "Madhya Pradesh",
    type: "state",
    region: "central",
    difficulty: "easy",
    capitals: [{ name: "Bhopal", coords: { lat: 23.2599, lng: 77.4126 } }],
    description:
      "India's second-largest state by area, formed in its present shape in 1956 and reduced in 2000 when Chhattisgarh was carved out. Landlocked, bordering five states.",
    importance:
      "UPSC angle: called the 'heart of India' (geographic center), largest tiger population ('Tiger State'), Vindhya/Satpura ranges, Narmada origin.",
    tags: ["landlocked", "second-largest-by-area", "tiger-state"],
  },
  {
    name: "Maharashtra",
    type: "state",
    region: "west",
    difficulty: "easy",
    capitals: [{ name: "Mumbai", coords: { lat: 19.076, lng: 72.8777 } }],
    description:
      "Formed in 1960 when Bombay State split into Maharashtra and Gujarat. India's financial capital (Mumbai) sits on the Arabian Sea, with the Deccan Plateau and Western Ghats (Sahyadri) inland.",
    importance: "UPSC angle: Sahyadri/Western Ghats, largest economy by state GDP, major ports (Mumbai, JNPT).",
    tags: ["coastal", "western-ghats", "bombay-state-split-1960"],
  },
  {
    name: "Manipur",
    type: "state",
    region: "northeast",
    difficulty: "medium",
    capitals: [{ name: "Imphal", coords: { lat: 24.817, lng: 93.9368 } }],
    description:
      "A princely state that acceded to India in 1949; became a full state in 1972 (previously a Union Territory). Borders Myanmar and sits around the Loktak Lake basin.",
    importance: "UPSC angle: Loktak Lake and its floating phumdis, Myanmar border, one of the 'Seven Sisters'.",
    tags: ["myanmar-border", "one-of-seven-sisters"],
  },
  {
    name: "Meghalaya",
    type: "state",
    region: "northeast",
    difficulty: "medium",
    capitals: [{ name: "Shillong", coords: { lat: 25.5788, lng: 91.8933 } }],
    description:
      "Carved out of Assam, first as an autonomous state (1970) then a full state in 1972. Home to the Khasi, Garo and Jaintia Hills and among the wettest places on Earth (Mawsynram, Cherrapunji).",
    importance: "UPSC angle: wettest place on Earth, living root bridges, borders Bangladesh, matrilineal society.",
    tags: ["bangladesh-border", "one-of-seven-sisters", "carved-from-assam-1972"],
  },
  {
    name: "Mizoram",
    type: "state",
    region: "northeast",
    difficulty: "medium",
    capitals: [{ name: "Aizawl", coords: { lat: 23.7271, lng: 92.7176 } }],
    description:
      "Became a full state in 1987 following the 1986 Mizo Accord, having been a Union Territory since 1972. Hilly terrain bordering Myanmar and Bangladesh.",
    importance: "UPSC angle: Mizo Accord (1986), bamboo cultivation and 'Mautam' bamboo-flowering famine cycle.",
    tags: ["myanmar-border", "bangladesh-border", "one-of-seven-sisters"],
  },
  {
    name: "Nagaland",
    type: "state",
    region: "northeast",
    difficulty: "medium",
    capitals: [{ name: "Kohima", coords: { lat: 25.6751, lng: 94.1086 } }],
    description:
      "Became India's 16th state in 1963 — the first state created after the 1956 linguistic reorganization, driven by the Naga political movement. Borders Myanmar.",
    importance: "UPSC angle: first state formed post-1956 reorganization (1963), Battle of Kohima (WWII), Naga Hills.",
    tags: ["myanmar-border", "one-of-seven-sisters"],
  },
  {
    name: "Odisha",
    type: "state",
    region: "east",
    difficulty: "easy",
    capitals: [{ name: "Bhubaneswar", coords: { lat: 20.2961, lng: 85.8245 } }],
    description:
      "Formed in 1936 as a separate province on a linguistic basis (the first in British India), later reorganized as a state in 1950. Coastal state on the Bay of Bengal, prone to cyclones.",
    importance: "UPSC angle: Chilika Lake (largest coastal lagoon), first linguistically formed province (1936), mineral-rich, cyclone-prone coast.",
    tags: ["coastal", "first-linguistic-province-1936"],
  },
  {
    name: "Punjab",
    type: "state",
    region: "north",
    difficulty: "easy",
    capitals: [{ name: "Chandigarh", coords: { lat: 30.7245, lng: 76.779 }, shared: true }],
    description:
      "Reorganized in 1966 into present-day Punjab, Haryana and the union territory of Chandigarh (its shared capital). Borders Pakistan internationally and is fed by the Sutlej, Beas and Ravi rivers.",
    importance: "UPSC angle: Green Revolution heartland, Radcliffe Line/Pakistan border, doab regions between rivers.",
    tags: ["pakistan-border", "landlocked", "shared-capital", "reorganized-1966"],
  },
  {
    name: "Rajasthan",
    type: "state",
    region: "north",
    difficulty: "easy",
    capitals: [{ name: "Jaipur", coords: { lat: 26.9124, lng: 75.7873 } }],
    description:
      "India's largest state by area, formed through the integration of princely states between 1948 and 1956. Borders Pakistan along the Thar Desert and is split by the Aravalli Range.",
    importance: "UPSC angle: largest state by area, Thar Desert, Aravalli (oldest fold mountains), Pakistan border, Sambhar salt lake.",
    tags: ["pakistan-border", "landlocked", "largest-state-by-area", "desert"],
  },
  {
    name: "Sikkim",
    type: "state",
    region: "northeast",
    difficulty: "medium",
    capitals: [{ name: "Gangtok", coords: { lat: 27.3389, lng: 88.6065 } }],
    description:
      "A Himalayan kingdom that merged with India in 1975 via referendum, becoming the 22nd state (India's least populous). Borders China (Tibet), Nepal and Bhutan.",
    importance: "UPSC angle: merged 1975 (unique accession story), Nathu La and Jelep La passes, Kanchenjunga, first fully organic state.",
    tags: ["china-border", "nepal-border", "bhutan-border", "least-populous-state", "merged-1975"],
  },
  {
    name: "Tamil Nadu",
    type: "state",
    region: "south",
    difficulty: "easy",
    capitals: [{ name: "Chennai", coords: { lat: 13.0827, lng: 80.2707 } }],
    description:
      "Formed in 1956 as Madras State (renamed Tamil Nadu in 1969), uniting Tamil-speaking areas. Bay of Bengal coastline on the east, Western Ghats/Nilgiris on the west.",
    importance: "UPSC angle: Palk Strait/Gulf of Mannar toward Sri Lanka, Nilgiri Hills, major wind-energy hub.",
    tags: ["coastal", "renamed-1969"],
  },
  {
    name: "Telangana",
    type: "state",
    region: "south",
    difficulty: "easy",
    capitals: [{ name: "Hyderabad", coords: { lat: 17.385, lng: 78.4867 } }],
    description:
      "India's newest state (until the 2019 J&K reorganization), carved out of Andhra Pradesh on 2 June 2014 after a long statehood movement. Landlocked, on the Deccan Plateau.",
    importance: "UPSC angle: newest state via bifurcation (2014), Hyderabad's joint-capital arrangement with AP ended in 2024.",
    tags: ["landlocked", "newest-major-state", "carved-from-ap-2014"],
  },
  {
    name: "Tripura",
    type: "state",
    region: "northeast",
    difficulty: "medium",
    capitals: [{ name: "Agartala", coords: { lat: 23.8315, lng: 91.2868 } }],
    description:
      "A former princely state that acceded to India in 1949 and became a full state in 1972 (previously a Union Territory). Almost entirely surrounded by Bangladesh.",
    importance: "UPSC angle: surrounded on three sides by Bangladesh, one of the 'Seven Sisters', hill ranges running north-south.",
    tags: ["bangladesh-border", "one-of-seven-sisters"],
  },
  {
    name: "Uttar Pradesh",
    type: "state",
    region: "north",
    difficulty: "easy",
    capitals: [{ name: "Lucknow", coords: { lat: 26.8467, lng: 80.9462 } }],
    description:
      "India's most populous state, on the Indo-Gangetic plain. Borders Nepal internationally and eight other states, more than any other state.",
    importance: "UPSC angle: most populous state, most bordering states (8), Ganga-Yamuna doab, sends the most Lok Sabha MPs.",
    tags: ["nepal-border", "landlocked", "most-populous-state"],
  },
  {
    name: "Uttarakhand",
    type: "state",
    region: "north",
    difficulty: "medium",
    capitals: [{ name: "Dehradun", coords: { lat: 30.3165, lng: 78.0322 }, note: "Gairsain serves as an alternate/summer legislative capital." }],
    description:
      "Carved out of Uttar Pradesh on 9 November 2000 (initially named Uttaranchal, renamed in 2007). A Himalayan state bordering China (Tibet) and Nepal, source region for the Ganga and Yamuna.",
    importance: "UPSC angle: Char Dham pilgrimage sites, Gangotri/Yamunotri glaciers, Nanda Devi Biosphere Reserve, China and Nepal borders.",
    tags: ["china-border", "nepal-border", "himalayan", "reorganized-2000"],
  },
  {
    name: "West Bengal",
    type: "state",
    region: "east",
    difficulty: "easy",
    capitals: [{ name: "Kolkata", coords: { lat: 22.5726, lng: 88.3639 } }],
    description:
      "Formed in 1947 from the Bengali-speaking part of undivided Bengal at Partition. Borders Bangladesh, Bhutan and Nepal internationally and has the Sundarbans delta on the Bay of Bengal.",
    importance: "UPSC angle: Sundarbans (world's largest mangrove forest, Royal Bengal Tiger), Siliguri Corridor gateway to the Northeast, three international borders.",
    tags: ["coastal", "bangladesh-border", "bhutan-border", "nepal-border"],
  },

  // ---- Union Territories ----
  {
    name: "Andaman and Nicobar Islands",
    type: "union-territory",
    region: "south",
    difficulty: "medium",
    capitals: [{ name: "Port Blair", coords: { lat: 11.6234, lng: 92.7265 }, note: "Renamed Sri Vijaya Puram in 2024." }],
    description:
      "An archipelago of over 500 islands in the Bay of Bengal, closer to Myanmar/Indonesia than mainland India. Includes the Andaman and Nicobar groups, separated by the Ten Degree Channel.",
    importance: "UPSC angle: Ten Degree Channel, Indira Point (India's southernmost point), Barren Island (only active volcano in South Asia), Cellular Jail.",
    tags: ["island-ut", "coastal"],
  },
  {
    name: "Chandigarh",
    type: "union-territory",
    region: "north",
    difficulty: "medium",
    capitals: [{ name: "Chandigarh", coords: { lat: 30.7245, lng: 76.779 } }],
    description:
      "A planned city designed by Le Corbusier, created as a Union Territory in 1966 to serve as the joint capital of Punjab and Haryana without belonging to either state.",
    importance: "UPSC angle: India's first fully planned post-independence city, joint capital case study.",
    tags: ["landlocked", "planned-city"],
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    type: "union-territory",
    region: "west",
    difficulty: "hard",
    capitals: [{ name: "Daman", coords: { lat: 20.3974, lng: 72.8328 } }],
    description:
      "Formed on 26 January 2020 by merging two former Portuguese enclaves — Dadra & Nagar Haveli and Daman & Diu — into a single Union Territory.",
    importance: "UPSC angle: most recent UT merger (2020), former Portuguese colonies (with Goa), split geography (Daman/Diu coastal, D&NH landlocked).",
    tags: ["coastal", "former-portuguese-colony", "merged-2020"],
  },
  {
    name: "Delhi",
    type: "union-territory",
    region: "north",
    difficulty: "easy",
    capitals: [{ name: "New Delhi", coords: { lat: 28.6139, lng: 77.209 } }],
    description:
      "India's National Capital Territory (NCT), a UT with its own elected legislature. Landlocked, on the banks of the Yamuna, surrounded by Haryana and Uttar Pradesh.",
    importance: "UPSC angle: NCT status (UT with legislature, per the 69th Constitutional Amendment, 1991), seat of the Union Government.",
    tags: ["landlocked", "nct", "national-capital"],
  },
  {
    name: "Jammu and Kashmir",
    type: "union-territory",
    region: "north",
    difficulty: "medium",
    capitals: [
      { name: "Srinagar", coords: { lat: 34.0837, lng: 74.7973 }, note: "Summer capital." },
      { name: "Jammu", coords: { lat: 32.7266, lng: 74.857 }, note: "Winter capital." },
    ],
    description:
      "Reorganized from a state into a Union Territory (with legislature) on 31 October 2019 under the J&K Reorganisation Act, 2019, following the abrogation of Article 370; Ladakh was simultaneously carved out as a separate UT.",
    importance: "UPSC angle: Article 370 abrogation (2019), dual summer/winter capital (Darbar Move), Line of Control with Pakistan, Line of Actual Control with China.",
    tags: ["pakistan-border", "china-border", "himalayan", "reorganized-2019", "dual-capital"],
  },
  {
    name: "Ladakh",
    type: "union-territory",
    region: "north",
    difficulty: "medium",
    capitals: [{ name: "Leh", coords: { lat: 34.1526, lng: 77.5771 } }],
    description:
      "Carved out of the former state of Jammu & Kashmir as a separate Union Territory (without legislature) on 31 October 2019. A high-altitude cold desert bordering both Pakistan (LoC) and China (LAC).",
    importance: "UPSC angle: Siachen Glacier, Karakoram and Ladakh ranges, Pangong Tso, highest-altitude UT, Aksai Chin dispute.",
    tags: ["pakistan-border", "china-border", "himalayan", "cold-desert", "reorganized-2019"],
  },
  {
    name: "Lakshadweep",
    type: "union-territory",
    region: "south",
    difficulty: "hard",
    capitals: [{ name: "Kavaratti", coords: { lat: 10.5669, lng: 72.642 } }],
    description:
      "India's smallest Union Territory — a group of coral atolls in the Arabian Sea off the Kerala coast.",
    importance: "UPSC angle: smallest UT, only coral-atoll territory of India, Pitti Island bird sanctuary, Eleven Degree Channel.",
    tags: ["island-ut", "coastal", "smallest-ut", "coral-atolls"],
  },
  {
    name: "Puducherry",
    type: "union-territory",
    region: "south",
    difficulty: "medium",
    capitals: [{ name: "Puducherry", coords: { lat: 11.9416, lng: 79.8083 } }],
    description:
      "A former French colony (until 1954) made up of four coastal enclaves — Puducherry, Karaikal, Mahe and Yanam — scattered across Tamil Nadu, Andhra Pradesh and Kerala.",
    importance: "UPSC angle: former French colony, non-contiguous UT split across three states' coastlines, has its own legislature.",
    tags: ["coastal", "former-french-colony", "non-contiguous"],
  },
];

const stateLocations = STATE_META.map((s) => ({
  id: `${slug(s.name)}-state`,
  name: s.name,
  category: "state",
  subcategory: s.type,
  coordinates: CENTROIDS[s.name],
  states: [s.name],
  region: s.region,
  difficulty: s.difficulty,
  description: s.description,
  importance: s.importance,
  relatedIds: s.capitals.map((c) => `${slug(c.name)}-capital`),
  tags: s.tags,
}));

// Some capital cities are shared by more than one STATE_META entry (Chandigarh is the
// capital of both Punjab and Haryana, and is itself the Chandigarh UT) — dedupe by id
// instead of emitting duplicate location objects.
const capitalLocationsById = new Map();
for (const s of STATE_META) {
  const stateId = `${slug(s.name)}-state`;
  for (const c of s.capitals) {
    const id = `${slug(c.name)}-capital`;
    const existing = capitalLocationsById.get(id);
    if (existing) {
      existing.states.push(s.name);
      existing.relatedIds.push(stateId);
      continue;
    }
    capitalLocationsById.set(id, {
      id,
      name: c.name,
      category: "capital",
      subcategory: c.shared ? "shared-capital" : s.capitals.length > 1 ? "dual-capital" : "capital",
      coordinates: c.coords,
      states: [s.name],
      region: s.region,
      difficulty: s.difficulty,
      description: c.note ? `Capital of ${s.name}. ${c.note}` : `Capital of ${s.name}.`,
      importance: "Locating capitals builds the state ↔ capital association tested throughout Prelims and state PSC exams.",
      relatedIds: [stateId],
      tags: c.shared ? ["shared-capital"] : [],
    });
  }
}

// Fix up descriptions for capitals shared across multiple states/UTs now that every
// owner has been collected (Chandigarh: capital of Punjab & Haryana, and a UT itself).
for (const capital of capitalLocationsById.values()) {
  if (capital.states.length > 1) {
    capital.description = `Shared capital of ${capital.states.join(" and ")}.`;
  }
}

export const STATE_AND_CAPITAL_LOCATIONS = [...stateLocations, ...capitalLocationsById.values()];
