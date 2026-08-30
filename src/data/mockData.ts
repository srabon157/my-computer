import type { Product, Category, Brand, BlogPost, StoreLocation, Coupon, Order } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'desktop',
    name: 'Desktop',
    nameBn: 'ডেস্কটপ',
    icon: 'Monitor',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=600&auto=format&fit=crop',
    itemCount: 94,
    popular: true,
    subCategories: [
      { id: 'brand-pc', name: 'Brand PC (Dell, HP, Asus, Acer, Lenovo)', nameBn: 'ব্র্যান্ড পিসি' },
      { id: 'custom-pc', name: 'Custom Built Desktop Rig', nameBn: 'কাস্টম পিসি' },
      { id: 'all-in-one', name: 'All-in-One PC', nameBn: 'অল-ইন-ওয়ান পিসি' },
      { id: 'apple-mac', name: 'Apple Mac Mini / Studio / iMac', nameBn: 'অ্যাপল ম্যাক' },
      { id: 'mini-pc', name: 'Portable Mini PC', nameBn: 'মিনি পিসি' },
      { id: 'gaming-desktop', name: 'High Performance Gaming PC', nameBn: 'গেমিং ডেস্কটপ' }
    ]
  },
  {
    id: 'laptop',
    name: 'Laptop',
    nameBn: 'ল্যাপটপ',
    icon: 'Laptop',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop',
    itemCount: 156,
    popular: true,
    subCategories: [
      { id: 'all-laptops', name: 'All Laptops & Notebooks', nameBn: 'সকল ল্যাপটপ' },
      { id: 'gaming-laptop', name: 'Gaming Laptop (ROG, Legion, Predator)', nameBn: 'গেমিং ল্যাপটপ' },
      { id: 'premium-ultrabook', name: 'Premium Ultrabook & OLED Laptops', nameBn: 'আল্ট্রাবুক' },
      { id: 'macbook', name: 'Apple MacBook (M3 / M2 Air & Pro)', nameBn: 'অ্যাপল ম্যাকবুক' },
      { id: 'business-laptop', name: 'Business & Office Laptops', nameBn: 'বিজনেস ল্যাপটপ' },
      { id: 'budget-laptop', name: 'Budget Student Laptops', nameBn: 'বাজেট ল্যাপটপ' }
    ]
  },
  {
    id: 'component',
    name: 'Component',
    nameBn: 'কম্পোনেন্ট',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=600&auto=format&fit=crop',
    itemCount: 280,
    popular: true,
    subCategories: [
      { id: 'processor', name: 'Processor', nameBn: 'প্রসেসর', hasChildren: true },
      { id: 'cpu-cooler', name: 'CPU Cooler', nameBn: 'সিপিইউ কুলার', hasChildren: true },
      { id: 'motherboard', name: 'Motherboard', nameBn: 'মাদারবোর্ড', hasChildren: true },
      { id: 'graphics-card', name: 'Graphics Card', nameBn: 'গ্রাফিক্স কার্ড', hasChildren: true },
      { id: 'ram-desktop', name: 'RAM (Desktop)', nameBn: 'র‌্যাম (ডেস্কটপ)', hasChildren: true },
      { id: 'ram-laptop', name: 'RAM (Laptop)', nameBn: 'র‌্যাম (ল্যাপটপ)', hasChildren: true },
      { id: 'power-supply', name: 'Power Supply', nameBn: 'পাওয়ার সাপ্লাই', hasChildren: true },
      { id: 'hard-disk-drive', name: 'Hard Disk Drive', nameBn: 'হার্ড ডিস্ক ড্রাইভ', hasChildren: true },
      { id: 'portable-hdd', name: 'Portable Hard Disk Drive', nameBn: 'পোর্টেবল হার্ড ডিস্ক', hasChildren: true },
      { id: 'ssd', name: 'SSD', nameBn: 'এসএসডি', hasChildren: true },
      { id: 'portable-ssd', name: 'Portable SSD', nameBn: 'পোর্টেবল এসএসডি', hasChildren: true },
      { id: 'casing', name: 'Casing', nameBn: 'কেসিং', hasChildren: true },
      { id: 'casing-cooler', name: 'Casing Cooler', nameBn: 'কেসিং কুলার', hasChildren: true },
      { id: 'optical-disk-drive', name: 'Optical Disk Drive', nameBn: 'অপটিক্যাল ডিস্ক ড্রাইভ' },
      { id: 'vertical-gpu-holder', name: 'Vertical GPU Holder', nameBn: 'ভার্টিক্যাল জিপিইউ হোল্ডার' },
      { id: 'liquid-cooling', name: 'Water / Liquid Cooling', nameBn: 'লিকুইড কুলিং' },
      { id: 'component', name: 'Show All Component', nameBn: 'সকল কম্পোনেন্ট দেখুন', isShowAll: true }
    ]
  },
  {
    id: 'monitor',
    name: 'Monitor',
    nameBn: 'মনিটর',
    icon: 'Tv',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop',
    itemCount: 110,
    popular: true,
    subCategories: [
      { id: 'gaming-monitor', name: 'Gaming Monitor (144Hz–360Hz Fast IPS)', nameBn: 'গেমিং মনিটর' },
      { id: '4k-monitor', name: '4K UHD & 2K QHD Display', nameBn: '৪কে মনিটর' },
      { id: 'curved-monitor', name: 'Curved Ultra-Wide Displays', nameBn: 'কার্ভড মনিটর' },
      { id: 'oled-monitor', name: 'OLED & Mini-LED Displays', nameBn: 'ওএলইডি মনিটর' },
      { id: 'touch-monitor', name: 'Touch & Portable Monitors', nameBn: 'টাচ ও পোর্টেবল' }
    ]
  },
  {
    id: 'power',
    name: 'Power',
    nameBn: 'পাওয়ার',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    itemCount: 45,
    subCategories: [
      { id: 'online-ups', name: 'Online UPS (APC, Santak, MaxGreen)', nameBn: 'অনলাইন ইউপিএস' },
      { id: 'offline-ups', name: 'Offline UPS (650VA - 2000VA)', nameBn: 'অফলাইন ইউপিএস' },
      { id: 'ips-inverter', name: 'IPS & Solar Inverter Systems', nameBn: 'আইপিএস ও ইনভার্টার' },
      { id: 'voltage-stabilizer', name: 'Voltage Stabilizer & Surge Protector', nameBn: 'ভোল্টেজ স্ট্যাবিলাইজার' },
      { id: 'power-bank', name: 'High-Capacity Power Banks (65W/100W)', nameBn: 'পাওয়ার ব্যাংক' }
    ]
  },
  {
    id: 'phone',
    name: 'Phone',
    nameBn: 'ফোন',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
    itemCount: 78,
    popular: true,
    subCategories: [
      { id: 'apple-iphone', name: 'Apple iPhone (iPhone 16 / 15 Pro Max)', nameBn: 'আইফোন' },
      { id: 'samsung-phone', name: 'Samsung Galaxy (S24 Ultra & Z Fold)', nameBn: 'স্যামসাং ফোন' },
      { id: 'xiaomi-phone', name: 'Xiaomi / Redmi / POCO', nameBn: 'শাওমি ফোন' },
      { id: 'google-pixel', name: 'Google Pixel 9 / 8 Pro', nameBn: 'গুগল পিক্সেল' },
      { id: 'phone-accessories', name: 'Fast Chargers, Cables & Cases', nameBn: 'ফোন এক্সেসরিজ' }
    ]
  },
  {
    id: 'tablet',
    name: 'Tablet',
    nameBn: 'ট্যাবলেট',
    icon: 'Tablet',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop',
    itemCount: 42,
    subCategories: [
      { id: 'apple-ipad', name: 'Apple iPad (Pro M4, Air M2, Mini)', nameBn: 'অ্যাপল আইপ্যাড' },
      { id: 'samsung-tab', name: 'Samsung Galaxy Tab (S9 Ultra & A9)', nameBn: 'স্যামসাং ট্যাব' },
      { id: 'surface', name: 'Microsoft Surface Pro', nameBn: 'মাইক্রোসফট সারফেস' },
      { id: 'graphics-tablet', name: 'Graphics Drawing Tablets (Wacom / Huion)', nameBn: 'ড্রয়িং ট্যাবলেট' }
    ]
  },
  {
    id: 'office-equipment',
    name: 'Office Equipment',
    nameBn: 'অফিস ইকুইপমেন্ট',
    icon: 'Printer',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=600&auto=format&fit=crop',
    itemCount: 68,
    subCategories: [
      { id: 'printers', name: 'Laser & All-in-One InkTank Printers (Canon, HP, Epson)', nameBn: 'প্রিন্টার' },
      { id: 'projectors', name: 'Multimedia & 4K Projectors', nameBn: 'প্রজেক্টর' },
      { id: 'scanners', name: 'Document & Flatbed Scanners', nameBn: 'স্ক্যানার' },
      { id: 'photocopiers', name: 'Digital Photocopier Machines', nameBn: 'ফটোকপিয়ার' },
      { id: 'barcode-pos', name: 'Barcode Scanners & POS Cash Drawers', nameBn: 'পিওএস ও বারকোড' },
      { id: 'shredders', name: 'Paper Shredders & Lamination', nameBn: 'কাগজ কাটার মেশিন' }
    ]
  },
  {
    id: 'camera',
    name: 'Camera',
    nameBn: 'ক্যামেরা',
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop',
    itemCount: 54,
    popular: true,
    subCategories: [
      { id: 'action-camera', name: 'Action Camera', nameBn: 'অ্যাকশন ক্যামেরা', hasChildren: true },
      { id: 'dslr', name: 'DSLR', nameBn: 'ডিএসএলআর', hasChildren: true },
      { id: 'mirrorless-camera', name: 'Mirrorless Camera', nameBn: 'মিররলেস ক্যামেরা', hasChildren: true },
      { id: 'digital-camera', name: 'Digital Camera', nameBn: 'ডিজিটাল ক্যামেরা', hasChildren: true },
      { id: 'video-camera', name: 'Video Camera', nameBn: 'ভিডিও ক্যামেরা', hasChildren: true },
      { id: 'handycam', name: 'Handycam', nameBn: 'হ্যান্ডিক্যাম' },
      { id: 'dash-cam', name: 'Dash Cam', nameBn: 'ড্যাশ ক্যাম', hasChildren: true },
      { id: 'instant-camera', name: 'Instant Camera', nameBn: 'ইনস্ট্যান্ট ক্যামেরা' },
      { id: 'body-camera', name: 'Body Camera', nameBn: 'বডি ক্যামেরা' },
      { id: 'camera-lenses', name: 'Camera Lenses', nameBn: 'ক্যামেরা লেন্স', hasChildren: true },
      { id: 'camera-tripod', name: 'Camera Tripod', nameBn: 'ক্যামেরা ট্রাইপড', hasChildren: true },
      { id: 'camera-accessories', name: 'Camera Accessories', nameBn: 'ক্যামেরা এক্সেসরিজ', hasChildren: true },
      { id: 'gimbal', name: 'Gimbal', nameBn: 'গিম্বল' },
      { id: 'camera', name: 'Show All Camera', nameBn: 'সকল ক্যামেরা দেখুন', isShowAll: true }
    ]
  },
  {
    id: 'security',
    name: 'Security',
    nameBn: 'সিকিউরিটি',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop',
    itemCount: 62,
    popular: true,
    subCategories: [
      { id: 'portable-wifi-camera', name: 'Portable WiFi Camera', nameBn: 'পোর্টেবল ওয়াইফাই ক্যামেরা', hasChildren: true },
      { id: 'ip-camera', name: 'IP Camera', nameBn: 'আইপি ক্যামেরা', hasChildren: true },
      { id: 'cc-camera', name: 'CC Camera', nameBn: 'সিসি ক্যামেরা', hasChildren: true },
      { id: 'ptz-camera', name: 'PTZ Camera', nameBn: 'পিটিজেড ক্যামেরা', hasChildren: true },
      { id: 'cc-camera-package', name: 'CC Camera Package', nameBn: 'সিসি ক্যামেরা প্যাকেজ', hasChildren: true },
      { id: 'ip-camera-package', name: 'IP Camera Package', nameBn: 'আইপি ক্যামেরা প্যাকেজ', hasChildren: true },
      { id: 'dvr', name: 'DVR', nameBn: 'ডিভিআর', hasChildren: true },
      { id: 'nvr', name: 'NVR', nameBn: 'এনভিআর', hasChildren: true },
      { id: 'xvr', name: 'XVR', nameBn: 'এক্সভিআর', hasChildren: true },
      { id: 'cc-camera-accessories', name: 'CC Camera Accessories', nameBn: 'সিসি ক্যামেরা এক্সেসরিজ' },
      { id: 'door-lock', name: 'Door Lock', nameBn: 'ডোর লক', hasChildren: true },
      { id: 'smart-door-bell', name: 'Smart Door Bell', nameBn: 'স্মার্ট ডোর বেল' },
      { id: 'access-control', name: 'Access Control', nameBn: 'অ্যাক্সেস কন্ট্রোল', hasChildren: true },
      { id: 'entrance-control', name: 'Entrance Control', nameBn: 'এন্ট্রান্স কন্ট্রোল' },
      { id: 'digital-locker-vault', name: 'Digital Locker & Vault', nameBn: 'ডিজিটাল লকার ও ভল্ট' },
      { id: 'kvm-switch', name: 'KVM Switch', nameBn: 'কেভিএম সুইচ' },
      { id: 'security', name: 'Show All Security', nameBn: 'সকল সিকিউরিটি দেখুন', isShowAll: true }
    ]
  },
  {
    id: 'networking',
    name: 'Networking',
    nameBn: 'নেটওয়ার্কিং',
    icon: 'Wifi',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop',
    itemCount: 76,
    subCategories: [
      { id: 'wifi-routers', name: 'Wi-Fi 6 / Wi-Fi 7 Gigabit Routers', nameBn: 'ওয়াইফাই রাউটার' },
      { id: 'mesh-wifi', name: 'Mesh Whole-Home Wi-Fi Systems', nameBn: 'মেশ ওয়াইফাই' },
      { id: 'network-switch', name: 'Managed & PoE Network Switches', nameBn: 'নেটওয়ার্ক সুইচ' },
      { id: 'access-points', name: 'Ceiling Access Points & Outdoor Antennas', nameBn: 'অ্যাক্সেস পয়েন্ট' },
      { id: 'cables-patch', name: 'Cat6 / Cat7 UTP Cables & Patch Panels', nameBn: 'নেটওয়ার্ক কেবল' },
      { id: 'server-rack', name: 'Wall Mount Server Racks & Fiber ONU', nameBn: 'সার্ভার র‍্যাক' }
    ]
  },
  {
    id: 'software',
    name: 'Software',
    nameBn: 'সফটওয়্যার',
    icon: 'Terminal',
    image: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?q=80&w=600&auto=format&fit=crop',
    itemCount: 35,
    subCategories: [
      { id: 'windows-os', name: 'Microsoft Windows 11 Pro Genuine License', nameBn: 'উইন্ডোজ ১১ প্রো' },
      { id: 'office-apps', name: 'Microsoft Office 365 Home & Business', nameBn: 'অফিস ৩৬৫' },
      { id: 'antivirus', name: 'Antivirus & Internet Security (Kaspersky, ESET, Bitdefender)', nameBn: 'অ্যান্টিভাইরাস' },
      { id: 'creative-software', name: 'Adobe Creative Cloud Genuine Subscription', nameBn: 'অ্যাডোবি সফটওয়্যার' },
      { id: 'server-os', name: 'Windows Server & SQL Database Licenses', nameBn: 'সার্ভার ওএস' }
    ]
  },
  {
    id: 'server-storage',
    name: 'Server & Storage',
    nameBn: 'সার্ভার ও স্টোরেজ',
    icon: 'Server',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    itemCount: 48,
    subCategories: [
      { id: 'rack-servers', name: 'Rack & Tower Enterprise Servers (Dell PowerEdge, HPE)', nameBn: 'সার্ভার' },
      { id: 'nas-storage', name: 'Network Attached Storage (Synology & QNAP NAS)', nameBn: 'ন্যাস স্টোরেজ' },
      { id: 'server-hdd', name: 'Enterprise SAS & IronWolf Pro Hard Drives', nameBn: 'এন্টারপ্রাইজ হার্ডডিস্ক' },
      { id: 'server-ram', name: 'ECC Registered Server RAM Modules', nameBn: 'সার্ভার র‍্যাম' },
      { id: 'server-accessories', name: 'KVM Switches, Rails & Server Power Supplies', nameBn: 'সার্ভার এক্সেসরিজ' }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    nameBn: 'এক্সেসরিজ',
    icon: 'Keyboard',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop',
    itemCount: 165,
    popular: true,
    subCategories: [
      { id: 'keyboards', name: 'Mechanical & Wireless Keyboards', nameBn: 'কীবোর্ড' },
      { id: 'mouse', name: 'Wireless Ergonomic & Precision Mice', nameBn: 'মাউস' },
      { id: 'audio-headphone', name: 'Studio Headphones & Bluetooth Speakers', nameBn: 'হেডফোন ও অডিও' },
      { id: 'hubs-adapters', name: 'USB-C Hubs, Docks & DisplayPort Cables', nameBn: 'ইউএসবি হাব ও ক্যাবল' },
      { id: 'laptop-stand', name: 'Aluminum Laptop Stands & Cooling Pads', nameBn: 'ল্যাপটপ স্ট্যান্ড' },
      { id: 'backpacks', name: 'Waterproof Laptop Backpacks & Sleeves', nameBn: 'ল্যাপটপ ব্যাগ' }
    ]
  },
  {
    id: 'gadget',
    name: 'Gadget',
    nameBn: 'গ্যাজেট',
    icon: 'Watch',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
    itemCount: 95,
    popular: true,
    subCategories: [
      { id: 'smart-watch', name: 'Smart Watches (Apple Watch, Galaxy Watch, Amazfit)', nameBn: 'স্মার্ট ওয়াচ' },
      { id: 'tws-earbuds', name: 'TWS Noise Cancelling Earbuds (AirPods, Galaxy Buds)', nameBn: 'টিডব্লিউএস ইয়ারবাডস' },
      { id: 'drones', name: 'DJI Camera Drones & Accessories', nameBn: 'ক্যামেরা ড্রোন' },
      { id: 'smart-lights', name: 'RGB Smart LED Strips & Desk Lights', nameBn: 'স্মার্ট লাইটিং' },
      { id: 'stylus-pen', name: 'Stylus & Apple Pencil', nameBn: 'স্টাইলাস পেন' }
    ]
  },
  {
    id: 'gaming',
    name: 'Gaming',
    nameBn: 'গেমিং',
    icon: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop',
    itemCount: 120,
    popular: true,
    subCategories: [
      { id: 'gaming-consoles', name: 'Gaming Consoles (Sony PS5 Slim, Xbox Series X, Switch OLED)', nameBn: 'গেমিং কনসোল' },
      { id: 'game-controllers', name: 'Wireless Gamepads & Racing Wheels', nameBn: 'গেমপ্যাড ও কন্ট্রোলার' },
      { id: 'gaming-chairs', name: 'Ergonomic Gaming Chairs & RGB Desks', nameBn: 'গেমিং চেয়ার ও ডেস্ক' },
      { id: 'gaming-peripherals', name: 'RGB Mechanical Gaming Keyboards & High DPI Mice', nameBn: 'গেমিং কীবোর্ড ও মাউস' },
      { id: 'gaming-audio', name: '7.1 Surround Gaming Headsets & Microphones', nameBn: 'গেমিং হেডসেট' },
      { id: 'gaming-streaming', name: 'Elgato Capture Cards & Stream Decks', nameBn: 'স্ট্রিমিং গিয়ার' }
    ]
  },
  {
    id: 'tv',
    name: 'TV',
    nameBn: 'টিভি',
    icon: 'Tv2',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600&auto=format&fit=crop',
    itemCount: 58,
    popular: true,
    subCategories: [
      { id: '4k-smart-tv', name: '4K Ultra HD Smart Google TVs', nameBn: '৪কে স্মার্ট টিভি' },
      { id: 'oled-qled', name: 'LG OLED, Samsung Neo QLED & Sony Bravia XR', nameBn: 'ওএলইডি ও কিউএলইডি' },
      { id: 'interactive-display', name: 'Interactive Flat Touch Panels for Conference & Education', nameBn: 'ইন্টারেক্টিভ প্যানেল' },
      { id: 'tv-box', name: 'Android TV Box (Xiaomi Mi Box 4K, Apple TV 4K)', nameBn: 'অ্যান্ড্রয়েড টিভি বক্স' },
      { id: 'soundbars', name: 'Dolby Atmos Home Theater Soundbars', nameBn: 'সাউন্ডবার' },
      { id: 'tv-mounts', name: 'Hydraulic Wall Mounts & Mobile TV Stands', nameBn: 'টিভি মাউন্ট' }
    ]
  },
  {
    id: 'appliance',
    name: 'Appliance',
    nameBn: 'অ্যাপ্লায়েন্স',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop',
    itemCount: 42,
    subCategories: [
      { id: 'inverter-ac', name: 'Inverter Air Conditioners (Gree, General, Haier 1.5 - 2 Ton)', nameBn: 'ইনভার্টার এসি' },
      { id: 'refrigerators', name: 'Smart Inverter Refrigerators & Deep Freezers', nameBn: 'ফ্রিজ' },
      { id: 'microwave-ovens', name: 'Convection & Grill Microwave Ovens', nameBn: 'মাইক্রোওয়েভ ওভেন' },
      { id: 'washing-machines', name: 'Front & Top Load Automatic Washing Machines', nameBn: 'ওয়াশিং মেশিন' },
      { id: 'air-purifiers', name: 'HEPA Filter Smart Air Purifiers & Dehumidifiers', nameBn: 'এয়ার পিউরিফায়ার' },
      { id: 'vacuum-cleaners', name: 'Cordless Handheld & Robot Vacuum Cleaners', nameBn: 'ভ্যাকুয়াম ক্লিনার' }
    ]
  }
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
  },

  // 19. IMOU Ranger 2 Portable WiFi Security Camera
  {
    id: 'prod-019',
    name: 'IMOU Ranger 2 4MP 360° Smart Portable Wi-Fi IP Security Camera with Human Detection',
    slug: 'imou-ranger-2-4mp-portable-wifi-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'portable-wifi-camera',
    badge: 'Hot',
    regularPrice: 3800,
    discountPrice: 3250,
    discountPercentage: 14,
    rating: 4.8,
    reviewCount: 64,
    stockStatus: 'In Stock',
    stockCount: 50,
    isSmartHome: true,
    images: [
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '4MP QHD Video & 360° Panoramic View (Pan & Tilt)',
      'AI Smart Human Detection & Smart Tracking',
      'Two-Way Audio with Built-in Siren Alarm',
      'Supports Micro SD Card up to 256GB & Cloud Storage'
    ],
    specifications: {
      'Camera': [
        { label: 'Resolution', value: '4MP (2560 x 1440)' },
        { label: 'Night Vision', value: '10m (33ft) Distance' },
        { label: 'Connectivity', value: 'Wi-Fi IEEE802.11b/g/n (2.4GHz)' }
      ]
    },
    warranty: '1 Year Brand Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-03-15'
  },

  // 20. Dahua 4MP WizSense PTZ IP Camera
  {
    id: 'prod-020',
    name: 'Dahua 4MP 25x Starlight IR WizSense PTZ Network Security Camera (SD49425XB-HNR)',
    slug: 'dahua-4mp-wizsense-ptz-camera',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ptz-camera',
    badge: 'Best Seller',
    regularPrice: 42000,
    discountPrice: 38500,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 28,
    stockStatus: 'In Stock',
    stockCount: 15,
    isSmartHome: true,
    images: [
      'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '1/2.8" STARVIS™ CMOS with 4MP Crystal Clear Resolution',
      'Powerful 25x Optical Zoom for long-distance surveillance',
      'Starlight Technology with 100m IR distance',
      'Perimeter Protection, Face Detection & Auto Tracking'
    ],
    specifications: {
      'Specs': [
        { label: 'Optical Zoom', value: '25x' },
        { label: 'IR Distance', value: '100 meters' },
        { label: 'Protection', value: 'IP66 Weatherproof & IK10 Vandal-Proof' }
      ]
    },
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 3208,
    reviews: [],
    questions: [],
    createdDate: '2024-02-20'
  },

  // 21. Smart Fingerprint Digital Door Lock
  {
    id: 'prod-021',
    name: 'Tuya Smart Fingerprint & Face Recognition Digital Door Lock with App & Keypad',
    slug: 'tuya-smart-fingerprint-digital-door-lock',
    brand: 'Xiaomi',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'door-lock',
    badge: 'New',
    regularPrice: 22000,
    discountPrice: 18500,
    discountPercentage: 16,
    rating: 4.9,
    reviewCount: 41,
    stockStatus: 'In Stock',
    stockCount: 18,
    isSmartHome: true,
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      '5 Unlock Methods: 3D Face ID, Fingerprint, Passcode, RFID Card & Mobile App',
      'Built-in HD Wide Angle Camera & Smart Doorbell',
      'Auto-Locking Mechanism with Tamper Alarm',
      'Rechargeable Lithium-ion Battery with USB Emergency Port'
    ],
    specifications: {
      'Specs': [
        { label: 'Material', value: 'Zinc Alloy + Tempered Glass' },
        { label: 'Door Thickness', value: '38mm - 120mm' },
        { label: 'Battery Life', value: 'Up to 6 Months per Charge' }
      ]
    },
    warranty: '2 Years Replacement Warranty',
    emiAvailable: true,
    emiStartingBDT: 1541,
    reviews: [],
    questions: [],
    createdDate: '2024-03-01'
  },

  // 22. ZKTeco Face & Fingerprint Access Control
  {
    id: 'prod-022',
    name: 'ZKTeco MB20 Face & Fingerprint Time Attendance Access Control Terminal',
    slug: 'zkteco-mb20-face-fingerprint-access-control',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'access-control',
    regularPrice: 11500,
    discountPrice: 9800,
    discountPercentage: 15,
    rating: 4.7,
    reviewCount: 52,
    stockStatus: 'In Stock',
    stockCount: 30,
    images: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1000&auto=format&fit=crop'
    ],
    shortSpecs: [
      'Multi-biometric verification: Face, Fingerprint, RFID & Password',
      'Capacity: 1,000 Faces, 1,000 Fingerprints, 100,000 Logs',
      '2.8-inch TFT Color Screen with intuitive UI',
      'TCP/IP & USB Host for easy data management & reports'
    ],
    specifications: {
      'Specs': [
        { label: 'Face Capacity', value: '1,000' },
        { label: 'Fingerprint Capacity', value: '1,000' },
        { label: 'Communication', value: 'TCP/IP, USB-Host' }
      ]
    },
    warranty: '1 Year Warranty',
    emiAvailable: false,
    reviews: [],
    questions: [],
    createdDate: '2024-01-28'
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
