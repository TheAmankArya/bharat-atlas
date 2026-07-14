export const RIVER_LOCATIONS = [
  {
    id: "ganga",
    name: "Ganga",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 30.99, lng: 79.08 },
    states: ["Uttarakhand", "Uttar Pradesh", "Bihar", "Jharkhand", "West Bengal"],
    region: "north",
    difficulty: "easy",
    description: "Originates as the Bhagirathi at the Gangotri glacier (Gaumukh) in Uttarakhand, joined by the Alaknanda at Devprayag to form the Ganga proper, then flows across the north Indian plain through Uttar Pradesh, Bihar and West Bengal before draining into the Bay of Bengal via the Sundarbans delta (as the Padma/Hooghly distributaries).",
    importance: "UPSC angle: quintessential Himalayan, perennial, snow-and-glacier-fed river; forms the world's largest delta (Sundarbans) jointly with the Brahmaputra; subject of the Namami Gange mission and Ganga Action Plan for pollution abatement.",
    tags: ["gangotri", "sundarbans", "delta", "namami-gange"],
    path: [
      { lat: 30.99, lng: 79.08 }, // Gaumukh/Gangotri glacier — source
      { lat: 30.15, lng: 78.59 }, // Devprayag (Bhagirathi-Alaknanda confluence)
      { lat: 29.95, lng: 78.16 }, // Haridwar, exits the hills
      { lat: 25.43, lng: 81.85 }, // Prayagraj (Sangam with Yamuna)
      { lat: 25.32, lng: 83.01 }, // Varanasi
      { lat: 25.61, lng: 85.14 }, // Patna
      { lat: 24.8, lng: 87.9 }, // Farakka barrage
      { lat: 21.6, lng: 88.9 }, // Sundarbans delta, Bay of Bengal
    ],
  },
  {
    id: "yamuna",
    name: "Yamuna",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 31.01, lng: 78.45 },
    states: ["Uttarakhand", "Himachal Pradesh", "Haryana", "Delhi", "Uttar Pradesh"],
    region: "north",
    difficulty: "easy",
    description: "Rises at the Yamunotri glacier (Bandarpunch peak) in Uttarakhand and flows south through Himachal Pradesh, Haryana, Delhi and Uttar Pradesh, joining the Ganga at the Sangam in Prayagraj (Allahabad).",
    importance: "UPSC angle: largest tributary of the Ganga by length; the Sangam at Prayagraj (with the mythical Saraswati) is the site of the Kumbh Mela; Yamuna pollution around Delhi is a recurring environment-geography topic.",
    tags: ["yamunotri", "ganga-tributary", "prayagraj-sangam"],
    path: [
      { lat: 31.01, lng: 78.45 }, // Yamunotri glacier — source
      { lat: 30.43, lng: 77.63 }, // Paonta Sahib
      { lat: 28.6, lng: 77.23 }, // Delhi
      { lat: 27.5, lng: 77.67 }, // Mathura
      { lat: 27.18, lng: 78.02 }, // Agra
      { lat: 25.43, lng: 81.85 }, // Prayagraj, joins Ganga at the Sangam
    ],
  },
  {
    id: "brahmaputra",
    name: "Brahmaputra",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 28.15, lng: 94.8 },
    states: ["Arunachal Pradesh", "Assam"],
    region: "northeast",
    difficulty: "easy",
    description: "Rises as the Yarlung Tsangpo near the Angsi glacier in Tibet, enters India in Arunachal Pradesh (where it is called the Siang/Dihang), is joined by the Dibang and Lohit to become the Brahmaputra in Assam, and eventually merges with the Ganga in Bangladesh to form the Sundarbans delta.",
    importance: "UPSC angle: one of the few major rivers that is largely male-named; famous for a braided channel and Majuli, the world's largest river island; makes a dramatic U-turn (Namcha Barwa) before entering India; prone to devastating floods and bank erosion in Assam.",
    tags: ["yarlung-tsangpo", "majuli", "braided-channel", "flood-prone"],
    path: [
      { lat: 30.4, lng: 82.0 }, // Angsi glacier, Tibet — source of the Yarlung Tsangpo
      { lat: 29.6, lng: 95.3 }, // Namcha Barwa, dramatic U-turn
      { lat: 28.15, lng: 94.8 }, // enters Arunachal Pradesh as the Siang/Dihang
      { lat: 27.48, lng: 94.9 }, // Dibrugarh, Assam
      { lat: 26.15, lng: 91.7 }, // Guwahati
      { lat: 26.02, lng: 89.98 }, // Dhubri, near India-Bangladesh border
      { lat: 23.8, lng: 90.4 }, // merges with the Ganga in Bangladesh
    ],
  },
  {
    id: "indus",
    name: "Indus",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 33.5, lng: 78.9 },
    states: ["Ladakh"],
    region: "north",
    difficulty: "easy",
    description: "Rises near Lake Mansarovar/Senge Khabab in Tibet, enters India in Ladakh flowing northwest between the Ladakh and Zanskar ranges, and continues into Pakistan where it is joined by the Punjab rivers before draining into the Arabian Sea.",
    importance: "UPSC angle: gives India its name and is the namesake of the Indus Valley Civilization; the Indus Waters Treaty (1960) with Pakistan governs its use along with the Sutlej, Beas, Ravi, Chenab and Jhelum; true source lies in Tibet, so the Ladakh stretch is used as the in-India anchor.",
    tags: ["indus-system", "indus-waters-treaty", "ladakh"],
    path: [
      { lat: 31.4, lng: 81.3 }, // Senge Khabab near Lake Mansarovar, Tibet — source
      { lat: 32.7, lng: 79.3 }, // enters Ladakh near Demchok
      { lat: 33.5, lng: 78.9 }, // Ladakh, between Ladakh and Zanskar ranges
      { lat: 34.15, lng: 77.58 }, // Leh
      { lat: 35.3, lng: 75.6 }, // Skardu, Pakistan
      { lat: 33.9, lng: 72.3 }, // Attock, joined by the Punjab rivers
      { lat: 24.75, lng: 67.6 }, // mouth near Thatta, Arabian Sea
    ],
  },
  {
    id: "sutlej",
    name: "Sutlej",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 31.2, lng: 78.9 },
    states: ["Himachal Pradesh", "Punjab"],
    region: "north",
    difficulty: "medium",
    description: "Originates at Rakas Lake near Lake Mansarovar in Tibet, enters India through Himachal Pradesh cutting a deep gorge, and flows through Punjab to join the Chenab in Pakistan as part of the Indus system.",
    importance: "UPSC angle: easternmost of the Indus tributaries and an antecedent river (older than the Himalaya, cutting across it); the Bhakra Nangal Dam is built on it, a classic multipurpose-project example.",
    tags: ["indus-system", "bhakra-nangal", "antecedent-river"],
    path: [
      { lat: 30.9, lng: 81.45 }, // Rakas Lake, Tibet — true source
      { lat: 31.85, lng: 78.75 }, // enters Himachal Pradesh near Shipki La
      { lat: 31.52, lng: 77.68 }, // Rampur/Kullu gorge
      { lat: 31.42, lng: 76.46 }, // Bhakra Nangal Dam
      { lat: 30.97, lng: 76.53 }, // Rupnagar (Ropar)
      { lat: 30.9, lng: 75.85 }, // near Ludhiana
      { lat: 30.93, lng: 74.6 }, // Ferozepur
      { lat: 29.3, lng: 71.1 }, // joins the Chenab (Panjnad), Pakistan
    ],
  },
  {
    id: "beas",
    name: "Beas",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 32.36, lng: 77.1 },
    states: ["Himachal Pradesh", "Punjab"],
    region: "north",
    difficulty: "medium",
    description: "Rises near the Rohtang Pass (Beas Kund) in the Himalayas of Himachal Pradesh and flows through the Kullu valley into Punjab, where it joins the Sutlej near Harike.",
    importance: "UPSC angle: entirely an Indian river among the Indus system tributaries (unlike Sutlej/Chenab/Jhelum which flow into Pakistan); marked the eastern limit of Alexander's invasion of India in 326 BCE; Pong Dam is built on it.",
    tags: ["indus-system", "rohtang-pass", "pong-dam"],
    path: [
      { lat: 32.36, lng: 77.1 }, // Beas Kund near Rohtang Pass — source
      { lat: 31.96, lng: 77.11 }, // Kullu valley
      { lat: 31.71, lng: 76.93 }, // Mandi (Pong Dam area)
      { lat: 31.7, lng: 75.6 }, // enters Punjab plains
      { lat: 31.17, lng: 74.95 }, // Harike, joins the Sutlej
    ],
  },
  {
    id: "ravi",
    name: "Ravi",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 32.75, lng: 76.62 },
    states: ["Himachal Pradesh", "Punjab"],
    region: "north",
    difficulty: "medium",
    description: "Rises near the Rohtang Pass in the Dhauladhar range of Himachal Pradesh and flows through Punjab along part of the India-Pakistan border before joining the Chenab in Pakistan.",
    importance: "UPSC angle: smallest of the Indus system's Punjab rivers allocated to India under the Indus Waters Treaty; the Thein (Ranjit Sagar) Dam is built on it near the India-Pakistan border.",
    tags: ["indus-system", "ranjit-sagar-dam", "dhauladhar"],
    path: [
      { lat: 32.75, lng: 76.62 }, // Dhauladhar range near Rohtang — source
      { lat: 32.56, lng: 76.13 }, // Chamba
      { lat: 32.5, lng: 75.75 }, // Ranjit Sagar (Thein) Dam
      { lat: 32.28, lng: 75.65 }, // Pathankot
      { lat: 31.8, lng: 74.8 }, // along the India-Pakistan border near Amritsar
      { lat: 30.9, lng: 71.8 }, // joins the Chenab, Pakistan
    ],
  },
  {
    id: "chenab",
    name: "Chenab",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 32.9, lng: 77.05 },
    states: ["Himachal Pradesh", "Jammu and Kashmir"],
    region: "north",
    difficulty: "medium",
    description: "Formed by the union of the Chandra and Bhaga streams near Tandi in Himachal Pradesh (hence 'Chandrabhaga'), it flows through Jammu and Kashmir into Pakistan where it later merges with the Sutlej.",
    importance: "UPSC angle: largest of the Indus tributaries by volume among the Punjab rivers; the Salal, Baglihar and Chenab (world's highest) rail bridges/dams are frequently referenced infrastructure projects.",
    tags: ["indus-system", "chandra-bhaga", "baglihar-dam"],
    path: [
      { lat: 32.9, lng: 77.05 }, // Tandi, confluence of Chandra and Bhaga — source
      { lat: 33.31, lng: 75.77 }, // Kishtwar, Jammu and Kashmir
      { lat: 32.87, lng: 74.73 }, // Akhnoor
      { lat: 32.5, lng: 74.53 }, // Sialkot area, Pakistan
      { lat: 29.3, lng: 70.9 }, // merges with the Sutlej (Panjnad), Pakistan
    ],
  },
  {
    id: "jhelum",
    name: "Jhelum",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 34.08, lng: 75.15 },
    states: ["Jammu and Kashmir"],
    region: "north",
    difficulty: "medium",
    description: "Rises from the Verinag spring at the foot of the Pir Panjal range in the Kashmir Valley, flows through Srinagar and the Wular Lake, then enters Pakistan-administered territory to eventually join the Chenab.",
    importance: "UPSC angle: the ancient Vitasta/Hydaspes river, site of Alexander's battle with Porus; Wular Lake (India's largest freshwater lake) lies along its course, relevant to wetland-geography questions.",
    tags: ["indus-system", "wular-lake", "kashmir-valley"],
    path: [
      { lat: 33.7, lng: 75.15 }, // Verinag spring, Pir Panjal foothills — source
      { lat: 34.08, lng: 75.15 }, // Anantnag stretch
      { lat: 34.08, lng: 74.8 }, // Srinagar
      { lat: 34.36, lng: 74.57 }, // Wular Lake
      { lat: 34.0, lng: 73.9 }, // Baramulla
      { lat: 31.2, lng: 72.1 }, // joins the Chenab, Pakistan-administered territory
    ],
  },
  {
    id: "godavari",
    name: "Godavari",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 19.93, lng: 73.75 },
    states: ["Maharashtra", "Telangana", "Chhattisgarh", "Andhra Pradesh"],
    region: "west",
    difficulty: "easy",
    description: "Rises at Trimbakeshwar near Nashik in the Western Ghats, Maharashtra, and flows southeast across the Deccan Plateau through Telangana and Andhra Pradesh, forming a large delta before draining into the Bay of Bengal.",
    importance: "UPSC angle: called the 'Dakshin Ganga' (Ganga of the South); the longest peninsular river and second-longest in India; major hydro/irrigation projects include the Polavaram project, a long-standing Andhra Pradesh-Telangana interstate issue.",
    tags: ["east-flowing", "dakshin-ganga", "polavaram", "delta"],
    path: [
      { lat: 19.93, lng: 73.75 }, // Trimbakeshwar, Western Ghats — source
      { lat: 19.99, lng: 73.79 }, // Nashik
      { lat: 19.15, lng: 77.32 }, // Nanded
      { lat: 18.98, lng: 78.3 }, // Basar, Telangana
      { lat: 17.0, lng: 81.78 }, // Rajahmundry
      { lat: 16.7, lng: 82.3 }, // Godavari delta, Bay of Bengal
    ],
  },
  {
    id: "krishna",
    name: "Krishna",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 17.98, lng: 73.68 },
    states: ["Maharashtra", "Karnataka", "Telangana", "Andhra Pradesh"],
    region: "west",
    difficulty: "easy",
    description: "Originates near Mahabaleshwar in the Western Ghats, Maharashtra, and flows east across the Deccan Plateau through Karnataka, Telangana and Andhra Pradesh, forming a delta before draining into the Bay of Bengal.",
    importance: "UPSC angle: second-longest peninsular river; major tributaries include the Tungabhadra and Bhima; the Krishna Water Disputes Tribunal governs sharing among Maharashtra, Karnataka, Telangana and Andhra Pradesh, a frequent interstate-dispute reference.",
    tags: ["east-flowing", "mahabaleshwar", "krishna-water-dispute"],
    path: [
      { lat: 17.98, lng: 73.68 }, // Mahabaleshwar, Western Ghats — source
      { lat: 16.85, lng: 74.57 }, // Sangli
      { lat: 16.33, lng: 75.88 }, // Almatti, Karnataka
      { lat: 16.08, lng: 78.87 }, // Srisailam, Telangana-AP border
      { lat: 16.51, lng: 80.62 }, // Vijayawada
      { lat: 15.8, lng: 81.1 }, // Krishna delta, Bay of Bengal
    ],
  },
  {
    id: "kaveri",
    name: "Kaveri (Cauvery)",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 12.42, lng: 75.5 },
    states: ["Karnataka", "Tamil Nadu"],
    region: "south",
    difficulty: "easy",
    description: "Rises at Talakaveri on the Brahmagiri range in Kodagu (Coorg), Karnataka, and flows southeast through Karnataka and Tamil Nadu, forming the Shivanasamudra falls en route before draining into the Bay of Bengal through a delta known as the 'Garden of Southern India'.",
    importance: "UPSC angle: at the centre of the long-running Cauvery Water Disputes Tribunal dispute between Karnataka and Tamil Nadu; supports the fertile Thanjavur delta ('rice bowl'); Shivanasamudra was among Asia's earliest hydroelectric sites.",
    tags: ["east-flowing", "talakaveri", "cauvery-water-dispute", "delta"],
    path: [
      { lat: 12.42, lng: 75.5 }, // Talakaveri, Brahmagiri range — source
      { lat: 12.42, lng: 76.57 }, // Krishnaraja Sagar Dam
      { lat: 12.42, lng: 76.7 }, // Srirangapatna
      { lat: 12.27, lng: 77.17 }, // Shivanasamudra Falls
      { lat: 11.34, lng: 77.71 }, // Erode, Tamil Nadu
      { lat: 10.79, lng: 79.14 }, // Thanjavur delta
      { lat: 11.13, lng: 79.85 }, // Bay of Bengal
    ],
  },
  {
    id: "narmada",
    name: "Narmada",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 22.62, lng: 81.59 },
    states: ["Madhya Pradesh", "Maharashtra", "Gujarat"],
    region: "central",
    difficulty: "easy",
    description: "Originates at Amarkantak in the Maikal Range (Madhya Pradesh) and flows west through a rift valley between the Vindhya and Satpura ranges, draining into the Arabian Sea via the Gulf of Khambhat near Bharuch.",
    importance: "UPSC angle: one of only a few major peninsular rivers flowing west (rift valley course, not a normal river valley); Sardar Sarovar Dam is built on it; forms the traditional boundary between North and South India.",
    tags: ["west-flowing", "rift-valley", "sardar-sarovar"],
    path: [
      { lat: 22.62, lng: 81.59 }, // Amarkantak, Maikal Range — source
      { lat: 23.17, lng: 79.95 }, // Jabalpur (Bhedaghat marble rocks)
      { lat: 22.75, lng: 77.72 }, // Hoshangabad
      { lat: 21.83, lng: 73.72 }, // Sardar Sarovar Dam
      { lat: 21.7, lng: 72.97 }, // Bharuch
      { lat: 21.6, lng: 72.6 }, // Gulf of Khambhat, Arabian Sea
    ],
  },
  {
    id: "tapi",
    name: "Tapi",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 21.35, lng: 78.15 },
    states: ["Madhya Pradesh", "Maharashtra", "Gujarat"],
    region: "central",
    difficulty: "easy",
    description: "Rises at Multai in the Satpura Range (Madhya Pradesh) and flows west, roughly parallel to and south of the Narmada, through a rift valley across Maharashtra and Gujarat to reach the Arabian Sea near Surat.",
    importance: "UPSC angle: second of the major west-flowing peninsular rivers alongside the Narmada, both occupying rift valleys between the Satpura and adjoining ranges; Ukai Dam on it is a key irrigation/hydel project for Gujarat.",
    tags: ["west-flowing", "rift-valley", "ukai-dam"],
    path: [
      { lat: 21.35, lng: 78.15 }, // Multai, Satpura Range — source
      { lat: 21.31, lng: 76.23 }, // Burhanpur
      { lat: 21.05, lng: 75.78 }, // Bhusawal, Maharashtra
      { lat: 21.25, lng: 73.58 }, // Ukai Dam, Gujarat
      { lat: 21.17, lng: 72.83 }, // Surat
      { lat: 21.1, lng: 72.6 }, // Arabian Sea
    ],
  },
  {
    id: "mahanadi",
    name: "Mahanadi",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 20.13, lng: 82.0 },
    states: ["Chhattisgarh", "Odisha"],
    region: "east",
    difficulty: "medium",
    description: "Rises in the highlands of the Satpura range near Sihawa in Chhattisgarh and flows southeast through Odisha, forming a wide delta before draining into the Bay of Bengal.",
    importance: "UPSC angle: known for severe flooding on the Odisha coast, mitigated by the Hirakud Dam (one of the world's longest earthen dams); the Mahanadi water-sharing dispute between Chhattisgarh and Odisha is a recurring current-affairs item.",
    tags: ["east-flowing", "hirakud-dam", "mahanadi-water-dispute", "delta"],
    path: [
      { lat: 20.13, lng: 82.0 }, // Sihawa, Satpura highlands — source
      { lat: 21.0, lng: 82.3 }, // Chhattisgarh plains near Raipur
      { lat: 21.53, lng: 83.85 }, // Hirakud Dam
      { lat: 20.47, lng: 85.88 }, // Cuttack
      { lat: 20.26, lng: 86.69 }, // Paradip, Bay of Bengal
    ],
  },
  {
    id: "damodar",
    name: "Damodar",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 23.85, lng: 85.15 },
    states: ["Jharkhand", "West Bengal"],
    region: "east",
    difficulty: "medium",
    description: "Rises on the Chota Nagpur Plateau near Tori in Jharkhand and flows east through the Jharkhand-West Bengal coalfield belt before joining the Hooghly (a Ganga distributary) south of Kolkata.",
    importance: "UPSC angle: historically called the 'Sorrow of Bengal' for its devastating floods, tamed by the Damodar Valley Corporation (DVC) multipurpose project, modelled on the USA's TVA; flows through India's most important coal-mining belt (Jharia, Raniganj).",
    tags: ["east-flowing", "damodar-valley-corporation", "sorrow-of-bengal", "coalfields"],
    path: [
      { lat: 23.85, lng: 85.15 }, // Tori, Chota Nagpur Plateau — source
      { lat: 23.67, lng: 86.15 }, // Bokaro
      { lat: 23.8, lng: 86.43 }, // Dhanbad/Jharia coalfields
      { lat: 23.52, lng: 87.32 }, // Durgapur
      { lat: 22.5, lng: 88.15 }, // joins the Hooghly, south of Kolkata
    ],
  },
  {
    id: "son",
    name: "Son",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 22.7, lng: 81.9 },
    states: ["Madhya Pradesh", "Chhattisgarh", "Uttar Pradesh", "Bihar"],
    region: "central",
    difficulty: "medium",
    description: "Rises near Amarkantak in the Maikal Range (close to the Narmada's source) and flows northeast across Madhya Pradesh and Bihar before joining the Ganga near Patna.",
    importance: "UPSC angle: major south-bank (peninsular-origin) tributary of the Ganga, illustrating that not all Ganga tributaries are Himalayan; the Indrapuri barrage and Bansagar Dam are important irrigation works on it.",
    tags: ["east-flowing", "ganga-tributary", "amarkantak", "bansagar-dam"],
    path: [
      { lat: 22.7, lng: 81.9 }, // Amarkantak, Maikal Range — source
      { lat: 24.19, lng: 81.05 }, // Bansagar Dam
      { lat: 24.53, lng: 81.3 }, // Rewa area
      { lat: 24.85, lng: 84.0 }, // Rohtas, Bihar
      { lat: 24.9, lng: 84.35 }, // Indrapuri barrage
      { lat: 25.55, lng: 84.9 }, // joins the Ganga near Patna
    ],
  },
  {
    id: "gandak",
    name: "Gandak",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 28.85, lng: 83.9 },
    states: ["Bihar"],
    region: "north",
    difficulty: "medium",
    description: "Formed by streams (Kali Gandaki and Trishuli) rising near the Nepal-Tibet border in the Himalaya, it enters Bihar as the Gandak and joins the Ganga near Patna (Sonpur).",
    importance: "UPSC angle: a snow-fed Himalayan tributary of the Ganga prone to frequent course changes and floods in the north Bihar plains; the Gandak Barrage at Valmiki Nagar is a major Indo-Nepal irrigation project.",
    tags: ["ganga-tributary", "gandak-barrage", "bihar-floods"],
    path: [
      { lat: 28.85, lng: 83.9 }, // Kali Gandaki/Trishuli headwaters, Nepal-Tibet border — source
      { lat: 27.5, lng: 84.2 }, // Narayani, Nepal-India border
      { lat: 27.5, lng: 84.13 }, // Gandak Barrage, Valmiki Nagar
      { lat: 26.5, lng: 84.9 }, // north Bihar plains
      { lat: 25.7, lng: 85.1 }, // Sonpur, joins the Ganga near Patna
    ],
  },
  {
    id: "kosi",
    name: "Kosi",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 27.9, lng: 87.2 },
    states: ["Bihar"],
    region: "north",
    difficulty: "medium",
    description: "Formed by seven Himalayan headstreams (Sapt Kosi) draining Nepal and Tibet including the Arun, it debouches onto the north Bihar plain and joins the Ganga near Kursela.",
    importance: "UPSC angle: notorious as the 'Sorrow of Bihar' for its extreme lateral channel-shifting and catastrophic floods (e.g. the 2008 Kosi flood) due to heavy silt load from the young Himalaya.",
    tags: ["ganga-tributary", "sorrow-of-bihar", "sapt-kosi", "flood-prone"],
    path: [
      { lat: 27.9, lng: 87.2 }, // Sapt Kosi headstreams, Nepal/Tibet — source
      { lat: 26.83, lng: 87.17 }, // Chatra, Nepal (gorge exit)
      { lat: 26.5, lng: 86.9 }, // Kosi Barrage, Bihar
      { lat: 25.88, lng: 86.6 }, // Saharsa, north Bihar plains
      { lat: 25.75, lng: 87.35 }, // Kursela, joins the Ganga
    ],
  },
  {
    id: "ghaghara",
    name: "Ghaghara",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 30.65, lng: 82.0 },
    states: ["Uttar Pradesh", "Bihar"],
    region: "north",
    difficulty: "medium",
    description: "Rises as the Karnali beyond the Great Himalayan Range in Tibet/Nepal, enters India as the Ghaghara (Gogra) through Uttar Pradesh and joins the Ganga near Chhapra in Bihar.",
    importance: "UPSC angle: one of the Ganga's largest tributaries by discharge, fed by both snowmelt and monsoon rain; the Sharda-Ghaghara link and border stretches with Nepal are noted in river-linking discussions.",
    tags: ["ganga-tributary", "karnali", "sharda-ghaghara-link"],
    path: [
      { lat: 30.65, lng: 82.0 }, // Karnali headwaters, Tibet — source
      { lat: 29.3, lng: 81.2 }, // Karnali gorge, Nepal
      { lat: 27.9, lng: 81.6 }, // enters Uttar Pradesh near Bahraich
      { lat: 26.8, lng: 82.2 }, // Ayodhya
      { lat: 25.78, lng: 84.75 }, // Chhapra, joins the Ganga
    ],
  },
  {
    id: "chambal",
    name: "Chambal",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 22.75, lng: 75.85 },
    states: ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
    region: "central",
    difficulty: "medium",
    description: "Rises near Mhow on the Malwa Plateau (Vindhya Range) in Madhya Pradesh and flows north through Rajasthan's badlands (famous for deep ravines) before joining the Yamuna in Uttar Pradesh.",
    importance: "UPSC angle: a peninsular-origin tributary of the Yamuna/Ganga system despite lying largely in north India, so it is classed as peninsular, not Himalayan; known for its ravines (dacoit terrain) and the National Chambal Sanctuary, a key gharial/river-dolphin habitat; Gandhi Sagar and Kota Barrage dams are on it.",
    tags: ["yamuna-tributary", "gandhi-sagar-dam", "national-chambal-sanctuary", "ravines"],
    path: [
      { lat: 22.75, lng: 75.85 }, // Mhow, Malwa Plateau — source
      { lat: 24.68, lng: 75.65 }, // Gandhi Sagar Dam
      { lat: 25.18, lng: 75.83 }, // Kota Barrage
      { lat: 26.7, lng: 77.9 }, // Rajasthan badlands/ravines near Dholpur
      { lat: 26.53, lng: 79.3 }, // joins the Yamuna, Uttar Pradesh
    ],
  },
  {
    id: "betwa",
    name: "Betwa",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 23.75, lng: 77.9 },
    states: ["Madhya Pradesh", "Uttar Pradesh"],
    region: "central",
    difficulty: "hard",
    description: "Rises near Kumhera in the Vindhya Range close to Bhopal, Madhya Pradesh, and flows northeast through Madhya Pradesh and Uttar Pradesh to join the Yamuna near Hamirpur.",
    importance: "UPSC angle: a peninsular tributary of the Yamuna, central to the Ken-Betwa Link Project, India's first river-interlinking project under the National Perspective Plan, aimed at transferring water to drought-prone Bundelkhand.",
    tags: ["yamuna-tributary", "ken-betwa-link", "bundelkhand"],
    path: [
      { lat: 23.75, lng: 77.9 }, // Kumhera, Vindhya Range near Bhopal — source
      { lat: 23.53, lng: 77.8 }, // Vidisha
      { lat: 25.35, lng: 78.64 }, // Orchha
      { lat: 25.45, lng: 78.58 }, // Jhansi, Bundelkhand
      { lat: 25.95, lng: 80.15 }, // Hamirpur, joins the Yamuna
    ],
  },
  {
    id: "luni",
    name: "Luni",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 26.48, lng: 73.1 },
    states: ["Rajasthan"],
    region: "west",
    difficulty: "medium",
    description: "Rises near Pushkar in the Aravalli Range, Rajasthan, and flows southwest through the Thar Desert, eventually dissipating into the marshy Rann of Kachchh without reaching the sea as a defined channel.",
    importance: "UPSC angle: a classic example of an inland/desert river system that does not drain into a sea (endorheic-like behaviour), unusual among India's named rivers; water becomes increasingly saline downstream, giving it the name 'Luni' (salt river).",
    tags: ["west-flowing", "thar-desert", "inland-drainage", "aravalli"],
    path: [
      { lat: 26.49, lng: 74.55 }, // Pushkar, Aravalli Range — source
      { lat: 26.28, lng: 73.85 }, // near Ajmer, entering the Thar Desert
      { lat: 26.48, lng: 73.1 }, // Pali/Jodhpur stretch
      { lat: 25.75, lng: 71.4 }, // Barmer, deep in the Thar
      { lat: 24.3, lng: 70.0 }, // dissipates in the Rann of Kachchh
    ],
  },
  {
    id: "sabarmati",
    name: "Sabarmati",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 24.65, lng: 73.3 },
    states: ["Rajasthan", "Gujarat"],
    region: "west",
    difficulty: "medium",
    description: "Rises in the Aravalli Range near Udaipur, Rajasthan, and flows southwest through Gujarat, past Ahmedabad, before draining into the Gulf of Khambhat in the Arabian Sea.",
    importance: "UPSC angle: known today for the Sabarmati Riverfront Development Project in Ahmedabad, an example of urban river-rejuvenation; historically associated with Gandhi's Sabarmati Ashram.",
    tags: ["west-flowing", "aravalli", "sabarmati-riverfront", "gulf-of-khambhat"],
    path: [
      { lat: 24.65, lng: 73.3 }, // Aravalli Range near Udaipur — source
      { lat: 23.85, lng: 73.15 }, // crosses into Gujarat
      { lat: 23.6, lng: 72.97 }, // Himmatnagar, Gujarat
      { lat: 23.03, lng: 72.58 }, // Ahmedabad riverfront
      { lat: 22.3, lng: 72.6 }, // Gulf of Khambhat, Arabian Sea
    ],
  },
  {
    id: "mahi",
    name: "Mahi",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 22.9, lng: 75.15 },
    states: ["Madhya Pradesh", "Rajasthan", "Gujarat"],
    region: "west",
    difficulty: "hard",
    description: "Rises in the Vindhya Range near Sardarpur in Madhya Pradesh, takes a distinctive loop through southern Rajasthan before re-entering Gujarat and draining into the Gulf of Khambhat in the Arabian Sea.",
    importance: "UPSC angle: one of the few peninsular rivers to flow west and to form a loop crossing three states (Madhya Pradesh, Rajasthan, Gujarat); the Wanakbori and Kadana dams are built on it.",
    tags: ["west-flowing", "kadana-dam", "gulf-of-khambhat"],
    path: [
      { lat: 22.9, lng: 75.15 }, // Sardarpur, Vindhya Range — source
      { lat: 23.55, lng: 74.43 }, // loop through Banswara, Rajasthan
      { lat: 23.3, lng: 73.75 }, // Kadana Dam, re-entering Gujarat
      { lat: 22.7, lng: 73.1 }, // Wanakbori Dam
      { lat: 22.25, lng: 72.75 }, // Gulf of Khambhat, Arabian Sea
    ],
  },
  {
    id: "periyar",
    name: "Periyar",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 9.9, lng: 77.15 },
    states: ["Tamil Nadu", "Kerala"],
    region: "south",
    difficulty: "hard",
    description: "Rises in the Sivagiri hills of the Western Ghats (Tamil Nadu-Kerala border) and flows west through the Periyar Wildlife Sanctuary and Idukki district, Kerala, before draining into the Arabian Sea near Kochi.",
    importance: "UPSC angle: the longest river of Kerala, called the 'lifeline of Kerala'; the Mullaperiyar Dam (a long-standing Tamil Nadu-Kerala interstate dispute) and Idukki Dam are located on it, along with the ecologically significant Periyar Tiger Reserve.",
    tags: ["west-flowing", "mullaperiyar-dispute", "periyar-tiger-reserve", "western-ghats"],
    path: [
      { lat: 9.9, lng: 77.15 }, // Sivagiri hills, Tamil Nadu-Kerala border — source
      { lat: 9.85, lng: 76.97 }, // Idukki Dam / Periyar Tiger Reserve
      { lat: 10.05, lng: 76.6 }, // through Idukki district
      { lat: 10.11, lng: 76.35 }, // Aluva
      { lat: 9.97, lng: 76.24 }, // Kochi, Arabian Sea
    ],
  },
  {
    id: "tungabhadra",
    name: "Tungabhadra",
    category: "river",
    subcategory: "peninsular-river",
    coordinates: { lat: 13.5, lng: 75.1 },
    states: ["Karnataka", "Andhra Pradesh"],
    region: "south",
    difficulty: "medium",
    description: "Formed by the confluence of the Tunga and Bhadra rivers, both rising in the Western Ghats of Karnataka, it flows east across the Deccan Plateau (past Hampi) to join the Krishna in Andhra Pradesh.",
    importance: "UPSC angle: the most important tributary of the Krishna; flows past the Vijayanagara-era ruins of Hampi (UNESCO World Heritage Site), linking physical geography with heritage/history questions; the Tungabhadra Dam serves irrigation across both riparian states.",
    tags: ["east-flowing", "krishna-tributary", "hampi", "tungabhadra-dam"],
    path: [
      { lat: 13.5, lng: 75.1 }, // confluence of Tunga and Bhadra, Western Ghats — source
      { lat: 15.27, lng: 76.33 }, // Tungabhadra Dam, Hospet
      { lat: 15.33, lng: 76.47 }, // Hampi
      { lat: 15.83, lng: 78.03 }, // Kurnool, Andhra Pradesh
      { lat: 16.51, lng: 78.9 }, // joins the Krishna
    ],
  },
  {
    id: "teesta",
    name: "Teesta",
    category: "river",
    subcategory: "himalayan-river",
    coordinates: { lat: 27.9, lng: 88.7 },
    states: ["Sikkim", "West Bengal"],
    region: "northeast",
    difficulty: "medium",
    description: "Rises from the Tso Lhamo/Zemu glacier region in northern Sikkim and flows south through Sikkim and North Bengal before joining the Brahmaputra (as the Jamuna) in Bangladesh.",
    importance: "UPSC angle: lifeline river of Sikkim with extensive hydropower development; the India-Bangladesh Teesta water-sharing treaty remains an unresolved and diplomatically sensitive issue, a frequently tested current-affairs and geography crossover topic.",
    tags: ["sikkim", "teesta-water-dispute", "hydropower"],
    path: [
      { lat: 27.9, lng: 88.7 }, // Tso Lhamo/Zemu glacier, north Sikkim — source
      { lat: 27.33, lng: 88.61 }, // Gangtok
      { lat: 26.72, lng: 88.72 }, // Siliguri/Jalpaiguri, North Bengal
      { lat: 26.3, lng: 88.9 }, // Bangladesh border
      { lat: 25.0, lng: 89.55 }, // joins the Brahmaputra (Jamuna), Bangladesh
    ],
  },
];
