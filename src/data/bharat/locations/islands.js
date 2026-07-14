export const ISLAND_LOCATIONS = [
  {
    id: "majuli-island",
    name: "Majuli Island",
    category: "island",
    subcategory: "river-island",
    coordinates: { lat: 26.95, lng: 94.17 },
    states: ["Assam"],
    region: "northeast",
    difficulty: "easy",
    description:
      "A river island in the Brahmaputra, one of the largest river islands in the world, known for its Vaishnavite monasteries (satras) established by Srimanta Sankardeva.",
    importance:
      "UPSC angle: world's largest river island (by some measures), first island to be made a district in India; shrinking rapidly due to Brahmaputra's erosion, a recurring environment-geography topic.",
    tags: ["brahmaputra", "river-erosion", "vaishnavite-culture", "satras"],
  },
  {
    id: "havelock-island",
    name: "Havelock Island (Swaraj Dweep)",
    category: "island",
    subcategory: "andaman-nicobar-island",
    coordinates: { lat: 11.9743, lng: 92.9967 },
    states: ["Andaman and Nicobar Islands"],
    region: "south",
    difficulty: "medium",
    description:
      "The largest island in the Ritchie's Archipelago in the Andamans, renamed Swaraj Dweep in 2018; famous for Radhanagar Beach, coral reefs and scuba diving.",
    importance:
      "UPSC angle: renaming of Andaman islands (2018) to honour freedom fighters/national identity is a static-GK favourite alongside Ross and Neil Islands.",
    tags: ["renamed-island-2018", "ritchies-archipelago", "coral-reef", "tourism"],
  },
  {
    id: "neil-island",
    name: "Neil Island (Shaheed Dweep)",
    category: "island",
    subcategory: "andaman-nicobar-island",
    coordinates: { lat: 11.8322, lng: 93.0489 },
    states: ["Andaman and Nicobar Islands"],
    region: "south",
    difficulty: "medium",
    description:
      "A small coral island in the Ritchie's Archipelago, renamed Shaheed Dweep in 2018, known for its natural coral bridge, beaches and vegetable farming.",
    importance:
      "UPSC angle: part of the 2018 renaming exercise (Ross → Netaji Subhas Chandra Bose Dweep, Neil → Shaheed Dweep, Havelock → Swaraj Dweep).",
    tags: ["renamed-island-2018", "ritchies-archipelago", "coral-island"],
  },
  {
    id: "north-sentinel-island",
    name: "North Sentinel Island",
    category: "island",
    subcategory: "andaman-nicobar-island",
    coordinates: { lat: 11.55, lng: 92.24 },
    states: ["Andaman and Nicobar Islands"],
    region: "south",
    difficulty: "easy",
    description:
      "An island in the Andaman archipelago home to the Sentinelese, an uncontacted indigenous tribe that has resisted outside contact for millennia.",
    importance:
      "UPSC angle: protected under the Andaman and Nicobar Islands (Protection of Aboriginal Tribes) Regulation; frequently tested for tribal-rights and isolation-policy questions.",
    tags: ["sentinelese", "uncontacted-tribe", "restricted-area", "pvtg"],
  },
  {
    id: "barren-island",
    name: "Barren Island",
    category: "island",
    subcategory: "andaman-nicobar-island",
    coordinates: { lat: 12.2833, lng: 93.85 },
    states: ["Andaman and Nicobar Islands"],
    region: "south",
    difficulty: "easy",
    description:
      "A volcanic island in the Andaman Sea housing India's only confirmed active volcano, which has erupted intermittently since 1991.",
    importance:
      "UPSC angle: only active volcano in South Asia, sits on the boundary of the Indian and Burma microplates — a staple physical-geography question.",
    tags: ["active-volcano", "andaman-sea", "plate-boundary"],
  },
  {
    id: "ross-island",
    name: "Ross Island (Netaji Subhas Chandra Bose Dweep)",
    category: "island",
    subcategory: "andaman-nicobar-island",
    coordinates: { lat: 11.6784, lng: 92.7557 },
    states: ["Andaman and Nicobar Islands"],
    region: "south",
    difficulty: "medium",
    description:
      "A small island near Port Blair that served as the administrative headquarters of British India's penal colony until 1941; renamed Netaji Subhas Chandra Bose Dweep in 2018, now known for its ruins and deer population.",
    importance:
      "UPSC angle: former British administrative capital of the Andamans, briefly the seat of Netaji's Azad Hind Government during WWII Japanese occupation; renamed as part of 2018 exercise.",
    tags: ["renamed-island-2018", "british-colonial-ruins", "azad-hind"],
  },
  {
    id: "great-nicobar-island",
    name: "Great Nicobar Island",
    category: "island",
    subcategory: "andaman-nicobar-island",
    coordinates: { lat: 7.0, lng: 93.85 },
    states: ["Andaman and Nicobar Islands"],
    region: "south",
    difficulty: "medium",
    description:
      "The largest and southernmost island of the Nicobar group, home to Indira Point (India's southernmost point), the Great Nicobar Biosphere Reserve and the Shompen and Nicobarese tribes.",
    importance:
      "UPSC angle: Indira Point marks India's southernmost extent; site of the controversial Great Nicobar mega infrastructure/transshipment port project raising ecological and tribal-rights concerns.",
    tags: ["indira-point", "biosphere-reserve", "shompen", "great-nicobar-project"],
  },
  {
    id: "minicoy-island",
    name: "Minicoy Island",
    category: "island",
    subcategory: "lakshadweep-island",
    coordinates: { lat: 8.2833, lng: 73.0417 },
    states: ["Lakshadweep"],
    region: "south",
    difficulty: "medium",
    description:
      "The second-largest island of Lakshadweep, separated from the rest of the archipelago by the Nine Degree Channel, with a large lagoon and India's oldest lighthouse in the region.",
    importance:
      "UPSC angle: located south of the Nine Degree Channel, culturally distinct (Mahl-speaking, close to Maldivian culture) from the rest of Lakshadweep.",
    tags: ["nine-degree-channel", "lagoon", "lighthouse"],
  },
  {
    id: "agatti-island",
    name: "Agatti Island",
    category: "island",
    subcategory: "lakshadweep-island",
    coordinates: { lat: 10.8386, lng: 72.1958 },
    states: ["Lakshadweep"],
    region: "south",
    difficulty: "medium",
    description:
      "A coral atoll in Lakshadweep that hosts the archipelago's only airport, serving as the main gateway for tourists to the islands.",
    importance:
      "UPSC angle: only airstrip in Lakshadweep, gateway island for tourism promoted after the 2024 push to develop Lakshadweep as a tourist destination.",
    tags: ["coral-atoll", "airport", "lagoon", "tourism"],
  },
  {
    id: "elephanta-island",
    name: "Elephanta Island",
    category: "island",
    subcategory: "other-island",
    coordinates: { lat: 18.9633, lng: 72.9315 },
    states: ["Maharashtra"],
    region: "west",
    difficulty: "easy",
    description:
      "An island in Mumbai Harbour famous for its rock-cut cave temples dedicated to Lord Shiva, dating from around the 5th-8th centuries CE.",
    importance:
      "UPSC angle: UNESCO World Heritage Site (1987), showcases rock-cut cave architecture, notably the Trimurti sculpture.",
    tags: ["unesco-world-heritage", "rock-cut-caves", "mumbai-harbour", "shaivism"],
  },
  {
    id: "sriharikota-island",
    name: "Sriharikota Island",
    category: "island",
    subcategory: "other-island",
    coordinates: { lat: 13.72, lng: 80.23 },
    states: ["Andhra Pradesh"],
    region: "south",
    difficulty: "medium",
    description:
      "A barrier island off the Andhra Pradesh coast, separated from the mainland by Pulicat Lake, home to the Satish Dhawan Space Centre, India's primary satellite launch centre.",
    importance:
      "UPSC angle: houses ISRO's principal spaceport (Satish Dhawan Space Centre SHAR), located near Pulicat Lake (India's second-largest brackish-water lagoon).",
    tags: ["isro", "satish-dhawan-space-centre", "pulicat-lake", "barrier-island"],
  },
  {
    id: "pamban-island",
    name: "Pamban Island",
    category: "island",
    subcategory: "other-island",
    coordinates: { lat: 9.2833, lng: 79.2 },
    states: ["Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "An island in the Palk Strait connected to mainland Tamil Nadu by the Pamban Bridge (India's first sea bridge), housing the Rameswaram temple town and pointing toward Adam's Bridge and Sri Lanka.",
    importance:
      "UPSC angle: Pamban Bridge (rail + India's first vertical-lift sea bridge, 2025) links the island to the mainland; near Adam's Bridge/Ram Setu and the proposed Sethusamudram shipping canal.",
    tags: ["pamban-bridge", "palk-strait", "adams-bridge", "rameswaram", "sethusamudram"],
  },
  {
    id: "wheeler-island",
    name: "Wheeler Island (Dr. Abdul Kalam Island)",
    category: "island",
    subcategory: "other-island",
    coordinates: { lat: 20.75, lng: 87.0 },
    states: ["Odisha"],
    region: "east",
    difficulty: "medium",
    description:
      "A small island off the Odisha coast renamed after Dr. APJ Abdul Kalam in 2015, serving as a key integrated missile test range for DRDO.",
    importance:
      "UPSC angle: DRDO's Integrated Test Range for missiles like Agni and Prithvi; renaming honours the 'Missile Man of India'.",
    tags: ["drdo", "missile-test-range", "renamed-island", "odisha-coast"],
  },
  {
    id: "diu-island",
    name: "Diu Island",
    category: "island",
    subcategory: "other-island",
    coordinates: { lat: 20.7144, lng: 70.9874 },
    states: ["Dadra and Nagar Haveli and Daman and Diu"],
    region: "west",
    difficulty: "medium",
    description:
      "A small island off the Saurashtra coast of Gujarat, a former Portuguese colony until 1961, now part of the Union Territory of Dadra and Nagar Haveli and Daman and Diu.",
    importance:
      "UPSC angle: former Portuguese enclave annexed via Operation Vijay (1961); part of the 2020-merged UT, historically significant Diu Fort.",
    tags: ["former-portuguese-colony", "operation-vijay", "saurashtra-coast"],
  },
  {
    id: "car-nicobar-island",
    name: "Car Nicobar Island",
    category: "island",
    subcategory: "andaman-nicobar-island",
    coordinates: { lat: 9.1833, lng: 92.7667 },
    states: ["Andaman and Nicobar Islands"],
    region: "south",
    difficulty: "medium",
    description:
      "The northernmost and most populous island of the Nicobar group, home to the Nicobarese tribe and a key Indian Air Force base.",
    importance:
      "UPSC angle: worst-hit Nicobar island in the 2004 Indian Ocean tsunami; hosts INS/IAF strategic base near the Ten Degree Channel.",
    tags: ["nicobarese", "iaf-base", "2004-tsunami", "ten-degree-channel"],
  },
];
