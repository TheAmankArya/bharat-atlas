export const LAKE_LOCATIONS = [
  {
    id: "wular-lake",
    name: "Wular Lake",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 34.36, lng: 74.6 },
    states: ["Jammu and Kashmir"],
    region: "north",
    difficulty: "easy",
    description:
      "One of the largest freshwater lakes in Asia, formed by a tectonic depression and fed by the Jhelum River in the Kashmir Valley.",
    importance:
      "UPSC angle: largest freshwater lake in India; acts as a natural flood-control basin for the Jhelum; a designated Ramsar wetland site.",
    tags: ["ramsar", "jhelum", "largest-freshwater-lake", "kashmir"],
  },
  {
    id: "dal-lake",
    name: "Dal Lake",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 34.12, lng: 74.86 },
    states: ["Jammu and Kashmir"],
    region: "north",
    difficulty: "easy",
    description:
      "A famous urban lake in Srinagar known for its houseboats, floating gardens (Raad), and Mughal-era gardens along its shores.",
    importance:
      "UPSC angle: iconic tourist and heritage lake of Srinagar; suffers from eutrophication and encroachment, making it a case study in urban lake conservation.",
    tags: ["srinagar", "houseboats", "mughal-gardens", "kashmir"],
  },
  {
    id: "chilika-lake",
    name: "Chilika Lake",
    category: "lake",
    subcategory: "lagoon",
    coordinates: { lat: 19.7, lng: 85.32 },
    states: ["Odisha"],
    region: "east",
    difficulty: "easy",
    description:
      "The largest coastal lagoon in India, separated from the Bay of Bengal by a sandy barrier and connected to it through a narrow mouth.",
    importance:
      "UPSC angle: largest brackish-water lagoon in India and second-largest in the world; first Ramsar site designated in India (1981); winter home to migratory birds and Irrawaddy dolphins.",
    tags: ["ramsar", "lagoon", "irrawaddy-dolphin", "migratory-birds", "odisha"],
  },
  {
    id: "pulicat-lake",
    name: "Pulicat Lake",
    category: "lake",
    subcategory: "lagoon",
    coordinates: { lat: 13.67, lng: 80.18 },
    states: ["Andhra Pradesh", "Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "The second-largest brackish-water lagoon in India, straddling the Andhra Pradesh-Tamil Nadu border and enclosing Sriharikota island.",
    importance:
      "UPSC angle: second-largest coastal lagoon in India; encloses Sriharikota (ISRO's launch site); designated a bird sanctuary and Ramsar site.",
    tags: ["ramsar", "lagoon", "sriharikota", "bird-sanctuary"],
  },
  {
    id: "sambhar-lake",
    name: "Sambhar Lake",
    category: "lake",
    subcategory: "saltwater",
    coordinates: { lat: 26.9, lng: 75.1 },
    states: ["Rajasthan"],
    region: "north",
    difficulty: "easy",
    description:
      "India's largest inland saline lake, located in Rajasthan and a major source of salt production for the country.",
    importance:
      "UPSC angle: largest inland salt lake in India, supplying about a quarter of India's salt production; a Ramsar wetland known for flamingo congregations.",
    tags: ["ramsar", "salt-production", "flamingo", "rajasthan"],
  },
  {
    id: "loktak-lake",
    name: "Loktak Lake",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 24.55, lng: 93.8 },
    states: ["Manipur"],
    region: "northeast",
    difficulty: "easy",
    description:
      "The largest freshwater lake in Northeast India, famous for its floating phumdis (masses of vegetation and soil) that dot its surface.",
    importance:
      "UPSC angle: largest freshwater lake in Northeast India; hosts Keibul Lamjao, the world's only floating national park, home to the endangered Sangai deer; a Ramsar site.",
    tags: ["ramsar", "phumdi", "keibul-lamjao", "sangai-deer", "manipur"],
  },
  {
    id: "vembanad-lake",
    name: "Vembanad Lake",
    category: "lake",
    subcategory: "lagoon",
    coordinates: { lat: 9.6, lng: 76.4 },
    states: ["Kerala"],
    region: "south",
    difficulty: "medium",
    description:
      "The longest lake in India, a Kerala backwater lagoon separated from the Arabian Sea by a narrow barrier and famous for houseboat tourism.",
    importance:
      "UPSC angle: longest lake in India; part of the Kerala backwaters and a Ramsar site; hosts the Nehru Trophy Boat Race and the Vembanad-Kol wetland system.",
    tags: ["ramsar", "backwaters", "houseboat", "kerala"],
  },
  {
    id: "kolleru-lake",
    name: "Kolleru Lake",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 16.6, lng: 81.2 },
    states: ["Andhra Pradesh"],
    region: "south",
    difficulty: "medium",
    description:
      "One of the largest freshwater lakes in India, situated between the Krishna and Godavari river deltas and acting as a natural flood-balancing reservoir.",
    importance:
      "UPSC angle: one of the largest freshwater lakes in Asia; a Ramsar wetland and important habitat for migratory birds, though threatened by aquaculture encroachment.",
    tags: ["ramsar", "krishna-godavari-delta", "migratory-birds", "aquaculture"],
  },
  {
    id: "nainital-lake",
    name: "Nainital Lake",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 29.39, lng: 79.46 },
    states: ["Uttarakhand"],
    region: "north",
    difficulty: "medium",
    description:
      "A crescent-shaped freshwater lake in the Kumaon Himalayas around which the hill town of Nainital has developed.",
    importance:
      "UPSC angle: example of a natural Himalayan lake formed by tectonic activity; centre of Kumaon hill-station tourism and local water supply.",
    tags: ["kumaon", "hill-station", "uttarakhand"],
  },
  {
    id: "bhimtal-lake",
    name: "Bhimtal Lake",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 29.35, lng: 79.56 },
    states: ["Uttarakhand"],
    region: "north",
    difficulty: "hard",
    description:
      "A natural freshwater lake in the Kumaon hills of Uttarakhand, the largest lake in the Nainital district and named after the Mahabharata figure Bhima.",
    importance:
      "UPSC angle: largest lake in the Kumaon Nainital district; illustrates the cluster of Himalayan tectonic lakes alongside Nainital, Sattal, and Naukuchiatal.",
    tags: ["kumaon", "uttarakhand", "himalayan-lake"],
  },
  {
    id: "pangong-tso",
    name: "Pangong Tso",
    category: "lake",
    subcategory: "high-altitude",
    coordinates: { lat: 33.75, lng: 78.65 },
    states: ["Ladakh"],
    region: "north",
    difficulty: "medium",
    description:
      "An endorheic high-altitude lake in the Ladakh Himalayas stretching from India into Tibet (China), known for its changing shades of blue.",
    importance:
      "UPSC angle: transboundary lake with about two-thirds of its length in Chinese-controlled territory; strategically significant along the Line of Actual Control (site of 2020 India-China standoff).",
    tags: ["ladakh", "lac", "transboundary", "high-altitude", "endorheic"],
  },
  {
    id: "tso-moriri",
    name: "Tso Moriri",
    category: "lake",
    subcategory: "high-altitude",
    coordinates: { lat: 32.9, lng: 78.32 },
    states: ["Ladakh"],
    region: "north",
    difficulty: "medium",
    description:
      "A high-altitude endorheic lake in the Changthang Plateau of Ladakh, entirely within India and surrounded by the Changthang Wildlife Sanctuary.",
    importance:
      "UPSC angle: one of the highest-altitude wetlands of its size in the world; a Ramsar site and the only breeding ground outside Tibet/Central Asia for the black-necked crane.",
    tags: ["ramsar", "ladakh", "changthang", "black-necked-crane", "high-altitude"],
  },
  {
    id: "lonar-lake",
    name: "Lonar Lake",
    category: "lake",
    subcategory: "crater",
    coordinates: { lat: 19.98, lng: 76.51 },
    states: ["Maharashtra"],
    region: "west",
    difficulty: "medium",
    description:
      "A saline, soda lake occupying a crater created by a meteorite impact on Deccan Trap basalt around 50,000 years ago, located in Buldhana district.",
    importance:
      "UPSC angle: one of the world's only hyper-velocity meteorite impact craters formed in basaltic rock; a Ramsar wetland notable for periodic colour changes due to algae and microbial activity.",
    tags: ["ramsar", "meteorite-impact", "deccan-trap", "crater-lake", "maharashtra"],
  },
  {
    id: "sasthamkotta-lake",
    name: "Sasthamkotta Lake",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 9.05, lng: 76.62 },
    states: ["Kerala"],
    region: "south",
    difficulty: "hard",
    description:
      "The largest freshwater lake in Kerala, located in Kollam district and serving as the main drinking-water source for Kollam town.",
    importance:
      "UPSC angle: largest freshwater lake in Kerala; a Ramsar site valued for its unique ecology, including endemic fish species, despite having no major river inflow.",
    tags: ["ramsar", "kerala", "drinking-water", "kollam"],
  },
  {
    id: "ashtamudi-lake",
    name: "Ashtamudi Lake",
    category: "lake",
    subcategory: "lagoon",
    coordinates: { lat: 8.95, lng: 76.58 },
    states: ["Kerala"],
    region: "south",
    difficulty: "hard",
    description:
      "A palm-shaped (octopus-armed) wetland ecosystem and the second-largest lake in Kerala, connected to the Arabian Sea near Kollam and a gateway to the Kerala backwaters.",
    importance:
      "UPSC angle: second-largest Ramsar wetland in Kerala; a key backwater tourism hub and estuarine ecosystem supporting the clam fishery industry.",
    tags: ["ramsar", "backwaters", "kollam", "kerala", "estuary"],
  },
  {
    id: "hussain-sagar",
    name: "Hussain Sagar",
    category: "lake",
    subcategory: "artificial",
    coordinates: { lat: 17.42, lng: 78.47 },
    states: ["Telangana"],
    region: "south",
    difficulty: "medium",
    description:
      "A heart-shaped artificial lake built in 1563 by Hussain Shah Wali on a tributary of the Musi River, situated between the twin cities of Hyderabad and Secunderabad.",
    importance:
      "UPSC angle: example of a historic man-made lake linking twin cities Hyderabad-Secunderabad; hosts the iconic monolithic Buddha statue and faces severe pollution/eutrophication challenges.",
    tags: ["artificial-lake", "hyderabad", "musi-river", "buddha-statue"],
  },
  {
    id: "kanwar-lake",
    name: "Kanwar Lake (Kabartal)",
    category: "lake",
    subcategory: "freshwater",
    coordinates: { lat: 25.6, lng: 86.05 },
    states: ["Bihar"],
    region: "east",
    difficulty: "hard",
    description:
      "An oxbow, freshwater floodplain lake (Kabartal Wetland) in Begusarai district, Bihar, formed by the shifting course of the Gandak-Burhi Gandak river system and the largest freshwater oxbow lake in Asia.",
    importance:
      "UPSC angle: Asia's largest freshwater oxbow lake; designated a Ramsar wetland in 2020; critical stopover for migratory birds on the Central Asian Flyway.",
    tags: ["ramsar", "oxbow-lake", "bihar", "migratory-birds", "central-asian-flyway"],
  },
  {
    id: "chandra-taal",
    name: "Chandra Taal",
    category: "lake",
    subcategory: "high-altitude",
    coordinates: { lat: 32.48, lng: 77.62 },
    states: ["Himachal Pradesh"],
    region: "north",
    difficulty: "hard",
    description:
      "A crescent-shaped ('Moon Lake') high-altitude lake in the Spiti Valley of Himachal Pradesh, fed by glacial meltwater and lying near the source of the Chandra River.",
    importance:
      "UPSC angle: high-altitude Ramsar wetland in the cold desert of Lahaul-Spiti; popular trekking destination illustrating glacial-lake geomorphology in the trans-Himalaya.",
    tags: ["ramsar", "spiti", "trans-himalaya", "glacial-lake", "himachal-pradesh"],
  },
];
