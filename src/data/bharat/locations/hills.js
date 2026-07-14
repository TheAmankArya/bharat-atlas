export const HILL_LOCATIONS = [
  {
    id: "nilgiri-hills",
    name: "Nilgiri Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 11.4, lng: 76.7 },
    states: ["Tamil Nadu", "Kerala", "Karnataka"],
    region: "south",
    difficulty: "easy",
    description:
      "A range of hills where the Western and Eastern Ghats meet, home to the hill station of Ooty (Udhagamandalam) and Doddabetta peak.",
    importance:
      "UPSC angle: meeting point of the Western and Eastern Ghats; the Nilgiri Biosphere Reserve was India's first biosphere reserve (1986) and is a UNESCO World Network site; tea plantations and Toda tribal community.",
    tags: ["western-ghats", "biosphere-reserve", "hill-station", "tea"],
  },
  {
    id: "anaimalai-hills",
    name: "Anaimalai Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 10.2, lng: 77.05 },
    states: ["Tamil Nadu", "Kerala"],
    region: "south",
    difficulty: "medium",
    description:
      "A range in the Western Ghats south of the Palghat Gap, containing Anamudi, the highest peak in India south of the Himalayas (2,695 m).",
    importance:
      "UPSC angle: Anamudi is the highest peak of Peninsular India; the range hosts the Anamalai Tiger Reserve and Parambikulam Tiger Reserve, and tea/coffee plantations around Valparai and Munnar.",
    tags: ["western-ghats", "anamudi", "tiger-reserve", "tea"],
  },
  {
    id: "cardamom-hills",
    name: "Cardamom Hills (Idukki)",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 9.6, lng: 77.2 },
    states: ["Kerala", "Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "A southern spur of the Western Ghats in Idukki district, Kerala, extending toward the Periyar Tiger Reserve near Thekkady, named for large-scale cardamom cultivation.",
    importance:
      "UPSC angle: forms part of the southernmost Western Ghats and the Periyar-Agasthyamalai biodiversity corridor; major spice (cardamom, pepper) cultivation belt; the Periyar river originates in this region.",
    tags: ["western-ghats", "spices", "periyar", "biodiversity-hotspot"],
  },
  {
    id: "palani-hills",
    name: "Palani Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 10.23, lng: 77.49 },
    states: ["Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "An eastward offshoot of the Western Ghats in Tamil Nadu, home to the hill station of Kodaikanal and Vandaravu, its highest peak.",
    importance:
      "UPSC angle: connects the Western Ghats to the Eastern Ghats system via the southern hill complex; known for shola-grassland ecosystems, Kodaikanal Lake, and fruit/plantation agriculture.",
    tags: ["western-ghats", "hill-station", "shola-forest"],
  },
  {
    id: "biligirirangan-hills",
    name: "Biligirirangan Hills (BR Hills)",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 11.97, lng: 77.15 },
    states: ["Karnataka"],
    region: "south",
    difficulty: "medium",
    description:
      "A hill range in Chamarajanagar district, Karnataka, forming an ecological bridge between the Western and Eastern Ghats; home to the Soliga tribal community.",
    importance:
      "UPSC angle: the BRT (Biligiri Rangaswamy Temple) Tiger Reserve was the first in India where a resident tribal community's rights were formally recognised under the Forest Rights Act while coexisting with tiger reserve status.",
    tags: ["western-ghats", "eastern-ghats", "tiger-reserve", "tribal-rights"],
  },
  {
    id: "rajmahal-hills",
    name: "Rajmahal Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 24.9, lng: 87.7 },
    states: ["Jharkhand"],
    region: "east",
    difficulty: "medium",
    description:
      "A range of low hills in Sahibganj district, Jharkhand, along the right bank of the Ganga, formed of ancient volcanic (Rajmahal Traps) basalt.",
    importance:
      "UPSC angle: the Rajmahal Traps are a major Gondwana-era volcanic formation with a globally significant plant fossil park (Rajmahal Fossil Park); homeland of the Santhal tribal community and site of the Santhal rebellion (1855).",
    tags: ["rajmahal-traps", "fossil-park", "santhal", "gondwana"],
  },
  {
    id: "maikal-range",
    name: "Maikal Range",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 22.67, lng: 81.75 },
    states: ["Madhya Pradesh", "Chhattisgarh"],
    region: "central",
    difficulty: "medium",
    description:
      "A range in central India connecting the Satpura and Vindhya systems, centred on the Amarkantak plateau on the Madhya Pradesh-Chhattisgarh border.",
    importance:
      "UPSC angle: Amarkantak in the Maikal range is the source of both the Narmada (flowing west) and the Son (flowing east); the range forms a key watershed divide and includes part of the Kanha National Park landscape.",
    tags: ["amarkantak", "narmada-source", "watershed", "kanha"],
  },
  {
    id: "ajanta-range",
    name: "Ajanta Range",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 20.55, lng: 75.7 },
    states: ["Maharashtra"],
    region: "west",
    difficulty: "medium",
    description:
      "A range of hills in northern Maharashtra forming the watershed between the Godavari and Tapi river systems, famous for the rock-cut Ajanta Caves carved into its scarp.",
    importance:
      "UPSC angle: the Ajanta Caves (UNESCO World Heritage Site) are carved into the horseshoe-shaped escarpment of this range; the range separates the Godavari basin (south) from the Tapi basin (north).",
    tags: ["unesco", "ajanta-caves", "godavari-tapi-divide"],
  },
  {
    id: "satmala-range",
    name: "Satmala Range",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 20.33, lng: 74.4 },
    states: ["Maharashtra"],
    region: "west",
    difficulty: "hard",
    description:
      "A range of hills in the Nashik-Aurangabad belt of Maharashtra, geologically continuous with the Ajanta range and part of the Deccan Trap basalt country.",
    importance:
      "UPSC angle: forms part of the Deccan Trap volcanic plateau's northern rim and hosts hill forts such as Chandwad; contributes to the Godavari-Tapi watershed divide alongside the Ajanta range.",
    tags: ["deccan-traps", "godavari-tapi-divide", "hill-forts"],
  },
  {
    id: "garo-hills",
    name: "Garo Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 25.52, lng: 90.22 },
    states: ["Meghalaya"],
    region: "northeast",
    difficulty: "medium",
    description:
      "The westernmost hill range of Meghalaya, centred on Tura, inhabited predominantly by the matrilineal Garo tribal community.",
    importance:
      "UPSC angle: part of the Meghalaya Plateau (an extension of the Peninsular Plateau, geologically linked to the Chotanagpur Plateau); Nokrek Biosphere Reserve here protects citrus gene pool diversity and the western hoolock gibbon.",
    tags: ["meghalaya-plateau", "matrilineal", "nokrek", "biosphere-reserve"],
  },
  {
    id: "khasi-hills",
    name: "Khasi Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 25.57, lng: 91.88 },
    states: ["Meghalaya"],
    region: "northeast",
    difficulty: "easy",
    description:
      "The central hill range of Meghalaya, home to the state capital Shillong and to Cherrapunji (Sohra) and Mawsynram, among the wettest places on Earth.",
    importance:
      "UPSC angle: Mawsynram and Cherrapunji in the Khasi Hills record the highest average annual rainfall in the world, caused by funnel-shaped topography forcing monsoon winds upward; matrilineal Khasi society and living root bridges.",
    tags: ["wettest-place", "mawsynram", "cherrapunji", "living-root-bridges"],
  },
  {
    id: "jaintia-hills",
    name: "Jaintia Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 25.45, lng: 92.2 },
    states: ["Meghalaya"],
    region: "northeast",
    difficulty: "hard",
    description:
      "The easternmost hill range of Meghalaya, centred on Jowai, known for extensive limestone and coal deposits.",
    importance:
      "UPSC angle: rat-hole coal mining in the Jaintia Hills has been a recurring environmental and mining-policy issue (banned by NGT in 2014); large limestone reserves feed the cement industry.",
    tags: ["rat-hole-mining", "coal", "limestone", "meghalaya-plateau"],
  },
  {
    id: "nallamala-hills",
    name: "Nallamala Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 16.08, lng: 78.87 },
    states: ["Andhra Pradesh", "Telangana"],
    region: "south",
    difficulty: "medium",
    description:
      "A range of the Eastern Ghats running through Telangana and Andhra Pradesh along the Krishna river, where the Srisailam Dam and reservoir are located.",
    importance:
      "UPSC angle: hosts the Nagarjunasagar-Srisailam Tiger Reserve, India's largest tiger reserve; site of the Lambapur-Peddagattu uranium mining project, a recurring environment-vs-development topic; home to the Chenchu tribal community.",
    tags: ["eastern-ghats", "tiger-reserve", "uranium", "chenchu"],
  },
  {
    id: "palkonda-range",
    name: "Palkonda Range",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 13.65, lng: 79.35 },
    states: ["Andhra Pradesh"],
    region: "south",
    difficulty: "hard",
    description:
      "A range of the Eastern Ghats in Chittoor and Kadapa districts of Andhra Pradesh, associated with the Tirumala hills where the Tirupati temple stands.",
    importance:
      "UPSC angle: part of the Eastern Ghats sub-ranges tested for geography of the peninsular hill systems; the Tirumala hills sacred grove/forest ecosystem within it is ecologically significant.",
    tags: ["eastern-ghats", "tirumala", "sacred-grove"],
  },
  {
    id: "velikonda-range",
    name: "Velikonda Range",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 15.3, lng: 79.5 },
    states: ["Andhra Pradesh"],
    region: "south",
    difficulty: "hard",
    description:
      "A range of the Eastern Ghats running through Nellore and Prakasam districts of Andhra Pradesh, lying between the Nallamala and Palkonda ranges.",
    importance:
      "UPSC angle: one of the lesser-known Eastern Ghats sub-ranges often confused with Nallamala/Palkonda in exams; forms part of the Krishna-Pennar interfluve upland.",
    tags: ["eastern-ghats", "krishna-pennar-interfluve"],
  },
  {
    id: "javadi-hills",
    name: "Javadi Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 12.5, lng: 78.7 },
    states: ["Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "A range of hills in Vellore and Tiruvannamalai districts of Tamil Nadu, an outlying spur of the Eastern Ghats.",
    importance:
      "UPSC angle: represents the Eastern Ghats extension into northern Tamil Nadu; known for mango and jackfruit orchards and reserved forests inhabited by the Malayali tribal community.",
    tags: ["eastern-ghats", "malayali-tribe"],
  },
  {
    id: "shevaroy-hills",
    name: "Shevaroy Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 11.78, lng: 78.2 },
    states: ["Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "A range of hills in Salem district, Tamil Nadu, part of the Eastern Ghats, home to the hill station of Yercaud.",
    importance:
      "UPSC angle: Yercaud is a classic example of an Eastern Ghats hill station with coffee, orange, and pepper cultivation, contrasted in exams with Western Ghats hill stations like Ooty and Kodaikanal.",
    tags: ["eastern-ghats", "yercaud", "hill-station", "coffee"],
  },
  {
    id: "baba-budan-giri",
    name: "Baba Budan Giri (Chandra Drona Parvata)",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 13.42, lng: 75.75 },
    states: ["Karnataka"],
    region: "south",
    difficulty: "medium",
    description:
      "A hill range in Chikmagalur district, Karnataka, part of the Western Ghats, traditionally credited as the site where coffee cultivation was first introduced in India by the Sufi saint Baba Budan.",
    importance:
      "UPSC angle: historically important as the origin point of coffee cultivation in India; Mullayanagiri, the highest peak of Karnataka, lies in this range; also known by its ancient name Chandra Drona Parvata.",
    tags: ["western-ghats", "coffee", "mullayanagiri", "karnataka-highest-peak"],
  },
  {
    id: "mahadeo-hills",
    name: "Mahadeo Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 22.47, lng: 78.43 },
    states: ["Madhya Pradesh"],
    region: "central",
    difficulty: "medium",
    description:
      "A range within the Satpura hill system in Madhya Pradesh, centred on the hill station of Pachmarhi and its highest point, Dhupgarh.",
    importance:
      "UPSC angle: Dhupgarh is the highest point of the Satpura range and Madhya Pradesh; the Pachmarhi Biosphere Reserve here protects sal and teak forests and is a UNESCO Man and Biosphere site.",
    tags: ["satpura", "pachmarhi", "biosphere-reserve", "dhupgarh"],
  },
  {
    id: "karbi-anglong-hills",
    name: "Karbi Anglong Hills (Mikir Hills)",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 25.84, lng: 93.43 },
    states: ["Assam"],
    region: "northeast",
    difficulty: "medium",
    description:
      "A hill range in central Assam, geologically an extension of the Meghalaya Plateau, centred on Diphu and inhabited chiefly by the Karbi tribal community.",
    importance:
      "UPSC angle: administered as an autonomous district under the Sixth Schedule of the Constitution (Karbi Anglong Autonomous Council), frequently referenced in questions on tribal self-governance in the Northeast.",
    tags: ["sixth-schedule", "autonomous-council", "karbi-tribe"],
  },
  {
    id: "patkai-hills",
    name: "Patkai Hills",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 27.25, lng: 95.85 },
    states: ["Arunachal Pradesh", "Nagaland", "Assam"],
    region: "northeast",
    difficulty: "hard",
    description:
      "A range of hills along India's border with Myanmar, part of the Purvanchal ranges, including the Pangsau Pass historically used by the Stilwell (Ledo) Road.",
    importance:
      "UPSC angle: part of the Purvanchal hill system formed by the collision-related folding of the Himalayan orogeny turning southward; the Pangsau Pass and Stilwell Road are notable for WWII history and India-Myanmar connectivity.",
    tags: ["purvanchal", "indo-myanmar-border", "stilwell-road", "pangsau-pass"],
  },
  {
    id: "mizo-hills",
    name: "Mizo Hills (Lushai Hills)",
    category: "hill",
    subcategory: "hill-range",
    coordinates: { lat: 23.73, lng: 92.72 },
    states: ["Mizoram"],
    region: "northeast",
    difficulty: "medium",
    description:
      "A system of parallel north-south ridges covering most of Mizoram, centred on the state capital Aizawl, historically known as the Lushai Hills.",
    importance:
      "UPSC angle: associated with jhum (shifting) cultivation and the roughly 48-year gregarious flowering cycle of Melocanna baccifera bamboo that triggers rat population explosions and famine (Mautam), a distinctive ecology-history linkage.",
    tags: ["jhum-cultivation", "mautam", "bamboo-flowering", "purvanchal"],
  },
];
