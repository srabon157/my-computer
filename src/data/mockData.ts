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
      { id: 'lg-monitors', name: 'LG', nameBn: 'LG' },
      { id: 'samsung-monitors', name: 'Samsung', nameBn: 'স্যামসাং' },
      { id: 'asus-monitors', name: 'Asus', nameBn: 'আসুস' },
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
      {
        id: 'action-camera',
        name: 'Action Camera',
        nameBn: 'অ্যাকশন ক্যামেরা',
        hasChildren: true,
        children: [
          { id: 'action-camera', name: 'GoPro Action Camera', nameBn: 'গোপ্রো অ্যাকশন ক্যামেরা', brand: 'GoPro' },
          { id: 'action-camera', name: 'DJI Action Series', nameBn: 'ডিজেআই অ্যাকশন ক্যামেরা', brand: 'DJI' },
          { id: 'action-camera', name: 'Insta360 360° Cam', nameBn: 'ইনস্টা৩৬০ ক্যামেরা', brand: 'Insta360' },
          { id: 'action-camera', name: 'SJCAM Action Camera', nameBn: 'এসজেক্যাম ক্যামেরা', brand: 'SJCAM' },
          { id: 'action-camera', name: 'All Action Cameras', nameBn: 'সকল অ্যাকশন ক্যামেরা' }
        ]
      },
      {
        id: 'dslr',
        name: 'DSLR',
        nameBn: 'ডিএসএলআর',
        hasChildren: true,
        children: [
          { id: 'dslr', name: 'Canon DSLR Cameras', nameBn: 'ক্যানন ডিএসএলআর', brand: 'Canon' },
          { id: 'dslr', name: 'Nikon DSLR Cameras', nameBn: 'নিকন ডিএসএলআর', brand: 'Nikon' },
          { id: 'dslr', name: 'All DSLR Cameras', nameBn: 'সকল ডিএসএলআর' }
        ]
      },
      {
        id: 'mirrorless-camera',
        name: 'Mirrorless Camera',
        nameBn: 'মিররলেস ক্যামেরা',
        hasChildren: true,
        children: [
          { id: 'mirrorless-camera', name: 'Sony Alpha Mirrorless', nameBn: 'সনি আলফা মিররলেস', brand: 'Sony' },
          { id: 'mirrorless-camera', name: 'Canon EOS R Series', nameBn: 'ক্যানন ইওএস আর', brand: 'Canon' },
          { id: 'mirrorless-camera', name: 'Fujifilm X-Series', nameBn: 'ফুজিফিল্ম মিররলেস', brand: 'Fujifilm' },
          { id: 'mirrorless-camera', name: 'Nikon Z-Series', nameBn: 'নিকন জেড মিররলেস', brand: 'Nikon' },
          { id: 'mirrorless-camera', name: 'All Mirrorless Cameras', nameBn: 'সকল মিররলেস' }
        ]
      },
      {
        id: 'digital-camera',
        name: 'Digital Camera',
        nameBn: 'ডিজিটাল ক্যামেরা',
        hasChildren: true,
        children: [
          { id: 'digital-camera', name: 'Canon PowerShot Series', nameBn: 'ক্যানন ডিজিটাল', brand: 'Canon' },
          { id: 'digital-camera', name: 'Sony Cyber-shot Series', nameBn: 'সনি ডিজিটাল', brand: 'Sony' },
          { id: 'digital-camera', name: 'All Digital Cameras', nameBn: 'সকল ডিজিটাল ক্যামেরা' }
        ]
      },
      {
        id: 'video-camera',
        name: 'Video Camera',
        nameBn: 'ভিডিও ক্যামেরা',
        hasChildren: true,
        children: [
          { id: 'video-camera', name: 'Sony Professional Camcorder', nameBn: 'সনি ক্যামকর্ডার', brand: 'Sony' },
          { id: 'video-camera', name: 'Canon Cinema EOS', nameBn: 'ক্যানন সিনেমা ক্যামেরা', brand: 'Canon' },
          { id: 'video-camera', name: 'Panasonic 4K Video Cam', nameBn: 'প্যানাসনিক ভিডিও' },
          { id: 'video-camera', name: 'All Video Cameras', nameBn: 'সকল ভিডিও ক্যামেরা' }
        ]
      },
      { id: 'handycam', name: 'Handycam', nameBn: 'হ্যান্ডিক্যাম' },
      {
        id: 'dash-cam',
        name: 'Dash Cam',
        nameBn: 'ড্যাশ ক্যাম',
        hasChildren: true,
        children: [
          { id: 'dash-cam', name: '70mai Smart Dash Cam', nameBn: '৭০মাই ড্যাশ ক্যাম' },
          { id: 'dash-cam', name: 'Hikvision Dash Cam', nameBn: 'হিকভিশন ড্যাশ ক্যাম', brand: 'Hikvision' },
          { id: 'dash-cam', name: 'DDPAI Car Dash Cam', nameBn: 'ডিডিপিএআই ড্যাশ ক্যাম' },
          { id: 'dash-cam', name: 'All Dash Cams', nameBn: 'সকল ড্যাশ ক্যাম' }
        ]
      },
      { id: 'instant-camera', name: 'Instant Camera', nameBn: 'ইনস্ট্যান্ট ক্যামেরা' },
      { id: 'body-camera', name: 'Body Camera', nameBn: 'বডি ক্যামেরা' },
      {
        id: 'camera-lenses',
        name: 'Camera Lenses',
        nameBn: 'ক্যামেরা লেন্স',
        hasChildren: true,
        children: [
          { id: 'camera-lenses', name: 'Canon RF & EF Lenses', nameBn: 'ক্যানন লেন্স', brand: 'Canon' },
          { id: 'camera-lenses', name: 'Sony E-Mount Lenses', nameBn: 'সনি ই-মাউন্ট লেন্স', brand: 'Sony' },
          { id: 'camera-lenses', name: 'Nikon Z & F Lenses', nameBn: 'নিকন লেন্স', brand: 'Nikon' },
          { id: 'camera-lenses', name: 'Sigma Art & Contemporary', nameBn: 'সিগমা লেন্স', brand: 'Sigma' },
          { id: 'camera-lenses', name: 'Tamron Zoom Lenses', nameBn: 'ট্যামরন লেন্স', brand: 'Tamron' },
          { id: 'camera-lenses', name: 'All Camera Lenses', nameBn: 'সকল ক্যামেরা লেন্স' }
        ]
      },
      {
        id: 'camera-tripod',
        name: 'Camera Tripod',
        nameBn: 'ক্যামেরা ট্রাইপড',
        hasChildren: true,
        children: [
          { id: 'camera-tripod', name: 'Benro Professional Tripods', nameBn: 'বেনরো ট্রাইপড', brand: 'Benro' },
          { id: 'camera-tripod', name: 'Manfrotto Premium Tripods', nameBn: 'ম্যানফ্রোটো ট্রাইপড', brand: 'Manfrotto' },
          { id: 'camera-tripod', name: 'Digipod Light Tripods', nameBn: 'ডিজিপড ট্রাইপড' },
          { id: 'camera-tripod', name: 'Yunteng Mobile & DSLR Tripods', nameBn: 'ইউনটেং ট্রাইপড' },
          { id: 'camera-tripod', name: 'All Camera Tripods', nameBn: 'সকল ট্রাইপড' }
        ]
      },
      {
        id: 'camera-accessories',
        name: 'Camera Accessories',
        nameBn: 'ক্যামেরা এক্সেসরিজ',
        hasChildren: true,
        children: [
          { id: 'camera-accessories', name: 'Camera Backpack & Bags', nameBn: 'ক্যামেরা ব্যাগ' },
          { id: 'camera-accessories', name: 'Battery, Charger & Grip', nameBn: 'ব্যাটারি ও চার্জার' },
          { id: 'camera-accessories', name: 'SD & CFexpress Memory Cards', nameBn: 'মেমোরি কার্ড' },
          { id: 'camera-accessories', name: 'Speedlite Flash & Video Lights', nameBn: 'ফ্ল্যাশ ও লাইট' },
          { id: 'camera-accessories', name: 'UV Filters & Lens Hoods', nameBn: 'ফিল্টার ও হুড' },
          { id: 'camera-accessories', name: 'All Camera Accessories', nameBn: 'সকল এক্সেসরিজ' }
        ]
      },
      {
        id: 'gimbal',
        name: 'Gimbal',
        nameBn: 'গিম্বল',
        hasChildren: true,
        children: [
          { id: 'gimbal', name: 'DJI RS & Osmo Mobile Gimbal', nameBn: 'ডিজেআই গিম্বল', brand: 'DJI' },
          { id: 'gimbal', name: 'Zhiyun Crane & Smooth Gimbal', nameBn: 'ঝিয়ুন গিম্বল', brand: 'Zhiyun' },
          { id: 'gimbal', name: 'All Gimbals & Stabilizers', nameBn: 'সকল গিম্বল' }
        ]
      },
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
      },
      { id: 'portable-wifi-camera', name: 'Portable WiFi Camera', nameBn: 'পোর্টেবল ওয়াইফাই ক্যামেরা', hasChildren: true },
      { id: 'ip-camera', name: 'IP Camera', nameBn: 'আইপি ক্যামেরা', hasChildren: true },
      
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
    itemCount: 145,
    popular: true,
    subCategories: [
      {
        id: 'wifi-routers',
        name: 'Router',
        nameBn: 'রাউটার',
        hasChildren: true,
        children: [
          { id: 'wifi-routers', name: 'TP-Link Router', nameBn: 'টিপি-লিংক রাউটার', brand: 'TP-Link' },
          { id: 'wifi-routers', name: 'Tenda Router', nameBn: 'টেন্ডা রাউটার', brand: 'Tenda' },
          { id: 'wifi-routers', name: 'ASUS Router', nameBn: 'আসুস রাউটার', brand: 'Asus' },
          { id: 'wifi-routers', name: 'D-Link Router', nameBn: 'ডি-লিংক রাউটার', brand: 'D-Link' },
          { id: 'wifi-routers', name: 'MikroTik Router', nameBn: 'মিকরোটিক রাউটার', brand: 'MikroTik' },
          { id: 'wifi-routers', name: 'Xiaomi Router', nameBn: 'শাওমি রাউটার', brand: 'Xiaomi' },
          { id: 'wifi-routers', name: 'Mercusys Router', nameBn: 'মারকিউসিস রাউটার', brand: 'Mercusys' },
          { id: 'wifi-routers', name: 'Netgear Router', nameBn: 'নেটগিয়ার রাউটার', brand: 'Netgear' },
          { id: 'wifi-routers', name: 'Huawei Router', nameBn: 'হুয়াওয়ে রাউটার', brand: 'Huawei' },
          { id: 'wifi-routers', name: 'All Routers', nameBn: 'সকল রাউটার' }
        ]
      },
      { id: '4g-lte-router', name: '4G LTE Router', nameBn: '৪জি এলটিই রাউটার' },
      { id: 'mesh-wifi', name: 'Mesh Whole-Home Wi-Fi', nameBn: 'মেশ ওয়াইফাই' },
      { id: 'mikrotik', name: 'MikroTik RouterBOARD', nameBn: 'মিকরোটিক রাউটার' },
      {
        id: 'network-switch',
        name: 'Network Switch',
        nameBn: 'নেটওয়ার্ক সুইচ',
        hasChildren: true,
        children: [
          { id: 'network-switch', name: 'PoE Switch', nameBn: 'পিওই সুইচ' },
          { id: 'network-switch', name: 'Gigabit Switch', nameBn: 'গিগাবিট সুইচ' },
          { id: 'network-switch', name: 'Managed Switch', nameBn: 'ম্যানেজড সুইচ' },
          { id: 'network-switch', name: 'All Switches', nameBn: 'সকল সুইচ' }
        ]
      },
      { id: 'access-points', name: 'Access Point', nameBn: 'অ্যাক্সেস পয়েন্ট' },
      {
        id: 'onu-device',
        name: 'Optical Fiber Device (ONU)',
        nameBn: 'ওএনইউ / ফাইবার ডিভাইস',
        hasChildren: true,
        children: [
          { id: 'gpon-onu', name: 'ZTE GPON ONU', nameBn: 'জেডটিই ওএনইউ', brand: 'ZTE' },
          { id: 'gpon-onu', name: 'Huawei GPON ONU', nameBn: 'হুয়াওয়ে ওএনইউ', brand: 'Huawei' },
          { id: 'gpon-onu', name: 'FiberHome GPON ONU', nameBn: 'ফাইবারহোম ওএনইউ', brand: 'FiberHome' },
          { id: 'gpon-onu', name: 'TP-Link GPON ONU', nameBn: 'টিপি-লিংক ওএনইউ', brand: 'TP-Link' },
          { id: 'epon-onu', name: 'VSOL EPON/GPON ONU', nameBn: 'ভিসল ওএনইউ', brand: 'VSOL' },
          { id: 'onu-device', name: 'All ONU Devices', nameBn: 'সকল ওএনইউ' }
        ]
      },
      { id: 'cables-patch', name: 'UTP Cables & Patch Cord', nameBn: 'নেটওয়ার্ক কেবল' },
      { id: 'server-rack', name: 'Server Rack', nameBn: 'সার্ভার র‍্যাক' },
      { id: 'networking', name: 'Show All Networking Products', nameBn: 'সকল নেটওয়ার্কিং পণ্য', isShowAll: true }
    ]
  },
  {
    id: 'onu-device',
    name: 'ONU / ONT Device',
    nameBn: 'ওএনইউ / ফাইবার ডিভাইস',
    icon: 'Wifi',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    itemCount: 28,
    subCategories: [
      {
        id: 'gpon-onu',
        name: 'GPON ONU / ONT',
        nameBn: 'জিপন ওএনইউ',
        hasChildren: true,
        children: [
          { id: 'gpon-onu', name: 'ZTE GPON ONU', nameBn: 'জেডটিই জিপন', brand: 'ZTE' },
          { id: 'gpon-onu', name: 'Huawei GPON ONU', nameBn: 'হুয়াওয়ে জিপন', brand: 'Huawei' },
          { id: 'gpon-onu', name: 'FiberHome GPON', nameBn: 'ফাইবারহোম জিপন', brand: 'FiberHome' },
          { id: 'gpon-onu', name: 'TP-Link GPON', nameBn: 'টিপি-লিংক জিপন', brand: 'TP-Link' },
          { id: 'gpon-onu', name: 'All GPON ONU', nameBn: 'সকল জিপন ওএনইউ' }
        ]
      },
      {
        id: 'epon-onu',
        name: 'EPON ONU Devices',
        nameBn: 'ইপন ওএনইউ',
        hasChildren: true,
        children: [
          { id: 'epon-onu', name: 'VSOL EPON ONU', nameBn: 'ভিসল ইপন', brand: 'VSOL' },
          { id: 'epon-onu', name: 'FiberHome EPON', nameBn: 'ফাইবারহোম ইপন', brand: 'FiberHome' },
          { id: 'epon-onu', name: 'All EPON ONU', nameBn: 'সকল ইপন ওএনইউ' }
        ]
      },
      { id: 'xgs-pon-onu', name: 'XGS-PON ONU (10G Fiber)', nameBn: '১০জি এক্সজিএস-পন ওএনইউ' },
      { id: 'wifi-onu', name: 'ONU with Built-in Wi-Fi', nameBn: 'ওয়াইফাই সহ ওএনইউ' },
      { id: 'onu-device', name: 'Show All ONU / ONT Devices', nameBn: 'সকল ওএনইউ দেখুন', isShowAll: true }
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
  { name: 'EZVIZ', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/EZVIZ_Logo.svg/200px-EZVIZ_Logo.svg.png', category: 'Smart Wi-Fi Security Cameras', popular: true },
  { name: 'Imou', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Imou_Logo.png/200px-Imou_Logo.png', category: 'Smart Home Security Cameras', popular: true },
  { name: 'Uniview', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uniview_Logo.svg/200px-Uniview_Logo.svg.png', category: 'IP Surveillance & PTZ', popular: false },
  { name: 'ZKTeco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/ZKTeco_Logo.svg/200px-ZKTeco_Logo.svg.png', category: 'Biometrics & Smart Door Locks', popular: true },
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
  { name: 'TP-Link', logo: 'https://cdn.worldvectorlogo.com/logos/tp-link-2.svg', category: 'Routers, Switches, ONU', popular: true },
  { name: 'Tenda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tenda_logo.svg/200px-Tenda_logo.svg.png', category: 'Routers, Wi-Fi Devices', popular: true },
  { name: 'D-Link', logo: 'https://cdn.worldvectorlogo.com/logos/d-link.svg', category: 'Routers, Switches, Network Gear', popular: true },
  { name: 'MikroTik', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/MikroTik_logo.svg/200px-MikroTik_logo.svg.png', category: 'RouterBOARD, Switches, ISP Equipment', popular: true },
  { name: 'Netgear', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Netgear_Logo.svg/200px-Netgear_Logo.svg.png', category: 'Nighthawk Routers, Switches', popular: false },
  { name: 'Mercusys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mercusys_Logo.svg/200px-Mercusys_Logo.svg.png', category: 'Budget Routers, Wi-Fi 6', popular: false },
  { name: 'Huawei', logo: 'https://cdn.worldvectorlogo.com/logos/huawei-2.svg', category: 'Routers, ONU/ONT, Enterprise', popular: true },
  { name: 'ZTE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/ZTE_Logo.svg/200px-ZTE_Logo.svg.png', category: 'ONU, GPON Devices, Routers', popular: true },
  { name: 'FiberHome', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/FiberHome_logo.svg/200px-FiberHome_logo.svg.png', category: 'GPON/EPON ONU Devices', popular: false },
  { name: 'Nokia', logo: 'https://cdn.worldvectorlogo.com/logos/nokia.svg', category: 'GPON ONT, ISP Equipment', popular: false },
  { name: 'VSOL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/VSOL_logo.png/200px-VSOL_logo.png', category: 'ONU/ONT, EPON/GPON', popular: false },
  { name: 'CIG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/CIG_logo.png/200px-CIG_logo.png', category: 'XGS-PON, 10G ONU Devices', popular: false }
];

export const PRODUCTS: Product[] = [

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
  },

  // ─────────────────────────────────────────────
  // ROUTERS — Bangladesh Market (approx. prices)
  // ─────────────────────────────────────────────

  // TP-Link Routers
  {
    id: 'prod-r001',
    name: 'TP-Link TL-WR841N 300Mbps Wireless N Router (2 Antennas)',
    slug: 'tp-link-tl-wr841n-300mbps-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Best Seller',
    regularPrice: 1250,
    discountPrice: 1150,
    discountPercentage: 8,
    rating: 4.5,
    reviewCount: 312,
    stockStatus: 'In Stock',
    stockCount: 200,
    images: ['/images/products/tp-link-tl-wr841n.webp'],
    shortSpecs: [
      'Standard: IEEE 802.11b/g/n, Speed: 300 Mbps (2.4GHz)',
      '2× Fixed Omni-directional Antennas (5dBi)',
      '4× 10/100 Mbps LAN + 1× 10/100 Mbps WAN Ports',
      'Wireless security: WPA / WPA2 encryption',
      'Ideal for home use, small apartments'
    ],
    specifications: {
      'Basic': [
        { label: 'Wi-Fi Standard', value: 'IEEE 802.11b/g/n (Wi-Fi 4)' },
        { label: 'Max Speed', value: '300 Mbps (2.4 GHz)' },
        { label: 'Antennas', value: '2× 5dBi Fixed' },
        { label: 'LAN Ports', value: '4× 10/100 Mbps' },
        { label: 'WAN Port', value: '1× 10/100 Mbps' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-r002',
    name: 'TP-Link TL-WR845N 300Mbps Wireless N Router (3 Antennas)',
    slug: 'tp-link-tl-wr845n-300mbps-3-antenna-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 1500,
    discountPrice: 1350,
    discountPercentage: 10,
    rating: 4.5,
    reviewCount: 198,
    stockStatus: 'In Stock',
    stockCount: 150,
    images: ['/images/products/tp-link-tl-wr845n.webp'],
    shortSpecs: [
      'Speed: 300 Mbps (2.4GHz) | 3× Fixed 5dBi Antennas',
      'Better coverage than 2-antenna models',
      '4× 10/100 Mbps LAN + 1× WAN Port',
      'WPA/WPA2 encryption, Easy setup via Tether App'
    ],
    specifications: {
      'Basic': [
        { label: 'Wi-Fi Standard', value: 'IEEE 802.11b/g/n (Wi-Fi 4)' },
        { label: 'Max Speed', value: '300 Mbps' },
        { label: 'Antennas', value: '3× 5dBi Fixed' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-r003',
    name: 'TP-Link Archer C6 AC1200 Dual-Band MU-MIMO Gigabit Wi-Fi Router',
    slug: 'tp-link-archer-c6-ac1200-gigabit-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 3500,
    discountPrice: 3100,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 245,
    stockStatus: 'In Stock',
    stockCount: 80,
    images: ['/images/products/tp-link-archer-c6.webp'],
    shortSpecs: [
      'AC1200: 867Mbps (5GHz) + 300Mbps (2.4GHz)',
      '5× Gigabit Ports (1 WAN + 4 LAN) | MU-MIMO',
      '4× External Antennas | Beamforming Technology',
      'TP-Link Tether App | Parental Controls'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: '5GHz Speed', value: '867 Mbps' },
        { label: '2.4GHz Speed', value: '300 Mbps' },
        { label: 'LAN Ports', value: '4× Gigabit' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },
  {
    id: 'prod-r004',
    name: 'TP-Link Archer C60 AC1350 Dual-Band Wi-Fi Router (5 Antennas)',
    slug: 'tp-link-archer-c60-ac1350-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 4200,
    discountPrice: 3800,
    discountPercentage: 10,
    rating: 4.6,
    reviewCount: 89,
    stockStatus: 'In Stock',
    stockCount: 45,
    images: ['/images/products/tp-link-archer-c60.webp'],
    shortSpecs: [
      'AC1350: 867Mbps (5GHz) + 450Mbps (2.4GHz)',
      '5× External Antennas for extended coverage',
      'MU-MIMO | 4× Gigabit LAN + 1× Gigabit WAN',
      'VPN Server & Client support'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Total Speed', value: 'AC1350' },
        { label: 'Antennas', value: '5× External' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },
  {
    id: 'prod-r005',
    name: 'TP-Link Archer AX23 AX1800 Dual-Band Wi-Fi 6 Router',
    slug: 'tp-link-archer-ax23-ax1800-wifi6-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'New',
    regularPrice: 5500,
    discountPrice: 4900,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 134,
    stockStatus: 'In Stock',
    stockCount: 60,
    images: ['/images/products/tp-link-archer-ax23.webp'],
    shortSpecs: [
      'Wi-Fi 6 (802.11ax): 1201Mbps (5GHz) + 574Mbps (2.4GHz)',
      'OFDMA & MU-MIMO for efficient multi-device performance',
      '4× Gigabit LAN + 1× Gigabit WAN | 4× External Antennas',
      'Connect 40+ devices simultaneously | WPA3'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX1800 (1.8 Gbps)' },
        { label: '5GHz', value: '1201 Mbps' },
        { label: '2.4GHz', value: '574 Mbps' },
        { label: 'Security', value: 'WPA3' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-03-01'
  },
  {
    id: 'prod-r006',
    name: 'TP-Link Archer AX55 AX3000 Dual-Band Wi-Fi 6 Router (OFDMA, MU-MIMO)',
    slug: 'tp-link-archer-ax55-ax3000-wifi6-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 8000,
    discountPrice: 7200,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 97,
    stockStatus: 'In Stock',
    stockCount: 40,
    images: ['/images/products/tp-link-archer-ax55.webp'],
    shortSpecs: [
      'Wi-Fi 6: 2402Mbps (5GHz) + 574Mbps (2.4GHz) = AX3000',
      '5× Gigabit Ports | USB 3.0 Port for NAS sharing',
      'OFDMA + MU-MIMO + HT160 for blazing fast speeds',
      'HomeShield Pro security | WPA3 | 50+ device support'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX3000' },
        { label: '5GHz', value: '2402 Mbps' },
        { label: '2.4GHz', value: '574 Mbps' },
        { label: 'USB', value: '1× USB 3.0' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 600,
    reviews: [], questions: [], createdDate: '2024-03-10'
  },
  {
    id: 'prod-r007',
    name: 'TP-Link Archer AX73 AX5400 Dual-Band Wi-Fi 6 Router (6 Antennas)',
    slug: 'tp-link-archer-ax73-ax5400-wifi6-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 11000,
    discountPrice: 9800,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 55,
    stockStatus: 'In Stock',
    stockCount: 25,
    images: ['/images/products/tp-link-archer-ax73.webp'],
    shortSpecs: [
      'Wi-Fi 6: 4804Mbps (5GHz) + 574Mbps (2.4GHz) = AX5400',
      '6× High-Performance External Antennas',
      'USB 3.0 | 4× Gigabit LAN + 1× Gigabit WAN',
      'Airtime Fairness | Beamforming | WPA3'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX5400' },
        { label: '5GHz', value: '4804 Mbps' },
        { label: 'Antennas', value: '6× External' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 817,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },
  {
    id: 'prod-r008',
    name: 'TP-Link TL-MR100 300Mbps 4G LTE Router (SIM Card Slot)',
    slug: 'tp-link-tl-mr100-4g-lte-router',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: '4g-lte-router',
    badge: 'Hot',
    regularPrice: 4500,
    discountPrice: 4000,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 176,
    stockStatus: 'In Stock',
    stockCount: 70,
    images: ['/images/products/tp-link-tl-mr100.webp'],
    shortSpecs: [
      '4G LTE Cat4 with Nano SIM card slot — no ISP cable needed',
      '300 Mbps Wi-Fi (2.4GHz) | Plug and play setup',
      '4× 10/100 Mbps LAN Ports | WAN/LAN switch port',
      'Works with Grameenphone, Robi, Banglalink, Teletalk SIM'
    ],
    specifications: {
      'Connectivity': [
        { label: 'LTE Category', value: 'Cat 4 (150 Mbps DL / 50 Mbps UL)' },
        { label: 'SIM Slot', value: 'Nano SIM' },
        { label: 'Wi-Fi Speed', value: '300 Mbps (2.4GHz)' },
        { label: 'LAN Ports', value: '4× Fast Ethernet' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-15'
  },
  {
    id: 'prod-r009',
    name: 'TP-Link Deco XE75 AX3600 Wi-Fi 6E Mesh System (2-Pack)',
    slug: 'tp-link-deco-xe75-ax3600-mesh-2pack',
    brand: 'TP-Link',
    category: 'networking',
    categoryName: 'Mesh Wi-Fi',
    subcategory: 'mesh-wifi',
    badge: 'New',
    regularPrice: 16000,
    discountPrice: 14500,
    discountPercentage: 9,
    rating: 4.8,
    reviewCount: 42,
    stockStatus: 'In Stock',
    stockCount: 20,
    images: ['/images/products/tp-link-deco-xe75.webp'],
    shortSpecs: [
      'Tri-Band Wi-Fi 6E: 6GHz + 5GHz + 2.4GHz — 3600 Mbps total',
      'Covers up to 500 sq.m. with 2 units | 100+ devices',
      'Smart roaming — seamless handoff across rooms',
      'HomeShield parental controls & security'
    ],
    specifications: {
      'Mesh': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6E (802.11axe)' },
        { label: 'Coverage', value: '500 sq.m. (2-pack)' },
        { label: 'Bands', value: 'Tri-Band (2.4 + 5 + 6 GHz)' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 1208,
    reviews: [], questions: [], createdDate: '2024-04-10'
  },

  // Tenda Routers
  {
    id: 'prod-r010',
    name: 'Tenda N301 300Mbps Wireless Easy Setup Router (2 Antennas)',
    slug: 'tenda-n301-300mbps-easy-setup-router',
    brand: 'Tenda',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Best Seller',
    regularPrice: 950,
    discountPrice: 850,
    discountPercentage: 11,
    rating: 4.3,
    reviewCount: 420,
    stockStatus: 'In Stock',
    stockCount: 300,
    images: ['/images/products/tenda-n301.webp'],
    shortSpecs: [
      '300 Mbps 2.4GHz | 2× 5dBi Omni-directional Antennas',
      '3× 10/100 Mbps LAN + 1× WAN Port',
      'One-key setup | WPS button',
      'Budget-friendly home Wi-Fi for small spaces'
    ],
    specifications: {
      'Basic': [
        { label: 'Speed', value: '300 Mbps (2.4GHz)' },
        { label: 'LAN Ports', value: '3× Fast Ethernet' },
        { label: 'Antennas', value: '2× 5dBi' }
      ]
    },
    warranty: '3 Years Tenda Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-r011',
    name: 'Tenda AC10 AC1200 Smart Dual-Band Gigabit Wi-Fi Router',
    slug: 'tenda-ac10-ac1200-dual-band-gigabit-router',
    brand: 'Tenda',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 2800,
    discountPrice: 2500,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 287,
    stockStatus: 'In Stock',
    stockCount: 100,
    images: ['/images/products/tenda-ac10.webp'],
    shortSpecs: [
      'AC1200: 867Mbps (5GHz) + 300Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× Gigabit WAN | MU-MIMO',
      '4× 6dBi Antennas | Beamforming',
      'Tenda Wi-Fi App | Parental control | VPN support'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: '5GHz', value: '867 Mbps' },
        { label: '2.4GHz', value: '300 Mbps' },
        { label: 'LAN Ports', value: '4× Gigabit' }
      ]
    },
    warranty: '3 Years Tenda Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-15'
  },
  {
    id: 'prod-r012',
    name: 'Tenda AC19 AC1900 Smart Dual-Band Gigabit Wi-Fi Router',
    slug: 'tenda-ac19-ac1900-dual-band-router',
    brand: 'Tenda',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 3800,
    discountPrice: 3400,
    discountPercentage: 11,
    rating: 4.6,
    reviewCount: 92,
    stockStatus: 'In Stock',
    stockCount: 55,
    images: ['/images/products/tenda-ac19.webp'],
    shortSpecs: [
      'AC1900: 1300Mbps (5GHz) + 600Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× Gigabit WAN | USB 2.0',
      '6× Internal High-Gain Antennas | Beamforming',
      'MU-MIMO | Parental Controls | VPN support'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Total Speed', value: 'AC1900' },
        { label: '5GHz', value: '1300 Mbps' }
      ]
    },
    warranty: '3 Years Tenda Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },
  {
    id: 'prod-r013',
    name: 'Tenda AC23 AC2100 Tri-Band Gigabit Smart Wi-Fi Router (8 Antennas)',
    slug: 'tenda-ac23-ac2100-triband-gigabit-router',
    brand: 'Tenda',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 4200,
    discountPrice: 3700,
    discountPercentage: 12,
    rating: 4.6,
    reviewCount: 118,
    stockStatus: 'In Stock',
    stockCount: 60,
    images: ['/images/products/tenda-ac23.webp'],
    shortSpecs: [
      'Tri-Band AC2100: 1733+1733Mbps (5GHz) + 300Mbps (2.4GHz)',
      '8× High-Gain Antennas | 4× Gigabit LAN + 1× WAN',
      'USB 3.0 for NAS sharing | MU-MIMO | Beamforming',
      'Smart load balance across dual 5GHz bands'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac) Tri-Band' },
        { label: 'Total Speed', value: 'AC2100' },
        { label: 'Antennas', value: '8× External' }
      ]
    },
    warranty: '3 Years Tenda Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-10'
  },
  {
    id: 'prod-r014',
    name: 'Tenda RX9 Pro AX3000 Dual-Band Wi-Fi 6 Router (6 Antennas)',
    slug: 'tenda-rx9-pro-ax3000-wifi6-router',
    brand: 'Tenda',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'New',
    regularPrice: 5800,
    discountPrice: 5200,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 65,
    stockStatus: 'In Stock',
    stockCount: 40,
    images: ['/images/products/tenda-rx9-pro.webp'],
    shortSpecs: [
      'Wi-Fi 6 AX3000: 2402Mbps (5GHz) + 574Mbps (2.4GHz)',
      'OFDMA + MU-MIMO | 6× High-Gain Antennas',
      'Gigabit WAN/LAN | USB 3.0 | WPA3',
      'Connect 64+ devices | BSS Coloring'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX3000' },
        { label: 'Security', value: 'WPA3' }
      ]
    },
    warranty: '3 Years Tenda Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-03-05'
  },
  {
    id: 'prod-r015',
    name: 'Tenda 4G06 N300 4G LTE Router with SIM Card Slot',
    slug: 'tenda-4g06-n300-4g-lte-router',
    brand: 'Tenda',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: '4g-lte-router',
    regularPrice: 3200,
    discountPrice: 2900,
    discountPercentage: 9,
    rating: 4.3,
    reviewCount: 203,
    stockStatus: 'In Stock',
    stockCount: 80,
    images: ['/images/products/tenda-4g06.webp'],
    shortSpecs: [
      '4G LTE Cat4 150Mbps download | Nano SIM slot',
      '300 Mbps Wi-Fi (2.4GHz) | 2× 5dBi Antennas',
      '3× LAN + 1× WAN/LAN switchable port',
      'Works with all Bangladesh operator SIM cards'
    ],
    specifications: {
      'Connectivity': [
        { label: 'LTE Category', value: 'Cat 4 (150 Mbps DL)' },
        { label: 'SIM Slot', value: 'Nano SIM' },
        { label: 'Wi-Fi', value: '300 Mbps 2.4GHz' }
      ]
    },
    warranty: '3 Years Tenda Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },

  // D-Link Routers
  {
    id: 'prod-r016',
    name: 'D-Link DIR-615 N300 Wireless Router (2 Antennas)',
    slug: 'd-link-dir-615-n300-wireless-router',
    brand: 'D-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 1700,
    discountPrice: 1500,
    discountPercentage: 12,
    rating: 4.2,
    reviewCount: 156,
    stockStatus: 'In Stock',
    stockCount: 90,
    images: ['/images/products/d-link-dir-615.webp'],
    shortSpecs: [
      '300 Mbps Wireless N | 2× External Antennas',
      '4× 10/100 Mbps LAN + 1× WAN',
      'WPA/WPA2 security | WPS button',
      'Easy web-based setup wizard'
    ],
    specifications: {
      'Basic': [
        { label: 'Speed', value: '300 Mbps (2.4GHz)' },
        { label: 'LAN Ports', value: '4× Fast Ethernet' }
      ]
    },
    warranty: '3 Years D-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-r017',
    name: 'D-Link DIR-825 AC1200 Dual-Band Gigabit Wi-Fi Router',
    slug: 'd-link-dir-825-ac1200-gigabit-router',
    brand: 'D-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 4500,
    discountPrice: 4000,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 78,
    stockStatus: 'In Stock',
    stockCount: 45,
    images: ['/images/products/d-link-dir-825.png'],
    shortSpecs: [
      'AC1200: 867Mbps (5GHz) + 300Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× Gigabit WAN | USB 3.0',
      'MU-MIMO | Beamforming | 4× External Antennas',
      'D-Link Wi-Fi App | Parental controls'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Total Speed', value: 'AC1200' },
        { label: 'USB', value: '1× USB 3.0' }
      ]
    },
    warranty: '3 Years D-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },
  {
    id: 'prod-r018',
    name: 'D-Link DIR-867 AC1750 MU-MIMO Wi-Fi Router (Gigabit)',
    slug: 'd-link-dir-867-ac1750-gigabit-router',
    brand: 'D-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 6000,
    discountPrice: 5400,
    discountPercentage: 10,
    rating: 4.5,
    reviewCount: 44,
    stockStatus: 'In Stock',
    stockCount: 30,
    images: ['/images/products/d-link-dir-867.webp'],
    shortSpecs: [
      'AC1750: 1300Mbps (5GHz) + 450Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× Gigabit WAN | USB 3.0',
      'MU-MIMO | 3× Internal + 2× External Antennas',
      'Smart Connect automatically assigns device to best band'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Total Speed', value: 'AC1750' },
        { label: '5GHz', value: '1300 Mbps' }
      ]
    },
    warranty: '3 Years D-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-15'
  },
  {
    id: 'prod-r019',
    name: 'D-Link DWR-M921 4G LTE N300 Wi-Fi Router with SIM Slot',
    slug: 'd-link-dwr-m921-4g-lte-router',
    brand: 'D-Link',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: '4g-lte-router',
    regularPrice: 5500,
    discountPrice: 4900,
    discountPercentage: 11,
    rating: 4.3,
    reviewCount: 62,
    stockStatus: 'In Stock',
    stockCount: 35,
    images: ['/images/products/d-link-dwr-m921.png'],
    shortSpecs: [
      '4G LTE Cat 6 (300 Mbps DL / 50 Mbps UL) | Nano SIM',
      '300 Mbps Wi-Fi (2.4GHz) | 2× Detachable Antennas',
      '4× Fast Ethernet LAN | WAN Failover support',
      'SMS management via web UI'
    ],
    specifications: {
      'Connectivity': [
        { label: 'LTE Category', value: 'Cat 6 (300 Mbps DL)' },
        { label: 'SIM Slot', value: 'Nano SIM' },
        { label: 'LAN Ports', value: '4× Fast Ethernet' }
      ]
    },
    warranty: '3 Years D-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-03-01'
  },

  // MikroTik Routers
  {
    id: 'prod-r020',
    name: 'MikroTik hAP lite RB941-2nD 2.4GHz Home Access Point Router',
    slug: 'mikrotik-hap-lite-rb941-2nd-router',
    brand: 'MikroTik',
    category: 'networking',
    categoryName: 'MikroTik Routers',
    subcategory: 'mikrotik',
    regularPrice: 2800,
    discountPrice: 2500,
    discountPercentage: 11,
    rating: 4.4,
    reviewCount: 132,
    stockStatus: 'In Stock',
    stockCount: 60,
    images: ['/images/products/mikrotik-hap-lite.webp'],
    shortSpecs: [
      '2.4GHz 802.11b/g/n | RouterOS Level 4',
      '4× 10/100 Mbps LAN + 1× WAN | 2× Internal Antennas',
      'RouterOS with full firewall, NAT, VPN support',
      'Compact desktop form factor | ISP & home use'
    ],
    specifications: {
      'Hardware': [
        { label: 'CPU', value: 'QCA9531 650 MHz' },
        { label: 'RAM', value: '32 MB' },
        { label: 'Storage', value: '16 MB Flash' },
        { label: 'RouterOS', value: 'Level 4 License' }
      ]
    },
    warranty: '1 Year MikroTik Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-r021',
    name: 'MikroTik hAP ac² RB952Ui-5ac2nD Dual-Band Gigabit Router',
    slug: 'mikrotik-hap-ac2-rb952-dual-band-gigabit',
    brand: 'MikroTik',
    category: 'networking',
    categoryName: 'MikroTik Routers',
    subcategory: 'mikrotik',
    badge: 'Best Seller',
    regularPrice: 6500,
    discountPrice: 5800,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 189,
    stockStatus: 'In Stock',
    stockCount: 50,
    images: ['/images/products/mikrotik-hap-ac2.webp'],
    shortSpecs: [
      'Dual-Band: 2.4GHz 802.11b/g/n + 5GHz 802.11a/n/ac',
      '5× Gigabit Ethernet (1 PoE-in, 1 PoE-out)',
      'RouterOS Level 4 | USB 2.0 | Dual-chain radio',
      'Compact design — popular for ISP & office use in Bangladesh'
    ],
    specifications: {
      'Hardware': [
        { label: 'CPU', value: 'IPQ4018 716 MHz (4-core)' },
        { label: 'RAM', value: '128 MB' },
        { label: 'RouterOS', value: 'Level 4 License' },
        { label: 'Ports', value: '5× Gigabit (PoE-in/out)' }
      ]
    },
    warranty: '1 Year MikroTik Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-10'
  },
  {
    id: 'prod-r022',
    name: 'MikroTik RB951Ui-2HnD 2.4GHz 5-Port Router with PoE and USB',
    slug: 'mikrotik-rb951ui-2hnd-5port-poe-router',
    brand: 'MikroTik',
    category: 'networking',
    categoryName: 'MikroTik Routers',
    subcategory: 'mikrotik',
    regularPrice: 6200,
    discountPrice: 5500,
    discountPercentage: 11,
    rating: 4.6,
    reviewCount: 97,
    stockStatus: 'In Stock',
    stockCount: 40,
    images: ['/images/products/mikrotik-rb951ui-2hnd.webp'],
    shortSpecs: [
      '2.4GHz 802.11b/g/n | 5× Gigabit Ethernet (PoE)',
      'USB 2.0 | RouterOS Level 4 | 1× SFP port',
      'AP + Router + Switch modes | Full RouterOS features',
      'Widely used by Bangladeshi ISPs for CPE deployments'
    ],
    specifications: {
      'Hardware': [
        { label: 'CPU', value: 'AR9344 600 MHz' },
        { label: 'RAM', value: '128 MB' },
        { label: 'RouterOS', value: 'Level 4' },
        { label: 'PoE Output', value: 'Port 5 (15.4W)' }
      ]
    },
    warranty: '1 Year MikroTik Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-15'
  },
  {
    id: 'prod-r023',
    name: 'MikroTik hEX RB750Gr3 Gigabit Ethernet Router (5-Port, no Wi-Fi)',
    slug: 'mikrotik-hex-rb750gr3-gigabit-router',
    brand: 'MikroTik',
    category: 'networking',
    categoryName: 'MikroTik Routers',
    subcategory: 'mikrotik',
    badge: 'Best Seller',
    regularPrice: 5500,
    discountPrice: 4900,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 231,
    stockStatus: 'In Stock',
    stockCount: 65,
    images: ['/images/products/mikrotik-rb750gr3.webp'],
    shortSpecs: [
      '5× Gigabit Ethernet | RouterOS Level 4 | USB 2.0',
      'IPsec hardware acceleration | VPN gateway',
      '880 MHz CPU, 256 MB RAM | PoE-in on port 1',
      'Most popular wired router for ISP & office in Bangladesh'
    ],
    specifications: {
      'Hardware': [
        { label: 'CPU', value: 'MT7621A 880 MHz (dual-core)' },
        { label: 'RAM', value: '256 MB' },
        { label: 'Ports', value: '5× Gigabit Ethernet' },
        { label: 'RouterOS', value: 'Level 4' }
      ]
    },
    warranty: '1 Year MikroTik Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-05'
  },
  {
    id: 'prod-r024',
    name: 'MikroTik RB4011iGS+5HacQ2HnD-IN Dual-Band Wi-Fi Router (10-Port)',
    slug: 'mikrotik-rb4011-dual-band-10port-router',
    brand: 'MikroTik',
    category: 'networking',
    categoryName: 'MikroTik Routers',
    subcategory: 'mikrotik',
    badge: 'Hot',
    regularPrice: 25000,
    discountPrice: 22000,
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 44,
    stockStatus: 'In Stock',
    stockCount: 15,
    images: ['/images/products/mikrotik-rb4011.webp'],
    shortSpecs: [
      '10× Gigabit Ports + 1× SFP+ (10G) | RouterOS Level 5',
      'Dual-Band 802.11ac Wave 2 Wi-Fi | 1.4 GHz quad-core CPU',
      '1 GB RAM | 512 MB Storage | IPsec 1.5 Gbps',
      'Enterprise-grade for ISPs and corporate networks'
    ],
    specifications: {
      'Hardware': [
        { label: 'CPU', value: 'AL21400 1.4 GHz (4-core)' },
        { label: 'RAM', value: '1 GB' },
        { label: 'SFP+', value: '1× 10G SFP+' },
        { label: 'RouterOS', value: 'Level 5' }
      ]
    },
    warranty: '1 Year MikroTik Warranty',
    emiAvailable: true,
    emiStartingBDT: 1833,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },

  // ASUS Routers
  {
    id: 'prod-r025',
    name: 'ASUS RT-AX55 AX1800 Dual-Band Wi-Fi 6 Router (4 Antennas)',
    slug: 'asus-rt-ax55-ax1800-wifi6-router',
    brand: 'Asus',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 7000,
    discountPrice: 6200,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 88,
    stockStatus: 'In Stock',
    stockCount: 35,
    images: ['/images/products/asus-rt-ax55.webp'],
    shortSpecs: [
      'Wi-Fi 6 AX1800: 1201Mbps (5GHz) + 574Mbps (2.4GHz)',
      'OFDMA + MU-MIMO | 4× Gigabit LAN + 1× WAN',
      'AiProtection Pro (powered by Trend Micro) lifetime',
      'ASUS Router App | Parental controls | WPA3'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX1800' },
        { label: 'Security', value: 'AiProtection Pro (Trend Micro)' }
      ]
    },
    warranty: '3 Years ASUS Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },
  {
    id: 'prod-r026',
    name: 'ASUS RT-AX58U AX3000 Dual-Band Wi-Fi 6 Router',
    slug: 'asus-rt-ax58u-ax3000-wifi6-router',
    brand: 'Asus',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 12000,
    discountPrice: 10500,
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 72,
    stockStatus: 'In Stock',
    stockCount: 22,
    images: ['/images/products/asus-rt-ax58u.webp'],
    shortSpecs: [
      'Wi-Fi 6 AX3000: 2402Mbps (5GHz) + 574Mbps (2.4GHz)',
      'USB 3.0 + USB 2.0 | 4× Gigabit LAN + 1× WAN',
      'AiMesh compatible | AiProtection Pro | OFDMA',
      '1.8 GHz dual-core CPU | Works as mesh node'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX3000' },
        { label: 'USB', value: '1× USB 3.0 + 1× USB 2.0' }
      ]
    },
    warranty: '3 Years ASUS Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 875,
    reviews: [], questions: [], createdDate: '2024-03-01'
  },
  {
    id: 'prod-r027',
    name: 'ASUS RT-AX86U Pro AX5700 Dual-Band Wi-Fi 6 Gaming Router',
    slug: 'asus-rt-ax86u-pro-ax5700-gaming-router',
    brand: 'Asus',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 24000,
    discountPrice: 21500,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 38,
    stockStatus: 'Limited Stock',
    stockCount: 8,
    isGaming: true,
    images: ['/images/products/asus-rt-ax86u-pro.webp'],
    shortSpecs: [
      'Wi-Fi 6 AX5700: 4804Mbps (5GHz) + 861Mbps (2.4GHz)',
      '2.5G WAN + 4× Gigabit LAN + 1× 2.5G LAN | USB 3.0',
      'Mobile Game Mode: dedicated 5GHz for gaming devices',
      'AiProtection Pro | Adaptive QoS | VPN Fusion'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX5700' },
        { label: '2.5G Port', value: 'WAN + 1× LAN' },
        { label: 'Gaming Feature', value: 'Mobile Game Mode' }
      ]
    },
    warranty: '3 Years ASUS Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 1792,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },
  {
    id: 'prod-r028',
    name: 'ASUS ROG Rapture GT-AX11000 Pro Tri-Band Wi-Fi 6E Gaming Router',
    slug: 'asus-rog-rapture-gt-ax11000-pro-wifi6e-gaming',
    brand: 'Asus',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 55000,
    discountPrice: 49000,
    discountPercentage: 11,
    rating: 5.0,
    reviewCount: 18,
    stockStatus: 'Limited Stock',
    stockCount: 4,
    isGaming: true,
    images: ['/images/products/asus-gt-ax11000-pro.webp'],
    shortSpecs: [
      'Wi-Fi 6E Tri-Band: 4804+4804Mbps (5GHz) + 1148Mbps (2.4GHz)',
      '2.5G WAN + 4× Gigabit LAN + 2× 2.5G LAN | USB 3.0',
      'ROG Gaming features: Game acceleration, VPN Fusion',
      '8× High-Performance Antennas | AiMesh support'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6E (802.11axe)' },
        { label: 'Total Speed', value: 'AX11000' },
        { label: 'Tri-Band', value: '2.4GHz + 5GHz + 5GHz' }
      ]
    },
    warranty: '3 Years ASUS Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 4083,
    reviews: [], questions: [], createdDate: '2024-04-15'
  },

  // Mercusys Routers
  {
    id: 'prod-r029',
    name: 'Mercusys AC12G AC1200 Dual-Band Gigabit Wi-Fi Router',
    slug: 'mercusys-ac12g-ac1200-gigabit-router',
    brand: 'Mercusys',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Best Seller',
    regularPrice: 2400,
    discountPrice: 2100,
    discountPercentage: 13,
    rating: 4.5,
    reviewCount: 195,
    stockStatus: 'In Stock',
    stockCount: 120,
    images: ['/images/products/mercusys-ac12g.webp'],
    shortSpecs: [
      'AC1200: 867Mbps (5GHz) + 300Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× Gigabit WAN | 4× Antennas',
      'MU-MIMO | Beamforming | Parental controls',
      'Budget-friendly gigabit router for home users'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Total Speed', value: 'AC1200' },
        { label: 'LAN Ports', value: '4× Gigabit' }
      ]
    },
    warranty: '3 Years Mercusys Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-15'
  },
  {
    id: 'prod-r030',
    name: 'Mercusys MR70X AX1800 Dual-Band Wi-Fi 6 Router',
    slug: 'mercusys-mr70x-ax1800-wifi6-router',
    brand: 'Mercusys',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'New',
    regularPrice: 4000,
    discountPrice: 3500,
    discountPercentage: 13,
    rating: 4.6,
    reviewCount: 82,
    stockStatus: 'In Stock',
    stockCount: 65,
    images: ['/images/products/mercusys-mr70x.webp'],
    shortSpecs: [
      'Wi-Fi 6 AX1800: 1201Mbps (5GHz) + 574Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× Gigabit WAN | OFDMA + MU-MIMO',
      '4× High-Gain Antennas | WPA3 | BSS Coloring',
      'Best value Wi-Fi 6 router for home use'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX1800' },
        { label: 'Security', value: 'WPA3' }
      ]
    },
    warranty: '3 Years Mercusys Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-03-01'
  },
  {
    id: 'prod-r031',
    name: 'Mercusys MR90X AX6000 Dual-Band Wi-Fi 6 Router (8 Antennas)',
    slug: 'mercusys-mr90x-ax6000-wifi6-router',
    brand: 'Mercusys',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 10000,
    discountPrice: 9000,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 36,
    stockStatus: 'In Stock',
    stockCount: 20,
    images: ['/images/products/mercusys-mr90x.webp'],
    shortSpecs: [
      'Wi-Fi 6 AX6000: 4804Mbps (5GHz) + 1148Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× 2.5G WAN | OFDMA + MU-MIMO',
      '8× High-Gain Antennas | 160MHz channels',
      'HT160 for 4.8Gbps max single-link speed'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX6000' },
        { label: 'WAN Port', value: '1× 2.5G' }
      ]
    },
    warranty: '3 Years Mercusys Bangladesh Warranty',
    emiAvailable: true,
    emiStartingBDT: 750,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  // Xiaomi Routers
  {
    id: 'prod-r032',
    name: 'Xiaomi Router 4A Gigabit Edition 1200Mbps Dual-Band Router',
    slug: 'xiaomi-router-4a-gigabit-1200mbps',
    brand: 'Xiaomi',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Best Seller',
    regularPrice: 3000,
    discountPrice: 2700,
    discountPercentage: 10,
    rating: 4.5,
    reviewCount: 268,
    stockStatus: 'In Stock',
    stockCount: 90,
    images: ['/images/products/xiaomi-4a-gigabit.webp'],
    shortSpecs: [
      'AC1200: 867Mbps (5GHz) + 300Mbps (2.4GHz)',
      '3× Gigabit LAN + 1× Gigabit WAN | 4× Antennas',
      'MiWiFi App control | Parental controls | QoS',
      'Sleek minimalist design — popular for home use'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Total Speed', value: 'AC1200' },
        { label: 'LAN Ports', value: '3× Gigabit' }
      ]
    },
    warranty: '1 Year Xiaomi Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-20'
  },
  {
    id: 'prod-r033',
    name: 'Xiaomi AX3200 Wi-Fi 6 Router (Dual-Band, 4 Antennas)',
    slug: 'xiaomi-ax3200-wifi6-dual-band-router',
    brand: 'Xiaomi',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 5500,
    discountPrice: 5000,
    discountPercentage: 9,
    rating: 4.6,
    reviewCount: 144,
    stockStatus: 'In Stock',
    stockCount: 50,
    images: ['/images/products/xiaomi-ax3200.png'],
    shortSpecs: [
      'Wi-Fi 6 AX3200: 2402Mbps (5GHz) + 800Mbps (2.4GHz)',
      '3× Gigabit LAN + 1× Gigabit WAN | OFDMA + MU-MIMO',
      '4× High-Gain Antennas | WPA3 | IPv6 support',
      'MiWiFi 3.0 App | Mesh support via MiWiFi ecosystem'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX3200' },
        { label: 'Security', value: 'WPA3' }
      ]
    },
    warranty: '1 Year Xiaomi Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-15'
  },
  {
    id: 'prod-r034',
    name: 'Xiaomi AX6000 Wi-Fi 6 Router (8 Antennas, 2.5G WAN)',
    slug: 'xiaomi-ax6000-wifi6-8-antenna-router',
    brand: 'Xiaomi',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 12000,
    discountPrice: 10800,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 67,
    stockStatus: 'In Stock',
    stockCount: 22,
    images: ['/images/products/xiaomi-ax6000.webp'],
    shortSpecs: [
      'Wi-Fi 6 AX6000: 4804Mbps (5GHz) + 1148Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× 2.5G WAN | USB 3.0',
      '8× High-Gain Antennas | MLO | 160MHz channels',
      'Mi Home App integration | NAS storage support'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX6000' },
        { label: 'WAN', value: '1× 2.5G + 1× Gigabit' }
      ]
    },
    warranty: '1 Year Xiaomi Warranty',
    emiAvailable: true,
    emiStartingBDT: 900,
    reviews: [], questions: [], createdDate: '2024-03-20'
  },

  // Netgear Routers
  {
    id: 'prod-r035',
    name: 'Netgear RAX30 Nighthawk AX2400 Dual-Band Wi-Fi 6 Router',
    slug: 'netgear-rax30-nighthawk-ax2400-wifi6-router',
    brand: 'Netgear',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    regularPrice: 10000,
    discountPrice: 9000,
    discountPercentage: 10,
    rating: 4.6,
    reviewCount: 42,
    stockStatus: 'In Stock',
    stockCount: 18,
    images: ['/images/products/netgear-rax30.jpg'],
    shortSpecs: [
      'Wi-Fi 6 AX2400: 1800Mbps (5GHz) + 600Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× Gigabit WAN | 4× Antennas',
      'OFDMA + MU-MIMO | 4× stream antenna design',
      'Nighthawk App | NETGEAR Armor (Bitdefender) security'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX2400' },
        { label: 'Security', value: 'NETGEAR Armor (Bitdefender)' }
      ]
    },
    warranty: '2 Years Netgear Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-03-01'
  },
  {
    id: 'prod-r036',
    name: 'Netgear Nighthawk RAX50 AX5400 Dual-Band Wi-Fi 6 Router',
    slug: 'netgear-nighthawk-rax50-ax5400-wifi6-router',
    brand: 'Netgear',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Hot',
    regularPrice: 18000,
    discountPrice: 16000,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 29,
    stockStatus: 'In Stock',
    stockCount: 10,
    images: ['/images/products/netgear-rax50.jpg'],
    shortSpecs: [
      'Wi-Fi 6 AX5400: 4804Mbps (5GHz) + 574Mbps (2.4GHz)',
      '5× Gigabit LAN + 1× Gigabit WAN | USB 3.0',
      '6× High-Performance Antennas | 160MHz channels',
      'NETGEAR Armor | ReadySHARE USB | Dynamic QoS'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Total Speed', value: 'AX5400' },
        { label: 'USB', value: '1× USB 3.0' }
      ]
    },
    warranty: '2 Years Netgear Warranty',
    emiAvailable: true,
    emiStartingBDT: 1333,
    reviews: [], questions: [], createdDate: '2024-04-05'
  },

  // Huawei Routers
  {
    id: 'prod-r037',
    name: 'Huawei WiFi AX3 Pro Dual-Band Wi-Fi 6 Plus Router (Quad-Core)',
    slug: 'huawei-wifi-ax3-pro-wifi6plus-quad-core-router',
    brand: 'Huawei',
    category: 'networking',
    categoryName: 'Routers',
    subcategory: 'wifi-routers',
    badge: 'Best Seller',
    regularPrice: 6500,
    discountPrice: 5800,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 152,
    stockStatus: 'In Stock',
    stockCount: 55,
    images: ['/images/products/huawei-ax3-pro.jpg'],
    shortSpecs: [
      'Wi-Fi 6 Plus AX3000: 2402Mbps (5GHz) + 574Mbps (2.4GHz)',
      'Quad-Core 1.4GHz CPU | 256MB RAM',
      '3× Gigabit LAN + 1× Gigabit WAN | HUAWEI HiLink App',
      'HarmonyOS Mesh support | 5GHz-to-5GHz backhaul'
    ],
    specifications: {
      'Wireless': [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 Plus (802.11ax)' },
        { label: 'Total Speed', value: 'AX3000' },
        { label: 'CPU', value: 'Quad-Core 1.4 GHz' }
      ]
    },
    warranty: '1 Year Huawei Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-10'
  },

  // ═══════════════════════════════════════════════════════
  // ONU / ONT DEVICES — Bangladesh Market (approx. prices)
  // ═══════════════════════════════════════════════════════

  // ZTE ONU Devices
  {
    id: 'prod-onu001',
    name: 'ZTE F609 GPON ONU (4 LAN + 2 Phone Ports, 1 USB)',
    slug: 'zte-f609-gpon-onu-4lan-2phone',
    brand: 'ZTE',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'gpon-onu',
    badge: 'Best Seller',
    regularPrice: 2500,
    discountPrice: 2200,
    discountPercentage: 12,
    rating: 4.4,
    reviewCount: 317,
    stockStatus: 'In Stock',
    stockCount: 200,
    images: ['/images/products/zte-f609.webp'],
    shortSpecs: [
      'GPON ONU — ITU-T G.984 standard',
      '4× Gigabit LAN + 2× POTS (phone) + 1× USB 2.0',
      'Built-in Wi-Fi 802.11b/g/n 300Mbps (2.4GHz)',
      'WPA/WPA2 | DHCP | NAT | VLAN | SIP VoIP support',
      'Widely used by Bangladesh ISPs (Fiber@Home, Link3, etc.)'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: 'Up to 2.488 Gbps' },
        { label: 'Upstream', value: 'Up to 1.244 Gbps' }
      ],
      'Ports': [
        { label: 'LAN Ports', value: '4× Gigabit Ethernet' },
        { label: 'Phone Ports', value: '2× POTS (VoIP)' },
        { label: 'USB', value: '1× USB 2.0' },
        { label: 'Wi-Fi', value: '802.11b/g/n 300 Mbps' }
      ]
    },
    warranty: '1 Year ZTE Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-onu002',
    name: 'ZTE F660 GPON ONU (4 LAN + 2 USB + Wi-Fi)',
    slug: 'zte-f660-gpon-onu-4lan-2usb-wifi',
    brand: 'ZTE',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'gpon-onu',
    regularPrice: 3200,
    discountPrice: 2800,
    discountPercentage: 13,
    rating: 4.4,
    reviewCount: 189,
    stockStatus: 'In Stock',
    stockCount: 120,
    images: ['/images/products/zte-f660.webp'],
    shortSpecs: [
      'GPON ONU — ITU-T G.984 | Dual USB for storage sharing',
      '4× Gigabit LAN + 2× POTS + 2× USB 2.0',
      'Built-in Wi-Fi 802.11b/g/n (2.4GHz)',
      'TR-069 remote management | VoIP SIP support'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' },
        { label: 'Upstream', value: '1.244 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit' },
        { label: 'USB', value: '2× USB 2.0' },
        { label: 'Wi-Fi', value: '300 Mbps (2.4GHz)' }
      ]
    },
    warranty: '1 Year ZTE Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-onu003',
    name: 'ZTE F670L GPON ONU Wi-Fi 6 AX1800 (Dual-Band, 4 Gigabit LAN)',
    slug: 'zte-f670l-gpon-onu-wifi6-ax1800',
    brand: 'ZTE',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'wifi-onu',
    badge: 'New',
    regularPrice: 5000,
    discountPrice: 4500,
    discountPercentage: 10,
    rating: 4.6,
    reviewCount: 92,
    stockStatus: 'In Stock',
    stockCount: 60,
    images: ['/images/products/zte-f670l.webp'],
    shortSpecs: [
      'GPON ONU with Wi-Fi 6 (AX1800): 1201Mbps (5GHz) + 574Mbps (2.4GHz)',
      '4× Gigabit LAN + 1× GPON optical fiber port',
      'OFDMA + MU-MIMO | WPA3 | IPv6 support',
      'Latest Wi-Fi 6 ONU — ideal for fiber broadband subscribers'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' }
      ],
      'Wi-Fi': [
        { label: 'Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Speed', value: 'AX1800' },
        { label: 'Security', value: 'WPA3' }
      ]
    },
    warranty: '1 Year ZTE Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-03-01'
  },
  {
    id: 'prod-onu004',
    name: 'ZTE ZXHN H267A GPON ONU Wi-Fi 6 AX3000 (Dual-Band)',
    slug: 'zte-zxhn-h267a-gpon-onu-wifi6-ax3000',
    brand: 'ZTE',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'wifi-onu',
    badge: 'New',
    regularPrice: 6000,
    discountPrice: 5400,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 54,
    stockStatus: 'In Stock',
    stockCount: 35,
    images: ['/images/products/zte-h267a.webp'],
    shortSpecs: [
      'GPON ONU + Wi-Fi 6 AX3000 built-in router',
      'Dual-Band: 2402Mbps (5GHz) + 574Mbps (2.4GHz)',
      '4× Gigabit LAN + 2× POTS | OFDMA + MU-MIMO',
      'All-in-one fiber gateway with Wi-Fi 6 — no separate router needed'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' }
      ],
      'Wi-Fi': [
        { label: 'Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Speed', value: 'AX3000' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit' },
        { label: 'Phone', value: '2× POTS (VoIP)' }
      ]
    },
    warranty: '1 Year ZTE Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },
  {
    id: 'prod-onu005',
    name: 'ZTE F612W GPON ONU Dual-Band 1200Mbps Wi-Fi (2.4GHz + 5GHz)',
    slug: 'zte-f612w-gpon-onu-dual-band-1200mbps',
    brand: 'ZTE',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'wifi-onu',
    regularPrice: 3500,
    discountPrice: 3100,
    discountPercentage: 11,
    rating: 4.4,
    reviewCount: 138,
    stockStatus: 'In Stock',
    stockCount: 80,
    images: ['/images/products/zte-f612w.webp'],
    shortSpecs: [
      'GPON ONU with dual-band 802.11ac Wi-Fi (1200Mbps)',
      '4× Gigabit LAN + 2× POTS (VoIP phone ports)',
      '867Mbps (5GHz) + 300Mbps (2.4GHz) | WPA2',
      'Popular all-in-one fiber gateway in Bangladesh'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' }
      ],
      'Wi-Fi': [
        { label: 'Standard', value: 'Wi-Fi 5 (802.11ac)' },
        { label: 'Speed', value: 'AC1200' }
      ]
    },
    warranty: '1 Year ZTE Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-15'
  },

  // Huawei ONU Devices
  {
    id: 'prod-onu006',
    name: 'Huawei EG8145V5 GPON ONT (4 LAN + 1 USB + Wi-Fi 5)',
    slug: 'huawei-eg8145v5-gpon-ont-4lan-wifi5',
    brand: 'Huawei',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'wifi-onu',
    badge: 'Best Seller',
    regularPrice: 3800,
    discountPrice: 3400,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 224,
    stockStatus: 'In Stock',
    stockCount: 150,
    images: ['/images/products/huawei-eg8145v5.webp'],
    shortSpecs: [
      'GPON ONT — ITU-T G.984 | 2× Gbps downstream capacity',
      '4× Gigabit LAN + 1× USB 2.0 + Wi-Fi 802.11b/g/n/ac',
      '300Mbps (2.4GHz) | WPA2 | IPv4/IPv6 dual stack',
      'Widely deployed by Bangladesh ISPs — reliable & stable'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' },
        { label: 'Upstream', value: '1.244 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit Ethernet' },
        { label: 'Wi-Fi', value: '300 Mbps (2.4GHz)' },
        { label: 'USB', value: '1× USB 2.0' }
      ]
    },
    warranty: '1 Year Huawei Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-onu007',
    name: 'Huawei HG8245H5 GPON ONT (4 LAN + 2 Phone + Wi-Fi)',
    slug: 'huawei-hg8245h5-gpon-ont-4lan-2phone-wifi',
    brand: 'Huawei',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'gpon-onu',
    badge: 'Hot',
    regularPrice: 5000,
    discountPrice: 4500,
    discountPercentage: 10,
    rating: 4.6,
    reviewCount: 148,
    stockStatus: 'In Stock',
    stockCount: 80,
    images: ['/images/products/huawei-hg8245h5.jpg'],
    shortSpecs: [
      'GPON ONT with 4× Gigabit LAN + 2× POTS phone ports',
      'Dual-Band Wi-Fi: 300Mbps (2.4GHz) + 867Mbps (5GHz)',
      'TR-069 remote management | VLAN | QoS | SIP VoIP',
      'Business-grade GPON ONT with VoIP support'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit' },
        { label: 'Phone', value: '2× POTS (SIP VoIP)' },
        { label: 'Wi-Fi', value: 'Dual-Band AC1200' }
      ]
    },
    warranty: '1 Year Huawei Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-15'
  },
  {
    id: 'prod-onu008',
    name: 'Huawei EG8247H5 GPON ONT (4 LAN + 2 USB + 2 Phone + Wi-Fi)',
    slug: 'huawei-eg8247h5-gpon-ont-full-featured',
    brand: 'Huawei',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'wifi-onu',
    regularPrice: 6000,
    discountPrice: 5500,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 76,
    stockStatus: 'In Stock',
    stockCount: 40,
    images: ['/images/products/huawei-eg8247h5.jpg'],
    shortSpecs: [
      'Full-featured GPON ONT: 4× GE LAN + 2× USB + 2× POTS',
      'Dual-Band Wi-Fi AC1200 | TR-069 management',
      '300Mbps (2.4GHz) + 867Mbps (5GHz) | WPA2',
      'VoIP + NAS sharing via USB — ideal for home/SOHO'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit + 2× POTS + 2× USB' },
        { label: 'Wi-Fi', value: 'AC1200 Dual-Band' }
      ]
    },
    warranty: '1 Year Huawei Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },
  {
    id: 'prod-onu009',
    name: 'Huawei HG8546M GPON ONU (4 LAN + Wi-Fi, No Phone Port)',
    slug: 'huawei-hg8546m-gpon-onu-4lan-wifi',
    brand: 'Huawei',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'wifi-onu',
    regularPrice: 3200,
    discountPrice: 2800,
    discountPercentage: 13,
    rating: 4.3,
    reviewCount: 112,
    stockStatus: 'In Stock',
    stockCount: 95,
    images: ['/images/products/huawei-hg8546m.webp'],
    shortSpecs: [
      'GPON ONU with 4× 10/100 LAN + 802.11b/g/n Wi-Fi',
      '300 Mbps Wi-Fi (2.4GHz) | WPA/WPA2 security',
      'Budget GPON ONU — most affordable Huawei option',
      'Suitable for residential fiber connections'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Fast Ethernet (10/100)' },
        { label: 'Wi-Fi', value: '300 Mbps (2.4GHz)' }
      ]
    },
    warranty: '1 Year Huawei Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },

  // FiberHome ONU Devices
  {
    id: 'prod-onu010',
    name: 'FiberHome AN5506-04-FG GPON ONU (4 LAN + 2 Phone + Wi-Fi)',
    slug: 'fiberhome-an5506-04-fg-gpon-onu',
    brand: 'FiberHome',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'gpon-onu',
    badge: 'Best Seller',
    regularPrice: 3500,
    discountPrice: 3100,
    discountPercentage: 11,
    rating: 4.4,
    reviewCount: 143,
    stockStatus: 'In Stock',
    stockCount: 100,
    images: ['/images/products/fiberhome-an5506-04-fg.webp'],
    shortSpecs: [
      'GPON ONU — ITU-T G.984 standard',
      '4× Gigabit LAN + 2× POTS phone ports',
      'Built-in Wi-Fi 802.11b/g/n 300Mbps (2.4GHz)',
      'TR-069 remote management | Used by BTCL & ISPs'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' },
        { label: 'Upstream', value: '1.244 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit' },
        { label: 'Phone', value: '2× POTS' },
        { label: 'Wi-Fi', value: '300 Mbps (2.4GHz)' }
      ]
    },
    warranty: '1 Year FiberHome Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-onu011',
    name: 'FiberHome AN5506-04-FA EPON ONU (4 LAN + 2 Phone + Wi-Fi)',
    slug: 'fiberhome-an5506-04-fa-epon-onu',
    brand: 'FiberHome',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'epon-onu',
    regularPrice: 3200,
    discountPrice: 2800,
    discountPercentage: 13,
    rating: 4.3,
    reviewCount: 88,
    stockStatus: 'In Stock',
    stockCount: 75,
    images: ['/images/products/fiberhome-an5506-04-fa.webp'],
    shortSpecs: [
      'EPON ONU — IEEE 802.3ah standard',
      '4× Gigabit LAN + 2× POTS phone ports + Wi-Fi',
      '300 Mbps Wi-Fi (2.4GHz) | WPA2 | DHCP | NAT',
      'Used in EPON-based fiber networks across Bangladesh'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'EPON (IEEE 802.3ah)' },
        { label: 'Downstream', value: '1.25 Gbps' },
        { label: 'Upstream', value: '1.25 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit' },
        { label: 'Phone', value: '2× POTS' }
      ]
    },
    warranty: '1 Year FiberHome Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },

  // TP-Link ONU Devices
  {
    id: 'prod-onu012',
    name: 'TP-Link XZ000-G7 GPON ONU (1 Gigabit LAN, SFP Stick Module)',
    slug: 'tp-link-xz000-g7-gpon-onu-sfp-stick',
    brand: 'TP-Link',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'gpon-onu',
    badge: 'New',
    regularPrice: 3500,
    discountPrice: 3200,
    discountPercentage: 9,
    rating: 4.6,
    reviewCount: 67,
    stockStatus: 'In Stock',
    stockCount: 45,
    images: ['/images/products/tp-link-xz000-g7.webp'],
    shortSpecs: [
      'GPON SFP Stick ONU — plugs directly into SFP+ router slot',
      'Eliminates need for separate ONU box | SC/UPC connector',
      'Compatible with MikroTik, Ubiquiti, and other SFP routers',
      'Full GPON ONT functionality in a small form-factor'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Form Factor', value: 'SFP Stick Module' },
        { label: 'Connector', value: 'SC/UPC' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-03-15'
  },
  {
    id: 'prod-onu013',
    name: 'TP-Link TX-6610 GPON ONU (1 Gigabit LAN, No Wi-Fi)',
    slug: 'tp-link-tx-6610-gpon-onu-1lan',
    brand: 'TP-Link',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'gpon-onu',
    regularPrice: 3800,
    discountPrice: 3400,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 54,
    stockStatus: 'In Stock',
    stockCount: 50,
    images: ['/images/products/tp-link-tx-6610.webp'],
    shortSpecs: [
      'GPON ONU — ITU-T G.984 | 1× Gigabit LAN port',
      'Bridging mode — pair with your own router',
      'SC/APC optical connector | Auto-negotiation',
      'Clean setup for users who want dedicated routers'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' },
        { label: 'LAN', value: '1× Gigabit Ethernet' }
      ]
    },
    warranty: '3 Years TP-Link Bangladesh Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-10'
  },

  // Nokia ONU
  {
    id: 'prod-onu014',
    name: 'Nokia G-240W-F GPON ONT (4 LAN + 2 Phone + Wi-Fi + USB)',
    slug: 'nokia-g240wf-gpon-ont-4lan-2phone-wifi',
    brand: 'Nokia',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'wifi-onu',
    badge: 'Hot',
    regularPrice: 5500,
    discountPrice: 5000,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 38,
    stockStatus: 'In Stock',
    stockCount: 25,
    images: ['/images/products/nokia-g-240w-f.webp'],
    shortSpecs: [
      'Nokia GPON ONT — enterprise-grade reliability',
      '4× Gigabit LAN + 2× POTS + 1× USB 2.0',
      'Dual-Band 802.11ac Wi-Fi (1200Mbps) | WPA2',
      'TR-069 / OMCI management | Used by major ISPs'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'Downstream', value: '2.488 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '4× Gigabit' },
        { label: 'Phone', value: '2× POTS' },
        { label: 'Wi-Fi', value: 'AC1200 Dual-Band' }
      ]
    },
    warranty: '1 Year Nokia Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-02-01'
  },

  // VSOL ONU Devices
  {
    id: 'prod-onu015',
    name: 'VSOL V2801F EPON ONU (1 Gigabit LAN, Bridge Mode)',
    slug: 'vsol-v2801f-epon-onu-1lan-bridge',
    brand: 'VSOL',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'epon-onu',
    regularPrice: 2500,
    discountPrice: 2200,
    discountPercentage: 12,
    rating: 4.2,
    reviewCount: 76,
    stockStatus: 'In Stock',
    stockCount: 90,
    images: ['/images/products/vsol-v2801f.webp'],
    shortSpecs: [
      'EPON ONU — IEEE 802.3ah | 1× Gigabit LAN port',
      'Bridge mode — works with any router for PPPoE',
      'SC/APC connector | Low power consumption',
      'Budget EPON ONU — popular among small ISPs'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'EPON (IEEE 802.3ah)' },
        { label: 'Downstream', value: '1.25 Gbps' },
        { label: 'LAN', value: '1× Gigabit Ethernet' }
      ]
    },
    warranty: '1 Year VSOL Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },
  {
    id: 'prod-onu016',
    name: 'VSOL V2802F GPON ONU (1 Gigabit LAN, Bridge Mode)',
    slug: 'vsol-v2802f-gpon-onu-1lan-bridge',
    brand: 'VSOL',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'gpon-onu',
    regularPrice: 2800,
    discountPrice: 2500,
    discountPercentage: 11,
    rating: 4.2,
    reviewCount: 62,
    stockStatus: 'In Stock',
    stockCount: 80,
    images: ['/images/products/vsol-v2802f.webp'],
    shortSpecs: [
      'GPON ONU — ITU-T G.984 | 1× Gigabit LAN port',
      'Bridge mode | SC/APC optical connector',
      'Auto-negotiation | Low power draw',
      'Budget GPON ONU — used by small ISPs in Bangladesh'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'GPON (ITU-T G.984)' },
        { label: 'LAN', value: '1× Gigabit Ethernet' }
      ]
    },
    warranty: '1 Year VSOL Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-01-01'
  },

  // CIG XGS-PON ONU
  {
    id: 'prod-onu017',
    name: 'CIG XG-99S XGS-PON ONU (2× 2.5G LAN, 10G Fiber, Wi-Fi 6)',
    slug: 'cig-xg99s-xgspon-onu-10g-wifi6',
    brand: 'CIG',
    category: 'onu-device',
    categoryName: 'ONU / ONT Device',
    subcategory: 'xgs-pon-onu',
    badge: 'New',
    regularPrice: 8000,
    discountPrice: 7200,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 22,
    stockStatus: 'Limited Stock',
    stockCount: 12,
    images: ['/images/products/cig-xg-99s.webp'],
    shortSpecs: [
      'XGS-PON ONU — ITU-T G.9807.1 (10 Gbps symmetrical)',
      '2× 2.5G Multi-Gig LAN ports | SC/UPC fiber connector',
      'Built-in Wi-Fi 6 AX3000 dual-band router',
      '10G fiber future-proof ONU for next-gen ISP networks'
    ],
    specifications: {
      'PON': [
        { label: 'Standard', value: 'XGS-PON (ITU-T G.9807.1)' },
        { label: 'Downstream', value: '10 Gbps' },
        { label: 'Upstream', value: '10 Gbps' }
      ],
      'Ports': [
        { label: 'LAN', value: '2× 2.5G Multi-Gig' },
        { label: 'Wi-Fi', value: 'Wi-Fi 6 AX3000' }
      ]
    },
    warranty: '1 Year CIG Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-20'
  }
,

// ── SECURITY SURVEILLANCE & ACCESS CONTROL PRODUCTS ──
  {
    id: 'prod-sec001',
    name: 'EZVIZ C6N 2MP Smart Wi-Fi Pan & Tilt Indoor Security Camera',
    slug: 'ezviz-c6n-2mp-smart-wifi-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'portable-wifi-camera',
    badge: 'Best Seller',
    regularPrice: 2400,
    discountPrice: 2100,
    discountPercentage: 12,
    rating: 4.8,
    reviewCount: 420,
    stockStatus: 'In Stock',
    stockCount: 150,
    isSmartHome: true,
    images: ['/images/products/ezviz-c6n.webp'],
    shortSpecs: [
      'Resolution: 1080p Full HD (1920 × 1080)',
      '360° Visual Coverage with Motorized Pan & Tilt',
      'Smart Night Vision with Smart IR (Up to 10m)',
      'Motion Detection & Smart Tracking | Two-Way Audio',
      'Supports MicroSD Card (Up to 256GB) & EZVIZ Cloud'
    ],
    specifications: {
      "Camera": [
            {
                  "label": "Image Sensor",
                  "value": "1/4' Progressive Scan CMOS"
            },
            {
                  "label": "Lens",
                  "value": "4mm@ F2.4, view angle: 85°"
            },
            {
                  "label": "Pan/Tilt Angle",
                  "value": "Pan: 340°, Tilt: 55°"
            },
            {
                  "label": "Night Vision",
                  "value": "Max. 10 meters"
            }
      ]
},
    warranty: '1 Year Brand Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec002',
    name: 'EZVIZ C8C 2MP Outdoor Pan/Tilt Color Night Vision Wi-Fi Camera',
    slug: 'ezviz-c8c-2mp-outdoor-ptz-wifi-camera',
    brand: 'EZVIZ',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'portable-wifi-camera',
    badge: 'Hot',
    regularPrice: 5400,
    discountPrice: 4800,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 195,
    stockStatus: 'In Stock',
    stockCount: 80,
    isSmartHome: true,
    images: ['/images/products/ezviz-c8c.webp'],
    shortSpecs: [
      '1080p FHD Outdoor Pan/Tilt Security Camera',
      '352° Horizontal & 95° Vertical Rotation Coverage',
      'Color Night Vision with Built-in Dual Spotlights (30m)',
      'AI-Powered Person Detection & Active Defense Siren',
      'IP65 Dustproof & Waterproof Weatherproof Design'
    ],
    specifications: {
      "Camera": [
            {
                  "label": "Resolution",
                  "value": "1080p FHD"
            },
            {
                  "label": "Night Vision",
                  "value": "30m Color & Black/White"
            },
            {
                  "label": "Ingress Protection",
                  "value": "IP65 Weatherproof"
            }
      ]
},
    warranty: '1 Year Brand Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec003',
    name: 'Imou Ranger 2 4MP 360° AI Smart Human Detection Wi-Fi Security Camera',
    slug: 'imou-ranger-2-4mp-wifi-camera',
    brand: 'Imou',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'portable-wifi-camera',
    badge: 'Best Seller',
    regularPrice: 3200,
    discountPrice: 2850,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 512,
    stockStatus: 'In Stock',
    stockCount: 200,
    isSmartHome: true,
    images: ['/images/products/imou-ranger-2.webp'],
    shortSpecs: [
      '4MP QHD Resolution (2560 × 1440) Crystal Clear Video',
      '0~355° Pan & -5~80° Tilt for Full 360° Coverage',
      'Advanced AI Human Detection & Smart Tracking',
      'Two-Way Audio with Built-in Siren to Deter Intruders',
      'Privacy Mode with One Click in Imou Life App'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "4MP QHD (2560 x 1440)"
            },
            {
                  "label": "Zoom",
                  "value": "16x Digital Zoom"
            },
            {
                  "label": "Night Vision",
                  "value": "10m Distance"
            }
      ]
},
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec004',
    name: 'TP-Link Tapo C200 Pan/Tilt Home Security Wi-Fi Camera',
    slug: 'tp-link-tapo-c200-pan-tilt-wifi-camera',
    brand: 'TP-Link',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'portable-wifi-camera',
    badge: 'Popular',
    regularPrice: 2650,
    discountPrice: 2350,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 380,
    stockStatus: 'In Stock',
    stockCount: 140,
    isSmartHome: true,
    images: ['/images/products/tapo-c200.webp'],
    shortSpecs: [
      'High-Definition 1080p Crystal Clear Video',
      'Pan and Tilt: 360º Horizontal and 114º Vertical Range',
      'Advanced Night Vision up to 30 ft (850nm IR)',
      'Motion Detection and Notifications via Tapo App',
      'Sound and Light Alarm | Two-Way Audio'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "1080p Full HD"
            },
            {
                  "label": "Storage",
                  "value": "Supports MicroSD up to 128GB"
            },
            {
                  "label": "Wireless",
                  "value": "11Mbps (802.11b), 54Mbps (802.11g)"
            }
      ]
},
    warranty: '1 Year TP-Link Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec005',
    name: 'Xiaomi Smart Camera C300 2K Ultra-Clear 360° Panoramic View',
    slug: 'xiaomi-smart-camera-c300-2k',
    brand: 'Xiaomi',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'portable-wifi-camera',
    regularPrice: 3600,
    discountPrice: 3200,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 220,
    stockStatus: 'In Stock',
    stockCount: 75,
    isSmartHome: true,
    images: ['/images/products/xiaomi-c300.webp'],
    shortSpecs: [
      '2K Ultra-Clear HD (2304 × 1296) Resolution with 3MP Lens',
      'F1.4 Large Aperture for clear images even in low light',
      'Full 360° Horizontal & 108° Vertical Viewing Angle',
      'AI Human Detection with Reduced False Alarms',
      'Supports Xiaomi Home App & Google Home / Alexa'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "2304 × 1296 (2K 3MP)"
            },
            {
                  "label": "Aperture",
                  "value": "F1.4"
            },
            {
                  "label": "Connectivity",
                  "value": "Wi-Fi IEEE 802.11 b/g/n 2.4 GHz"
            }
      ]
},
    warranty: '6 Months Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec006',
    name: 'Hikvision DS-2CD1023G0E-I 2MP IR Fixed Bullet Network IP Camera',
    slug: 'hikvision-ds-2cd1023g0e-i-2mp-bullet-ip-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera',
    badge: 'Best Seller',
    regularPrice: 3000,
    discountPrice: 2700,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 280,
    stockStatus: 'In Stock',
    stockCount: 160,
    images: ['/images/products/hikvision-1023g0e.webp'],
    shortSpecs: [
      '1/2.8" Progressive Scan CMOS, 2 Megapixel (1920 × 1080)',
      '4mm Fixed Lens with 86° Horizontal Field of View',
      'Up to 30m Infrared Night Vision Range (EXIR 2.0)',
      'Efficient H.265+ Compression Technology',
      'IP67 Water and Dust Resistant Metal & Plastic Housing'
    ],
    specifications: {
      "Camera": [
            {
                  "label": "Resolution",
                  "value": "2MP (1920 × 1080 @ 30fps)"
            },
            {
                  "label": "IR Distance",
                  "value": "Up to 30 meters"
            },
            {
                  "label": "Power",
                  "value": "12V DC ± 25% or PoE (802.3af)"
            }
      ]
},
    warranty: '2 Years Hikvision Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec007',
    name: 'Hikvision DS-2CD1123G0E-I 2MP Vandal-Proof Dome Network IP Camera',
    slug: 'hikvision-ds-2cd1123g0e-i-2mp-dome-ip-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera',
    regularPrice: 3100,
    discountPrice: 2750,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 195,
    stockStatus: 'In Stock',
    stockCount: 120,
    images: ['/images/products/hikvision-1123g0e.webp'],
    shortSpecs: [
      '2 Megapixel 1080p High Resolution Dome IP Camera',
      'IK10 Vandal-Proof & IP67 Weatherproof Rating',
      '30m EXIR Night Vision with Smart IR',
      'H.265+ / H.265 / H.264+ Video Compression',
      'Power over Ethernet (PoE 802.3af) Supported'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "1920 × 1080"
            },
            {
                  "label": "Protection",
                  "value": "IK10 Vandal-Proof + IP67"
            },
            {
                  "label": "Lens",
                  "value": "2.8mm / 4mm Fixed Focal"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec008',
    name: 'Hikvision DS-2CD1043G0-I 4MP WDR IR Fixed Bullet IP Camera',
    slug: 'hikvision-ds-2cd1043g0-i-4mp-bullet-ip-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera',
    badge: 'Popular',
    regularPrice: 4700,
    discountPrice: 4200,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 165,
    stockStatus: 'In Stock',
    stockCount: 90,
    images: ['/images/products/hikvision-1043g0.webp'],
    shortSpecs: [
      '4MP QHD Resolution (2560 × 1440 @ 20fps)',
      '120dB True WDR (Wide Dynamic Range) for Clear Backlighting',
      'EXIR 2.0: Advanced Infrared with 30m Range',
      '3D Digital Noise Reduction (3D DNR)',
      'IP67 Weatherproof Housing for Outdoor Security'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "4 Megapixel (2560 × 1440)"
            },
            {
                  "label": "WDR",
                  "value": "120 dB True WDR"
            },
            {
                  "label": "Power",
                  "value": "PoE 802.3af / 12V DC"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec009',
    name: 'Dahua DH-IPC-HFW1230S1P-S5 2MP Entry IR Bullet IP Camera',
    slug: 'dahua-dh-ipc-hfw1230s1p-s5-2mp-ip-camera',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera',
    regularPrice: 2900,
    discountPrice: 2600,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 140,
    stockStatus: 'In Stock',
    stockCount: 110,
    images: ['/images/products/dahua-hfw1230s1p.webp'],
    shortSpecs: [
      '2MP 1/2.8" CMOS Image Sensor, Low Illuminance & High Definition',
      'Outputs max. 2MP (1920 × 1080) @ 25/30 fps',
      'Built-in IR LED, Max. IR Distance: 30 meters',
      'SMART H.264+ / H.265+ Flexible Coding',
      'IP67 Weatherproof Protection | PoE Supported'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "2MP 1080p"
            },
            {
                  "label": "IR Range",
                  "value": "30 Meters"
            },
            {
                  "label": "Lens",
                  "value": "2.8mm / 3.6mm"
            }
      ]
},
    warranty: '2 Years Dahua Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec010',
    name: 'Dahua DH-IPC-HDW1230T1P-S5 2MP Entry IR Eyeball Dome IP Camera',
    slug: 'dahua-dh-ipc-hdw1230t1p-s5-2mp-dome-ip-camera',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera',
    regularPrice: 2950,
    discountPrice: 2650,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 130,
    stockStatus: 'In Stock',
    stockCount: 85,
    images: ['/images/products/dahua-hdw1230t1p.webp'],
    shortSpecs: [
      '2 Megapixel Full HD Eyeball Dome Network Camera',
      'High Quality Metal & Plastic Eyeball Construction',
      'Up to 30m Smart Infrared Distance',
      'IP67 Ingress Protection for Indoor & Outdoor Installation',
      'DWDR, 3D NR, HLC, BLC, Digital Watermarking'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "2MP (1920 × 1080)"
            },
            {
                  "label": "Power",
                  "value": "PoE (802.3af) / 12V DC"
            },
            {
                  "label": "Lens",
                  "value": "2.8mm (102° FOV)"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec011',
    name: 'Uniview IPC2122LR3-PF40M-D 2MP HD Mini Bullet IP Camera',
    slug: 'uniview-ipc2122lr3-pf40m-d-2mp-ip-camera',
    brand: 'Uniview',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera',
    regularPrice: 2800,
    discountPrice: 2500,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 95,
    stockStatus: 'In Stock',
    stockCount: 70,
    images: ['/images/products/uniview-ipc2122.webp'],
    shortSpecs: [
      '2MP HD Optical Glass Window with Higher Light Transmittance',
      'Day/Night Functionality with Smart IR (Up to 30m)',
      'Ultra 265, H.265, H.264 Video Compression',
      'ONVIF Conformance (Profile S, Profile T)',
      'Wide Voltage Range of ±25% & IP67 Rated'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "2MP 1080p"
            },
            {
                  "label": "IR Range",
                  "value": "30 Meters"
            },
            {
                  "label": "Standard",
                  "value": "ONVIF Compliant"
            }
      ]
},
    warranty: '2 Years Uniview Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec012',
    name: 'Hikvision DS-2CE16D0T-IRPF 2MP Turbo HD Fixed Bullet CC Camera',
    slug: 'hikvision-ds-2ce16d0t-irpf-2mp-bullet-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera',
    badge: 'Best Seller',
    regularPrice: 1600,
    discountPrice: 1450,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 650,
    stockStatus: 'In Stock',
    stockCount: 300,
    images: ['/images/products/hikvision-16d0t.webp'],
    shortSpecs: [
      '2 Megapixel High-Performance CMOS Sensor',
      '1920 × 1080 Resolution Turbo HD Video Output',
      'Smart IR Night Vision up to 20 meters',
      '4 in 1 Video Output (Switchable TVI/AHD/CVI/CVBS)',
      'IP66 Weatherproof Rated for Outdoor Surveillance'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "2.0 Megapixel 1080p"
            },
            {
                  "label": "Lens",
                  "value": "3.6mm Fixed Lens (82.2° FOV)"
            },
            {
                  "label": "Night Vision",
                  "value": "20m Smart IR"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec013',
    name: 'Hikvision DS-2CE56D0T-IRPF 2MP Turbo HD Indoor Dome CC Camera',
    slug: 'hikvision-ds-2ce56d0t-irpf-2mp-dome-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera',
    regularPrice: 1550,
    discountPrice: 1400,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 420,
    stockStatus: 'In Stock',
    stockCount: 250,
    images: ['/images/products/hikvision-56d0t.webp'],
    shortSpecs: [
      '2MP High-Performance CMOS Indoor Dome Camera',
      '1080p Full HD Analog Video Output via BNC',
      'Smart IR with 20m Night Vision Distance',
      '3-Axis Angle Adjustment for Easy Ceiling Mounting',
      '4 in 1 Switchable Output (TVI/AHD/CVI/CVBS)'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "1080p Full HD"
            },
            {
                  "label": "Mounting",
                  "value": "Ceiling / Wall Indoor"
            },
            {
                  "label": "Power",
                  "value": "12V DC Max 4W"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec014',
    name: 'Hikvision DS-2CE10DF0T-F ColorVu 2MP 24/7 Full Color Bullet CC Camera',
    slug: 'hikvision-colorvu-2mp-bullet-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera',
    badge: 'Popular',
    regularPrice: 2450,
    discountPrice: 2200,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 340,
    stockStatus: 'In Stock',
    stockCount: 180,
    images: ['/images/products/hikvision-colorvu-bullet.webp'],
    shortSpecs: [
      'ColorVu Technology: 24/7 Full-Time Color Imaging Even in Pitch Darkness',
      '2 Megapixel 1080p Crystal Clear Color Video',
      '20m White Light Distance for Night Illumination',
      'F1.0 Super Aperture Lens Captures 4x More Light',
      'IP67 Water and Dust Resistant Metal Housing'
    ],
    specifications: {
      "ColorVu": [
            {
                  "label": "Color Night Vision",
                  "value": "24/7 Full Color 20m"
            },
            {
                  "label": "Aperture",
                  "value": "F1.0 Super Aperture"
            },
            {
                  "label": "Protection",
                  "value": "IP67 Waterproof"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec015',
    name: 'Hikvision DS-2CE70DF0T-PF ColorVu 2MP Full Color Indoor Dome CC Camera',
    slug: 'hikvision-colorvu-2mp-dome-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera',
    regularPrice: 2400,
    discountPrice: 2150,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 260,
    stockStatus: 'In Stock',
    stockCount: 150,
    images: ['/images/products/hikvision-colorvu-dome.webp'],
    shortSpecs: [
      'ColorVu 24/7 Vivid Color Imaging for Indoors',
      '2MP Full HD 1080p Resolution with F1.0 Lens',
      'Warm White Light LED up to 20 meters',
      '3D DNR Delivers Clean and Sharp Images',
      'Ideal for Homes, Offices, Showrooms & Bank Counters'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "1080p Full HD"
            },
            {
                  "label": "Aperture",
                  "value": "F1.0"
            },
            {
                  "label": "Color Vision",
                  "value": "24/7 Full Color"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec016',
    name: 'Dahua DH-HAC-B1A21P 2MP Cooper HDCVI IR Bullet Camera',
    slug: 'dahua-dh-hac-b1a21p-2mp-bullet-camera',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera',
    regularPrice: 1500,
    discountPrice: 1350,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 310,
    stockStatus: 'In Stock',
    stockCount: 220,
    images: ['/images/products/dahua-b1a21p.webp'],
    shortSpecs: [
      '2MP Max 30fps@1080P HDCVI Video Output',
      'Switchable Output: HDCVI, CVBS, AHD, TVI',
      'Smart IR Night Vision up to 20 meters',
      'High Durability Plastic Housing with IP67 Weatherproof',
      'Cost-Effective Solution for Home & Retail Security'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "1080p (1920 × 1080)"
            },
            {
                  "label": "Lens",
                  "value": "3.6mm Fixed Lens"
            },
            {
                  "label": "IR Range",
                  "value": "20m Smart IR"
            }
      ]
},
    warranty: '2 Years Dahua Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec017',
    name: 'Dahua DH-HAC-T1A21P 2MP Cooper HDCVI IR Eyeball Dome Camera',
    slug: 'dahua-dh-hac-t1a21p-2mp-dome-camera',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera',
    regularPrice: 1450,
    discountPrice: 1300,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 290,
    stockStatus: 'In Stock',
    stockCount: 210,
    images: ['/images/products/dahua-t1a21p.webp'],
    shortSpecs: [
      '2 Megapixel 1080p HDCVI Indoor Eyeball Dome Camera',
      'Smart IR Illumination up to 20m Distance',
      'Easy 3-Axis Installation for Wall or Ceiling',
      'Multi-Format Video Output (HDCVI/CVBS/AHD/TVI)',
      'Reliable Performance for Residences and Small Shops'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "2MP 1080p"
            },
            {
                  "label": "Mounting",
                  "value": "Indoor Dome Eyeball"
            }
      ]
},
    warranty: '2 Years Dahua Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec018',
    name: 'Hikvision DS-2DE4225IW-DE 2MP 25× Network IR Speed Dome PTZ Camera',
    slug: 'hikvision-ds-2de4225iw-de-2mp-25x-ptz-camera',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ptz-camera',
    badge: 'Top Tier',
    regularPrice: 42000,
    discountPrice: 38000,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 45,
    stockStatus: 'In Stock',
    stockCount: 20,
    images: ['/images/products/hikvision-ptz-2225.webp'],
    shortSpecs: [
      '1/2.8" Progressive Scan CMOS with 2 Megapixel 1080p',
      'Powerful 25× Optical Zoom & 16× Digital Zoom',
      'DarkFighter Technology for Ultra-Low Light Performance',
      'Up to 100 meters Smart IR Night Distance',
      'Smart Tracking, Perimeter Protection & Face Capture'
    ],
    specifications: {
      "PTZ": [
            {
                  "label": "Optical Zoom",
                  "value": "25× Optical Zoom (4.8mm - 120mm)"
            },
            {
                  "label": "Pan/Tilt",
                  "value": "360° Endless Pan, -15° to 90° Tilt"
            },
            {
                  "label": "IR Distance",
                  "value": "100m"
            },
            {
                  "label": "Weatherproof",
                  "value": "IP66 & TVS 4000V Lightning Surge"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 3166,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec019',
    name: 'Dahua SD49425XB-HNR 4MP 25x Starlight IR WizSense PTZ Network Camera',
    slug: 'dahua-sd49425xb-hnr-4mp-25x-ptz-camera',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ptz-camera',
    badge: 'Best Seller',
    regularPrice: 46000,
    discountPrice: 42000,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 38,
    stockStatus: 'In Stock',
    stockCount: 15,
    images: ['/images/products/dahua-ptz-49425.webp'],
    shortSpecs: [
      '1/2.8" STARVIS™ CMOS Sensor with 4MP Crystal Resolution',
      '25× Optical Zoom with Fast and Precise Auto Focus',
      'Starlight Technology with IR Distance up to 100 meters',
      'WizSense AI: Auto-Tracking, Tripwire & Intrusion Detection',
      'PoE+ (802.3at) Power & IP66 Weatherproof Protection'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Resolution",
                  "value": "4MP (2560 × 1440 @ 30fps)"
            },
            {
                  "label": "Optical Zoom",
                  "value": "25x"
            },
            {
                  "label": "AI Features",
                  "value": "Auto-Tracking, SMD Plus"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 3500,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec020',
    name: 'Uniview IPC6412LR-X5P 2MP 5x Optical Zoom PTZ Network Dome Camera',
    slug: 'uniview-ipc6412lr-x5p-2mp-5x-ptz-camera',
    brand: 'Uniview',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ptz-camera',
    regularPrice: 16500,
    discountPrice: 14500,
    discountPercentage: 12,
    rating: 4.8,
    reviewCount: 52,
    stockStatus: 'In Stock',
    stockCount: 25,
    images: ['/images/products/uniview-ptz-6412.webp'],
    shortSpecs: [
      '2MP Mini PTZ Speed Dome Camera with 5x Optical Zoom',
      'LightHunter Technology Ensures High Quality in Low Light',
      'Smart IR up to 30 meters Night Vision',
      'Built-in Mic & Speaker for Two-Way Audio Communication',
      'IP66 Weatherproof & IK10 Vandal-Resistant Housing'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Zoom",
                  "value": "5x Optical Zoom"
            },
            {
                  "label": "Audio",
                  "value": "Built-in Mic & Speaker"
            },
            {
                  "label": "Protection",
                  "value": "IP66 / IK10"
            }
      ]
},
    warranty: '2 Years Uniview Warranty',
    emiAvailable: true,
    emiStartingBDT: 1208,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec021',
    name: 'Hikvision 4-Camera Turbo HD Complete CCTV Security Package with DVR & 500GB HDD',
    slug: 'hikvision-4-camera-turbo-hd-package',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-package',
    badge: 'Super Deal',
    regularPrice: 13000,
    discountPrice: 11500,
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 380,
    stockStatus: 'In Stock',
    stockCount: 60,
    images: ['/images/products/hikvision-4cam-pkg.webp'],
    shortSpecs: [
      '4× Hikvision 2MP Turbo HD Cameras (2 Bullet + 2 Dome)',
      '1× Hikvision 4-Channel 1080p H.265 DVR (DS-7104HGHI-M1)',
      '1× 500GB Surveillance Hard Disk Drive Installed',
      '1× Central CCTV Power Supply 12V 5A + BNC & DC Connectors',
      '1× 60-Meter High Quality CCTV Cat6 / 3C2V Cable Roll'
    ],
    specifications: {
      "Package Includes": [
            {
                  "label": "Cameras",
                  "value": "4× 2MP Hikvision 1080p (2 Outdoor + 2 Indoor)"
            },
            {
                  "label": "DVR",
                  "value": "4CH Turbo HD H.265 DVR"
            },
            {
                  "label": "Storage",
                  "value": "500GB Surveillance HDD"
            },
            {
                  "label": "Accessories",
                  "value": "Power Supply, 8× BNC, 4× DC, 60m Cable"
            }
      ]
},
    warranty: '2 Years Official Warranty on Cameras & DVR',
    emiAvailable: true,
    emiStartingBDT: 958,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec022',
    name: 'Hikvision ColorVu 4-Camera 24/7 Full Color HD Complete CCTV Package with 1TB HDD',
    slug: 'hikvision-colorvu-4-camera-package-1tb',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-package',
    badge: 'Hot Deal',
    regularPrice: 17500,
    discountPrice: 15800,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 290,
    stockStatus: 'In Stock',
    stockCount: 45,
    images: ['/images/products/hikvision-colorvu-pkg.webp'],
    shortSpecs: [
      '4× Hikvision 2MP ColorVu 24/7 Full Color Night Vision Cameras',
      '1× Hikvision 4CH Turbo HD AcuSense DVR',
      '1× Seagate SkyHawk / WD Purple 1TB Surveillance Hard Disk',
      '1× 12V 10A Central Power Supply Unit',
      '100-Meter Solid Copper Cable, Video Balun & DC Jacks'
    ],
    specifications: {
      "Package": [
            {
                  "label": "Camera Type",
                  "value": "24/7 Full Color Daytime & Nighttime"
            },
            {
                  "label": "Storage",
                  "value": "1TB Surveillance HDD (15-20 Days Recording)"
            },
            {
                  "label": "Mobile App",
                  "value": "Hik-Connect Live View on Android/iPhone"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 1316,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec023',
    name: 'Dahua 8-Camera Complete HDCVI Surveillance Package with 8CH XVR & 2TB HDD',
    slug: 'dahua-8-camera-complete-surveillance-package',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-package',
    regularPrice: 26000,
    discountPrice: 23500,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 160,
    stockStatus: 'In Stock',
    stockCount: 30,
    images: ['/images/products/dahua-8cam-pkg.webp'],
    shortSpecs: [
      '8× Dahua 2MP Cooper HDCVI Cameras (4 Bullet + 4 Dome)',
      '1× Dahua 8-Channel WizSense AI XVR (DH-XVR1B08-I)',
      '1× 2TB WD Purple Surveillance Hard Disk Drive',
      '1× Central Power Box 12V 15A 9-Port with Metal Cabinet',
      '1× 150m Heavy-Duty CCTV Video Cable Roll + BNC & DC'
    ],
    specifications: {
      "Package Details": [
            {
                  "label": "Cameras",
                  "value": "8× Dahua 2MP (Indoor + Outdoor Mix)"
            },
            {
                  "label": "Recorder",
                  "value": "8CH WizSense AI Recorder"
            },
            {
                  "label": "HDD",
                  "value": "2TB Surveillance Hard Drive"
            }
      ]
},
    warranty: '2 Years Warranty on Cameras & XVR',
    emiAvailable: true,
    emiStartingBDT: 1958,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec024',
    name: 'Hikvision 4-Channel 2MP IP PoE Complete Network Security Package with 1TB HDD',
    slug: 'hikvision-4-channel-ip-poe-package',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera-package',
    badge: 'Popular',
    regularPrice: 21000,
    discountPrice: 18500,
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 180,
    stockStatus: 'In Stock',
    stockCount: 35,
    images: ['/images/products/hikvision-ip-pkg.webp'],
    shortSpecs: [
      '4× Hikvision 2MP Network IP Cameras (2 Bullet + 2 Dome)',
      '1× Hikvision 4-Channel 4K PoE NVR (Plug & Play - No separate power)',
      '1× 1TB Surveillance Grade Dedicated Hard Disk',
      '1× 100m Cat6 Pure Copper Network Cable Roll + RJ45 Connectors',
      'Crystal Clear Digital Video with Zero Signal Loss over Distance'
    ],
    specifications: {
      "IP Package": [
            {
                  "label": "NVR",
                  "value": "4CH PoE 4K NVR (Built-in 4 PoE Ports)"
            },
            {
                  "label": "Cabling",
                  "value": "Cat6 Pure Copper High Speed"
            },
            {
                  "label": "Remote View",
                  "value": "Hik-Connect Cloud with Zero Static IP needed"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 1541,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec025',
    name: 'Dahua 8-Channel 4MP WizSense AI IP Camera PoE Package with 2TB HDD',
    slug: 'dahua-8-channel-4mp-wizsense-ip-package',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'ip-camera-package',
    badge: 'Pro Grade',
    regularPrice: 44000,
    discountPrice: 39000,
    discountPercentage: 11,
    rating: 5,
    reviewCount: 75,
    stockStatus: 'In Stock',
    stockCount: 20,
    images: ['/images/products/dahua-ip-pkg.webp'],
    shortSpecs: [
      '8× Dahua 4MP WizSense AI IP Cameras (4 Bullet + 4 Eyeball Dome)',
      '1× Dahua 8CH PoE 4K Network Video Recorder (NVR4108HS-8P)',
      '1× 2TB WD Purple 24/7 Surveillance Hard Drive',
      'AI Smart Motion Detection SMD Plus & Perimeter Fence Protection',
      '1× 200m Cat6 UTP Network Cable + 20× RJ45 Connectors'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Cameras",
                  "value": "8× 4MP Ultra HD WizSense AI"
            },
            {
                  "label": "NVR",
                  "value": "8CH 4K with 8 Independent PoE Ports"
            },
            {
                  "label": "HDD",
                  "value": "2TB Western Digital Purple"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 3250,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec026',
    name: 'Hikvision DS-7104HGHI-M1 4-Channel 1080p Lite Mini 1U H.265 DVR',
    slug: 'hikvision-ds-7104hghi-m1-4ch-dvr',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'dvr',
    badge: 'Best Seller',
    regularPrice: 3500,
    discountPrice: 3150,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 310,
    stockStatus: 'In Stock',
    stockCount: 140,
    images: ['/images/products/hikvision-7104hghi.webp'],
    shortSpecs: [
      '4-Channel Video Recording up to 1080p Lite Resolution',
      'H.265 Pro+ / H.265 / H.264 Video Compression',
      'Supports HDTVI / AHD / CVI / CVBS / IP Video Input',
      '1× SATA Interface (Supports up to 4TB Capacity)',
      'HDMI and VGA Simultaneous Output'
    ],
    specifications: {
      "DVR": [
            {
                  "label": "Channels",
                  "value": "4 Channels BNC"
            },
            {
                  "label": "Encoding",
                  "value": "H.265 Pro+ (Saves up to 80% Storage)"
            },
            {
                  "label": "Hard Drive",
                  "value": "1 SATA port, up to 4TB"
            }
      ]
},
    warranty: '2 Years Hikvision Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec027',
    name: 'Hikvision DS-7208HGHI-M1 8-Channel 1080p Lite 1U H.265 DVR',
    slug: 'hikvision-ds-7208hghi-m1-8ch-dvr',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'dvr',
    regularPrice: 5300,
    discountPrice: 4800,
    discountPercentage: 9,
    rating: 4.8,
    reviewCount: 220,
    stockStatus: 'In Stock',
    stockCount: 95,
    images: ['/images/products/hikvision-7208hghi.webp'],
    shortSpecs: [
      '8-Channel BNC Video Inputs + 2 Extra IP Cameras Supported',
      'Deep learning-based Motion Detection 2.0 on all analog channels',
      'H.265 Pro+ compression improves encoding efficiency',
      'Supports up to 10TB Storage Capacity per HDD',
      'Full HD 1080p Lite Recording @ 15fps'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Channels",
                  "value": "8 Channels"
            },
            {
                  "label": "SATA",
                  "value": "1 SATA interface up to 10TB"
            },
            {
                  "label": "Smart Feature",
                  "value": "Motion Detection 2.0 (Human/Vehicle)"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec028',
    name: 'Hikvision DS-7216HGHI-M1 16-Channel 1080p Lite 1U DVR Recorder',
    slug: 'hikvision-ds-7216hghi-m1-16ch-dvr',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'dvr',
    regularPrice: 9200,
    discountPrice: 8200,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 110,
    stockStatus: 'In Stock',
    stockCount: 50,
    images: ['/images/products/hikvision-7216hghi.webp'],
    shortSpecs: [
      '16 Analog Channel Inputs + 2 Extra IP Channel Support',
      'Motion Detection 2.0 Human and Vehicle Target Classification',
      '1 SATA Interface supporting up to 10TB HDD',
      'HDMI / VGA Simultaneous 1080p Output',
      'Smart Search for Efficient Playback'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Channels",
                  "value": "16 Channels BNC"
            },
            {
                  "label": "Output",
                  "value": "HDMI (1920×1080), VGA"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec029',
    name: 'Hikvision DS-7604NI-Q1/4P 4-Channel 4K PoE Network Video Recorder',
    slug: 'hikvision-ds-7604ni-q1-4p-poe-nvr',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'nvr',
    badge: 'Popular',
    regularPrice: 8200,
    discountPrice: 7500,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 175,
    stockStatus: 'In Stock',
    stockCount: 80,
    images: ['/images/products/hikvision-7604ni.webp'],
    shortSpecs: [
      '4-Channel IP Camera Inputs with 4 Built-in PoE Ports',
      'Up to 4K Ultra HD (3840 × 2160) Resolution Output via HDMI',
      'H.265+ Compression Technology Reduces Bandwidth & Storage',
      'Incoming Bandwidth: 40 Mbps | Outgoing Bandwidth: 80 Mbps',
      '1 SATA Interface up to 8TB Capacity'
    ],
    specifications: {
      "NVR": [
            {
                  "label": "Channels",
                  "value": "4 IP Channels (4× PoE RJ45)"
            },
            {
                  "label": "Resolution",
                  "value": "Up to 8MP 4K"
            },
            {
                  "label": "PoE Power",
                  "value": "Max 36W Total"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec030',
    name: 'Hikvision DS-7608NI-Q1 8-Channel 4K Network Video Recorder (NVR)',
    slug: 'hikvision-ds-7608ni-q1-8ch-4k-nvr',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'nvr',
    regularPrice: 8000,
    discountPrice: 7200,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 190,
    stockStatus: 'In Stock',
    stockCount: 90,
    images: ['/images/products/hikvision-7608ni.webp'],
    shortSpecs: [
      'Supports up to 8 IP Network Security Cameras up to 8MP',
      '4K HDMI Video Output (3840 × 2160)',
      'Incoming Bandwidth: 80 Mbps, Outgoing: 80 Mbps',
      'Supports Multiple VCA (Video Content Analytics) Events',
      '1 SATA Interface supporting up to 8TB Capacity'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Channels",
                  "value": "8 Channels IP"
            },
            {
                  "label": "Decoding",
                  "value": "1-ch @ 8 MP / 4-ch @ 1080p"
            },
            {
                  "label": "Storage",
                  "value": "1 SATA port up to 8TB"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec031',
    name: 'Dahua NVR4108HS-4KS2/L 8-Channel 4K Compact 1U Lite Network Video Recorder',
    slug: 'dahua-nvr4108hs-4ks2-l-8ch-4k-nvr',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'nvr',
    regularPrice: 9500,
    discountPrice: 8500,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 120,
    stockStatus: 'In Stock',
    stockCount: 65,
    images: ['/images/products/dahua-4108hs.webp'],
    shortSpecs: [
      '8-Channel 4K Network Video Recorder (80 Mbps Max Bandwidth)',
      'Smart H.265+ / H.264+ Dual Codec Decoding',
      'Max 8MP Resolution for Preview and Playback',
      'HDMI / VGA Simultaneous Output (HDMI up to 4K)',
      '1 SATA III Port, Up to 10 TB Capacity'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Channels",
                  "value": "8 Channels"
            },
            {
                  "label": "Bandwidth",
                  "value": "80 Mbps"
            },
            {
                  "label": "HDD",
                  "value": "1 SATA up to 10TB"
            }
      ]
},
    warranty: '2 Years Dahua Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec032',
    name: 'Dahua NVR4216-16P-4KS2/L 16-Channel 16-PoE 4K Network Video Recorder',
    slug: 'dahua-nvr4216-16p-4ks2-l-16ch-poe-nvr',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'nvr',
    badge: 'Enterprise',
    regularPrice: 21000,
    discountPrice: 18500,
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 65,
    stockStatus: 'In Stock',
    stockCount: 25,
    images: ['/images/products/dahua-4216-16p.webp'],
    shortSpecs: [
      '16-Channel IP Inputs with 16 Independent Built-in PoE Ports',
      'Dual SATA Ports (Supports 2× 10TB HDDs = 20TB Total)',
      'Max 160 Mbps Incoming Bandwidth for High Bitrate 4K Streams',
      'AI by Camera: Perimeter Protection, Face Detection, SMD Plus',
      '1U Rackmount Housing with Advanced Cooling Fans'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Channels",
                  "value": "16 Channels PoE"
            },
            {
                  "label": "SATA Ports",
                  "value": "2 SATA III (Up to 20TB Total)"
            },
            {
                  "label": "PoE Budget",
                  "value": "130W Total PoE Power"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 1541,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec033',
    name: 'Dahua DH-XVR1B04-I 4-Channel WizSense 1080p Cooper 1U Digital Video Recorder',
    slug: 'dahua-dh-xvr1b04-i-4ch-wizsense-xvr',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'xvr',
    badge: 'Best Seller',
    regularPrice: 3800,
    discountPrice: 3400,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 210,
    stockStatus: 'In Stock',
    stockCount: 115,
    images: ['/images/products/dahua-xvr1b04.webp'],
    shortSpecs: [
      'H.265+/H.265 Dual-stream Video Compression',
      'Full-channel AI-Coding for High Bandwidth & Storage Savings',
      'Supports HDCVI / AHD / TVI / CVBS / IP Video Inputs',
      'SMD Plus (Smart Motion Detection Plus) Human & Vehicle Filter',
      'Supports 1 SATA HDD up to 6TB Capacity'
    ],
    specifications: {
      "XVR": [
            {
                  "label": "Channels",
                  "value": "4 Channels BNC + 1 IP"
            },
            {
                  "label": "AI",
                  "value": "SMD Plus Human & Vehicle Classification"
            },
            {
                  "label": "SATA",
                  "value": "1 Port up to 6TB"
            }
      ]
},
    warranty: '2 Years Dahua Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec034',
    name: 'Dahua DH-XVR1B08-I 8-Channel WizSense 1080p Cooper 1U Digital Video Recorder',
    slug: 'dahua-dh-xvr1b08-i-8ch-wizsense-xvr',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'xvr',
    regularPrice: 5800,
    discountPrice: 5200,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 175,
    stockStatus: 'In Stock',
    stockCount: 85,
    images: ['/images/products/dahua-xvr1b08.webp'],
    shortSpecs: [
      '8-Channel BNC Hybrid Video Inputs + 2 Extra IP Channels (Up to 6MP)',
      'SMD Plus Human and Vehicle False Alarm Filtering',
      'H.265+ Dual-Stream Encoding with Up to 70% Less Storage Draw',
      'Audio over Coaxial (AoC) Supported on all channels',
      '1 SATA Port up to 6TB Capacity'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Channels",
                  "value": "8 Analog Channels"
            },
            {
                  "label": "Audio",
                  "value": "Broadcast-Quality Audio over Coax"
            },
            {
                  "label": "Storage",
                  "value": "1 SATA up to 6TB"
            }
      ]
},
    warranty: '2 Years Dahua Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec035',
    name: 'Dahua DH-XVR5116H-I3 16-Channel WizSense 5MP-N 1U Hybrid XVR Recorder',
    slug: 'dahua-dh-xvr5116h-i3-16ch-wizsense-xvr',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'xvr',
    regularPrice: 14000,
    discountPrice: 12500,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 80,
    stockStatus: 'In Stock',
    stockCount: 40,
    images: ['/images/products/dahua-xvr5116h.webp'],
    shortSpecs: [
      '16 Channels BNC Supporting up to 5MP Resolution Cameras',
      'Up to 24 Channels IPC Access (16 Analog + 8 IP Cameras)',
      'Perimeter Protection & Face Recognition 1 Channel',
      'SMD Plus on all 16 Channels for Accurate Target Warning',
      '1 SATA Port Supporting up to 16TB Capacity'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Channels",
                  "value": "16 BNC + 8 IP (24 Channels Total)"
            },
            {
                  "label": "Max Res",
                  "value": "5MP HD Recording"
            },
            {
                  "label": "Storage",
                  "value": "1 SATA up to 16TB"
            }
      ]
},
    warranty: '2 Years Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 1041,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec036',
    name: 'Seagate SkyHawk 1TB Surveillance Internal 3.5" Hard Disk Drive (ST1000VX005)',
    slug: 'seagate-skyhawk-1tb-surveillance-hdd',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-accessories',
    badge: 'Essential',
    regularPrice: 5200,
    discountPrice: 4800,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 480,
    stockStatus: 'In Stock',
    stockCount: 220,
    images: ['/images/products/seagate-skyhawk-1tb.webp'],
    shortSpecs: [
      'ImagePerfect™ Firmware Ensures Smooth, Zero-Drop Video Streaming',
      'Engineered for 24×7 Surveillance Workloads (180 TB/year)',
      '1TB Capacity | 5900 RPM | 64MB Cache | SATA 6Gb/s',
      'Tarnish-Resistant Components Protect Drive in Hostile Environments',
      'Supports up to 64 HD Surveillance Cameras Simultaneously'
    ],
    specifications: {
      "HDD": [
            {
                  "label": "Capacity",
                  "value": "1TB (1000GB)"
            },
            {
                  "label": "Workload",
                  "value": "180TB/year 24/7 Surveillance"
            },
            {
                  "label": "Interface",
                  "value": "SATA 6.0 Gb/s"
            }
      ]
},
    warranty: '3 Years Replacement Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec037',
    name: 'Western Digital WD Purple 2TB Surveillance 3.5" Hard Drive (WD23PURZ)',
    slug: 'wd-purple-2tb-surveillance-hard-drive',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-accessories',
    badge: 'Best Seller',
    regularPrice: 7200,
    discountPrice: 6600,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 390,
    stockStatus: 'In Stock',
    stockCount: 175,
    images: ['/images/products/wd-purple-2tb.webp'],
    shortSpecs: [
      'Exclusive AllFrame™ Technology Reduces Frame Loss & Video Errors',
      'Tuned for Write-Intensive, Low Bitrate Surveillance Systems',
      '2TB Capacity | 5400 RPM | 64MB Cache | 3.5-Inch Form Factor',
      'Workload Rating of Up to 180 TB/year | 1 Million Hours MTBF',
      'Compatible with Industry Leading Security System Brands'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Capacity",
                  "value": "2TB"
            },
            {
                  "label": "Technology",
                  "value": "AllFrame AI Video Tuning"
            },
            {
                  "label": "Cameras Supported",
                  "value": "Up to 64 Cameras"
            }
      ]
},
    warranty: '3 Years Replacement Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec038',
    name: 'Central CCTV Power Supply 12V 10A 9-Port Metal Box with Key Lock & Fuse Protection',
    slug: 'central-cctv-power-supply-12v-10a-9port',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-accessories',
    regularPrice: 1700,
    discountPrice: 1450,
    discountPercentage: 15,
    rating: 4.7,
    reviewCount: 160,
    stockStatus: 'In Stock',
    stockCount: 120,
    images: ['/images/products/cctv-power-box.webp'],
    shortSpecs: [
      '12V DC 10 Amp Total Regulated Output for Up to 9 Cameras',
      'Heavy Duty Wall Mount Metal Casing with Key Lock',
      'Individual PTC Auto-Reset Fuses on Each Port for Short Circuit Safety',
      'LED Status Indicator for AC Power and DC Output',
      'Over-Voltage, Over-Current and Surge Protection'
    ],
    specifications: {
      "Power Box": [
            {
                  "label": "Input",
                  "value": "AC 110V - 240V 50/60Hz"
            },
            {
                  "label": "Output",
                  "value": "DC 12V 10A (9 Terminals)"
            },
            {
                  "label": "Protection",
                  "value": "PTC Resettable Fuse per Channel"
            }
      ]
},
    warranty: '1 Year Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec039',
    name: 'Passive HD Video Balun 1-Pair for Cat5e/Cat6 CCTV Transmission (Up to 300m)',
    slug: 'passive-hd-video-balun-1pair-cctv',
    brand: 'Dahua',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-accessories',
    regularPrice: 250,
    discountPrice: 180,
    discountPercentage: 28,
    rating: 4.6,
    reviewCount: 520,
    stockStatus: 'In Stock',
    stockCount: 500,
    images: ['/images/products/video-balun.webp'],
    shortSpecs: [
      'Real-Time Transmission over UTP Cat5e/Cat6 Cable',
      'Compatible with HD-TVI, HD-CVI, AHD and CVBS Formats',
      'Transmission Distance: Up to 300m for 1080p, 200m for 5MP',
      'Push-Pin Terminal Block for Tool-Free Cable Installation',
      'Built-in Transient Suppression & 60dB Crosstalk Protection'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Type",
                  "value": "Passive HD Video Balun"
            },
            {
                  "label": "Distance",
                  "value": "Max 300 meters"
            },
            {
                  "label": "Connector",
                  "value": "BNC Male to Press-Fit Terminal"
            }
      ]
},
    warranty: 'Checking Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec040',
    name: 'D-Link NCB-C6UGRYR-305 Cat6 UTP Solid Copper 305M Network Cable Box',
    slug: 'd-link-cat6-utp-solid-copper-305m-cable',
    brand: 'D-Link',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'cc-camera-accessories',
    badge: 'Pure Copper',
    regularPrice: 9500,
    discountPrice: 8500,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 140,
    stockStatus: 'In Stock',
    stockCount: 60,
    images: ['/images/products/dlink-cat6-box.webp'],
    shortSpecs: [
      '305 Meters (1000 ft) Easy-Pull Reelex Box Package',
      '23 AWG Solid Bare Copper Conductors for Maximum Signal Purity',
      'Supports Gigabit Ethernet & PoE (Power over Ethernet) Cameras',
      'FR-PVC Fire-Retardant Jacket with High Durability',
      'Ideal for IP CCTV Installations, Office Networking & Server Racks'
    ],
    specifications: {
      "Cable": [
            {
                  "label": "Length",
                  "value": "305 Meters (1000ft)"
            },
            {
                  "label": "Conductor",
                  "value": "100% Solid Pure Copper 23 AWG"
            },
            {
                  "label": "Frequency",
                  "value": "Up to 250 MHz"
            }
      ]
},
    warranty: 'Official D-Link Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec041',
    name: 'ZKTeco TL400B Biometric Fingerprint Smart Door Lock with Bluetooth & RFID Card',
    slug: 'zkteco-tl400b-biometric-smart-door-lock',
    brand: 'ZKTeco',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'door-lock',
    badge: 'Popular',
    regularPrice: 18500,
    discountPrice: 16500,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 68,
    stockStatus: 'In Stock',
    stockCount: 30,
    isSmartHome: true,
    images: ['/images/products/zkteco-tl400b.webp'],
    shortSpecs: [
      'Semi-Conductor Fingerprint Sensor (Reads in under 0.5 seconds)',
      'Multiple Unlock Modes: Fingerprint, IC Card, Password, App & Mechanical Key',
      'Bluetooth Connectivity with ZSmart / Tuya Mobile App Management',
      'Voice Guide for Easy Setup | Random Password Protection',
      'Emergency External 9V Battery Terminal | Anti-Theft Mortise'
    ],
    specifications: {
      "Door Lock": [
            {
                  "label": "Fingerprint Capacity",
                  "value": "100 Users"
            },
            {
                  "label": "Card Capacity",
                  "value": "100 Cards"
            },
            {
                  "label": "Door Thickness",
                  "value": "35mm - 55mm"
            }
      ]
},
    warranty: '1 Year ZKTeco Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 1375,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec042',
    name: 'ZKTeco ML100 Smart Fingerprint Digital Door Lock with Tuya App & Keypad',
    slug: 'zkteco-ml100-smart-fingerprint-door-lock',
    brand: 'ZKTeco',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'door-lock',
    regularPrice: 13500,
    discountPrice: 11800,
    discountPercentage: 13,
    rating: 4.7,
    reviewCount: 54,
    stockStatus: 'In Stock',
    stockCount: 40,
    isSmartHome: true,
    images: ['/images/products/zkteco-ml100.webp'],
    shortSpecs: [
      'Smart Fingerprint Recognition Integrated into Handle for Fast 1-Touch Open',
      'Connects directly to Wi-Fi with Tuya Smart App Remote Unlock',
      'Generate One-Time Temporary Passcodes for Visitors & Guests',
      'Low Battery Alarm Warning with Micro-USB Emergency Charging',
      'Fits Standard Wooden Doors and Interior Bedroom/Office Doors'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Unlock Methods",
                  "value": "Fingerprint, Passcode, Tuya App, Mechanical Key"
            },
            {
                  "label": "Power",
                  "value": "4× AA Alkaline Batteries (1 Year Life)"
            }
      ]
},
    warranty: '1 Year ZKTeco Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec043',
    name: 'Xiaomi Smart Door Lock E10 Fingerprint, Bluetooth & Keypad Digital Lock',
    slug: 'xiaomi-smart-door-lock-e10',
    brand: 'Xiaomi',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'door-lock',
    badge: 'Hot',
    regularPrice: 22000,
    discountPrice: 19500,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 88,
    stockStatus: 'In Stock',
    stockCount: 25,
    isSmartHome: true,
    images: ['/images/products/xiaomi-door-lock-e10.webp'],
    shortSpecs: [
      'Class C High-Security Lock Cylinder for Superior Anti-Theft Defense',
      'Fingerprint Recognition Accuracy of 99% with Fast 0.5s Unlock',
      'Mi Home / Xiaomi Home App Integration & Smart Home Automation',
      'Multiple Anti-Tamper Sensors Trigger Loud Alarm on Forced Entry',
      'Up to 12 Months Battery Life with 8× AA Batteries'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Unlock Modes",
                  "value": "Fingerprint, PIN, NFC, Bluetooth, Emergency Key"
            },
            {
                  "label": "Cylinder",
                  "value": "Grade C In-Line Lock Cylinder"
            },
            {
                  "label": "Battery",
                  "value": "8 AA Batteries (12 Months)"
            }
      ]
},
    warranty: '1 Year Official Warranty',
    emiAvailable: true,
    emiStartingBDT: 1625,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec044',
    name: 'ZKTeco K40 Fingerprint Time Attendance & Access Control Terminal with Battery Backup',
    slug: 'zkteco-k40-fingerprint-time-attendance',
    brand: 'ZKTeco',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'access-control',
    badge: 'Best Seller',
    regularPrice: 8000,
    discountPrice: 7200,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 310,
    stockStatus: 'In Stock',
    stockCount: 90,
    images: ['/images/products/zkteco-k40.webp'],
    shortSpecs: [
      'Fingerprint Capacity: 1,000 | Record Capacity: 80,000 Transactions',
      '2.8-inch TFT Color Screen with Graphical UI for Easy Operation',
      'TCP/IP Network Communication & USB Host Data Export to Excel',
      'Built-in Battery Backup Keeps Terminal Operating during Load Shedding',
      'Simple Access Control Interface for Electric Magnetic Door Lock'
    ],
    specifications: {
      "Terminal": [
            {
                  "label": "Fingerprint Capacity",
                  "value": "1,000 Fingerprints"
            },
            {
                  "label": "Log Capacity",
                  "value": "80,000 Events"
            },
            {
                  "label": "Communication",
                  "value": "TCP/IP, USB-Host"
            },
            {
                  "label": "Backup Battery",
                  "value": "Built-in 2000mAh Battery"
            }
      ]
},
    warranty: '1 Year ZKTeco Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec045',
    name: 'ZKTeco IN01-A Fingerprint Time Attendance & Access Control with Proximity RFID',
    slug: 'zkteco-in01-a-fingerprint-access-control',
    brand: 'ZKTeco',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'access-control',
    regularPrice: 12800,
    discountPrice: 11500,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 145,
    stockStatus: 'In Stock',
    stockCount: 45,
    images: ['/images/products/zkteco-in01.webp'],
    shortSpecs: [
      'Fingerprint Capacity: 3,000 | Card Capacity: 10,000 | Log: 100,000',
      '3.0-Inch TFT Screen with Elegant Touch Keypad',
      'Professional Access Control Interface: Lock, Door Sensor, Exit Button, Alarm',
      'Built-in 2000mAh Backup Battery Eliminates Power Failure Worries',
      'Supports ZKTime.Net and BioTime 8.5 Payroll Software'
    ],
    specifications: {
      "Specs": [
            {
                  "label": "Fingerprints",
                  "value": "3,000 Templates"
            },
            {
                  "label": "Cards",
                  "value": "10,000 RFID Cards"
            },
            {
                  "label": "Communication",
                  "value": "TCP/IP, RS232/485, USB Host"
            }
      ]
},
    warranty: '1 Year Official Warranty',
    emiAvailable: false,
    reviews: [], questions: [], createdDate: '2024-04-01'
  },

  {
    id: 'prod-sec046',
    name: 'Hikvision DS-K1T341AMF Face Recognition Access Control Terminal with Fingerprint',
    slug: 'hikvision-ds-k1t341amf-face-recognition-terminal',
    brand: 'Hikvision',
    category: 'security',
    categoryName: 'Security',
    subcategory: 'access-control',
    badge: 'AI Powered',
    regularPrice: 19500,
    discountPrice: 17500,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 95,
    stockStatus: 'In Stock',
    stockCount: 35,
    images: ['/images/products/hikvision-k1t341.webp'],
    shortSpecs: [
      'Deep Learning Algorithm with 99% Face Recognition Accuracy',
      'Face Capacity: 3,000 | Fingerprint: 3,000 | Card: 3,000 | Event: 150,000',
      '4.3-inch LCD Touch Screen with 2MP Dual Wide-Angle Lens',
      'Face Recognition Duration under 0.2 seconds per user',
      'Supports Anti-Spoofing (Detects photos, videos, masks)'
    ],
    specifications: {
      "Face Terminal": [
            {
                  "label": "Face Capacity",
                  "value": "3,000 Faces"
            },
            {
                  "label": "Camera",
                  "value": "2MP Dual-Lens with WDR & IR Light"
            },
            {
                  "label": "Recognition Speed",
                  "value": "< 0.2s"
            }
      ]
},
    warranty: '2 Years Hikvision Warranty',
    emiAvailable: true,
    emiStartingBDT: 1458,
    reviews: [], questions: [], createdDate: '2024-04-01'
  }
,
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
