import type { Product, Category, Brand, BlogPost, StoreLocation, Coupon, Order } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'laptop', name: 'Laptops & Notebooks', nameBn: 'ল্যাপটপ ও নোটবুক', icon: 'Laptop', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop', itemCount: 142, popular: true },
  { id: 'desktop-pc', name: 'Desktop PCs', nameBn: 'ডেস্কটপ পিসি', icon: 'Monitor', image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=600&auto=format&fit=crop', itemCount: 89, popular: true },
  { id: 'gaming-pc', name: 'Gaming PC & Rig', nameBn: 'গেমিং পিসি ও রিগ', icon: 'Gamepad2', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600&auto=format&fit=crop', itemCount: 64, popular: true },
  { id: 'processor', name: 'Processors (CPU)', nameBn: 'প্রসেসর (সিপিইউ)', icon: 'Cpu', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=600&auto=format&fit=crop', itemCount: 45, popular: true },
  { id: 'graphics-card', name: 'Graphics Cards (GPU)', nameBn: 'গ্রাফিক্স কার্ড (জিপিইউ)', icon: 'CircuitBoard', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&auto=format&fit=crop', itemCount: 38, popular: true },
  { id: 'motherboard', name: 'Motherboards', nameBn: 'মাদারবোর্ড', icon: 'HardDrive', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', itemCount: 52 },
  { id: 'ram', name: 'RAM (Desktop & Laptop)', nameBn: 'র‌্যাম', icon: 'MemoryStick', image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=600&auto=format&fit=crop', itemCount: 67 },
  { id: 'storage', name: 'SSD & HDD Storage', nameBn: 'এসএসডি ও হার্ডডিস্ক', icon: 'Database', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=600&auto=format&fit=crop', itemCount: 74 },
  { id: 'monitor', name: 'Monitors & Displays', nameBn: 'মনিটর ও ডিসপ্লে', icon: 'Tv', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop', itemCount: 96, popular: true },
  { id: 'keyboard-mouse', name: 'Keyboards & Mice', nameBn: 'কীবোর্ড ও মাউস', icon: 'Keyboard', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop', itemCount: 110, popular: true },
  { id: 'headphone-audio', name: 'Headphones & Speakers', nameBn: 'হেডফোন ও অডিও', icon: 'Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop', itemCount: 85 },
  { id: 'networking', name: 'Routers & Networking', nameBn: 'রাউটার ও নেটওয়ার্কিং', icon: 'Wifi', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop', itemCount: 48 },
  { id: 'cctv-security', name: 'CCTV & Security', nameBn: 'সিসিটিভি ও সিকিউরিটি', icon: 'Camera', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop', itemCount: 53, popular: true },
  { id: 'tv-appliance', name: 'Smart TVs & Appliances', nameBn: 'স্মার্ট টিভি ও হোম অ্যাপ্লায়েন্স', icon: 'Tv2', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600&auto=format&fit=crop', itemCount: 61, popular: true },
  { id: 'air-conditioner', name: 'Air Conditioners (AC)', nameBn: 'এয়ার কন্ডিশনার (এসি)', icon: 'Wind', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop', itemCount: 29 },
  { id: 'accessories', name: 'Gadgets & Accessories', nameBn: 'গ্যাজেট ও এক্সেসরিজ', icon: 'Plug', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop', itemCount: 120 }
];

export const BRANDS: Brand[] = [
  { name: 'Asus', logo: 'https://cdn.worldvectorlogo.com/logos/asus-2.svg', category: 'Laptops, GPUs, Motherboards', popular: true },
  { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-13.svg', category: 'MacBooks, iPads, Watches', popular: true },
  { name: 'Dell', logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg', category: 'Laptops, Monitors, Servers', popular: true },
  { name: 'HP', logo: 'https://cdn.worldvectorlogo.com/logos/hp-2.svg', category: 'Laptops, Printers, Accessories', popular: true },
  { name: 'Lenovo', logo: 'https://cdn.worldvectorlogo.com/logos/lenovo-2.svg', category: 'Laptops, Gaming PCs', popular: true },
  { name: 'MSI', logo: 'https://cdn.worldvectorlogo.com/logos/msi-gaming.svg', category: 'Gaming Laptops, GPUs, Monitors', popular: true },
  { name: 'Gigabyte', logo: 'https://cdn.worldvectorlogo.com/logos/gigabyte-2.svg', category: 'Motherboards, GPUs', popular: true },
  { name: 'Intel', logo: 'https://cdn.worldvectorlogo.com/logos/intel-2.svg', category: 'Processors, SSDs', popular: true },
  { name: 'AMD', logo: 'https://cdn.worldvectorlogo.com/logos/amd-logo-1.svg', category: 'Processors, GPUs', popular: true },
  { name: 'Nvidia', logo: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg', category: 'Graphics Architecture', popular: true },
  { name: 'Corsair', logo: 'https://cdn.worldvectorlogo.com/logos/corsair-2.svg', category: 'RAM, Power Supplies, Coolers', popular: true },
  { name: 'Samsung', logo: 'https://cdn.worldvectorlogo.com/logos/samsung-4.svg', category: 'Monitors, SSDs, TVs', popular: true },
  { name: 'LG', logo: 'https://cdn.worldvectorlogo.com/logos/lg-electronics.svg', category: 'OLED TVs, Monitors, ACs', popular: true },
  { name: 'Sony', logo: 'https://cdn.worldvectorlogo.com/logos/sony-2.svg', category: 'Audio, TVs, Cameras', popular: true },
  { name: 'Hikvision', logo: 'https://cdn.worldvectorlogo.com/logos/hikvision.svg', category: 'CCTV Cameras, DVRs', popular: true },
  { name: 'Logitech', logo: 'https://cdn.worldvectorlogo.com/logos/logitech-2.svg', category: 'Keyboards, Mice, Webcams', popular: true },
  { name: 'TP-Link', logo: 'https://cdn.worldvectorlogo.com/logos/tp-link-2.svg', category: 'Routers, Switches', popular: true }
];

export const PRODUCTS: Product[] = [
  // 1. ROG Strix Gaming Laptop
  {
    id: 'prod-001',
    name: 'ASUS ROG Strix G16 (2024) Intel Core i9 14900HX RTX 4080 16" QHD+ 240Hz Gaming Laptop',
    slug: 'asus-rog-strix-g16-2024-i9-14900hx-rtx-4080',
    brand: 'Asus',
    category: 'laptop',
    categoryName: 'Laptops',
    badge: 'Hot',
    regularPrice: 345000,
    discountPrice: 319000,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 38,
    stockStatus: 'In Stock',
    stockCount: 12,
    isFeatured: true,
    isFlashSale: true,
    isGaming: true,
    laptopSegment: 'Gaming',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Processor: Intel Core i9-14900HX (Up to 5.8 GHz, 24 Cores)',
      'RAM: 32GB DDR5 5600MHz | Storage: 1TB PCIe 4.0 NVMe M.2 SSD',
      'Graphics: NVIDIA GeForce RTX 4080 12GB GDDR6 (175W TGP)',
      'Display: 16" QHD+ (2560 x 1600) 240Hz 3ms ROG Nebula Display',
      'Keyboard: Per-Key RGB Mechanical Switch Keyboard'
    ],
    specifications: {
      'Basic Info': [
        { label: 'Processor', value: 'Intel Core i9-14900HX' },
        { label: 'Display', value: '16.0-inch QHD+ 240Hz DCI-P3 100%' },
        { label: 'Memory', value: '32GB DDR5 RAM (Expandable up to 64GB)' },
        { label: 'Storage', value: '1TB M.2 NVMe PCIe 4.0 SSD' },
        { label: 'Graphics Card', value: 'NVIDIA GeForce RTX 4080 12GB' }
      ],
      'Connectivity': [
        { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax) Triple Band' },
        { label: 'Bluetooth', value: 'Bluetooth 5.3' },
        { label: 'Ports', value: '1x Thunderbolt 4, 1x USB-C 3.2 Gen2, 2x USB-A 3.2, 1x HDMI 2.1, 1x RJ45 LAN' }
      ],
      'Power & Battery': [
        { label: 'Battery', value: '90WHrs, 4-cell Li-ion' },
        { label: 'Adapter', value: '330W AC Adapter Fast Charging' }
      ]
    },
    warranty: '2 Years Asus International Warranty (1 Year Battery & Adapter)',
    emiAvailable: true,
    emiStartingBDT: 26583,
    reviews: [
      { id: 'rev-1', userName: 'Tanvir Ahmed', rating: 5, date: '2024-06-12', comment: 'Absolute monster performance! Plays Cyberpunk at ultra with ray tracing smoothly. Star Tech/My Computer delivery was super fast inside Dhaka.', verifiedPurchase: true },
      { id: 'rev-2', userName: 'Sabbir Hossain', rating: 5, date: '2024-05-20', comment: 'Great thermals with Tri-Fan technology. Premium feel and gorgeous screen.', verifiedPurchase: true }
    ],
    questions: [
      { id: 'q-1', userName: 'Rahim Chowdhury', question: 'Does it come with an official Asus carrying bag?', date: '2024-06-01', answer: 'Yes, it comes with an official ROG Gaming Backpack and ROG Impact Gaming Mouse inside the box.', answeredBy: 'My Computer Tech Team' }
    ],
    createdDate: '2024-01-15'
  },

  // 2. Apple MacBook Pro M3 Max
  {
    id: 'prod-002',
    name: 'Apple MacBook Pro 16-inch M3 Max (16-Core CPU, 40-Core GPU, 48GB Unified RAM, 1TB SSD) Space Black',
    slug: 'apple-macbook-pro-16-m3-max-space-black',
    brand: 'Apple',
    category: 'laptop',
    categoryName: 'Laptops',
    badge: 'New',
    regularPrice: 510000,
    discountPrice: 485000,
    discountPercentage: 5,
    rating: 5.0,
    reviewCount: 22,
    stockStatus: 'In Stock',
    stockCount: 5,
    isFeatured: true,
    isFlashSale: false,
    laptopSegment: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Apple M3 Max Chip with 16-core CPU & 40-core GPU',
      '48GB Unified Memory | 1TB Superfast SSD Storage',
      '16.2-inch Liquid Retina XDR Display (3456 x 2234) 120Hz ProMotion',
      'Up to 22 hours battery life | 140W USB-C Power Adapter',
      'Space Black finish with Anodization Seal to reduce fingerprints'
    ],
    specifications: {
      'Basic Info': [
        { label: 'Chipset', value: 'Apple M3 Max Chip' },
        { label: 'CPU Cores', value: '16 Cores (12 Performance + 4 Efficiency)' },
        { label: 'GPU Cores', value: '40 Cores Hardware-accelerated Ray Tracing' },
        { label: 'RAM', value: '48GB Unified Memory (400GB/s bandwidth)' },
        { label: 'Display', value: '16.2" Liquid Retina XDR, 1000 nits sustained' }
      ]
    },
    warranty: '1 Year Apple Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 40416,
    reviews: [
      { id: 'rev-3', userName: 'Mahmudur Rahman', rating: 5, date: '2024-06-18', comment: 'Rendering 8K video in Final Cut Pro without any fan noise. Apple silicon is unbelievable.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-02-01'
  },

  // 3. Intel Core i9 14900K CPU
  {
    id: 'prod-003',
    name: 'Intel 14th Gen Core i9-14900K Desktop Processor (36M Cache, up to 6.0 GHz)',
    slug: 'intel-14th-gen-core-i9-14900k-processor',
    brand: 'Intel',
    category: 'processor',
    categoryName: 'Processors',
    badge: 'Best Seller',
    regularPrice: 72000,
    discountPrice: 66500,
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 46,
    stockStatus: 'In Stock',
    stockCount: 25,
    isFeatured: true,
    pcBuilderCategory: 'cpu',
    wattage: 253,
    socketType: 'LGA1700',
    images: [
      'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '24 Cores (8 P-Cores + 16 E-Cores) & 32 Threads',
      'Max Turbo Frequency: Up to 6.0 GHz with Intel Thermal Velocity Boost',
      'Socket: LGA1700 | Cache: 36MB Intel Smart Cache',
      'Memory Support: DDR5-5600 & DDR4-3200',
      'Integrated Graphics: Intel UHD Graphics 770'
    ],
    specifications: {
      'Specifications': [
        { label: 'Socket', value: 'LGA1700' },
        { label: 'Base Clock', value: '3.2 GHz' },
        { label: 'Boost Clock', value: '6.0 GHz' },
        { label: 'TDP / Max Power', value: '125W Base / 253W Max Turbo' },
        { label: 'PCIe Lanes', value: 'PCIe 5.0 & 4.0 Support' }
      ]
    },
    warranty: '3 Years Official Replacement Warranty',
    emiAvailable: true,
    emiStartingBDT: 5541,
    reviews: [],
    questions: [],
    createdDate: '2024-01-10'
  },

  // 4. AMD Ryzen 7 7800X3D
  {
    id: 'prod-004',
    name: 'AMD Ryzen 7 7800X3D Gaming Processor (8 Cores, 16 Threads, 104MB Cache, up to 5.0 GHz)',
    slug: 'amd-ryzen-7-7800x3d-processor',
    brand: 'AMD',
    category: 'processor',
    categoryName: 'Processors',
    badge: 'Hot',
    regularPrice: 52000,
    discountPrice: 46900,
    discountPercentage: 10,
    rating: 5.0,
    reviewCount: 89,
    stockStatus: 'In Stock',
    stockCount: 18,
    isFeatured: true,
    isGaming: true,
    pcBuilderCategory: 'cpu',
    wattage: 120,
    socketType: 'AM5',
    images: [
      'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '8 Cores & 16 Threads with 3D V-Cache Technology',
      'Undisputed #1 Gaming CPU in the World',
      'Socket: AM5 | Total Cache: 104MB (L2+L3)',
      'TDP: 120W | PCIe 5.0 Support'
    ],
    specifications: {
      'Specs': [
        { label: 'Socket', value: 'AM5' },
        { label: 'Boost Clock', value: 'Up to 5.0 GHz' },
        { label: 'L3 Cache', value: '96MB 3D V-Cache' }
      ]
    },
    warranty: '3 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 3908,
    reviews: [],
    questions: [],
    createdDate: '2024-02-12'
  },

  // 5. ASUS ROG Strix GeForce RTX 4090 24GB GPU
  {
    id: 'prod-005',
    name: 'ASUS ROG Strix GeForce RTX 4090 OC Edition 24GB GDDR6X Graphics Card',
    slug: 'asus-rog-strix-rtx-4090-oc-24gb',
    brand: 'Asus',
    category: 'graphics-card',
    categoryName: 'Graphics Cards',
    badge: 'Hot',
    regularPrice: 285000,
    discountPrice: 265000,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 31,
    stockStatus: 'Limited Stock',
    stockCount: 4,
    isFeatured: true,
    isGaming: true,
    pcBuilderCategory: 'gpu',
    wattage: 450,
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'NVIDIA Ada Lovelace Architecture with 24GB GDDR6X 384-bit',
      'Boost Clock: 2640 MHz (OC Mode) / 2610 MHz (Default Mode)',
      'Axial-tech Fans scaled up for 23% more airflow',
      'Patented Vapor Chamber with milled heatsink for lower GPU temps',
      'Aura Sync ARGB lighting on shroud and ring'
    ],
    specifications: {
      'GPU Engine': [
        { label: 'CUDA Cores', value: '16384' },
        { label: 'Memory Size', value: '24GB GDDR6X' },
        { label: 'Recommended PSU', value: '1000W' }
      ]
    },
    warranty: '3 Years Replacement Warranty',
    emiAvailable: true,
    emiStartingBDT: 22083,
    reviews: [],
    questions: [],
    createdDate: '2024-01-05'
  },

  // 6. Gigabyte Z790 AORUS Elite AX Motherboard
  {
    id: 'prod-006',
    name: 'Gigabyte Z790 AORUS ELITE AX ICE LGA1700 DDR5 ATX Motherboard',
    slug: 'gigabyte-z790-aorus-elite-ax-ice',
    brand: 'Gigabyte',
    category: 'motherboard',
    categoryName: 'Motherboards',
    regularPrice: 38000,
    discountPrice: 34500,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 19,
    stockStatus: 'In Stock',
    stockCount: 15,
    pcBuilderCategory: 'motherboard',
    socketType: 'LGA1700',
    ramType: 'DDR5',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Supports Intel 14th/13th/12th Gen Core Processors (LGA1700)',
      '16+1+2 Twin Digital VRM Design with 70A Power Stage',
      'Dual Channel DDR5: 4*SMD DIMMs with XMP 3.0 Memory Module Support',
      'Wi-Fi 6E & 2.5GbE LAN | 4x PCIe 4.0 M.2 Connectors'
    ],
    specifications: {
      'Specs': [
        { label: 'Form Factor', value: 'ATX' },
        { label: 'Memory Slots', value: '4x DDR5 DIMM (Up to 7600MHz OC)' }
      ]
    },
    warranty: '3 Years Warranty',
    emiAvailable: true,
    emiStartingBDT: 2875,
    reviews: [],
    questions: [],
    createdDate: '2024-02-10'
  },

  // 7. Corsair Vengeance RGB 32GB DDR5 RAM
  {
    id: 'prod-007',
    name: 'Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz CL36 RAM Kit',
    slug: 'corsair-vengeance-rgb-32gb-ddr5-6000mhz',
    brand: 'Corsair',
    category: 'ram',
    categoryName: 'RAM',
    badge: 'Best Seller',
    regularPrice: 16500,
    discountPrice: 14800,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 63,
    stockStatus: 'In Stock',
    stockCount: 40,
    pcBuilderCategory: 'ram',
    ramType: 'DDR5',
    images: [
      'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Capacity: 32GB (2 x 16GB) | Speed: 6000MHz DDR5',
      'Dynamic Ten-Zone RGB Lighting with iCUE Software control',
      'Onboard Voltage Regulation & Custom Intel XMP 3.0 Profiles',
      'Solid Aluminum Heatspreader for superior cooling'
    ],
    specifications: {
      'Specs': [
        { label: 'Type', value: 'DDR5' },
        { label: 'Speed', value: '6000 MHz' },
        { label: 'Latency', value: 'CL36-36-36-76' }
      ]
    },
    warranty: 'Lifetime Product Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-01-20'
  },

  // 8. Samsung 990 PRO 2TB PCIe 4.0 M.2 NVMe SSD
  {
    id: 'prod-008',
    name: 'Samsung 990 PRO 2TB PCIe 4.0 M.2 NVMe Internal SSD (Read up to 7450 MB/s)',
    slug: 'samsung-990-pro-2tb-nvme-ssd',
    brand: 'Samsung',
    category: 'storage',
    categoryName: 'Storage',
    badge: 'Hot',
    regularPrice: 24000,
    discountPrice: 20900,
    discountPercentage: 13,
    rating: 5.0,
    reviewCount: 77,
    stockStatus: 'In Stock',
    stockCount: 30,
    pcBuilderCategory: 'storage',
    images: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Sequential Read: Up to 7450 MB/s | Write: Up to 6900 MB/s',
      'Interface: PCIe Gen 4.0 x4, NVMe 2.0',
      'Samsung V-NAND 3-bit MLC with Nickel-coated controller',
      'Ideal for heavy gaming, 3D editing, & PS5 expansion'
    ],
    specifications: {
      'Specs': [
        { label: 'Form Factor', value: 'M.2 (2280)' },
        { label: 'TBW Rating', value: '1200 TBW' }
      ]
    },
    warranty: '5 Years Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-01'
  },

  // 9. Corsair RM1000e 1000W ATX 3.0 Power Supply
  {
    id: 'prod-009',
    name: 'Corsair RM1000e 1000W 80 PLUS Gold Fully Modular ATX 3.0 Power Supply',
    slug: 'corsair-rm1000e-1000w-atx3-0-psu',
    brand: 'Corsair',
    category: 'accessories',
    categoryName: 'Power Supplies',
    regularPrice: 21500,
    discountPrice: 18900,
    discountPercentage: 12,
    rating: 4.8,
    reviewCount: 28,
    stockStatus: 'In Stock',
    stockCount: 16,
    pcBuilderCategory: 'psu',
    wattage: 1000,
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '1000W 80 PLUS Gold Certified Efficiency',
      'ATX 3.0 & PCIe 5.0 Ready (12VHPWR cable included)',
      'Zero RPM Fan Mode for near-silent operation at low loads',
      '105°C rated industrial-grade Japanese capacitors'
    ],
    specifications: {
      'Specs': [
        { label: 'Efficiency', value: '80 PLUS Gold' },
        { label: 'Modular', value: 'Full Modular' }
      ]
    },
    warranty: '7 Years Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-02-15'
  },

  // 10. Lian Li O11 Dynamic EVO Gaming Case
  {
    id: 'prod-010',
    name: 'Lian Li O11 Dynamic EVO Mid-Tower Tempered Glass Gaming Case (Black)',
    slug: 'lian-li-o11-dynamic-evo-case-black',
    brand: 'Corsair',
    category: 'accessories',
    categoryName: 'Casing',
    regularPrice: 20500,
    discountPrice: 18500,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 42,
    stockStatus: 'In Stock',
    stockCount: 10,
    pcBuilderCategory: 'case',
    images: [
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Reversible chassis design (Left / Right orientation)',
      'Dual-chamber layout with seamless glass front and side panels',
      'Supports up to 3x 360mm Radiators simultaneously',
      'Front I/O with USB 3.1 Type-C and ARGB strip control'
    ],
    specifications: {
      'Specs': [
        { label: 'Motherboard Support', value: 'E-ATX, ATX, Micro-ATX, Mini-ITX' }
      ]
    },
    warranty: '1 Year Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-01-25'
  },

  // 11. DeepCool LT720 360mm Liquid CPU Cooler
  {
    id: 'prod-011',
    name: 'DeepCool LT720 High-Performance 360mm Liquid CPU Cooler (Infinite Mirror Block)',
    slug: 'deepcool-lt720-360mm-liquid-cooler',
    brand: 'Asus',
    category: 'accessories',
    categoryName: 'CPU Coolers',
    regularPrice: 15500,
    discountPrice: 13900,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 35,
    stockStatus: 'In Stock',
    stockCount: 22,
    pcBuilderCategory: 'cooler',
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '4th Generation Pump with multidimensional infinity mirror block',
      '3x FK120 High-Performance FDB PWM Fans (Up to 2250 RPM)',
      'Anti-Leak Technology automatically balances internal pressure',
      'Supports Intel LGA1700/1200/115x & AMD AM5/AM4 sockets'
    ],
    specifications: {
      'Specs': [
        { label: 'Radiator Dimensions', value: '402 × 120 × 27 mm' }
      ]
    },
    warranty: '5 Years Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-02-05'
  },

  // 12. LG C3 55-inch 4K OLED Smart TV
  {
    id: 'prod-012',
    name: 'LG C3 55-inch 4K Smart OLED EVO TV (120Hz, G-Sync, Dolby Vision IQ & Atmos)',
    slug: 'lg-c3-55-inch-4k-oled-tv',
    brand: 'LG',
    category: 'tv-appliance',
    categoryName: 'Smart TVs',
    badge: 'Offer',
    regularPrice: 195000,
    discountPrice: 175000,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 18,
    stockStatus: 'In Stock',
    stockCount: 7,
    isFeatured: true,
    isSmartHome: true,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Self-lit OLED evo display with Brightness Booster',
      'alpha9 AI Processor Gen6 for ultra-realistic picture & sound',
      '4x HDMI 2.1 ports with 4K 120Hz, VRR, NVIDIA G-Sync & FreeSync Premium',
      'webOS 23 Smart TV with Magic Remote & Hands-free Voice Control'
    ],
    specifications: {
      'Display': [
        { label: 'Resolution', value: '4K Ultra HD (3840 x 2160)' },
        { label: 'Refresh Rate', value: '120Hz Native' },
        { label: 'HDR Tech', value: 'Dolby Vision / HDR10 / HLG' }
      ]
    },
    warranty: '2 Years Official Brand Warranty (Panel & Parts)',
    emiAvailable: true,
    emiStartingBDT: 14583,
    reviews: [],
    questions: [],
    createdDate: '2024-01-30'
  },

  // 13. Gree 1.5 Ton Inverter AC
  {
    id: 'prod-013',
    name: 'Gree 1.5 Ton Fairy Split Inverter Air Conditioner (GS-18XFV32) Cold Plasma',
    slug: 'gree-1-5-ton-fairy-inverter-ac',
    brand: 'Xiaomi',
    category: 'air-conditioner',
    categoryName: 'Air Conditioners',
    badge: 'Hot',
    regularPrice: 78000,
    discountPrice: 69900,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 54,
    stockStatus: 'In Stock',
    stockCount: 14,
    isSmartHome: true,
    isFlashSale: true,
    images: [
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Capacity: 18,000 BTU (1.5 Ton) | Suitable for 120-180 sq.ft room',
      'Inverter Technology saves up to 60% Electricity',
      'Cold Plasma Air Purifier technology kills bacteria & dust',
      'Gold Fin Condenser Coils for anticorrosion & fast cooling'
    ],
    specifications: {
      'Cooling': [
        { label: 'Refrigerant', value: 'R32 Eco Friendly' },
        { label: 'Compressor', value: 'Rotary Inverter Compressor' }
      ]
    },
    warranty: '10 Years Compressor Warranty, 1 Year Spare Parts',
    emiAvailable: true,
    emiStartingBDT: 5825,
    reviews: [],
    questions: [],
    createdDate: '2024-03-05'
  },

  // 14. Hikvision 4MP ColorVu CCTV Camera Kit
  {
    id: 'prod-014',
    name: 'Hikvision 4MP ColorVu Audio 4-Camera Full Security Package with 4CH DVR & 1TB HDD',
    slug: 'hikvision-4mp-colorvu-4-camera-cctv-package',
    brand: 'Hikvision',
    category: 'cctv-security',
    categoryName: 'CCTV & Security',
    badge: 'Best Seller',
    regularPrice: 22500,
    discountPrice: 18900,
    discountPercentage: 16,
    rating: 4.8,
    reviewCount: 92,
    stockStatus: 'In Stock',
    stockCount: 35,
    isSmartHome: true,
    images: [
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '24/7 Full Color Imaging with 4MP Super HD Resolution',
      'Built-in Microphone for High-Quality Audio Recording',
      '4 Channel Turbo HD DVR + 1TB Surveillance Hard Drive Included',
      'Hik-Connect App Mobile Remote Viewing anytime, anywhere'
    ],
    specifications: {
      'Specs': [
        { label: 'Resolution', value: '2560 × 1440 4MP' },
        { label: 'Night Vision', value: '20m Warm White Light ColorVu' }
      ]
    },
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-02-18'
  },

  // 15. Logitech G PRO X SUPERLIGHT 2 Gaming Mouse
  {
    id: 'prod-015',
    name: 'Logitech G PRO X SUPERLIGHT 2 Wireless Gaming Mouse (HERO 2 Sensor, 60g, 32K DPI) Magenta',
    slug: 'logitech-g-pro-x-superlight-2-wireless-mouse',
    brand: 'Logitech',
    category: 'keyboard-mouse',
    categoryName: 'Keyboards & Mice',
    badge: 'Hot',
    regularPrice: 18500,
    discountPrice: 16200,
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 51,
    stockStatus: 'In Stock',
    stockCount: 19,
    isGaming: true,
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Ultra-Lightweight 60 gram iconic design',
      'LIGHTFORCE Hybrid Optical-Mechanical Switches',
      'HERO 2 Sensor with sub-micron tracking & up to 32,000 DPI',
      '95 Hours Battery Life on a single USB-C charge'
    ],
    specifications: {
      'Specs': [
        { label: 'Polling Rate', value: '2000 Hz' }
      ]
    },
    warranty: '2 Years Replacement Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-01-18'
  },

  // 16. ASUS ROG Swift 360Hz Gaming Monitor
  {
    id: 'prod-016',
    name: 'ASUS ROG Swift PG27AQDM 27-inch 1440p 240Hz 0.03ms OLED Gaming Monitor',
    slug: 'asus-rog-swift-pg27aqdm-oled-gaming-monitor',
    brand: 'Asus',
    category: 'monitor',
    categoryName: 'Monitors',
    badge: 'Hot',
    regularPrice: 135000,
    discountPrice: 124000,
    discountPercentage: 8,
    rating: 5.0,
    reviewCount: 24,
    stockStatus: 'In Stock',
    stockCount: 6,
    isFeatured: true,
    isGaming: true,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '27-inch QHD (2560 x 1440) OLED gaming panel',
      '240Hz Refresh Rate & ultra-fast 0.03ms GTG response time',
      'Custom Heatsink & Intelligent Voltage Optimization for OLED protection',
      '99% DCI-P3 gamut, Delta E < 2 for true deep blacks & vivid color'
    ],
    specifications: {
      'Display': [
        { label: 'Resolution', value: '2560 x 1440' },
        { label: 'Brightness', value: '1000 nits Peak' }
      ]
    },
    warranty: '3 Years Asus Warranty (OLED Burn-in Included)',
    emiAvailable: true,
    emiStartingBDT: 10333,
    reviews: [],
    questions: [],
    createdDate: '2024-02-22'
  },

  // 17. TP-Link Archer GE800 Wi-Fi 7 Gaming Router
  {
    id: 'prod-017',
    name: 'TP-Link Archer GE800 BE19000 Tri-Band Wi-Fi 7 Gaming Router (Dual 10G Ports)',
    slug: 'tp-link-archer-ge800-wifi-7-gaming-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Networking',
    badge: 'New',
    regularPrice: 65000,
    discountPrice: 58000,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 14,
    stockStatus: 'In Stock',
    stockCount: 8,
    isGaming: true,
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Blazing Wi-Fi 7 speeds up to 19 Gbps across 6 GHz, 5 GHz & 2.4 GHz',
      'Dual 10Gbps Ports (10G WAN/LAN + 10G SFP+/RJ45 Combo)',
      'Game Accelerator & Dedicated Gaming Port for zero latency',
      'Multi-Link Operation (MLO) & 320 MHz Channels'
    ],
    specifications: {
      'Specs': [
        { label: 'Speed', value: '11520 Mbps (6GHz) + 5760 Mbps (5GHz) + 1376 Mbps (2.4GHz)' }
      ]
    },
    warranty: '2 Years Warranty',
    emiAvailable: true,
    emiStartingBDT: 4833,
    reviews: [],
    questions: [],
    createdDate: '2024-03-08'
  },

  // 18. Sony WH-1000XM5 Wireless Headphones
  {
    id: 'prod-018',
    name: 'Sony WH-1000XM5 Wireless Noise-Canceling Over-Ear Headphones (Silver)',
    slug: 'sony-wh-1000xm5-wireless-headphones-silver',
    brand: 'Sony',
    category: 'headphone-audio',
    categoryName: 'Headphones',
    badge: 'Best Seller',
    regularPrice: 42000,
    discountPrice: 36900,
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 110,
    stockStatus: 'In Stock',
    stockCount: 21,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Industry-leading noise canceling with 8 microphones & Auto NC Optimizer',
      'Magnificent sound engineered with Integrated Processor V1 & HD QN1',
      'Up to 30-hour battery life with quick charging (3 min charge = 3 hours playback)',
      'Ultra-comfortable lightweight design with soft fit leather'
    ],
    specifications: {
      'Specs': [
        { label: 'Battery Life', value: '30 Hours (NC ON)' }
      ]
    },
    warranty: '1 Year Warranty',
    emiAvailable: true,
    emiStartingBDT: 3075,
    reviews: [],
    questions: [],
    createdDate: '2024-01-12'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Intel 14th Gen vs AMD Ryzen 7000 X3D: Which CPU Should You Buy in Bangladesh (2024)?',
    slug: 'intel-14th-gen-vs-amd-ryzen-7000-x3d-bangladesh-guide',
    category: 'Buying Guides',
    author: 'Tanvir Hossain',
    authorRole: 'Senior Hardware Analyst',
    date: 'July 18, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Detailed comparison of single-core performance, gaming benchmarks, power efficiency, motherboard AM5 vs LGA1700 pricing, and overall value for custom PC builders in Bangladesh.',
    content: `Choosing the right CPU for your custom PC build in Bangladesh can be daunting with Intel 14th Gen (Raptor Lake Refresh) and AMD Ryzen 7000X3D series head-to-head...`,
    tags: ['Intel', 'AMD', 'CPU', 'PC Building', 'Guide']
  },
  {
    id: 'blog-2',
    title: 'Top 5 Student & Professional Laptops Under 80,000 BDT in 2024',
    slug: 'top-5-student-laptops-under-80000-bdt',
    category: 'Laptop Reviews',
    author: 'Anika Tabassum',
    authorRole: 'Tech Journalist',
    date: 'July 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Looking for a reliable laptop for university studies, programming, or remote work? Here are the top 5 picks with IPS displays, long battery life, and solid warranty support.',
    content: `Budget laptops in Bangladesh have evolved dramatically. You no longer need to sacrifice display quality or build materials...`,
    tags: ['Laptop', 'Budget PC', 'Asus', 'Dell', 'Lenovo']
  },
  {
    id: 'blog-3',
    title: 'How to Choose the Best CCTV Camera Setup for Your Home or Office in Dhaka',
    slug: 'how-to-choose-cctv-camera-setup-dhaka',
    category: 'Security Systems',
    author: 'Rafiqul Islam',
    authorRole: 'CCTV & Security Solutions Specialist',
    date: 'June 28, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    excerpt: 'ColorVu vs Infrared, 2MP vs 4MP 4K, IP Camera vs Turbo HD DVR. Everything you need to know about setting up security surveillance for Bangladeshi households.',
    content: `Security systems are now essential for homes and commercial establishments across Bangladesh...`,
    tags: ['Hikvision', 'CCTV', 'Security', 'Smart Home']
  }
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'store-1',
    name: 'My Computer - IDB Bhaban Branch (Headquarters)',
    city: 'Dhaka',
    address: 'Shop #304-308 (3rd Floor), BCS Computer City, IDB Bhaban, Agargaon, Dhaka-1207',
    phone: '+880 1711-000111 / 16789',
    hours: '10:00 AM - 8:00 PM (Weekly Off: Sunday)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=IDB+Bhaban+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed',
    isHeadquarter: true
  },
  {
    id: 'store-2',
    name: 'My Computer - Multiplan Center Branch',
    city: 'Dhaka',
    address: 'Shop #412-415 (4th Floor), Multiplan Computer City Center, Elephant Road, Dhaka-1205',
    phone: '+880 1711-000222',
    hours: '10:00 AM - 8:30 PM (Weekly Off: Tuesday)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Multiplan+Center+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'store-3',
    name: 'My Computer - Uttara Branch',
    city: 'Dhaka',
    address: 'House #12, Sector #7, Sonargaon Janapath Road, Uttara, Dhaka-1230',
    phone: '+880 1711-000333',
    hours: '10:00 AM - 8:00 PM (Weekly Off: Friday)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Uttara+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'store-4',
    name: 'My Computer - Chittagong Agrabad Branch',
    city: 'Chittagong',
    address: 'Agrabad Computer City, 2nd Floor, Sheikh Mujib Road, Agrabad, Chittagong',
    phone: '+880 1811-000444',
    hours: '10:00 AM - 8:00 PM (Weekly Off: Friday)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Agrabad+Chittagong&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'store-5',
    name: 'My Computer - Sylhet Zindabazar Branch',
    city: 'Sylhet',
    address: 'Millennium Shopping Complex, 3rd Floor, Zindabazar, Sylhet',
    phone: '+880 1911-000555',
    hours: '10:00 AM - 8:00 PM (Weekly Off: Friday)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Zindabazar+Sylhet&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

export const MOCK_COUPONS: Coupon[] = [
  { code: 'MYCOMP10', discountPercent: 10, maxDiscountBDT: 5000, minSpendBDT: 20000, validUntil: '2024-12-31' },
  { code: 'STARTECH5', discountPercent: 5, maxDiscountBDT: 2500, minSpendBDT: 10000, validUntil: '2024-12-31' },
  { code: 'EIDDEAL', discountPercent: 15, maxDiscountBDT: 10000, minSpendBDT: 50000, validUntil: '2024-12-31' }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'MC-84920',
    date: '2024-07-20',
    customerName: 'Shakib Al Hasan',
    customerPhone: '01700000000',
    customerEmail: 'shakib@example.com',
    shippingAddress: 'House 45, Road 11, Block D, Banani, Dhaka',
    district: 'Dhaka',
    items: [
      { productId: 'prod-001', productName: 'ASUS ROG Strix G16 Gaming Laptop', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=300&auto=format&fit=crop', price: 319000, quantity: 1 }
    ],
    subtotal: 319000,
    discount: 5000,
    shippingCost: 120,
    total: 314120,
    paymentMethod: 'bKash',
    paymentStatus: 'Paid',
    orderStatus: 'Shipped',
    trackingSteps: [
      { title: 'Order Placed', date: 'Jul 20, 10:30 AM', completed: true },
      { title: 'Payment Confirmed', date: 'Jul 20, 10:35 AM', completed: true },
      { title: 'Packed at IDB Hub', date: 'Jul 21, 02:00 PM', completed: true },
      { title: 'In Transit via Paperfly', date: 'Jul 22, 09:00 AM', completed: true, current: true },
      { title: 'Out for Delivery', date: 'Pending', completed: false }
    ]
  },
  {
    id: 'MC-84921',
    date: '2024-07-22',
    customerName: 'Nusrat Jahan',
    customerPhone: '01800000000',
    customerEmail: 'nusrat@example.com',
    shippingAddress: '12 East Nasirabad, Chittagong',
    district: 'Chittagong',
    items: [
      { productId: 'prod-007', productName: 'Corsair Vengeance RGB 32GB DDR5 RAM', image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=300&auto=format&fit=crop', price: 14800, quantity: 2 }
    ],
    subtotal: 29600,
    discount: 0,
    shippingCost: 200,
    total: 29800,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending',
    orderStatus: 'Processing',
    trackingSteps: [
      { title: 'Order Placed', date: 'Jul 22, 04:15 PM', completed: true },
      { title: 'Confirmed by Agent', date: 'Jul 22, 05:00 PM', completed: true, current: true },
      { title: 'Packing', date: 'Pending', completed: false },
      { title: 'Shipped', date: 'Pending', completed: false },
      { title: 'Delivered', date: 'Pending', completed: false }
    ]
  }
];
