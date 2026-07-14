export const FOREST_LOCATIONS = [
  // ---- National Parks ----
  {
    id: "jim-corbett-national-park",
    name: "Jim Corbett National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 29.53, lng: 78.77 },
    states: ["Uttarakhand"],
    region: "north",
    difficulty: "easy",
    description:
      "A Terai-Bhabar forest and grassland park in the Shivalik foothills along the Ramganga river, India's oldest national park.",
    importance:
      "UPSC angle: established in 1936 as Hailey National Park, India's first national park; in 1973 it became the launch site of Project Tiger; core zone of Corbett Tiger Reserve.",
    tags: ["tiger-reserve", "project-tiger", "first-national-park", "terai"],
  },
  {
    id: "kaziranga-national-park",
    name: "Kaziranga National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 26.58, lng: 93.37 },
    states: ["Assam"],
    region: "northeast",
    difficulty: "easy",
    description:
      "A vast floodplain of tall elephant grass and marshland along the Brahmaputra, home to more than two-thirds of the world's one-horned rhinoceroses.",
    importance:
      "UPSC angle: highest density of one-horned rhinoceros in the world; a UNESCO World Heritage Site and a Tiger Reserve; also holds significant populations of wild water buffalo and elephants.",
    tags: ["tiger-reserve", "one-horned-rhino", "unesco-whs", "brahmaputra"],
  },
  {
    id: "sundarbans-national-park",
    name: "Sundarbans National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 21.95, lng: 88.9 },
    states: ["West Bengal"],
    region: "east",
    difficulty: "medium",
    description:
      "The core protected zone of the world's largest mangrove forest, spread across the Ganga-Brahmaputra delta, known for its swimming Royal Bengal tigers.",
    importance:
      "UPSC angle: world's largest mangrove ecosystem, shared with Bangladesh; a UNESCO World Heritage Site and a Tiger Reserve; Sundari tree gives the region its name.",
    tags: ["tiger-reserve", "mangrove", "unesco-whs", "delta"],
  },
  {
    id: "gir-national-park",
    name: "Gir National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 21.13, lng: 70.8 },
    states: ["Gujarat"],
    region: "west",
    difficulty: "easy",
    description:
      "A dry deciduous forest in Saurashtra, Gujarat, and the only place in the world with a wild population of Asiatic lions outside Africa.",
    importance:
      "UPSC angle: sole wild habitat of the Asiatic lion; a major conservation success story and frequently tested endemic-species fact.",
    tags: ["asiatic-lion", "endemic-species", "dry-deciduous"],
  },
  {
    id: "ranthambore-national-park",
    name: "Ranthambore National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 26.02, lng: 76.5 },
    states: ["Rajasthan"],
    region: "west",
    difficulty: "easy",
    description:
      "A dry deciduous forest at the meeting point of the Aravalli and Vindhya hill ranges, famed for its high visibility tiger sightings around Ranthambore Fort.",
    importance:
      "UPSC angle: one of the most visited Tiger Reserves in India; located at the confluence of the Aravalli and Vindhya ranges, a fact tested in physiography questions.",
    tags: ["tiger-reserve", "aravalli", "vindhya"],
  },
  {
    id: "bandhavgarh-national-park",
    name: "Bandhavgarh National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 23.7, lng: 81.03 },
    states: ["Madhya Pradesh"],
    region: "central",
    difficulty: "medium",
    description:
      "A Vindhya hill-range forest in Madhya Pradesh with the highest known density of Bengal tigers in India.",
    importance:
      "UPSC angle: historic origin site of the white tiger lineage (Mohan, captured here in 1951); one of the highest tiger-density reserves in India.",
    tags: ["tiger-reserve", "white-tiger", "vindhya"],
  },
  {
    id: "kanha-national-park",
    name: "Kanha National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 22.27, lng: 80.63 },
    states: ["Madhya Pradesh"],
    region: "central",
    difficulty: "easy",
    description:
      "A sal and bamboo forest with sprawling meadows in the Maikal hills, said to have inspired Rudyard Kipling's 'The Jungle Book'.",
    importance:
      "UPSC angle: saved the barasingha (swamp deer) from near-extinction, its officially recognised state animal mascot; a flagship Project Tiger reserve.",
    tags: ["tiger-reserve", "barasingha", "sal-forest"],
  },
  {
    id: "periyar-national-park",
    name: "Periyar National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 9.46, lng: 77.24 },
    states: ["Kerala"],
    region: "south",
    difficulty: "easy",
    description:
      "A Western Ghats forest around the Periyar Lake reservoir in Kerala's Idukki district, known for its herds of wild elephants.",
    importance:
      "UPSC angle: one of the earliest Tiger Reserves declared under Project Tiger (1978); lies within the Agasthyamalai-Periyar biodiversity corridor; the Periyar river originates here.",
    tags: ["tiger-reserve", "western-ghats", "elephant"],
  },
  {
    id: "nagarhole-national-park",
    name: "Nagarhole National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 12.05, lng: 76.15 },
    states: ["Karnataka"],
    region: "south",
    difficulty: "medium",
    description:
      "A Western Ghats deciduous forest in Karnataka bordering Kerala's Wayanad and Tamil Nadu's Mudumalai, forming part of the Nilgiri Biosphere Reserve's core.",
    importance:
      "UPSC angle: also called Rajiv Gandhi National Park; part of the Nilgiri-Bandipur-Mudumalai-Wayanad tiger corridor, one of the largest contiguous tiger habitats in Asia.",
    tags: ["tiger-reserve", "western-ghats", "nilgiri-corridor"],
  },
  {
    id: "bandipur-national-park",
    name: "Bandipur National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 11.67, lng: 76.63 },
    states: ["Karnataka"],
    region: "south",
    difficulty: "medium",
    description:
      "A dry deciduous and moist deciduous forest in Karnataka at the tri-junction with Tamil Nadu and Kerala, part of the Nilgiri Biosphere Reserve.",
    importance:
      "UPSC angle: one of the first nine Tiger Reserves notified in 1973-74 under Project Tiger; contiguous with Mudumalai, Wayanad and Nagarhole forming the Nilgiri tiger landscape.",
    tags: ["tiger-reserve", "western-ghats", "nilgiri-corridor"],
  },
  {
    id: "silent-valley-national-park",
    name: "Silent Valley National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 11.08, lng: 76.43 },
    states: ["Kerala"],
    region: "south",
    difficulty: "hard",
    description:
      "One of the last surviving tracts of undisturbed tropical evergreen rainforest in India, in the Nilgiri hills of Kerala's Palakkad district.",
    importance:
      "UPSC angle: site of the famous 1970s-80s 'Save Silent Valley' movement that stopped a hydroelectric dam project, a landmark case in India's environmental conservation history; habitat of the endangered lion-tailed macaque.",
    tags: ["lion-tailed-macaque", "rainforest", "environmental-movement", "western-ghats"],
  },
  {
    id: "great-himalayan-national-park",
    name: "Great Himalayan National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 31.72, lng: 77.6 },
    states: ["Himachal Pradesh"],
    region: "north",
    difficulty: "hard",
    description:
      "A high-altitude Western Himalayan park in Kullu district, Himachal Pradesh, spanning alpine meadows, glaciers and river valleys home to snow leopard and Himalayan tahr.",
    importance:
      "UPSC angle: declared a UNESCO World Heritage Site in 2014 for its rich biodiversity of the Western Himalayas, including several endangered and endemic species.",
    tags: ["unesco-whs", "snow-leopard", "western-himalaya", "alpine"],
  },
  {
    id: "hemis-national-park",
    name: "Hemis National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 33.85, lng: 77.5 },
    states: ["Ladakh"],
    region: "north",
    difficulty: "hard",
    description:
      "A high-altitude cold-desert park in the Zanskar range near Leh, Ladakh, and one of the few protected areas in the world with a viable population of snow leopards.",
    importance:
      "UPSC angle: largest notified national park in South Asia by area; often called the 'Land of the Snow Leopard' due to its unusually high snow leopard density.",
    tags: ["snow-leopard", "trans-himalaya", "cold-desert", "ladakh"],
  },
  {
    id: "manas-national-park",
    name: "Manas National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 26.72, lng: 91.0 },
    states: ["Assam"],
    region: "northeast",
    difficulty: "medium",
    description:
      "A grassland and forest park along the Manas river on the Assam-Bhutan border, part of a transboundary tiger and elephant conservation landscape.",
    importance:
      "UPSC angle: a UNESCO World Heritage Site and a Tiger Reserve; last global refuge of the endangered pygmy hog and hispid hare; also a designated Biosphere Reserve.",
    tags: ["tiger-reserve", "unesco-whs", "pygmy-hog", "transboundary"],
  },
  {
    id: "valley-of-flowers-national-park",
    name: "Valley of Flowers National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 30.73, lng: 79.61 },
    states: ["Uttarakhand"],
    region: "north",
    difficulty: "hard",
    description:
      "A high-altitude Himalayan valley in Chamoli district known for its meadows of endemic alpine flowers and rare fauna like the Asiatic black bear and snow leopard.",
    importance:
      "UPSC angle: a UNESCO World Heritage Site, clubbed with Nanda Devi National Park as the Nanda Devi Biosphere Reserve; celebrated by British mountaineer Frank Smythe.",
    tags: ["unesco-whs", "alpine-flora", "nanda-devi-biosphere"],
  },
  {
    id: "dachigam-national-park",
    name: "Dachigam National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 34.18, lng: 74.95 },
    states: ["Jammu and Kashmir"],
    region: "north",
    difficulty: "hard",
    description:
      "A Kashmir Himalayan park near Srinagar spanning alpine and coniferous zones, the last refuge of the critically endangered hangul (Kashmir stag).",
    importance:
      "UPSC angle: only home to a viable wild population of the hangul, the state animal of Jammu and Kashmir; also supplies drinking water to Srinagar city.",
    tags: ["hangul", "kashmir-himalaya", "endemic-species"],
  },
  {
    id: "simlipal-national-park",
    name: "Simlipal National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 21.6, lng: 86.3 },
    states: ["Odisha"],
    region: "east",
    difficulty: "medium",
    description:
      "A sal-forest massif in Mayurbhanj district, Odisha, with numerous waterfalls, forming the core of a Tiger Reserve and Biosphere Reserve.",
    importance:
      "UPSC angle: notified as a Tiger Reserve under Project Tiger and later as a UNESCO Man and Biosphere Reserve; known for its rare melanistic (black) tigers.",
    tags: ["tiger-reserve", "biosphere-reserve", "melanistic-tiger", "sal-forest"],
  },
  {
    id: "desert-national-park",
    name: "Desert National Park",
    category: "forest",
    subcategory: "national-park",
    coordinates: { lat: 26.7, lng: 70.9 },
    states: ["Rajasthan"],
    region: "west",
    difficulty: "medium",
    description:
      "One of the largest national parks in India, spread across the Thar Desert near Jaisalmer, showcasing sand dunes, salt lake beds and desert scrub ecosystems.",
    importance:
      "UPSC angle: a critical breeding habitat of the critically endangered Great Indian Bustard, the focal species of Project Great Indian Bustard.",
    tags: ["thar-desert", "great-indian-bustard", "desert-ecosystem"],
  },

  // ---- Tiger Reserves ----
  {
    id: "melghat-tiger-reserve",
    name: "Melghat Tiger Reserve",
    category: "forest",
    subcategory: "tiger-reserve",
    coordinates: { lat: 21.35, lng: 77.2 },
    states: ["Maharashtra"],
    region: "west",
    difficulty: "medium",
    description:
      "A hilly, forested reserve in the Satpura range of Amravati district, Maharashtra, straddling the Tapi river basin.",
    importance:
      "UPSC angle: one of the first nine Tiger Reserves declared in 1973-74 under Project Tiger; located in the Satpura-Melghat landscape, a key central-Indian tiger corridor.",
    tags: ["tiger-reserve", "satpura", "project-tiger"],
  },
  {
    id: "tadoba-andhari-tiger-reserve",
    name: "Tadoba-Andhari Tiger Reserve",
    category: "forest",
    subcategory: "tiger-reserve",
    coordinates: { lat: 20.23, lng: 79.33 },
    states: ["Maharashtra"],
    region: "west",
    difficulty: "medium",
    description:
      "Maharashtra's oldest and largest national park, a teak and bamboo forest in Chandrapur district known locally as 'Jhadi Chi Mangal'.",
    importance:
      "UPSC angle: highest tiger density among Maharashtra's reserves; named after the local deity Tadoba and the Andhari river.",
    tags: ["tiger-reserve", "teak-forest"],
  },
  {
    id: "pench-tiger-reserve",
    name: "Pench Tiger Reserve",
    category: "forest",
    subcategory: "tiger-reserve",
    coordinates: { lat: 21.7, lng: 79.3 },
    states: ["Madhya Pradesh", "Maharashtra"],
    region: "central",
    difficulty: "medium",
    description:
      "A teak-dominated forest straddling the Madhya Pradesh-Maharashtra border along the Pench river, believed to have inspired the setting of Kipling's 'The Jungle Book'.",
    importance:
      "UPSC angle: split across two states as Pench (MP) and Pench (Maharashtra) Tiger Reserves; part of the Kanha-Pench tiger corridor.",
    tags: ["tiger-reserve", "kipling", "kanha-pench-corridor"],
  },
  {
    id: "nagarjunsagar-srisailam-tiger-reserve",
    name: "Nagarjunsagar-Srisailam Tiger Reserve",
    category: "forest",
    subcategory: "tiger-reserve",
    coordinates: { lat: 16.5, lng: 79.0 },
    states: ["Andhra Pradesh", "Telangana"],
    region: "south",
    difficulty: "medium",
    description:
      "The largest Tiger Reserve in India, spanning the Nallamala hills along the Krishna river gorge across Andhra Pradesh and Telangana.",
    importance:
      "UPSC angle: largest Tiger Reserve in India by area; encompasses the Nallamala forest and the Srisailam and Nagarjunsagar dam reservoirs on the Krishna.",
    tags: ["tiger-reserve", "nallamala", "krishna-river", "largest-tiger-reserve"],
  },
  {
    id: "sariska-tiger-reserve",
    name: "Sariska Tiger Reserve",
    category: "forest",
    subcategory: "tiger-reserve",
    coordinates: { lat: 27.33, lng: 76.4 },
    states: ["Rajasthan"],
    region: "west",
    difficulty: "medium",
    description:
      "An Aravalli-range dry deciduous forest in Alwar district, Rajasthan, dotted with ruins including the Kankwari Fort.",
    importance:
      "UPSC angle: notorious for the local extinction of all its tigers by 2004-05 due to poaching, followed by India's first successful tiger relocation and reintroduction programme from Ranthambore.",
    tags: ["tiger-reserve", "aravalli", "tiger-reintroduction"],
  },
  {
    id: "anamalai-tiger-reserve",
    name: "Anamalai Tiger Reserve",
    category: "forest",
    subcategory: "tiger-reserve",
    coordinates: { lat: 10.35, lng: 76.93 },
    states: ["Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "A Western Ghats reserve in the Anamalai hills of Tamil Nadu, encompassing rainforest, shola-grassland and tea/coffee estate mosaics near Valparai.",
    importance:
      "UPSC angle: part of the Anamalai-Parambikulam-Periyar contiguous forest landscape in the Western Ghats biodiversity hotspot; habitat of the lion-tailed macaque and Nilgiri tahr.",
    tags: ["tiger-reserve", "western-ghats", "lion-tailed-macaque"],
  },

  // ---- Wildlife Sanctuaries ----
  {
    id: "mudumalai-wildlife-sanctuary",
    name: "Mudumalai Wildlife Sanctuary",
    category: "forest",
    subcategory: "wildlife-sanctuary",
    coordinates: { lat: 11.57, lng: 76.65 },
    states: ["Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "A Western Ghats sanctuary in the Nilgiri foothills of Tamil Nadu, contiguous with Bandipur and Wayanad, forming a major elephant and tiger corridor.",
    importance:
      "UPSC angle: Tamil Nadu's oldest wildlife sanctuary and a core part of the Nilgiri Biosphere Reserve, India's first biosphere reserve.",
    tags: ["western-ghats", "nilgiri-corridor", "elephant-corridor"],
  },
  {
    id: "wayanad-wildlife-sanctuary",
    name: "Wayanad Wildlife Sanctuary",
    category: "forest",
    subcategory: "wildlife-sanctuary",
    coordinates: { lat: 11.63, lng: 76.35 },
    states: ["Kerala"],
    region: "south",
    difficulty: "medium",
    description:
      "A Western Ghats sanctuary in Kerala's Wayanad district, contiguous with Bandipur, Nagarhole and Mudumalai, forming one of Asia's largest contiguous tiger habitats.",
    importance:
      "UPSC angle: key connectivity link within the Nilgiri Biosphere Reserve enabling large-scale elephant and tiger movement across Kerala, Karnataka and Tamil Nadu.",
    tags: ["western-ghats", "nilgiri-corridor", "elephant-corridor"],
  },
  {
    id: "pobitora-wildlife-sanctuary",
    name: "Pobitora Wildlife Sanctuary",
    category: "forest",
    subcategory: "wildlife-sanctuary",
    coordinates: { lat: 26.23, lng: 91.98 },
    states: ["Assam"],
    region: "northeast",
    difficulty: "medium",
    description:
      "A small floodplain sanctuary on the south bank of the Brahmaputra in Assam, often called 'Mini Kaziranga' for its rhino population.",
    importance:
      "UPSC angle: holds the highest density of one-horned rhinoceros of any protected area in the world, exceeding even Kaziranga on a per-area basis.",
    tags: ["one-horned-rhino", "brahmaputra", "floodplain"],
  },
  {
    id: "chandaka-wildlife-sanctuary",
    name: "Chandaka Wildlife Sanctuary",
    category: "forest",
    subcategory: "wildlife-sanctuary",
    coordinates: { lat: 20.35, lng: 85.65 },
    states: ["Odisha"],
    region: "east",
    difficulty: "medium",
    description:
      "A dry deciduous forest sanctuary bordering Bhubaneswar, Odisha, historically part of the Chandaka-Dampara elephant reserve.",
    importance:
      "UPSC angle: example of human-elephant conflict management in a peri-urban forest abutting a state capital; part of the Chandaka-Dampara Elephant Reserve.",
    tags: ["elephant", "human-wildlife-conflict"],
  },

  // ---- Biosphere Reserves ----
  {
    id: "nilgiri-biosphere-reserve",
    name: "Nilgiri Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 11.4, lng: 76.7 },
    states: ["Tamil Nadu", "Kerala", "Karnataka"],
    region: "south",
    difficulty: "medium",
    description:
      "India's largest biosphere reserve, spanning the tri-junction of Tamil Nadu, Kerala and Karnataka, and encompassing Mudumalai, Bandipur, Wayanad and Nagarhole.",
    importance:
      "UPSC angle: India's first Biosphere Reserve, declared in 1986; also included in UNESCO's World Network of Biosphere Reserves; a global biodiversity hotspot within the Western Ghats.",
    tags: ["first-biosphere-reserve", "western-ghats", "unesco-mab"],
  },
  {
    id: "nanda-devi-biosphere-reserve",
    name: "Nanda Devi Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 30.33, lng: 79.98 },
    states: ["Uttarakhand"],
    region: "north",
    difficulty: "hard",
    description:
      "A high-Himalayan biosphere reserve in Uttarakhand encircling Nanda Devi peak, encompassing the Nanda Devi National Park and the Valley of Flowers National Park.",
    importance:
      "UPSC angle: its core zone (Nanda Devi and Valley of Flowers National Parks) is a UNESCO World Heritage Site; part of UNESCO's Man and Biosphere Programme.",
    tags: ["unesco-whs", "unesco-mab", "western-himalaya", "nanda-devi"],
  },
  {
    id: "gulf-of-mannar-biosphere-reserve",
    name: "Gulf of Mannar Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 9.17, lng: 79.15 },
    states: ["Tamil Nadu"],
    region: "south",
    difficulty: "medium",
    description:
      "A marine and coastal biosphere reserve stretching from Rameswaram to Tuticorin along Tamil Nadu's coast, encompassing 21 islands, coral reefs and seagrass beds.",
    importance:
      "UPSC angle: the first marine Biosphere Reserve in South and Southeast Asia; critical habitat for the dugong (sea cow) and marine turtles.",
    tags: ["marine-biosphere", "coral-reef", "dugong"],
  },
  {
    id: "nokrek-biosphere-reserve",
    name: "Nokrek Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 25.47, lng: 90.43 },
    states: ["Meghalaya"],
    region: "northeast",
    difficulty: "hard",
    description:
      "A biosphere reserve in the Garo Hills of Meghalaya centred on Nokrek peak, harbouring red panda, Asian elephant and citrus germplasm.",
    importance:
      "UPSC angle: contains the Nokrek National Park's citrus gene sanctuary, believed to be the origin centre of wild memang narang, an ancestor of cultivated citrus species.",
    tags: ["garo-hills", "citrus-gene-sanctuary", "red-panda"],
  },
  {
    id: "achanakmar-amarkantak-biosphere-reserve",
    name: "Achanakmar-Amarkantak Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 22.3, lng: 81.75 },
    states: ["Madhya Pradesh", "Chhattisgarh"],
    region: "central",
    difficulty: "medium",
    description:
      "A Maikal hill-range biosphere reserve straddling Madhya Pradesh and Chhattisgarh around the Amarkantak plateau, the source region of the Narmada and Son rivers.",
    importance:
      "UPSC angle: encompasses the Amarkantak plateau, the common source of the west-flowing Narmada and east-flowing Son rivers, a frequently tested physiography fact.",
    tags: ["amarkantak", "narmada-source", "son-source", "maikal-hills"],
  },
  {
    id: "kachchh-biosphere-reserve",
    name: "Kachchh Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 23.5, lng: 69.8 },
    states: ["Gujarat"],
    region: "west",
    difficulty: "medium",
    description:
      "The largest biosphere reserve in India, covering the Kachchh peninsula's salt marshes, grasslands and mangroves, including the Rann of Kutch.",
    importance:
      "UPSC angle: largest Biosphere Reserve in India by area; includes the Great and Little Rann of Kutch, the Indian wild ass sanctuary, and Banni grasslands.",
    tags: ["rann-of-kutch", "wild-ass", "largest-biosphere-reserve"],
  },
  {
    id: "dibru-saikhowa-biosphere-reserve",
    name: "Dibru-Saikhowa Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 27.6, lng: 95.35 },
    states: ["Assam"],
    region: "northeast",
    difficulty: "hard",
    description:
      "A riverine biosphere reserve at the confluence of the Brahmaputra, Lohit and Dibru rivers in upper Assam, with swamp forests and grasslands.",
    importance:
      "UPSC angle: home to a unique population of feral horses descended from military stock, and a key wetland habitat for the white-winged wood duck.",
    tags: ["feral-horses", "brahmaputra", "wetland"],
  },
  {
    id: "pachmarhi-biosphere-reserve",
    name: "Pachmarhi Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 22.47, lng: 78.43 },
    states: ["Madhya Pradesh"],
    region: "central",
    difficulty: "medium",
    description:
      "A biosphere reserve in the Satpura range of Madhya Pradesh centred on the Pachmarhi hill station, encompassing Satpura and Bori sanctuaries.",
    importance:
      "UPSC angle: covers the highest point of the Satpura range (Dhupgarh); includes Satpura Tiger Reserve and Bori Wildlife Sanctuary within its core zone.",
    tags: ["satpura", "dhupgarh", "hill-station"],
  },
  {
    id: "agasthyamalai-biosphere-reserve",
    name: "Agasthyamalai Biosphere Reserve",
    category: "forest",
    subcategory: "biosphere-reserve",
    coordinates: { lat: 8.6, lng: 77.25 },
    states: ["Kerala", "Tamil Nadu"],
    region: "south",
    difficulty: "hard",
    description:
      "The southernmost extent of the Western Ghats biosphere reserve network, spanning the Agasthyamalai hills across Kerala and Tamil Nadu.",
    importance:
      "UPSC angle: forms the southern anchor of the Western Ghats biodiversity hotspot; connects Periyar and Kalakad-Mundanthurai Tiger Reserve landscapes; part of UNESCO's Man and Biosphere network.",
    tags: ["western-ghats", "unesco-mab", "biodiversity-hotspot"],
  },
];
