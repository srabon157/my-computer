export interface AsusMonitor {
  id: string;
  sl: number;
  category: 'Portable' | 'Smart' | 'Touch' | 'Air Ionizer' | 'Docking' | 'Learning, Creating, Working' | 'ProArt Professional Monitor';
  model: string;
  name: string;
  size: string;
  description: string;
  resolution: string;
  panelType: string;
  refreshRate: string;
  features: string[];
  image: string;
  price: number;
  isUpcoming?: boolean;
  statusBadge?: 'RESTOCK' | 'LIMITED' | 'NEW';
}

export const ASUS_MONITORS: AsusMonitor[] = [
  {
    id: 'asus-mb169ck',
    sl: 1,
    category: 'Portable',
    model: 'ASUS ZenScreen MB169CK',
    name: 'ASUS ZenScreen MB169CK Portable USB Monitor',
    size: '15.6" viewable (16")',
    description: '16 inch (15.6 inch viewable), Full HD, IPS, dual USB Type-C, Flicker Free, Blue Light Filter, Anti-glare surface, 360° kickstand',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS',
    refreshRate: '60Hz',
    features: [
      'Dual USB Type-C connectivity',
      'Flicker Free & Blue Light Filter',
      'Anti-glare surface',
      '360° built-in kickstand'
    ],
    image: '/images/monitors/asus/asus-mb169ck.png',
    price: 20000,
    statusBadge: 'RESTOCK'
  },
  {
    id: 'asus-ms27uc',
    sl: 2,
    category: 'Smart',
    model: 'ASUS ZenScreen Smart MS27UC',
    name: 'ASUS ZenScreen Smart MS27UC 4K UHD Monitor',
    size: '27"',
    description: '27-inch UHD (3840 x 2160) IPS panel with 99% sRGB, Google TV, Harman Kardon speakers, USB Type-C (90W PD), HDMI, DisplayPort, USB hub, wireless display capabilities, multi-control, multi-platform live streaming',
    resolution: '4K UHD (3840 x 2160)',
    panelType: 'IPS (99% sRGB)',
    refreshRate: '60Hz',
    features: [
      'Built-in Google TV & Streaming Apps',
      'Harman Kardon Premium Speakers',
      'USB Type-C 90W Power Delivery',
      'Wireless Display & Multi-platform live stream'
    ],
    image: '/images/monitors/asus/asus-ms27uc.png',
    price: 82000,
    statusBadge: 'LIMITED'
  },
  {
    id: 'asus-vt229h',
    sl: 3,
    category: 'Touch',
    model: 'ASUS VT229H',
    name: 'ASUS VT229H 10-Point Touch Monitor',
    size: '21.5" viewable (22")',
    description: '22 inch (21.5 inch viewable) FHD (1920x1080), 10-point Touch, IPS, 178° Wide Viewing Angle, Frameless, Flicker free, Low Blue Light, HDMI, 7H Hardness',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS 10-Point Touch',
    refreshRate: '75Hz',
    features: [
      '10-Point Capacitive Touch Screen',
      '7H Hardness Durable Glass',
      '178° Wide Viewing Angle Frameless Design',
      'ASUS Eye Care (Flicker-Free & Low Blue Light)'
    ],
    image: '/images/monitors/asus/asus-vt229h.png',
    price: 47500,
    statusBadge: 'LIMITED'
  },
  {
    id: 'asus-vu249hfi-w',
    sl: 4,
    category: 'Air Ionizer',
    model: 'ASUS VU249HFI-W',
    name: 'ASUS VU249HFI-W Eye Care Monitor with Air Ionizer',
    size: '23.8" viewable (24")',
    description: '24 inch (23.8 inch viewable) Full HD (1920 x 1080), IPS, 100Hz, SmoothMotion, Adaptive Sync, Air Ionizer, Eye Care Plus technology, Blue Light Filter, Flicker Free',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS',
    refreshRate: '100Hz',
    features: [
      'Built-in Air Ionizer for healthier air',
      '100Hz SmoothMotion Refresh Rate',
      'Adaptive-Sync support',
      'Eye Care Plus Technology & Clean White Finish'
    ],
    image: '/images/monitors/asus/asus-vu249hfi-w.png',
    price: 18000
  },
  {
    id: 'asus-vu279hfi-w',
    sl: 5,
    category: 'Air Ionizer',
    model: 'ASUS VU279HFI-W',
    name: 'ASUS VU279HFI-W Eye Care Monitor with Air Ionizer',
    size: '27"',
    description: '27 inch Full HD (1920 x 1080), IPS, 100Hz, SmoothMotion, Adaptive Sync, Air Ionizer, Eye Care Plus technology, Blue Light Filter, Flicker Free',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS',
    refreshRate: '100Hz',
    features: [
      'Built-in Air Ionizer Technology',
      '27" Large IPS Display with 100Hz',
      'Adaptive-Sync & SmoothMotion',
      'Eye Care Plus & Modern White Aesthetic'
    ],
    image: '/images/monitors/asus/asus-vu279hfi-w.png',
    price: 27000,
    statusBadge: 'LIMITED'
  },
  {
    id: 'asus-be27acgn',
    sl: 6,
    category: 'Docking',
    model: 'ASUS BE27ACGN',
    name: 'ASUS BE27ACGN Docking Business Monitor',
    size: '27"',
    description: '27 inch, QHD (2560x1440), IPS, 120Hz, Frameless, USB-C Docking, RJ45, Stereo Speakers, Height Adjustable, Ergonomic Design, HDMI, DisplayPort Daisy-chain, ASUS Power Sync, Eye Care, Low Blue Light, Flicker Free, Wall Mountable',
    resolution: '2K QHD (2560x1440)',
    panelType: 'IPS',
    refreshRate: '120Hz',
    features: [
      'All-in-One USB-C Docking & RJ45 Ethernet Port',
      'DisplayPort Daisy-chain & ASUS Power Sync',
      'Ergonomic Height, Pivot & Swivel Stand',
      'Built-in Stereo Speakers'
    ],
    image: '/images/monitors/asus/asus-be27acgn.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-vp227hf',
    sl: 7,
    category: 'Learning, Creating, Working',
    model: 'ASUS VP227HF',
    name: 'ASUS VP227HF Eye Care Gaming Monitor',
    size: '21.45" viewable (22")',
    description: '22-inch (21.45-inch viewable), Full HD, 99% sRGB, Frameless, 100Hz, Adaptive-Sync, 1ms MPRT, HDMI, Low Blue Light, Flicker Free, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS (99% sRGB)',
    refreshRate: '100Hz',
    features: [
      '100Hz Refresh Rate & 1ms MPRT',
      'Adaptive-Sync Technology',
      '99% sRGB Color Gamut Frameless Design',
      'Eye Care Low Blue Light & Flicker Free'
    ],
    image: '/images/monitors/asus/asus-vp227hf.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-vp229hf',
    sl: 8,
    category: 'Learning, Creating, Working',
    model: 'ASUS VP229HF',
    name: 'ASUS VP229HF Eye Care Gaming Monitor',
    size: '21.45" viewable (22")',
    description: '22-inch (21.45-inch viewable), IPS, Full HD, 99% sRGB, Frameless, 100Hz, Adaptive-Sync, 1ms MPRT, HDMI, Low Blue Light, Flicker Free, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS (99% sRGB)',
    refreshRate: '100Hz',
    features: [
      'IPS Panel with 178° Wide Viewing Angle',
      '100Hz Smooth Refresh Rate with 1ms MPRT',
      'Adaptive-Sync support',
      'Frameless & Wall Mountable Design'
    ],
    image: '/images/monitors/asus/asus-vp229hf.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-vz24ehf',
    sl: 9,
    category: 'Learning, Creating, Working',
    model: 'ASUS VZ24EHF',
    name: 'ASUS VZ24EHF Eye Care Gaming Monitor',
    size: '23.8" viewable (24")',
    description: '24-inch (23.8-inch viewable), IPS, Full HD, Frameless, 100Hz, Adaptive-Sync, 1ms MPRT, HDMI, Low Blue Light, Flicker Free, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS Frameless',
    refreshRate: '100Hz',
    features: [
      'Ultra-slim frameless profile design',
      '100Hz Refresh Rate with 1ms MPRT',
      'Adaptive-Sync Gaming performance',
      'ASUS Eye Care Plus certified'
    ],
    image: '/images/monitors/asus/asus-vz24ehf.png',
    price: 12800
  },
  {
    id: 'asus-va279hg',
    sl: 10,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA279HG',
    name: 'ASUS VA279HG Eye Care Gaming Monitor',
    size: '27"',
    description: '27-inch, IPS, Full HD, 99% sRGB, Frameless, 120Hz, Adaptive-Sync, 1ms MPRT, HDMI, VGA, Low Blue Light, Flicker Free, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS (99% sRGB)',
    refreshRate: '120Hz',
    features: [
      'Fast 120Hz Refresh Rate for high frame rate gaming',
      '1ms MPRT & Adaptive-Sync',
      '27" Large Frameless Display (99% sRGB)',
      'HDMI + VGA dual connectivity'
    ],
    image: '/images/monitors/asus/asus-va279hg.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-va249qgs-w',
    sl: 11,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA249QGS-W',
    name: 'ASUS VA249QGS-W Business Monitor',
    size: '23.8" viewable (24")',
    description: 'Wide-view Full HD Display: 24-inch IPS for Smooth Visuals and Comfortable Use, 24-inch (23.8-inch viewable), IPS, Full HD, Frameless, 120Hz, Adaptive-Sync, 1ms MPRT, HDMI, DisplayPort, VGA, Low Blue Light, Flicker Free, Ergonomic Design, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS',
    refreshRate: '120Hz',
    features: [
      '120Hz Refresh Rate & 1ms MPRT',
      'Full Ergonomic Design (Height, Tilt, Swivel, Pivot)',
      'DisplayPort, HDMI & VGA connectivity',
      'Sleek Modern White Business Finish'
    ],
    image: '/images/monitors/asus/asus-va249qgs-w.png',
    price: 21000,
    statusBadge: 'NEW'
  },
  {
    id: 'asus-va249qgse',
    sl: 12,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA249QGSE',
    name: 'ASUS VA249QGSE Business Monitor',
    size: '23.8" viewable (24")',
    description: '24-inch (23.8-inch viewable), IPS, Full HD, Frameless, 120Hz, Adaptive-Sync, 1ms MPRT, HDMI, DisplayPort, VGA, Low Blue Light, Flicker Free, Ergonomic Design, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS Frameless',
    refreshRate: '120Hz',
    features: [
      '120Hz Refresh Rate & 1ms MPRT',
      'Ergonomic Design & Wall Mountable',
      'HDMI, DisplayPort & VGA connectivity',
      'Low Blue Light & Flicker Free Eye Care'
    ],
    image: '/images/monitors/asus/asus-va249qgse.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-va279qgs',
    sl: 13,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA279QGS',
    name: 'ASUS VA279QGS Business Monitor',
    size: '27"',
    description: '27-inch, IPS, Full HD, Frameless, 120Hz, Adaptive-Sync, 1ms MPRT, HDMI, DisplayPort, VGA, Low Blue Light, Flicker Free, Ergonomic Design, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS Frameless',
    refreshRate: '120Hz',
    features: [
      '27" Large IPS Display with 120Hz',
      '1ms MPRT & Adaptive-Sync',
      'Full Ergonomic Stand (Height & Tilt)',
      'DisplayPort, HDMI & VGA inputs'
    ],
    image: '/images/monitors/asus/asus-va279qgs.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-va27aq',
    sl: 14,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA27AQ',
    name: 'ASUS VA27AQ Eye Care Monitor',
    size: '27"',
    description: '27-inch, IPS, QHD, 99% sRGB, Frameless, HDMI, DisplayPort, VGA, 1ms MPRT, Stereo Speakers, Low Blue Light, Flicker Free, Wall Mountable',
    resolution: '2K QHD (2560x1440)',
    panelType: 'IPS (99% sRGB)',
    refreshRate: '75Hz',
    features: [
      '2K QHD (2560x1440) Ultra-Sharp Resolution',
      '99% sRGB Color Gamut & 1ms MPRT',
      'Built-in Stereo Speakers',
      'HDMI, DisplayPort & VGA ports'
    ],
    image: '/images/monitors/asus/asus-va27aq.png',
    price: 25000,
    statusBadge: 'RESTOCK'
  },
  {
    id: 'asus-va27aqse',
    sl: 15,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA27AQSE',
    name: 'ASUS VA27AQSE Business Monitor',
    size: '27"',
    description: '27-inch, IPS, QHD, 99% sRGB, Frameless, HDMI, DisplayPort, VGA, 1ms MPRT, Stereo Speakers, Low Blue Light, Flicker Free, Ergonomic Design, Wall Mountable',
    resolution: '2K QHD (2560x1440)',
    panelType: 'IPS (99% sRGB)',
    refreshRate: '75Hz',
    features: [
      '2K QHD IPS Panel with 99% sRGB',
      'Full Ergonomic Height & Pivot Stand',
      'Built-in Stereo Speakers',
      'Eye Care Low Blue Light & Flicker Free'
    ],
    image: '/images/monitors/asus/asus-va27aqse.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-va27uqsb',
    sl: 16,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA27UQSB',
    name: 'ASUS VA27UQSB 4K Business Monitor',
    size: '27"',
    description: '27-inch, 4K UHD (3840 x 2160), IPS, HDR-10, DisplayPort, Dual HDMI, Stereo Speakers, Flicker Free, Blue Light Filter, Ergonomic Design, Wall Mountable, Green Sustainability',
    resolution: '4K UHD (3840 x 2160)',
    panelType: 'IPS (HDR-10)',
    refreshRate: '60Hz',
    features: [
      '4K UHD (3840x2160) Professional Visuals',
      'HDR-10 Support & Stereo Speakers',
      'DisplayPort & Dual HDMI connectivity',
      'Ergonomic Design & Green Sustainability'
    ],
    image: '/images/monitors/asus/asus-va27uqsb.png',
    price: 44000,
    statusBadge: 'RESTOCK'
  },
  {
    id: 'asus-va329he',
    sl: 17,
    category: 'Learning, Creating, Working',
    model: 'ASUS VA329HE',
    name: 'ASUS VA329HE Eye Care Monitor',
    size: '31.5" viewable (32")',
    description: '32 inch (31.5 inch viewable), Full HD (1920 x 1080), 75Hz, Adaptive-Sync/FreeSync, Low Blue Light, Flicker Free, Wall Mountable',
    resolution: 'Full HD (1920x1080)',
    panelType: 'IPS',
    refreshRate: '75Hz',
    features: [
      'Extra Large 32" (31.5" viewable) Display',
      '75Hz Adaptive-Sync / FreeSync',
      'Flicker Free & Low Blue Light Eye Care',
      'Wall Mountable VESA Design'
    ],
    image: '/images/monitors/asus/asus-va329he.png',
    price: 32000
  },
  {
    id: 'asus-vp32aq',
    sl: 18,
    category: 'Learning, Creating, Working',
    model: 'ASUS VP32AQ',
    name: 'ASUS VP32AQ 2K Eye Care Monitor',
    size: '31.5" viewable (32")',
    description: '32 inch (31.5 inch viewable), QHD (2560 x 1440), IPS, 100% sRGB, HDR-10, 75Hz, Adaptive-Sync/FreeSync, DisplayPort, HDMI, Flicker Free, Blue Light Filter, Wall Mountable',
    resolution: '2K QHD (2560x1440)',
    panelType: 'IPS (100% sRGB)',
    refreshRate: '75Hz',
    features: [
      '32" Massive 2K QHD (2560x1440) Display',
      '100% sRGB Color Accuracy & HDR-10',
      'Adaptive-Sync / FreeSync 75Hz',
      'DisplayPort + HDMI dual inputs'
    ],
    image: '/images/monitors/asus/asus-vp32aq.png',
    price: 46000,
    statusBadge: 'LIMITED'
  },
  {
    id: 'asus-vp327q',
    sl: 19,
    category: 'Learning, Creating, Working',
    model: 'ASUS VP327Q',
    name: 'ASUS VP327Q 4K Eye Care Monitor',
    size: '31.5"',
    description: '31.5-inch, 4K UHD (3840 x 2160), 99% sRGB, HDR-10, Adaptive-Sync, DisplayPort, HDMI, Flicker Free, Blue Light Filter, Wall Mountable',
    resolution: '4K UHD (3840 x 2160)',
    panelType: 'IPS (99% sRGB)',
    refreshRate: '60Hz',
    features: [
      '31.5" Crystal Clear 4K UHD Resolution',
      '99% sRGB & HDR-10 high dynamic range',
      'Adaptive-Sync support',
      'DisplayPort & HDMI ports'
    ],
    image: '/images/monitors/asus/asus-vp327q.png',
    price: 0,
    isUpcoming: true
  },
  {
    id: 'asus-pa248qfv',
    sl: 20,
    category: 'ProArt Professional Monitor',
    model: 'ASUS ProArt Display PA248QFV',
    name: 'ASUS ProArt Display PA248QFV Professional Monitor',
    size: '24.1"',
    description: '24.1-inch, 16:10, IPS, WUXGA (1920 x 1200), 100% sRGB, Color Accuracy ΔE < 2, Calman Verified, 100Hz, HDR-10, Light Sync, Ergonomic stand, VESA MediaSync, Green Sustainability',
    resolution: 'WUXGA 16:10 (1920x1200)',
    panelType: 'IPS (100% sRGB, ΔE < 2)',
    refreshRate: '100Hz',
    features: [
      '16:10 Productivity Ratio (1920x1200)',
      '100% sRGB & Factory Calibrated ΔE < 2',
      'Calman Verified & 100Hz Smooth Refresh',
      'Full Ergonomic ProArt Stand'
    ],
    image: '/images/monitors/asus/asus-pa248qfv.png',
    price: 36000,
    statusBadge: 'LIMITED'
  },
  {
    id: 'asus-pa278qgv',
    sl: 21,
    category: 'ProArt Professional Monitor',
    model: 'ASUS ProArt Display PA278QGV',
    name: 'ASUS ProArt Display PA278QGV Professional Monitor',
    size: '27"',
    description: '27-inch, IPS, QHD (2560 x 1440), 95% DCI-P3, Color Accuracy ΔE < 2, Calman Verified, 120Hz, HDR-10, Light Sync, ergonomic stand, VESA MediaSync, Green Sustainability',
    resolution: '2K QHD (2560x1440)',
    panelType: 'IPS (95% DCI-P3, ΔE < 2)',
    refreshRate: '120Hz',
    features: [
      '2K QHD with 95% DCI-P3 & ΔE < 2',
      '120Hz Calman Verified Pro Display',
      'VESA MediaSync & HDR-10',
      'Ergonomic ProArt Stand'
    ],
    image: '/images/monitors/asus/asus-pa278qgv.png',
    price: 49000,
    statusBadge: 'RESTOCK'
  },
  {
    id: 'asus-pa278cgrv',
    sl: 22,
    category: 'ProArt Professional Monitor',
    model: 'ASUS ProArt Display PA278CGRV',
    name: 'ASUS ProArt Display PA278CGRV Professional Monitor',
    size: '27"',
    description: '27-inch, IPS, 144Hz, QHD (2560 x 1440), 97% DCI-P3, Color Accuracy ΔE < 2, Calman Verified, USB-C PD 96W, Light Sync, Auto KVM, Ergonomic Stand, VESA DisplayHDR 400, ASUS DisplayWidget Center, Green Sustainability',
    resolution: '2K QHD (2560x1440)',
    panelType: 'IPS (97% DCI-P3, ΔE < 2)',
    refreshRate: '144Hz',
    features: [
      '144Hz Pro Gaming & Content Creation',
      'USB-C 96W Power Delivery & Auto KVM',
      'VESA DisplayHDR 400 & 97% DCI-P3',
      'Calman Verified ΔE < 2 Color Accuracy'
    ],
    image: '/images/monitors/asus/asus-pa278cgrv.png',
    price: 64000
  },
  {
    id: 'asus-pa279cv',
    sl: 23,
    category: 'ProArt Professional Monitor',
    model: 'ASUS ProArt Display PA279CV',
    name: 'ASUS ProArt Display PA279CV 4K Professional Monitor',
    size: '27"',
    description: '27-inch, IPS, 4K UHD (3840 x 2160), 100% sRGB, 100% Rec. 709, Color Accuracy Delta E < 2, Calman Verified, USB-C, ProArt Preset, ProArt Palette, Ergonomic Stand, 3 Years',
    resolution: '4K UHD (3840 x 2160)',
    panelType: 'IPS (100% sRGB, 100% Rec.709)',
    refreshRate: '60Hz',
    features: [
      '4K UHD (3840 x 2160) Ultra-Fine Master Display',
      '100% sRGB & 100% Rec. 709 / Calman Verified',
      'USB-C 65W Power Delivery Connectivity',
      'ASUS ProArt Preset & Palette Controls'
    ],
    image: '/images/monitors/asus/asus-pa279cv.png',
    price: 72000
  },
  {
    id: 'asus-pa279crv',
    sl: 24,
    category: 'ProArt Professional Monitor',
    model: 'ASUS PA279CRV ProArt',
    name: 'ASUS PA279CRV ProArt 4K Professional Monitor',
    size: '27"',
    description: '27-inch, IPS, 4K UHD (3840 x 2160), 99% DCI-P3, 99% Adobe RGB, Color Accuracy ΔE < 2, Calman Verified, USB-C PD 96W, VESA DisplayHDR 400, VESA MediaSync, Ergonomic Stand, Green Sustainability',
    resolution: '4K UHD (3840 x 2160)',
    panelType: 'IPS (99% DCI-P3, 99% Adobe RGB)',
    refreshRate: '60Hz',
    features: [
      '4K UHD with 99% DCI-P3 & 99% Adobe RGB',
      'Calman Verified Factory Calibrated ΔE < 2',
      'USB-C with 96W Power Delivery',
      'VESA DisplayHDR 400 & MediaSync'
    ],
    image: '/images/monitors/asus/asus-pa279crv.png',
    price: 83000,
    statusBadge: 'RESTOCK'
  }
];
