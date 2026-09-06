const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '..', 'src', 'data', 'mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

const laptopProducts = `
  // ── LENOVO LAPTOPS ──
  {
    id: 'prod-lap001',
    name: 'Lenovo IdeaPad Slim 3 15IRH8 Intel Core i5-13420H 8GB RAM 512GB SSD 15.6" FHD Laptop',
    slug: 'lenovo-ideapad-slim-3-15irh8-i5-13420h',
    brand: 'Lenovo',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'budget-laptop',
    badge: 'Best Seller',
    regularPrice: 68000,
    discountPrice: 62000,
    discountPercentage: 9,
    rating: 4.5,
    reviewCount: 184,
    stockStatus: 'In Stock',
    stockCount: 45,
    isFeatured: true,
    laptopSegment: 'Student',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-13420H (Up to 4.6GHz, 8 Cores)',
      'RAM: 8GB DDR5 4800MHz | Storage: 512GB PCIe NVMe SSD',
      'Display: 15.6" FHD (1920x1080) IPS Anti-Glare 300 nits',
      'Battery: Up to 10 Hours | Weight: 1.63 kg',
      'Graphics: Intel UHD Graphics | OS: Windows 11 Home'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-13420H' },
        { label: 'Speed', value: 'Up to 4.6 GHz, 8 Cores, 12 Threads' },
        { label: 'Cache', value: '12MB Intel Smart Cache' }
      ],
      'Display': [
        { label: 'Size', value: '15.6 inches FHD (1920 x 1080)' },
        { label: 'Panel', value: 'IPS Anti-Glare, 300 nits' }
      ],
      'Memory & Storage': [
        { label: 'RAM', value: '8GB DDR5 4800MHz (1x 8GB, expandable to 16GB)' },
        { label: 'SSD', value: '512GB PCIe NVMe M.2 SSD' }
      ],
      'Connectivity': [
        { label: 'Wi-Fi', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Bluetooth', value: 'Bluetooth 5.1' },
        { label: 'Ports', value: '2x USB 3.2, 1x USB 2.0, 1x HDMI 1.4, 1x SD Card, 1x 3.5mm Audio, 1x USB-C' }
      ],
      'Battery': [
        { label: 'Capacity', value: '47Wh, 3-Cell' },
        { label: 'Life', value: 'Up to 10 hours' }
      ]
    },
    warranty: '1 Year Lenovo Official Warranty (Bangladesh)',
    emiAvailable: true,
    emiStartingBDT: 5167,
    reviews: [
      { id: 'rev-lap001-1', userName: 'Shakil Ahmed', rating: 5, date: '2024-07-10', comment: 'বাজেটের মধ্যে সেরা পারফরমেন্স। ভার্সিটির কাজ চমৎকারভাবে চলছে।', verifiedPurchase: true },
      { id: 'rev-lap001-2', userName: 'Nadia Islam', rating: 4, date: '2024-06-22', comment: 'Good build quality and fast storage. Recommended for students.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-03-01'
  },

  {
    id: 'prod-lap002',
    name: 'Lenovo LOQ 15IRH8 Intel Core i5-12450H RTX 3050 6GB 16GB RAM 512GB SSD 15.6" 144Hz Gaming Laptop',
    slug: 'lenovo-loq-15irh8-i5-12450h-rtx3050',
    brand: 'Lenovo',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'gaming-laptop',
    badge: 'Popular',
    regularPrice: 98000,
    discountPrice: 88500,
    discountPercentage: 10,
    rating: 4.6,
    reviewCount: 97,
    stockStatus: 'In Stock',
    stockCount: 22,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-12450H (Up to 4.4GHz, 8 Cores)',
      'RAM: 16GB DDR5 4800MHz | Storage: 512GB PCIe NVMe SSD',
      'Graphics: NVIDIA GeForce RTX 3050 6GB GDDR6 (95W TGP)',
      'Display: 15.6" FHD 144Hz IPS Anti-Glare Display',
      'Cooling: 4-Fan Thermal System with Dual-Channel Airflow'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-12450H' },
        { label: 'Speed', value: 'Up to 4.4 GHz, 8 Cores, 12 Threads' }
      ],
      'Display': [
        { label: 'Size', value: '15.6" FHD (1920x1080) 144Hz IPS' }
      ],
      'Graphics': [
        { label: 'GPU', value: 'NVIDIA GeForce RTX 3050 6GB GDDR6' },
        { label: 'TGP', value: '95W' }
      ],
      'Memory': [
        { label: 'RAM', value: '16GB DDR5 4800MHz' },
        { label: 'Storage', value: '512GB PCIe 4.0 NVMe M.2 SSD' }
      ]
    },
    warranty: '1 Year Lenovo Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 7375,
    reviews: [
      { id: 'rev-lap002-1', userName: 'Rifat Hasan', rating: 5, date: '2024-07-01', comment: 'অসাধারণ গেমিং পারফরম্যান্স। GTA V, Valorant ফুল সেটিংসে চলে।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-02-15'
  },

  {
    id: 'prod-lap003',
    name: 'Lenovo ThinkPad E14 Gen 5 Intel Core i5-1335U 8GB RAM 256GB SSD 14" FHD+ Business Laptop',
    slug: 'lenovo-thinkpad-e14-gen5-i5-1335u',
    brand: 'Lenovo',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'business-laptop',
    badge: 'New',
    regularPrice: 78000,
    discountPrice: 71500,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 63,
    stockStatus: 'In Stock',
    stockCount: 18,
    laptopSegment: 'Business',
    images: [
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-1335U (Up to 4.6GHz, 10 Cores)',
      'RAM: 8GB DDR4 3200MHz | Storage: 256GB PCIe NVMe SSD',
      'Display: 14" FHD+ (1920x1200) IPS 300 nits Anti-Glare',
      'MIL-STD-810H Military Grade Durability | Fingerprint Reader',
      'Battery: 45Wh, Up to 9.5 Hours | Weight: 1.54 kg'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-1335U (13th Gen)' },
        { label: 'Speed', value: 'Up to 4.6 GHz, 10 Cores, 12 Threads' }
      ],
      'Display': [
        { label: 'Size', value: '14.0 inches FHD+ (1920x1200) IPS' },
        { label: 'Brightness', value: '300 nits' }
      ],
      'Durability': [
        { label: 'Standard', value: 'MIL-STD-810H Military Tested' },
        { label: 'Tests', value: '12+ Durability Tests' }
      ],
      'Security': [
        { label: 'Fingerprint', value: 'Fingerprint Reader' },
        { label: 'Camera', value: '720p HD Camera with Privacy Shutter' }
      ]
    },
    warranty: '1 Year Lenovo Official Warranty (Bangladesh)',
    emiAvailable: true,
    emiStartingBDT: 5958,
    reviews: [
      { id: 'rev-lap003-1', userName: 'Ariful Islam', rating: 5, date: '2024-06-15', comment: 'অফিসের কাজের জন্য পারফেক্ট। ThinkPad কীবোর্ড অসাধারণ।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-01-20'
  },

  // ── DELL LAPTOPS ──
  {
    id: 'prod-lap004',
    name: 'Dell Inspiron 15 3520 Intel Core i5-1235U 8GB RAM 512GB SSD 15.6" FHD Anti-Glare Laptop',
    slug: 'dell-inspiron-15-3520-i5-1235u-512gb',
    brand: 'Dell',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'budget-laptop',
    badge: 'Best Seller',
    regularPrice: 65000,
    discountPrice: 59500,
    discountPercentage: 8,
    rating: 4.4,
    reviewCount: 211,
    stockStatus: 'In Stock',
    stockCount: 38,
    laptopSegment: 'Student',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-1235U (Up to 4.4GHz, 10 Cores)',
      'RAM: 8GB DDR4 3200MHz | Storage: 512GB PCIe NVMe SSD',
      'Display: 15.6" FHD (1920x1080) Anti-Glare WVA 250 nits',
      'Battery: 41WHr, Up to 8 Hours | Weight: 1.65 kg',
      'OS: Windows 11 Home SL | Backlit Keyboard'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-1235U (12th Gen)' },
        { label: 'Speed', value: 'Up to 4.4 GHz, 10 Cores, 12 Threads' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD (1920x1080) Anti-Glare WVA' },
        { label: 'Brightness', value: '250 nits' }
      ],
      'Memory': [
        { label: 'RAM', value: '8GB DDR4 3200MHz (1x DIMM slot free)' },
        { label: 'Storage', value: '512GB M.2 PCIe NVMe SSD' }
      ],
      'Connectivity': [
        { label: 'Wi-Fi', value: 'Wi-Fi 5 (802.11ac), 2x2' },
        { label: 'Bluetooth', value: 'Bluetooth 5.2' },
        { label: 'Ports', value: '2x USB 3.2, 1x USB 2.0, 1x HDMI 1.4, 1x SD Card, 1x USB-C 3.2' }
      ]
    },
    warranty: '1 Year Dell International Warranty',
    emiAvailable: true,
    emiStartingBDT: 4958,
    reviews: [
      { id: 'rev-lap004-1', userName: 'Saiful Islam', rating: 4, date: '2024-07-05', comment: 'ভালো বিল্ড কোয়ালিটি। ডেইলি ইউজের জন্য পারফেক্ট।', verifiedPurchase: true },
      { id: 'rev-lap004-2', userName: 'Ritu Akter', rating: 5, date: '2024-06-30', comment: 'Dell build quality is excellent. Running all office apps smoothly.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-03-10'
  },

  {
    id: 'prod-lap005',
    name: 'Dell G15 5530 Intel Core i7-13650HX RTX 4060 8GB 16GB RAM 512GB SSD 15.6" 165Hz Gaming Laptop',
    slug: 'dell-g15-5530-i7-13650hx-rtx4060',
    brand: 'Dell',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'gaming-laptop',
    badge: 'Hot',
    regularPrice: 135000,
    discountPrice: 122000,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 78,
    stockStatus: 'In Stock',
    stockCount: 15,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i7-13650HX (Up to 4.9GHz, 14 Cores)',
      'RAM: 16GB DDR5 4800MHz | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Graphics: NVIDIA GeForce RTX 4060 8GB GDDR6 (115W TGP)',
      'Display: 15.6" FHD 165Hz IPS Anti-Glare Display',
      'Thermals: Alienware Cryo-Tech Cooling Technology'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i7-13650HX (13th Gen)' },
        { label: 'Speed', value: 'Up to 4.9 GHz, 14 Cores, 20 Threads' }
      ],
      'Graphics': [
        { label: 'GPU', value: 'NVIDIA GeForce RTX 4060 8GB GDDR6' },
        { label: 'TGP', value: '115W' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD (1920x1080) 165Hz IPS' }
      ],
      'Memory': [
        { label: 'RAM', value: '16GB DDR5 4800MHz (Dual Channel)' },
        { label: 'Storage', value: '512GB PCIe 4.0 NVMe SSD' }
      ]
    },
    warranty: '1 Year Dell International Warranty',
    emiAvailable: true,
    emiStartingBDT: 10167,
    reviews: [
      { id: 'rev-lap005-1', userName: 'Touhid Ahmed', rating: 5, date: '2024-07-12', comment: 'RTX 4060 দিয়ে সব গেম দারুণ চলছে। Dell G15 এর কুলিং সিস্টেম অসাধারণ।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-04-01'
  },

  {
    id: 'prod-lap006',
    name: 'Dell XPS 13 9340 Intel Core Ultra 7 155H Intel Arc 16GB LPDDR5 512GB SSD 13.4" FHD+ Ultrabook',
    slug: 'dell-xps-13-9340-ultra7-155h',
    brand: 'Dell',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'premium-ultrabook',
    badge: 'New',
    regularPrice: 195000,
    discountPrice: 182000,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 31,
    stockStatus: 'In Stock',
    stockCount: 8,
    laptopSegment: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core Ultra 7 155H (Up to 4.8GHz, 16 Cores)',
      'RAM: 16GB LPDDR5x 6400MHz Soldered | Storage: 512GB PCIe 4.0 SSD',
      'Display: 13.4" FHD+ (1920x1200) 500 nits 60Hz Anti-Glare IPS',
      'Weight: Just 1.17 kg | Thickness: 15mm ultra-thin',
      'Battery: 55WHr, Up to 12 Hours | Thunderbolt 4 x2'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core Ultra 7 155H (Meteor Lake)' },
        { label: 'Speed', value: 'Up to 4.8 GHz, 16 Cores, 22 Threads' }
      ],
      'Display': [
        { label: 'Screen', value: '13.4" FHD+ (1920x1200) Anti-Glare IPS' },
        { label: 'Brightness', value: '500 nits peak' }
      ],
      'Portability': [
        { label: 'Weight', value: '1.17 kg' },
        { label: 'Thickness', value: '15mm' }
      ],
      'Connectivity': [
        { label: 'Ports', value: '2x Thunderbolt 4, 1x USB-A 3.2, 1x microSD, 1x 3.5mm' },
        { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' }
      ]
    },
    warranty: '1 Year Dell International Warranty + 1 Year Accidental Damage',
    emiAvailable: true,
    emiStartingBDT: 15167,
    reviews: [
      { id: 'rev-lap006-1', userName: 'Farhana Akter', rating: 5, date: '2024-06-20', comment: 'এত পাতলা ল্যাপটপে এত পাওয়ার! XPS এর বিল্ড কোয়ালিটি অনন্য।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-04-15'
  },

  // ── HP LAPTOPS ──
  {
    id: 'prod-lap007',
    name: 'HP Laptop 15s-fq5095TU Intel Core i3-1215U 8GB RAM 256GB SSD 15.6" FHD Laptop',
    slug: 'hp-laptop-15s-fq5095tu-i3-1215u',
    brand: 'HP',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'budget-laptop',
    badge: 'Best Seller',
    regularPrice: 48000,
    discountPrice: 44500,
    discountPercentage: 7,
    rating: 4.3,
    reviewCount: 342,
    stockStatus: 'In Stock',
    stockCount: 65,
    laptopSegment: 'Budget',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i3-1215U (Up to 4.4GHz, 6 Cores)',
      'RAM: 8GB DDR4 3200MHz | Storage: 256GB PCIe NVMe SSD',
      'Display: 15.6" FHD (1920x1080) Anti-Glare Micro-Edge IPS',
      'Battery: 41WHr, Up to 7.5 Hours | Weight: 1.69 kg',
      'OS: Windows 11 Home | HP Fast Charge (50% in 45 min)'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i3-1215U (12th Gen)' },
        { label: 'Speed', value: 'Up to 4.4 GHz, 6 Cores, 8 Threads' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD (1920x1080) Anti-Glare Micro-Edge' },
        { label: 'Panel', value: 'IPS, 250 nits' }
      ],
      'Memory': [
        { label: 'RAM', value: '8GB DDR4 3200MHz (1x DIMM)' },
        { label: 'Storage', value: '256GB PCIe NVMe M.2 SSD' }
      ],
      'Battery': [
        { label: 'Capacity', value: '41WHr' },
        { label: 'Fast Charge', value: '50% in 45 minutes' }
      ]
    },
    warranty: '1 Year HP International Warranty',
    emiAvailable: true,
    emiStartingBDT: 3708,
    reviews: [
      { id: 'rev-lap007-1', userName: 'Mahbuba Begum', rating: 4, date: '2024-07-08', comment: 'দাম অনুযায়ী পারফরমেন্স ভালো। HP এর বিল্ড মজবুত।', verifiedPurchase: true },
      { id: 'rev-lap007-2', userName: 'Imtiaz Ahmed', rating: 4, date: '2024-06-18', comment: 'Good for daily office and internet use. Battery backup is decent.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-01-10'
  },

  {
    id: 'prod-lap008',
    name: 'HP Victus 15-fa1105TX Intel Core i5-12500H RTX 2050 4GB 8GB RAM 512GB SSD 15.6" 144Hz Gaming Laptop',
    slug: 'hp-victus-15-fa1105tx-i5-12500h-rtx2050',
    brand: 'HP',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'gaming-laptop',
    badge: 'Popular',
    regularPrice: 88000,
    discountPrice: 80000,
    discountPercentage: 9,
    rating: 4.5,
    reviewCount: 119,
    stockStatus: 'In Stock',
    stockCount: 19,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-12500H (Up to 4.5GHz, 12 Cores)',
      'RAM: 8GB DDR5 4800MHz | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Graphics: NVIDIA GeForce RTX 2050 4GB GDDR6 (60W TGP)',
      'Display: 15.6" FHD 144Hz IPS Anti-Glare',
      'Battery: 70.9WHr | Omen Tempest Cooling Fan'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-12500H (12th Gen)' },
        { label: 'Speed', value: 'Up to 4.5 GHz, 12 Cores, 16 Threads' }
      ],
      'Graphics': [
        { label: 'GPU', value: 'NVIDIA GeForce RTX 2050 4GB GDDR6' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD 144Hz IPS Anti-Glare' }
      ],
      'Memory': [
        { label: 'RAM', value: '8GB DDR5 4800MHz' },
        { label: 'Storage', value: '512GB PCIe 4.0 NVMe SSD' }
      ]
    },
    warranty: '1 Year HP International Warranty',
    emiAvailable: true,
    emiStartingBDT: 6667,
    reviews: [
      { id: 'rev-lap008-1', userName: 'Rakib Hasan', rating: 5, date: '2024-06-25', comment: 'গেমিং ল্যাপটপের মধ্যে সেরা বাজেটে কিনেছি। HP Victus বেশ ভালো।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-02-20'
  },

  {
    id: 'prod-lap009',
    name: 'HP EliteBook 840 G10 Intel Core i7-1355U 16GB RAM 512GB SSD 14" WUXGA Business Laptop',
    slug: 'hp-elitebook-840-g10-i7-1355u',
    brand: 'HP',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'business-laptop',
    badge: 'Hot',
    regularPrice: 155000,
    discountPrice: 142000,
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 44,
    stockStatus: 'In Stock',
    stockCount: 10,
    laptopSegment: 'Business',
    images: [
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i7-1355U vPro (Up to 5.0GHz, 10 Cores)',
      'RAM: 16GB DDR5 5200MHz | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Display: 14" WUXGA (1920x1200) IPS AG Sure View Reflect 400 nits',
      'MIL-STD-810H Military Grade | HP Wolf Security',
      'Weight: 1.35 kg | HP Fast Charge (50% in 30 minutes)'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i7-1355U vPro (13th Gen)' },
        { label: 'Speed', value: 'Up to 5.0 GHz, 10 Cores' }
      ],
      'Display': [
        { label: 'Screen', value: '14" WUXGA (1920x1200) IPS Sure View' },
        { label: 'Brightness', value: '400 nits' }
      ],
      'Security': [
        { label: 'Fingerprint', value: 'Fingerprint Reader + IR Camera' },
        { label: 'Software', value: 'HP Wolf Security Pro' },
        { label: 'Standard', value: 'MIL-STD-810H' }
      ]
    },
    warranty: '3 Years HP International Onsite Warranty',
    emiAvailable: true,
    emiStartingBDT: 11833,
    reviews: [
      { id: 'rev-lap009-1', userName: 'Kamrul Hasan', rating: 5, date: '2024-06-10', comment: 'বিজনেস ল্যাপটপের মধ্যে একটু দাম বেশি কিন্তু ৩ বছরের ওয়ারেন্টি যুক্তিসঙ্গত।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-01-25'
  },

  // ── ASUS LAPTOPS ──
  {
    id: 'prod-lap010',
    name: 'ASUS VivoBook 15 X1504VA Intel Core i5-1335U 16GB RAM 512GB SSD 15.6" FHD OLED Laptop',
    slug: 'asus-vivobook-15-x1504va-i5-1335u-oled',
    brand: 'Asus',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'premium-ultrabook',
    badge: 'Best Seller',
    regularPrice: 79000,
    discountPrice: 71500,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 156,
    stockStatus: 'In Stock',
    stockCount: 30,
    laptopSegment: 'Creator',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-1335U (Up to 4.6GHz, 10 Cores)',
      'RAM: 16GB DDR4 3200MHz | Storage: 512GB PCIe NVMe SSD',
      'Display: 15.6" FHD (1920x1080) OLED 600 nits 100% DCI-P3',
      'ASUS NumberPad 2.0 & Fingerprint Sensor',
      'Battery: 50WHr, Fast Charge (50% in 49 min)'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-1335U (13th Gen)' },
        { label: 'Speed', value: 'Up to 4.6 GHz, 10 Cores, 12 Threads' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD OLED (1920x1080)' },
        { label: 'Brightness', value: '600 nits peak, 100% DCI-P3' }
      ],
      'Memory': [
        { label: 'RAM', value: '16GB DDR4 3200MHz (8GB Onboard + 8GB SO-DIMM)' },
        { label: 'Storage', value: '512GB PCIe 3.0 NVMe M.2 SSD' }
      ]
    },
    warranty: '1 Year ASUS Official Warranty (Bangladesh)',
    emiAvailable: true,
    emiStartingBDT: 5958,
    reviews: [
      { id: 'rev-lap010-1', userName: 'Sadia Rahman', rating: 5, date: '2024-07-14', comment: 'OLED ডিসপ্লে দেখতে অসাধারণ। ছবি ও ভিডিও এডিটিং এ চমৎকার কালার।', verifiedPurchase: true },
      { id: 'rev-lap010-2', userName: 'Sabbir Mia', rating: 4, date: '2024-06-28', comment: 'Good value for OLED screen. Build quality excellent.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-02-05'
  },

  {
    id: 'prod-lap011',
    name: 'ASUS TUF Gaming F15 FX507ZC4 Intel Core i5-12500H RTX 3050 4GB 16GB RAM 512GB SSD 15.6" 144Hz',
    slug: 'asus-tuf-gaming-f15-fx507zc4-i5-12500h-rtx3050',
    brand: 'Asus',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'gaming-laptop',
    badge: 'Hot',
    regularPrice: 92000,
    discountPrice: 84000,
    discountPercentage: 9,
    rating: 4.6,
    reviewCount: 203,
    stockStatus: 'In Stock',
    stockCount: 28,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-12500H (Up to 4.5GHz, 12 Cores)',
      'RAM: 16GB DDR5 4800MHz | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 (95W TGP)',
      'Display: 15.6" FHD 144Hz IPS-Level Anti-Glare',
      'MIL-STD-810H Certified | Anti-Dust Tunnel Cooling'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-12500H (12th Gen)' },
        { label: 'Speed', value: 'Up to 4.5 GHz, 12 Cores, 16 Threads' }
      ],
      'Graphics': [
        { label: 'GPU', value: 'NVIDIA GeForce RTX 3050 4GB GDDR6' },
        { label: 'TGP', value: '95W (with Dynamic Boost)' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD 144Hz IPS-Level Anti-Glare' }
      ],
      'Durability': [
        { label: 'Standard', value: 'MIL-STD-810H Military Tested' }
      ]
    },
    warranty: '1 Year ASUS Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 7000,
    reviews: [
      { id: 'rev-lap011-1', userName: 'Naim Islam', rating: 5, date: '2024-07-01', comment: 'TUF এর বিল্ড অসাধারণ। Gaming পারফরমেন্স দাম অনুযায়ী সেরা।', verifiedPurchase: true },
      { id: 'rev-lap011-2', userName: 'Parvez Ahmed', rating: 4, date: '2024-06-15', comment: 'Great gaming laptop. TUF gaming series never disappoints.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-01-30'
  },

  {
    id: 'prod-lap012',
    name: 'ASUS ZenBook 14 OLED UM3402YA AMD Ryzen 5 7530U 8GB RAM 512GB SSD 14" 2.8K OLED 90Hz Ultrabook',
    slug: 'asus-zenbook-14-oled-um3402ya-r5-7530u',
    brand: 'Asus',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'premium-ultrabook',
    badge: 'New',
    regularPrice: 95000,
    discountPrice: 86000,
    discountPercentage: 9,
    rating: 4.8,
    reviewCount: 87,
    stockStatus: 'In Stock',
    stockCount: 16,
    laptopSegment: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: AMD Ryzen 5 7530U (Up to 4.5GHz, 6 Cores)',
      'RAM: 8GB LPDDR4x 4266MHz | Storage: 512GB PCIe NVMe SSD',
      'Display: 14" 2.8K (2880x1800) OLED 90Hz 550 nits 100% DCI-P3',
      'Weight: 1.39 kg | Battery: 75WHr (Up to 12 Hours)',
      'ErgoSense Keyboard | ASUS NumberPad 2.0'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'AMD Ryzen 5 7530U (Zen 3+)' },
        { label: 'Speed', value: 'Up to 4.5 GHz, 6 Cores, 12 Threads' }
      ],
      'Display': [
        { label: 'Screen', value: '14" 2.8K (2880x1800) OLED 90Hz' },
        { label: 'Color', value: '100% DCI-P3, 550 nits, VESA DisplayHDR True Black 500' }
      ],
      'Portability': [
        { label: 'Weight', value: '1.39 kg' },
        { label: 'Battery', value: '75WHr, Up to 12 hours' }
      ]
    },
    warranty: '1 Year ASUS Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 7167,
    reviews: [
      { id: 'rev-lap012-1', userName: 'Farida Sultana', rating: 5, date: '2024-06-08', comment: '2.8K OLED স্ক্রিন দেখে মুগ্ধ! ZenBook এর ডিজাইন চমৎকার।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-03-20'
  },

  // ── ACER LAPTOPS ──
  {
    id: 'prod-lap013',
    name: 'Acer Aspire 5 A515-58M Intel Core i5-1335U 8GB RAM 512GB SSD 15.6" FHD IPS Laptop',
    slug: 'acer-aspire-5-a515-58m-i5-1335u',
    brand: 'Acer',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'budget-laptop',
    badge: 'Best Seller',
    regularPrice: 65000,
    discountPrice: 58500,
    discountPercentage: 10,
    rating: 4.4,
    reviewCount: 278,
    stockStatus: 'In Stock',
    stockCount: 42,
    laptopSegment: 'Student',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-1335U (Up to 4.6GHz, 10 Cores)',
      'RAM: 8GB DDR5 4800MHz | Storage: 512GB PCIe NVMe SSD',
      'Display: 15.6" FHD (1920x1080) IPS 360 nits Anti-Glare',
      'Battery: 50WHr, Up to 8 Hours | Weight: 1.7 kg',
      'Fingerprint Reader | Wi-Fi 6 | Backlit Keyboard'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-1335U (13th Gen)' },
        { label: 'Speed', value: 'Up to 4.6 GHz, 10 Cores, 12 Threads' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD (1920x1080) IPS Anti-Glare' },
        { label: 'Brightness', value: '360 nits' }
      ],
      'Memory': [
        { label: 'RAM', value: '8GB DDR5 4800MHz (expandable to 16GB)' },
        { label: 'Storage', value: '512GB NVMe SSD' }
      ],
      'Connectivity': [
        { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Bluetooth', value: 'Bluetooth 5.2' }
      ]
    },
    warranty: '1 Year Acer International Warranty',
    emiAvailable: true,
    emiStartingBDT: 4875,
    reviews: [
      { id: 'rev-lap013-1', userName: 'Jobayed Hossain', rating: 5, date: '2024-07-09', comment: 'ইন্টারনেট, অফিস, ছোট কাজের জন্য দারুণ। Wi-Fi 6 এর স্পিড ভালো।', verifiedPurchase: true },
      { id: 'rev-lap013-2', userName: 'Sumi Akter', rating: 4, date: '2024-06-21', comment: 'Value for money. Acer Aspire 5 is a classic reliable choice.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-02-10'
  },

  {
    id: 'prod-lap014',
    name: 'Acer Predator Helios Neo 16 PHN16-71 Intel Core i7-13700HX RTX 4060 16GB RAM 512GB SSD 16" 165Hz',
    slug: 'acer-predator-helios-neo-16-phn16-71-i7-rtx4060',
    brand: 'Acer',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'gaming-laptop',
    badge: 'Hot',
    regularPrice: 138000,
    discountPrice: 125000,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 55,
    stockStatus: 'In Stock',
    stockCount: 12,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i7-13700HX (Up to 5.0GHz, 16 Cores)',
      'RAM: 16GB DDR5 4800MHz | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Graphics: NVIDIA GeForce RTX 4060 8GB GDDR6 (105W TGP)',
      'Display: 16" WUXGA 165Hz IPS Anti-Glare NVIDIA G-Sync',
      'Acer CoolBoost Quad-Fan Cooling Technology'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i7-13700HX (13th Gen)' },
        { label: 'Speed', value: 'Up to 5.0 GHz, 16 Cores, 24 Threads' }
      ],
      'Graphics': [
        { label: 'GPU', value: 'NVIDIA GeForce RTX 4060 8GB GDDR6' },
        { label: 'TGP', value: '105W + 25W Dynamic Boost' }
      ],
      'Display': [
        { label: 'Screen', value: '16" WUXGA (1920x1200) 165Hz IPS G-Sync' }
      ]
    },
    warranty: '1 Year Acer International Warranty',
    emiAvailable: true,
    emiStartingBDT: 10417,
    reviews: [
      { id: 'rev-lap014-1', userName: 'Rasel Ahmed', rating: 5, date: '2024-06-28', comment: 'Predator এর পারফরমেন্স অতুলনীয়। RTX 4060 দিয়ে সব AAA গেম খেলা যাচ্ছে।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-04-05'
  },

  // ── MSI LAPTOPS ──
  {
    id: 'prod-lap015',
    name: 'MSI Thin GF63 12VE Intel Core i5-12450H RTX 4050 6GB 16GB RAM 512GB SSD 15.6" 144Hz Gaming Laptop',
    slug: 'msi-thin-gf63-12ve-i5-12450h-rtx4050',
    brand: 'MSI',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'gaming-laptop',
    badge: 'Popular',
    regularPrice: 105000,
    discountPrice: 95000,
    discountPercentage: 10,
    rating: 4.5,
    reviewCount: 88,
    stockStatus: 'In Stock',
    stockCount: 14,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-12450H (Up to 4.4GHz, 8 Cores)',
      'RAM: 16GB DDR5 4800MHz | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Graphics: NVIDIA GeForce RTX 4050 6GB GDDR6 (95W TGP)',
      'Display: 15.6" FHD 144Hz IPS-Level Anti-Glare',
      'Weight: 1.86 kg | Per-Key RGB Backlit Keyboard'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-12450H (12th Gen)' }
      ],
      'Graphics': [
        { label: 'GPU', value: 'NVIDIA GeForce RTX 4050 6GB GDDR6' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD 144Hz IPS' }
      ],
      'Build': [
        { label: 'Weight', value: '1.86 kg (gaming ultraportable)' },
        { label: 'Keyboard', value: 'Per-Key RGB Backlit' }
      ]
    },
    warranty: '1 Year MSI Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 7917,
    reviews: [
      { id: 'rev-lap015-1', userName: 'Ishtiaque Rahman', rating: 5, date: '2024-07-02', comment: 'MSI Thin সত্যিই অনেক পাতলা এবং পারফরমেন্সও দারুণ। RTX 4050 গেমিংয়ে চমৎকার।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-03-15'
  },

  // ── APPLE MACBOOK ──
  {
    id: 'prod-lap016',
    name: 'Apple MacBook Air 13-inch M2 (8-Core CPU, 8-Core GPU, 8GB RAM, 256GB SSD) Midnight',
    slug: 'apple-macbook-air-13-m2-8gb-256gb-midnight',
    brand: 'Apple',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'macbook',
    badge: 'Best Seller',
    regularPrice: 145000,
    discountPrice: 135000,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 142,
    stockStatus: 'In Stock',
    stockCount: 20,
    isFeatured: true,
    laptopSegment: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Apple M2 Chip: 8-Core CPU + 8-Core GPU + 16-Core Neural Engine',
      '8GB Unified Memory | 256GB Superfast SSD',
      '13.6" Liquid Retina Display (2560x1664) 500 nits True Tone',
      'Up to 18 hours battery | MagSafe 3 Charging',
      'Fanless Silent Design | Weight: 1.24 kg | Midnight Color'
    ],
    specifications: {
      'Chip': [
        { label: 'Model', value: 'Apple M2 Chip' },
        { label: 'CPU', value: '8-Core (4 performance + 4 efficiency)' },
        { label: 'GPU', value: '8-Core' },
        { label: 'Neural Engine', value: '16-Core' }
      ],
      'Display': [
        { label: 'Screen', value: '13.6" Liquid Retina (2560x1664)' },
        { label: 'Brightness', value: '500 nits, True Tone, P3 Wide Color' }
      ],
      'Memory': [
        { label: 'RAM', value: '8GB Unified Memory' },
        { label: 'Storage', value: '256GB SSD' }
      ],
      'Battery': [
        { label: 'Life', value: 'Up to 18 hours video playback' },
        { label: 'Charging', value: 'MagSafe 3, USB-C' }
      ]
    },
    warranty: '1 Year Apple Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 11250,
    reviews: [
      { id: 'rev-lap016-1', userName: 'Tamanna Jahan', rating: 5, date: '2024-07-15', comment: 'MacBook Air M2 কিনে অনেক ভালো লাগছে। সারাদিন চার্জ না দিয়ে কাজ করা যায়।', verifiedPurchase: true },
      { id: 'rev-lap016-2', userName: 'Rezaul Karim', rating: 5, date: '2024-06-30', comment: 'Best ultrabook money can buy. M2 performance is incredible.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-01-05'
  },

  {
    id: 'prod-lap017',
    name: 'Apple MacBook Air 15-inch M3 (8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD) Space Gray',
    slug: 'apple-macbook-air-15-m3-16gb-512gb-space-gray',
    brand: 'Apple',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'macbook',
    badge: 'New',
    regularPrice: 215000,
    discountPrice: 199000,
    discountPercentage: 7,
    rating: 5.0,
    reviewCount: 48,
    stockStatus: 'In Stock',
    stockCount: 9,
    isFeatured: true,
    laptopSegment: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Apple M3 Chip: 8-Core CPU + 10-Core GPU + 16-Core Neural Engine',
      '16GB Unified Memory | 512GB Superfast SSD',
      '15.3" Liquid Retina Display (2880x1864) 500 nits True Tone',
      'Up to 18 hours battery | MagSafe 3 + 2x Thunderbolt 3',
      'Fanless Design | Weight: 1.51 kg'
    ],
    specifications: {
      'Chip': [
        { label: 'Model', value: 'Apple M3 Chip' },
        { label: 'CPU', value: '8-Core (4 performance + 4 efficiency)' },
        { label: 'GPU', value: '10-Core' }
      ],
      'Display': [
        { label: 'Screen', value: '15.3" Liquid Retina (2880x1864)' },
        { label: 'Brightness', value: '500 nits, True Tone' }
      ],
      'Memory': [
        { label: 'RAM', value: '16GB Unified Memory' },
        { label: 'Storage', value: '512GB SSD' }
      ]
    },
    warranty: '1 Year Apple Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 16583,
    reviews: [
      { id: 'rev-lap017-1', userName: 'Nilufar Ahmed', rating: 5, date: '2024-07-05', comment: '১৫ ইঞ্চি স্ক্রিনে MacBook Air - অপেক্ষার সার্থক। ভিডিও এডিটিং অনেক সহজ।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-04-10'
  },

  // ── SAMSUNG LAPTOP ──
  {
    id: 'prod-lap018',
    name: 'Samsung Galaxy Book4 Pro 360 Intel Core Ultra 7 155H 16GB RAM 512GB SSD 16" 3K AMOLED 120Hz 2-in-1',
    slug: 'samsung-galaxy-book4-pro-360-ultra7-16-3k-amoled',
    brand: 'Samsung',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'premium-ultrabook',
    badge: 'Hot',
    regularPrice: 195000,
    discountPrice: 180000,
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 36,
    stockStatus: 'In Stock',
    stockCount: 7,
    laptopSegment: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core Ultra 7 155H (Up to 4.8GHz, 16 Cores)',
      'RAM: 16GB LPDDR5x Onboard | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Display: 16" 3K (2880x1800) Dynamic AMOLED 2X 120Hz Touch',
      '2-in-1 360° Hinge | S Pen Included | Weight: 1.66 kg',
      'Galaxy AI | Samsung DeX | Wi-Fi 6E + Bluetooth 5.3'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core Ultra 7 155H (Meteor Lake)' },
        { label: 'Speed', value: 'Up to 4.8 GHz, 16 Cores' }
      ],
      'Display': [
        { label: 'Screen', value: '16" 3K (2880x1800) Dynamic AMOLED 2X' },
        { label: 'Refresh', value: '120Hz, Touch Enabled, 400 nits' }
      ],
      'Features': [
        { label: 'Form Factor', value: '2-in-1 (360° Hinge)' },
        { label: 'Pen', value: 'S Pen Included' },
        { label: 'AI', value: 'Galaxy AI Built-in' }
      ]
    },
    warranty: '1 Year Samsung Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 15000,
    reviews: [
      { id: 'rev-lap018-1', userName: 'Rubina Khatun', rating: 5, date: '2024-06-22', comment: 'AMOLED স্ক্রিনে 2-in-1 ফিচার অসাধারণ। S Pen দিয়ে নোট নেওয়া দারুণ।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-04-20'
  },

  // ── GIGABYTE LAPTOP ──
  {
    id: 'prod-lap019',
    name: 'Gigabyte G5 KF Intel Core i5-12500H RTX 4060 8GB 16GB RAM 512GB SSD 15.6" 144Hz Gaming Laptop',
    slug: 'gigabyte-g5-kf-i5-12500h-rtx4060',
    brand: 'Gigabyte',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'gaming-laptop',
    badge: 'Popular',
    regularPrice: 118000,
    discountPrice: 105000,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 67,
    stockStatus: 'In Stock',
    stockCount: 11,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i5-12500H (Up to 4.5GHz, 12 Cores)',
      'RAM: 16GB DDR5 4800MHz | Storage: 512GB PCIe 4.0 NVMe SSD',
      'Graphics: NVIDIA GeForce RTX 4060 8GB GDDR6 (115W TGP)',
      'Display: 15.6" FHD 144Hz IPS Anti-Glare',
      'Weight: 2.0 kg | RGB per-key Backlit Keyboard'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'Intel Core i5-12500H (12th Gen)' }
      ],
      'Graphics': [
        { label: 'GPU', value: 'NVIDIA GeForce RTX 4060 8GB GDDR6' },
        { label: 'TGP', value: '115W' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD 144Hz IPS' }
      ]
    },
    warranty: '1 Year Gigabyte Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 8750,
    reviews: [
      { id: 'rev-lap019-1', userName: 'Shahadath Islam', rating: 5, date: '2024-07-11', comment: 'Gigabyte G5 RTX 4060 দিয়ে দারুণ ফ্রেম রেট পাচ্ছি।', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-03-25'
  },

  // ── BUDGET RYZEN LAPTOP ──
  {
    id: 'prod-lap020',
    name: 'HP Laptop 15s-eq3041AU AMD Ryzen 5 5625U 8GB RAM 512GB SSD 15.6" FHD Laptop',
    slug: 'hp-laptop-15s-eq3041au-ryzen5-5625u',
    brand: 'HP',
    category: 'laptop',
    categoryName: 'Laptops',
    subcategory: 'budget-laptop',
    badge: 'Best Seller',
    regularPrice: 52000,
    discountPrice: 47500,
    discountPercentage: 9,
    rating: 4.4,
    reviewCount: 195,
    stockStatus: 'In Stock',
    stockCount: 55,
    laptopSegment: 'Budget',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: AMD Ryzen 5 5625U (Up to 4.3GHz, 6 Cores)',
      'RAM: 8GB DDR4 3200MHz | Storage: 512GB PCIe NVMe SSD',
      'Display: 15.6" FHD (1920x1080) IPS Anti-Glare 250 nits',
      'Graphics: AMD Radeon Graphics (Integrated)',
      'Battery: 41WHr, Up to 7.5 Hours | Wi-Fi 6 | Backlit Keyboard'
    ],
    specifications: {
      'Processor': [
        { label: 'Model', value: 'AMD Ryzen 5 5625U (Zen 3)' },
        { label: 'Speed', value: 'Up to 4.3 GHz, 6 Cores, 12 Threads' }
      ],
      'Display': [
        { label: 'Screen', value: '15.6" FHD (1920x1080) IPS Anti-Glare' }
      ],
      'Memory': [
        { label: 'RAM', value: '8GB DDR4 3200MHz (expandable)' },
        { label: 'Storage', value: '512GB PCIe NVMe SSD' }
      ]
    },
    warranty: '1 Year HP International Warranty',
    emiAvailable: true,
    emiStartingBDT: 3958,
    reviews: [
      { id: 'rev-lap020-1', userName: 'Kamrunnahar', rating: 4, date: '2024-07-03', comment: 'ঘরের কাজ, অনলাইন ক্লাস সব ঠিকঠাক চলছে। দামের তুলনায় ভালো।', verifiedPurchase: true },
      { id: 'rev-lap020-2', userName: 'Golam Rabbani', rating: 5, date: '2024-06-17', comment: 'AMD Ryzen 5625U is a powerhouse for everyday tasks. Great value.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-01-15'
  }
`;

// Find the BLOG_POSTS export to insert before it
const blogPostsIndex = content.indexOf('export const BLOG_POSTS');
if (blogPostsIndex === -1) {
  console.error('ERROR: Could not find export const BLOG_POSTS');
  process.exit(1);
}

// Find the ]; that closes the PRODUCTS array (just before BLOG_POSTS)
const productsEndIndex = content.lastIndexOf('];', blogPostsIndex);
if (productsEndIndex === -1) {
  console.error('ERROR: Could not find end of PRODUCTS array');
  process.exit(1);
}

// Insert the new laptop products before the closing ];
const newContent = content.slice(0, productsEndIndex) + ',' + laptopProducts + '\n' + content.slice(productsEndIndex);

fs.writeFileSync(mockDataPath, newContent, 'utf8');
console.log('Successfully added 20 laptop products to mockData.ts!');
