const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '../src/data/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

// 1. Update CATEGORIES under security to have ezviz-camera and cc-camera children
const securityCatPattern = /id:\s*'security',\s*name:\s*'Security',[\s\S]*?subCategories:\s*\[([\s\S]*?)\]\s*\},/;
const match = content.match(securityCatPattern);

if (match) {
  const currentSubCategories = match[1];
  
  // Check if ezviz-camera already exists
  if (!currentSubCategories.includes("'ezviz-camera'")) {
    const updatedSubCategories = `
      {
        id: 'ezviz-camera',
        name: 'EZVIZ Smart Cameras (ইজভিজ ক্যামেরা)',
        nameBn: 'ইজভিজ ক্যামেরা',
        popular: true,
        hasChildren: true,
        children: [
          { id: 'ezviz-camera', name: 'All EZVIZ Cameras (সকল ইজভিজ)', nameBn: 'সকল ইজভিজ ক্যামেরা', brand: 'EZVIZ' },
          { id: 'ezviz-camera', name: 'EZVIZ Indoor Wi-Fi Cameras', nameBn: 'ইনডোর ওয়াইফাই ক্যামেরা', brand: 'EZVIZ' },
          { id: 'ezviz-camera', name: 'EZVIZ Outdoor Pan & Tilt (PTZ)', nameBn: 'আউটডোর পিটি ক্যামেরা', brand: 'EZVIZ' },
          { id: 'ezviz-camera', name: 'EZVIZ 4G SIM & Solar Cameras', nameBn: '৪জি সিম ও সোলার ক্যামেরা', brand: 'EZVIZ' },
          { id: 'ezviz-camera', name: 'EZVIZ Video Doorbells', nameBn: 'স্মার্ট ডোরবেল', brand: 'EZVIZ' },
          { id: 'ezviz-camera', name: 'EZVIZ PoE Wired Cameras', nameBn: 'পিওই ওয়্যার্ড ক্যামেরা', brand: 'EZVIZ' }
        ]
      },
      {
        id: 'cc-camera',
        name: 'CC Camera',
        nameBn: 'সিসি ক্যামেরা',
        hasChildren: true,
        children: [
          { id: 'ezviz-camera', name: 'EZVIZ Wi-Fi & PT Cameras', nameBn: 'ইজভিজ ক্যামেরা', brand: 'EZVIZ' },
          { id: 'cc-camera', name: 'Hikvision CC Cameras', nameBn: 'হিকভিশন সিসি ক্যামেরা', brand: 'Hikvision' },
          { id: 'cc-camera', name: 'Dahua CC Cameras', nameBn: 'দাহুয়া সিসি ক্যামেরা', brand: 'Dahua' },
          { id: 'cc-camera', name: 'All CC Cameras', nameBn: 'সকল সিসি ক্যামেরা' }
        ]
      },` + currentSubCategories.replace(/\{\s*id:\s*'cc-camera'[\s\S]*?\},/, '');

    content = content.replace(currentSubCategories, updatedSubCategories);
    console.log('Successfully updated Security subCategories with EZVIZ entries!');
  }
}

// 2. Add the 22 EZVIZ Products to PRODUCTS array
const ezvizProducts = `
  // ── EZVIZ SMART SECURITY CAMERAS & SURVEILLANCE (SALE PRICE ONLY) ──
  {
    id: 'prod-ezviz-001',
    name: 'EZVIZ CS-CP1-LITE 2MP Smart Wi-Fi Pan & Tilt Indoor Security Camera',
    slug: 'ezviz-cs-cp1-lite-2mp-smart-indoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Best Seller',
    regularPrice: 1950,
    discountPrice: 1950,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 84,
    stockStatus: 'In Stock',
    stockCount: 45,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c6n.webp'],
    shortSpecs: [
      'Model: CS-CP1-LITE 2MP (1080p Full HD)',
      '360° Visual Coverage with Motorized Pan & Tilt',
      'Smart IR Night Vision up to 10m / 33ft',
      'AI Smart Motion Detection & Auto-Tracking',
      'Two-Way Audio with Built-in Mic & Speaker'
    ],
    specifications: {
      'Basic Specifications': [
        { label: 'Model Number', value: 'CS-CP1-LITE 2MP' },
        { label: 'Camera Type', value: 'Indoor Pan & Tilt Wi-Fi Camera' },
        { label: 'Resolution', value: '2MP Full HD (1920 × 1080 @ 15fps)' },
        { label: 'Image Sensor', value: '1/4" Progressive Scan CMOS' },
        { label: 'Lens', value: '4mm @ F2.4, View Angle: 85° diagonal' }
      ],
      'Smart Features & Storage': [
        { label: 'Pan / Tilt', value: 'Pan: 340°, Tilt: 55°' },
        { label: 'Night Vision', value: 'Smart IR up to 10 meters' },
        { label: 'Local Storage', value: 'Supports MicroSD Card (Up to 256 GB)' },
        { label: 'Cloud Storage', value: 'EZVIZ CloudPlay Storage supported' },
        { label: 'Audio', value: 'Two-Way Audio (Mic & Speaker)' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [
      { id: 'rev-ez-1', userName: 'Rahim Khan', rating: 5, date: '2024-06-15', comment: 'Clear video and smooth pan-tilt! Very easy setup on the EZVIZ mobile app.', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-03-01'
  },
  {
    id: 'prod-ezviz-002',
    name: 'EZVIZ CS-H6c Pro 3MP 2K Smart Pan & Tilt Color Night Vision Indoor Camera',
    slug: 'ezviz-cs-h6c-pro-3mp-smart-indoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Hot',
    regularPrice: 2550,
    discountPrice: 2550,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 62,
    stockStatus: 'In Stock',
    stockCount: 38,
    isSmartHome: true,
    images: ['/images/products/ezviz-c6n.webp'],
    shortSpecs: [
      'Model: CS-H6c Pro 3MP (2K High Resolution)',
      'Starlight Color Night Vision with Built-in Spotlights',
      'Smart Auto-Patrol Mode with 360° Panoramic Coverage',
      'Touch Call Button on Camera Body to Call Smartphone',
      'AI Human Shape Detection & Loud Noise Alarm'
    ],
    specifications: {
      'Basic Specifications': [
        { label: 'Model Number', value: 'CS-H6c Pro 3MP' },
        { label: 'Camera Type', value: 'Indoor Smart PT Camera' },
        { label: 'Resolution', value: '3MP 2K (2304 × 1296)' },
        { label: 'Lens', value: '4mm @ F1.6, View Angle: 90° diagonal' },
        { label: 'Color Night Vision', value: 'Starlight Color Night Vision with White Spotlights' }
      ],
      'Smart Features': [
        { label: 'Pan / Tilt', value: 'Pan: 340°, Tilt: 80°' },
        { label: 'One-Touch Calling', value: 'Physical touch button on camera for family calling' },
        { label: 'AI Detection', value: 'Human Shape Detection & Noise Level Alert' },
        { label: 'Local Storage', value: 'MicroSD Card slot up to 512 GB' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-05'
  },
  {
    id: 'prod-ezviz-003',
    name: 'EZVIZ CS-H6c G1 5MP (3K) Smart Home Pan & Tilt Indoor Wi-Fi Camera',
    slug: 'ezviz-cs-h6c-g1-5mp-3k-indoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Popular',
    regularPrice: 3500,
    discountPrice: 3500,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 45,
    stockStatus: 'In Stock',
    stockCount: 25,
    isSmartHome: true,
    images: ['/images/products/ezviz-c6n.webp'],
    shortSpecs: [
      'Model: CS-H6c G1 5MP (3K Ultra HD Clarity)',
      '360° Panoramic View with Motorized Rotation',
      'AI Human Shape Tracking & Smart Zoom',
      'Color Night Vision with Built-in LED Fill Lights',
      'Supports Dual-Band Wi-Fi 2.4GHz & 5GHz'
    ],
    specifications: {
      'Basic Specifications': [
        { label: 'Model Number', value: 'CS-H6c G1 5MP' },
        { label: 'Resolution', value: '5MP 3K (2880 × 1620)' },
        { label: 'Lens', value: '4mm @ F1.6, 92° diagonal angle' },
        { label: 'Night Vision', value: 'Up to 10m Color & IR Vision' }
      ],
      'Smart Features': [
        { label: 'Wi-Fi Support', value: 'Dual-Band 2.4GHz & 5GHz Wi-Fi' },
        { label: 'Detection', value: 'AI Human Shape Detection, Loud Sound Detection' },
        { label: 'Storage', value: 'MicroSD slot up to 512GB & Cloud' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-08'
  },
  {
    id: 'prod-ezviz-004',
    name: 'EZVIZ CS-H6c G1 8MP (4K UHD) Flagship Pan & Tilt Smart Indoor Camera',
    slug: 'ezviz-cs-h6c-g1-8mp-4k-uhd-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Top Tier',
    regularPrice: 5200,
    discountPrice: 5200,
    discountPercentage: 0,
    rating: 5.0,
    reviewCount: 29,
    stockStatus: 'In Stock',
    stockCount: 18,
    isSmartHome: true,
    images: ['/images/products/ezviz-c6n.webp'],
    shortSpecs: [
      'Model: CS-H6c G1 8MP (True 4K UHD 3840×2160)',
      'Ultra-High Detail Zoom Without Pixelation',
      'Waving Hand Recognition & Touch Phone Calling',
      'AI Human & Pet Activity Tracking',
      'Dual-Band Wi-Fi 6 Connection for Ultra-Smooth Streaming'
    ],
    specifications: {
      'Basic Specifications': [
        { label: 'Model Number', value: 'CS-H6c G1 8MP' },
        { label: 'Resolution', value: '8MP 4K UHD (3840 × 2160)' },
        { label: 'Image Sensor', value: '1/2.8" Progressive Scan CMOS' },
        { label: 'Lens', value: '4mm @ F1.6, 104° diagonal field of view' }
      ],
      'Advanced Features': [
        { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax) Dual-Band' },
        { label: 'AI Features', value: 'Human & Pet Detection, Hand-Wave Call, Voice Activity Alert' },
        { label: 'Storage', value: 'MicroSD card up to 512GB' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-12'
  },
  {
    id: 'prod-ezviz-005',
    name: 'EZVIZ CS-H6 5MP (3K) AI-Powered Smart Home Indoor Camera',
    slug: 'ezviz-cs-h6-5mp-3k-ai-indoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'AI Powered',
    regularPrice: 5200,
    discountPrice: 5200,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 37,
    stockStatus: 'In Stock',
    stockCount: 22,
    isSmartHome: true,
    images: ['/images/products/ezviz-c6n.webp'],
    shortSpecs: [
      'Model: CS-H6 5MP (3K Resolution Optics)',
      'True-WDR Technology for Balanced Backlight Exposure',
      'AI-Powered Human & Pet Detection & Recognition',
      'Voice Activity Detection & Waving-Hand Call Trigger',
      'Physical Privacy Shutter Masking for Complete Privacy'
    ],
    specifications: {
      'Basic Specifications': [
        { label: 'Model Number', value: 'CS-H6 5MP' },
        { label: 'Resolution', value: '5MP 3K (2880 × 1620)' },
        { label: 'WDR', value: 'True-WDR (Wide Dynamic Range)' },
        { label: 'Pan / Tilt', value: 'Pan: 353°, Tilt: 133°' }
      ],
      'Smart Functionality': [
        { label: 'Privacy', value: 'Motorized Physical Privacy Lens Cover' },
        { label: 'Detection', value: 'Pet Detection, Human Detection, Bark/Meow & Voice Recognition' },
        { label: 'Connectivity', value: 'Dual-Band 2.4GHz / 5GHz Wi-Fi' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-14'
  },
  {
    id: 'prod-ezviz-006',
    name: 'EZVIZ CS-E4P 6MP 360° Panoramic Fisheye Ceiling Mount Security Camera',
    slug: 'ezviz-cs-e4p-6mp-panoramic-fisheye-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Pro Grade',
    regularPrice: 10500,
    discountPrice: 10500,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 19,
    stockStatus: 'In Stock',
    stockCount: 15,
    isSmartHome: true,
    images: ['/images/products/ezviz-c6n.webp'],
    shortSpecs: [
      'Model: CS-E4P 6MP Fisheye Panoramic Lens',
      'Zero Blind Spot 360° Omnidirectional Room Coverage',
      'Multiple De-Warping Modes: Fisheye, Panorama, Quad-Split',
      'High Sensitivity Microphone with Two-Way Audio',
      'Ceiling & Wall Mounting Supported'
    ],
    specifications: {
      'Basic Specifications': [
        { label: 'Model Number', value: 'CS-E4P 6MP FISHEYE' },
        { label: 'Resolution', value: '6MP (2160 × 2160 @ 25fps)' },
        { label: 'Lens Type', value: '1.2mm Ultra Fisheye Lens, 360° Horizontal Field of View' }
      ],
      'Display & Storage': [
        { label: 'De-warping Modes', value: '360° Overview, 180° Panoramic, 4-Way Quad Screen' },
        { label: 'Storage', value: 'MicroSD slot up to 512GB & NVR Compatibility' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-15'
  },
  {
    id: 'prod-ezviz-007',
    name: 'EZVIZ CS-X5S-8W 8-Channel Wireless Wi-Fi NVR Network Video Recorder',
    slug: 'ezviz-cs-x5s-8w-8-channel-wireless-nvr',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Enterprise',
    regularPrice: 5800,
    discountPrice: 5800,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 24,
    stockStatus: 'In Stock',
    stockCount: 20,
    isSmartHome: true,
    images: ['/images/products/hikvision-7608ni.webp'],
    shortSpecs: [
      'Model: CS-X5S(8W) 8-Channel Wireless NVR',
      'Connects up to 8 Wi-Fi IP Cameras Wirelessly',
      'Dual High-Gain External Antennas (Up to 100m Range)',
      'Supports 1x SATA HDD Up to 8TB Capacity',
      'HDMI & VGA Simultaneous Video Outputs'
    ],
    specifications: {
      'Technical Specifications': [
        { label: 'Model Number', value: 'CS-X5S(8W)' },
        { label: 'Video Channels', value: '8 Wireless IP Camera Channels' },
        { label: 'Wi-Fi Range', value: 'Up to 100 meters open line-of-sight' },
        { label: 'Storage Interface', value: '1 SATA Port (Supports 1TB to 8TB HDD)' },
        { label: 'Display Output', value: '1x HDMI (1080p), 1x VGA' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-16'
  },
  {
    id: 'prod-ezviz-008',
    name: 'EZVIZ CS-H8c Pro 3MP (2K) Outdoor Pan & Tilt Color Night Vision Wi-Fi Camera',
    slug: 'ezviz-cs-h8c-pro-3mp-outdoor-pt-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Best Seller',
    regularPrice: 4800,
    discountPrice: 4800,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 92,
    stockStatus: 'In Stock',
    stockCount: 50,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H8c Pro 3MP (2K High Definition)',
      '360° Outdoor Pan/Tilt Coverage with Auto-Tracking',
      'Color Night Vision up to 30m with Built-in Spotlights',
      'AI-Powered Human Shape Detection & Active Defense Siren',
      'IP65 Weatherproof Design for Heavy Rain & Dust'
    ],
    specifications: {
      'Camera Specifications': [
        { label: 'Model Number', value: 'CS-H8c Pro 3MP' },
        { label: 'Resolution', value: '3MP 2K (2304 × 1296)' },
        { label: 'Pan / Tilt Angle', value: 'Pan: 350°, Tilt: 80°' },
        { label: 'Night Vision', value: 'Up to 30m Full Color & B/W IR' },
        { label: 'Weather Resistance', value: 'IP65 Weatherproof' }
      ],
      'Security Features': [
        { label: 'Alarm System', value: 'Active Siren & Flashing Strobe Lights' },
        { label: 'Audio', value: 'Two-Way Audio with Noise Cancellation' },
        { label: 'Storage', value: 'MicroSD slot up to 512GB' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [
      { id: 'rev-ez-2', userName: 'Anisur Rahman', rating: 5, date: '2024-05-18', comment: 'Installed outside my home. Brilliant night color video and siren works great!', verifiedPurchase: true }
    ],
    questions: [],
    createdDate: '2024-03-18'
  },
  {
    id: 'prod-ezviz-009',
    name: 'EZVIZ CS-H8c Pro 5MP (3K) Outdoor Pan & Tilt Smart Security Camera',
    slug: 'ezviz-cs-h8c-pro-5mp-3k-outdoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Hot',
    regularPrice: 5700,
    discountPrice: 5700,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 54,
    stockStatus: 'In Stock',
    stockCount: 32,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H8c Pro 5MP (3K Ultra HD Clarity)',
      '360° Panoramic Outdoor Protection with Auto-Cruise',
      'AI-Powered Person & Vehicle Shape Detection',
      'Color Night Vision with High Power Dual Spotlights',
      'Customizable Voice Message Alarms on Detection'
    ],
    specifications: {
      'Camera Specifications': [
        { label: 'Model Number', value: 'CS-H8c Pro 5MP' },
        { label: 'Resolution', value: '5MP 3K (2880 × 1620)' },
        { label: 'Pan / Tilt', value: 'Pan: 350°, Tilt: 80°' },
        { label: 'Night Vision Range', value: '30 Meters (Color & IR)' },
        { label: 'Weather Rating', value: 'IP65 Dust & Water Resistant' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-20'
  },
  {
    id: 'prod-ezviz-010',
    name: 'EZVIZ CS-H9c 3MP Dual-Lens Outdoor Smart Pan & Tilt Wi-Fi Security Camera',
    slug: 'ezviz-cs-h9c-3mp-dual-lens-outdoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'New',
    regularPrice: 7800,
    discountPrice: 7800,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 48,
    stockStatus: 'In Stock',
    stockCount: 28,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H9c 3MP Dual-Lens Co-Action Camera',
      'Dual-Lens System: Fixed Wide Angle Lens + PTZ Auto-Tracking Lens',
      'Monitors 2 Separate Angles Simultaneously in 1 Device',
      'Smart Co-Linked Auto Tracking & Instant Patrol',
      'Dual Spotlights for Vivid Color Night Vision (30m)'
    ],
    specifications: {
      'Dual-Lens Architecture': [
        { label: 'Model Number', value: 'CS-H9c 3MP' },
        { label: 'Upper Lens', value: 'Fixed 3MP Wide Angle (F1.6, 130° FOV)' },
        { label: 'Lower Lens', value: 'PTZ 3MP Motorized (Pan 350°, Tilt 80°)' },
        { label: 'Simultaneous View', value: 'Both lenses stream concurrently in app' }
      ],
      'Smart Guard': [
        { label: 'Co-Tracking', value: 'Upper lens detects person, lower lens rotates & tracks' },
        { label: 'Defense', value: 'Dual Strobe Lights & 100dB Siren' },
        { label: 'Protection', value: 'IP66 Waterproof & Dustproof' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-22'
  },
  {
    id: 'prod-ezviz-011',
    name: 'EZVIZ CS-H90 Dual 4MP+4MP (8MP Total) Outdoor Dual Lens Smart PT Camera',
    slug: 'ezviz-cs-h90-dual-4mp-8mp-dual-lens-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Top Tier',
    regularPrice: 8300,
    discountPrice: 8300,
    discountPercentage: 0,
    rating: 5.0,
    reviewCount: 36,
    stockStatus: 'In Stock',
    stockCount: 20,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H90 Dual 4MP + 4MP (8MP Ultra HD Total)',
      'Dual 2K+ High Performance Image Sensors',
      'Continuous Fixed Perimeter Guard + 360° PT Tracking',
      'AI Human & Vehicle Co-Linked Intelligent Detection',
      'Heavy-Duty IP66 All-Weather Housing'
    ],
    specifications: {
      'Camera Specifications': [
        { label: 'Model Number', value: 'CS-H90 4MP & 4MP' },
        { label: 'Resolution', value: 'Dual 4MP (2560 × 1440 each, 8MP Total)' },
        { label: 'Upper Fixed Lens', value: '4MP @ F1.6 Ultra-Wide 130°' },
        { label: 'Lower PT Lens', value: '4MP @ F1.6 Pan 350° / Tilt 80°' },
        { label: 'Night Vision', value: 'Smart Color Night Vision (30m / 98ft)' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-24'
  },
  {
    id: 'prod-ezviz-012',
    name: 'EZVIZ H80X Dual Lens 4K (8MP) Ultra HD Smart Outdoor Pan/Tilt AI Camera',
    slug: 'ezviz-h80x-dual-lens-4k-outdoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Flagship',
    regularPrice: 9500,
    discountPrice: 9500,
    discountPercentage: 0,
    rating: 5.0,
    reviewCount: 22,
    stockStatus: 'In Stock',
    stockCount: 16,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: H80X 4K Ultra HD (8MP Flagship Sensor)',
      'Dual-Lens Optical Clarity with Color Night Vision Without Spotlights',
      'Advanced Deep Learning AI Vehicle & Human Detection',
      '360° Panoramic Pan & Tilt Auto Patrol Guard',
      'H.265 Smart Video Compression & IP66 Waterproof'
    ],
    specifications: {
      'Optics & Hardware': [
        { label: 'Model Number', value: 'H80X 4K' },
        { label: 'Resolution', value: '4K Ultra HD (3840 × 2160)' },
        { label: 'Night Vision Tech', value: 'Dual-Sensor Low-Light Color Tech' },
        { label: 'Rotation', value: 'Pan: 350°, Tilt: 80°' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-25'
  },
  {
    id: 'prod-ezviz-013',
    name: 'EZVIZ H8c Pro 5MP 4G LTE SIM Card Supported Outdoor Pan & Tilt Camera',
    slug: 'ezviz-h8c-pro-5mp-4g-sim-card-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: '4G LTE',
    regularPrice: 6000,
    discountPrice: 6000,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 41,
    stockStatus: 'In Stock',
    stockCount: 25,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: H8c Pro 5MP 4G LTE SIM Supported',
      'Built-in 4G SIM Slot (Works Anywhere Without Wi-Fi/Broadband)',
      '5MP 3K High Definition Outdoor Pan/Tilt',
      'Color Night Vision up to 30 Meters',
      'AI Person & Vehicle Detection with Siren Alarm'
    ],
    specifications: {
      'Network & Cellular': [
        { label: 'Model Number', value: 'H8C Pro 5MP 4G' },
        { label: 'Cellular Connectivity', value: '4G LTE (Grameenphone, Robi, Banglalink, Teletalk compatible)' },
        { label: 'SIM Card Slot', value: 'Nano SIM Slot' },
        { label: 'Resolution', value: '5MP 3K (2880 × 1620)' }
      ],
      'Camera Specs': [
        { label: 'Coverage', value: 'Pan: 350°, Tilt: 80°' },
        { label: 'Ingress Rating', value: 'IP65 Weatherproof' },
        { label: 'Storage', value: 'MicroSD slot up to 512GB' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-26'
  },
  {
    id: 'prod-ezviz-014',
    name: 'EZVIZ CS-H9c 5MP+5MP (10MP Total) Dual Lens 4G LTE SIM Supported Outdoor PT Camera',
    slug: 'ezviz-cs-h9c-5mp-4g-dual-lens-sim-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Flagship 4G',
    regularPrice: 8700,
    discountPrice: 8700,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 30,
    stockStatus: 'In Stock',
    stockCount: 18,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H9c 5MP 4G Dual-Lens Cellular Camera',
      '4G LTE SIM Card Connected for Remote Sites, Farms & Factories',
      'Dual 5MP 3K Sensors (Dual Angle Wide + PT Tracking)',
      'Co-Action Tracking with Color Night Vision',
      'Weatherproof IP66 All-Weather Construction'
    ],
    specifications: {
      'Network & Architecture': [
        { label: 'Model Number', value: 'CS-H9c 5MP 4G' },
        { label: 'Connectivity', value: '4G LTE SIM (Nano-SIM)' },
        { label: 'Sensors', value: 'Dual 5MP 3K High-Definition Cameras' },
        { label: 'Features', value: 'Co-Linked Dual Monitoring, Two-Way Audio, Siren' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-27'
  },
  {
    id: 'prod-ezviz-015',
    name: 'EZVIZ CS-HB8 Lite 4G Battery-Powered Outdoor PT Camera with Solar Panel Kit',
    slug: 'ezviz-cs-hb8-lite-4g-solar-battery-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Solar Powered',
    regularPrice: 13500,
    discountPrice: 13500,
    discountPercentage: 0,
    rating: 5.0,
    reviewCount: 26,
    stockStatus: 'In Stock',
    stockCount: 12,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-HB8 LITE 4G Solar + Battery Kit',
      '100% Wire-Free! Powered by Built-in Rechargeable Battery & Solar Panel',
      '4G LTE Cellular Support (Zero Cables, Zero Wi-Fi Needed)',
      '2K Resolution with 360° Pan & Tilt Coverage',
      'Smart PIR & AI Human Detection with Active Siren'
    ],
    specifications: {
      'Power & Cellular': [
        { label: 'Model Number', value: 'CS-HB8 LITE 4G' },
        { label: 'Battery Capacity', value: 'High Capacity Rechargeable Li-ion Battery' },
        { label: 'Solar Charging', value: 'Dedicated EZVIZ Solar Panel Included' },
        { label: 'Network', value: '4G LTE SIM Card' },
        { label: 'Resolution', value: '2K High Definition (2304 × 1296)' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-28'
  },
  {
    id: 'prod-ezviz-016',
    name: 'EZVIZ EB3 KIT 2K Smart Standalone Battery Camera with Dedicated Solar Panel',
    slug: 'ezviz-eb3-kit-2k-solar-standalone-battery-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Solar Eco',
    regularPrice: 10500,
    discountPrice: 10500,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 33,
    stockStatus: 'In Stock',
    stockCount: 20,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: EB3 KIT (Camera + Solar Panel Bundle)',
      '5200mAh Built-in Rechargeable Battery with Solar Panel Included',
      '2K (3MP) Crystal Clear Resolution with Color Night Vision',
      'Smart PIR Motion Sensor & AI Human Detection',
      'Customizable Audio Alerts & Two-Way Talk'
    ],
    specifications: {
      'Power & Optics': [
        { label: 'Model Number', value: 'EB3 KIT' },
        { label: 'Battery', value: '5200 mAh Rechargeable Lithium Battery' },
        { label: 'Solar Panel', value: 'Continuous Eco-Friendly Solar Charging' },
        { label: 'Resolution', value: '2K (2304 × 1296)' },
        { label: 'Weather Rating', value: 'IP65 Weatherproof' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-29'
  },
  {
    id: 'prod-ezviz-017',
    name: 'EZVIZ CS-DP2C Wire-Free Smart Video Doorbell with 4.3" Color Screen Peep-Hole',
    slug: 'ezviz-cs-dp2c-smart-video-doorbell-screen',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Smart Home',
    regularPrice: 11500,
    discountPrice: 11500,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 39,
    stockStatus: 'In Stock',
    stockCount: 15,
    isSmartHome: true,
    images: ['/images/products/xiaomi-door-lock-e10.webp'],
    shortSpecs: [
      'Model: CS-DP2C Smart Video Doorbell & Peephole',
      '1080p FHD Camera with 4.3" Color Touchscreen Indoor Display',
      '4600mAh Long-Lasting Rechargeable Battery',
      '155° Ultra-Wide Angle Lens with PIR Motion Detection',
      'Two-Way Video Talk from Phone or Indoor Screen'
    ],
    specifications: {
      'Doorbell Specifications': [
        { label: 'Model Number', value: 'CS-DP2C' },
        { label: 'Camera Resolution', value: '1080p Full HD' },
        { label: 'Indoor Screen', value: '4.3-Inch Color Screen Monitor' },
        { label: 'Battery', value: '4600 mAh Rechargeable Battery' },
        { label: 'Door Thickness Fit', value: '35mm to 105mm' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-30'
  },
  {
    id: 'prod-ezviz-018',
    name: 'EZVIZ CS-HP4 Smart Digital Peep-Hole Door Viewer & 4.3" Indoor Display',
    slug: 'ezviz-cs-hp4-smart-digital-peep-hole-doorbell',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Smart Home',
    regularPrice: 10200,
    discountPrice: 10200,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 27,
    stockStatus: 'In Stock',
    stockCount: 18,
    isSmartHome: true,
    images: ['/images/products/xiaomi-door-lock-e10.webp'],
    shortSpecs: [
      'Model: CS-HP4 Smart Door Peephole Camera',
      '1080p Video Clarity with 4.3-Inch Indoor Color Display',
      '4600mAh Rechargeable Battery with Months of Standby',
      '166° Ultra-Wide Field of View',
      'Built-in Doorbell Chime with Multiple Ring Melodies'
    ],
    specifications: {
      'Door Viewer Specs': [
        { label: 'Model Number', value: 'CS-HP4' },
        { label: 'Resolution', value: '1080p Full HD' },
        { label: 'Display Screen', value: '4.3-inch Color Screen' },
        { label: 'Field of View', value: '166° Ultra-Wide Angle' },
        { label: 'Battery Life', value: 'Up to 5 Months (based on 3-min usage/day)' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-30'
  },
  {
    id: 'prod-ezviz-019',
    name: 'EZVIZ CS-CMT Universal Wall Mount Bracket for Pan & Tilt Cameras',
    slug: 'ezviz-cs-cmt-universal-wall-mount-bracket',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'Essential',
    regularPrice: 450,
    discountPrice: 450,
    discountPercentage: 0,
    rating: 4.7,
    reviewCount: 52,
    stockStatus: 'In Stock',
    stockCount: 120,
    isSmartHome: true,
    images: ['/images/products/cctv-power-box.webp'],
    shortSpecs: [
      'Model: CS-CMT-Bracket-WallMount',
      'Universal Mount for EZVIZ C6N, CP1, H6c, TY1, TY2 Cameras',
      'Heavy-Duty ABS Engineering Plastic Build',
      'Integrated Cable Management Hole for Clean Installation',
      'Includes Screws and Wall Anchors'
    ],
    specifications: {
      'Mounting Bracket Specs': [
        { label: 'Model Number', value: 'CS-CMT-Bracket-WallMount' },
        { label: 'Material', value: 'Reinforced ABS Engineering Plastic' },
        { label: 'Compatibility', value: 'EZVIZ C6N, CP1, H6c, TY1, TY2, C6CN' },
        { label: 'Mounting Type', value: 'Wall / High Corner Mounting' }
      ]
    },
    warranty: 'No Warranty (Accessory)',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-31'
  },
  {
    id: 'prod-ezviz-020',
    name: 'EZVIZ CS-H8c 3MP PoE Outdoor Pan & Tilt Wired Power over Ethernet Camera',
    slug: 'ezviz-cs-h8c-3mp-poe-outdoor-pt-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'PoE Wired',
    regularPrice: 5000,
    discountPrice: 5000,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 38,
    stockStatus: 'In Stock',
    stockCount: 24,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H8c 3MP PoE (Wired Power over Ethernet)',
      'Single Cable for Both Power & Stable Network Data Transmission',
      '360° Outdoor Pan/Tilt PTZ Rotation with AI Tracking',
      'Color Night Vision (30m) with Dual Spotlights',
      'IP65 Waterproof Weatherproof Enclosure'
    ],
    specifications: {
      'Network & Camera Specs': [
        { label: 'Model Number', value: 'CS-H8c 3MP PoE' },
        { label: 'Connection Interface', value: 'PoE (Power over Ethernet IEEE 802.3af)' },
        { label: 'Resolution', value: '3MP 2K (2304 × 1296)' },
        { label: 'Coverage', value: 'Pan: 350°, Tilt: 80°' },
        { label: 'Weatherproof', value: 'IP65 Rated' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-04-01'
  },
  {
    id: 'prod-ezviz-021',
    name: 'EZVIZ CS-H5 3MP PoE Outdoor Pan & Tilt Wired Security Camera',
    slug: 'ezviz-cs-h5-3mp-poe-outdoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'PoE Wired',
    regularPrice: 4600,
    discountPrice: 4600,
    discountPercentage: 0,
    rating: 4.8,
    reviewCount: 29,
    stockStatus: 'In Stock',
    stockCount: 22,
    isSmartHome: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H5 3MP POE Outdoor PT Camera',
      'IEEE 802.3af Standard PoE Wired Connection',
      '3MP 2K Crystal Clear Video with Starlight Night Vision',
      'AI Person & Vehicle Detection with Siren Alarm',
      'Robust Metallic Body with IP67 Weather Resistance'
    ],
    specifications: {
      'Technical Specs': [
        { label: 'Model Number', value: 'CS-H5 3MP POE' },
        { label: 'PoE Standard', value: 'PoE 802.3af 48V' },
        { label: 'Resolution', value: '3MP 2K (2304 × 1296)' },
        { label: 'Protection Rating', value: 'IP67 High Grade Weatherproof' },
        { label: 'Storage', value: 'Supports MicroSD Card up to 512GB' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-04-02'
  },
  {
    id: 'prod-ezviz-022',
    name: 'EZVIZ CS-H8c 5MP PoE (3K) Outdoor Pan & Tilt Wired Power over Ethernet Camera',
    slug: 'ezviz-cs-h8c-5mp-poe-3k-outdoor-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ezviz-camera',
    badge: 'PoE Wired',
    regularPrice: 5500,
    discountPrice: 5500,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 31,
    stockStatus: 'In Stock',
    stockCount: 19,
    isSmartHome: true,
    isFeatured: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      'Model: CS-H8c 5MP PoE (3K Ultra High Definition)',
      'Single Cable PoE Installation (Power + Video + Network)',
      '360° Outdoor Pan & Tilt Auto Tracking',
      '30m Vivid Color Night Vision with Active Defense',
      'Heavy-Duty IP65 Weatherproof Enclosure'
    ],
    specifications: {
      'Camera Specifications': [
        { label: 'Model Number', value: 'CS-H8c 5MP PoE' },
        { label: 'PoE Standard', value: 'PoE 802.3af Wired Ethernet' },
        { label: 'Resolution', value: '5MP 3K (2880 × 1620)' },
        { label: 'Pan / Tilt', value: 'Pan: 350°, Tilt: 80°' },
        { label: 'Ingress Protection', value: 'IP65 Weather Resistance' }
      ]
    },
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-04-03'
  },
`;

// Insert ezvizProducts right after "export const PRODUCTS: Product[] = ["
const targetMarker = 'export const PRODUCTS: Product[] = [';
const targetIndex = content.indexOf(targetMarker);
if (!content.includes('prod-ezviz-001')) {
  if (targetIndex !== -1) {
    const newlineIndex = content.indexOf('\n', targetIndex);
    const insertPos = newlineIndex + 1;
    content = content.slice(0, insertPos) + ezvizProducts + content.slice(insertPos);
    fs.writeFileSync(mockDataPath, content, 'utf8');
    console.log('Successfully inserted all 22 EZVIZ products into PRODUCTS array in mockData.ts!');
  } else {
    console.error('Target marker "export const PRODUCTS: Product[] = [" not found!');
  }
} else {
  console.log('EZVIZ products already present in mockData.ts');
}

