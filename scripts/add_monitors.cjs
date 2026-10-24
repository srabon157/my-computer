const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const monitorItems = `
  // ── MONITORS (HP, ASUS, LENOVO) ───────────────────────────
  {
    id: 'prod-mon-001',
    name: 'HP M27fw 27-inch FHD IPS Ultra-Slim Ergonomic Eye Care Monitor',
    slug: 'hp-m27fw-27-inch-fhd-ips-monitor',
    brand: 'HP',
    category: 'monitor',
    categoryName: 'Monitors',
    badge: 'Hot',
    regularPrice: 28500,
    discountPrice: 26500,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 45,
    stockStatus: 'In Stock',
    stockCount: 20,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Display: 27-inch Full HD (1920 x 1080) IPS Anti-Glare Display',
      'Refresh Rate: 75Hz with AMD FreeSync Technology',
      'Design: 3-Sided Micro-Edge Ultra-Slim Aluminum Profile',
      'Eye Care: Eyesafe Certified Low Blue Light & Flicker-Free'
    ],
    specifications: {
      'Display Specs': [
        { label: 'Screen Size', value: '27 Inches' },
        { label: 'Panel Type', value: 'IPS Technology' },
        { label: 'Resolution', value: 'Full HD (1920 x 1080 @ 75Hz)' }
      ]
    },
    warranty: '3 Years Official HP Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 2208,
    reviews: [],
    questions: [],
    createdDate: '2024-02-10'
  },
  {
    id: 'prod-mon-002',
    name: 'ASUS TUF Gaming VG27AQ 27" WQHD 165Hz IPS G-Sync Gaming Monitor',
    slug: 'asus-tuf-gaming-vg27aq-27-165hz-monitor',
    brand: 'Asus',
    category: 'monitor',
    categoryName: 'Monitors',
    badge: 'Best Seller',
    regularPrice: 42000,
    discountPrice: 38900,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 62,
    stockStatus: 'In Stock',
    stockCount: 15,
    isFeatured: true,
    isGaming: true,
    images: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Display: 27-inch WQHD (2560x1440) IPS 1ms Response Time',
      'Refresh Rate: 165Hz with NVIDIA G-SYNC Compatible',
      'Technology: Extreme Low Motion Blur Sync (ELMB SYNC) & HDR10',
      'Ergonomics: Full Height, Tilt, Swivel, Pivot Adjustable Stand'
    ],
    specifications: {
      'Display Specs': [
        { label: 'Screen Size', value: '27 Inches WQHD' },
        { label: 'Panel Type', value: 'IPS Panel 100% sRGB' },
        { label: 'Resolution', value: '2560 x 1440 at 165Hz' }
      ]
    },
    warranty: '3 Years Official Asus Warranty',
    emiAvailable: true,
    emiStartingBDT: 3241,
    reviews: [],
    questions: [],
    createdDate: '2024-03-05'
  },
  {
    id: 'prod-mon-003',
    name: 'ASUS ROG Swift OLED PG27AQDM 27" QHD 240Hz 0.03ms Gaming Monitor',
    slug: 'asus-rog-swift-oled-pg27aqdm-27-240hz',
    brand: 'Asus',
    category: 'monitor',
    categoryName: 'Monitors',
    badge: 'New',
    regularPrice: 135000,
    discountPrice: 124000,
    discountPercentage: 8,
    rating: 5.0,
    reviewCount: 28,
    stockStatus: 'In Stock',
    stockCount: 8,
    isFeatured: true,
    isGaming: true,
    images: [
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Display: 27-inch QHD (2560 x 1440) Anti-Glare OLED Panel',
      'Refresh Rate: 240Hz Refresh Rate & Ultra-fast 0.03ms Response Time',
      'Cooling: Custom Heatsink with Intelligent Voltage Optimization',
      'Color: 99% DCI-P3 Color Gamut, 1000 nits Peak Brightness'
    ],
    specifications: {
      'Display Specs': [
        { label: 'Screen Size', value: '26.5 Inches OLED' },
        { label: 'Resolution', value: '2560 x 1440 at 240Hz' }
      ]
    },
    warranty: '3 Years Asus Warranty (including OLED Burn-in Coverage)',
    emiAvailable: true,
    emiStartingBDT: 10333,
    reviews: [],
    questions: [],
    createdDate: '2024-04-12'
  },
  {
    id: 'prod-mon-004',
    name: 'Lenovo Legion Y27-30 27" Full HD 180Hz 0.5ms IPS Gaming Monitor',
    slug: 'lenovo-legion-y27-30-27-180hz-monitor',
    brand: 'Lenovo',
    category: 'monitor',
    categoryName: 'Monitors',
    badge: 'Hot',
    regularPrice: 32000,
    discountPrice: 29500,
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 34,
    stockStatus: 'In Stock',
    stockCount: 14,
    isFeatured: true,
    isGaming: true,
    images: [
      'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Display: 27-inch Full HD (1920x1080) In-Plane Switching (IPS)',
      'Refresh Rate: 180Hz Overclocked Refresh Rate & 0.5ms MPRT',
      'Sync: AMD FreeSync Premium & VESA Adaptive Sync',
      'Audio & Hub: Integrated Dual 3W Speakers & 4x USB 3.2 Hub'
    ],
    specifications: {
      'Display Specs': [
        { label: 'Screen Size', value: '27 Inches' },
        { label: 'Panel Type', value: 'IPS Panel' }
      ]
    },
    warranty: '3 Years Lenovo Warranty',
    emiAvailable: true,
    emiStartingBDT: 2458,
    reviews: [],
    questions: [],
    createdDate: '2024-02-28'
  },
  {
    id: 'prod-mon-005',
    name: 'Lenovo ThinkVision E24-28 23.8" Full HD IPS Ergonomic Office Monitor',
    slug: 'lenovo-thinkvision-e24-28-23-8-ips-monitor',
    brand: 'Lenovo',
    category: 'monitor',
    categoryName: 'Monitors',
    regularPrice: 19500,
    discountPrice: 17800,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 19,
    stockStatus: 'In Stock',
    stockCount: 25,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Display: 23.8-inch Full HD (1920x1080) 3-Side NearEdgeless IPS',
      'Certification: TÜV Rheinland Eye Comfort Certified',
      'Connectivity: HDMI 1.4, DisplayPort 1.2, VGA Inputs',
      'Stand: Fully Ergonomic Tilt, Lift, Swivel & Pivot Support'
    ],
    specifications: {
      'Display Specs': [
        { label: 'Screen Size', value: '23.8 Inches' }
      ]
    },
    warranty: '3 Years Lenovo Warranty',
    emiAvailable: true,
    emiStartingBDT: 1483,
    reviews: [],
    questions: [],
    createdDate: '2024-01-20'
  },
  {
    id: 'prod-mon-006',
    name: 'HP OMEN 27u 4K UHD 144Hz HDMI 2.1 Gaming Monitor',
    slug: 'hp-omen-27u-4k-uhd-144hz-gaming-monitor',
    brand: 'HP',
    category: 'monitor',
    categoryName: 'Monitors',
    badge: 'New',
    regularPrice: 78000,
    discountPrice: 72500,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 15,
    stockStatus: 'In Stock',
    stockCount: 7,
    isFeatured: true,
    isGaming: true,
    images: [
      'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Display: 27-inch 4K UHD (3840 x 2160) IPS Display',
      'Refresh Rate: 144Hz with HDMI 2.1 (PS5 & Xbox Series X 4K 120Hz Ready)',
      'Color & HDR: VESA DisplayHDR 400 & DCI-P3 95%',
      'Lighting: ARGB Rear Lighting with OMEN Gaming Hub Integration'
    ],
    specifications: {
      'Display Specs': [
        { label: 'Screen Size', value: '27 Inches 4K' }
      ]
    },
    warranty: '3 Years HP Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 6041,
    reviews: [],
    questions: [],
    createdDate: '2024-03-22'
  },
`;

const targetStr = 'export const PRODUCTS: Product[] = [\n';
if (content.includes(targetStr)) {
  content = content.replace(targetStr, targetStr + monitorItems);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully added monitor items to PRODUCTS array!');
} else {
  console.error('Target string not found');
}
