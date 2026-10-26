import React, { useState, useMemo } from 'react';
import { useStore } from '../../context/StoreContext';
import type { Product } from '../../types';
import {
  Monitor,
  ShoppingCart,
  Zap,
  ChevronRight,
  CheckCircle2,
  Search,
  Tv,
  Gamepad2,
  Sparkles,
  Layers,
  Cable
} from 'lucide-react';

// ══════════════════════════════════════════════════════════════
// LG Monitor Data — Price List (09/07/2026)
// ══════════════════════════════════════════════════════════════

export interface LgMonitor {
  id: string;
  sl: number;
  model: string;
  size: string;
  resolution: string;
  resolutionTag: 'FHD' | 'QHD' | '4K UHD' | 'OLED' | 'UltraWide' | 'DQHD';
  panelType: string;
  refreshRate: string;
  responseTime?: string;
  colorGamut: string;
  hdr?: string;
  features: string[];
  ports: string;
  mrpPrice: number;
  dpPrice?: number;
  category: 'fhd' | 'qhd' | '4k' | 'gaming' | 'smart' | 'ultrawide';
  badge?: string;
  image: string;
  isOled?: boolean;
  usbC?: string;
  stand?: string;
  speakers?: string;
}

export const LG_MONITORS: LgMonitor[] = [
  // ── FHD Monitors ──
  {
    id: 'lg-mon-001',
    sl: 1,
    model: '24U411A-B',
    size: '23.8"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '120Hz',
    responseTime: '1ms MBR',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR 10',
    features: ['4-side Virtually Borderless design', '120Hz Refresh Rate', '1ms MBR Response Time', 'HDR 10 / sRGB 99%'],
    ports: 'D-Sub + HDMI',
    mrpPrice: 15700,
    dpPrice: 15000,
    category: 'fhd',
    badge: 'Best Value',
    image: 'https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/7483bd72-ab06-4d86-9be9-b5d18e560d27/Monitor-24U411A-B-gallery-01_5000x5000?io=transform:fill,width:800',
  },
  {
    id: 'lg-mon-002',
    sl: 2,
    model: '24MS570-B',
    size: '23.8"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '100Hz',
    colorGamut: 'sRGB 99%',
    features: ['3-side Virtually Borderless design', '100Hz Refresh Rate', 'USB-C (Power delivery 65W)', 'Reader Mode / Flicker Safe', 'Height / Tilt adjustable stand', 'LG Switch app'],
    ports: 'HDMI x2, USB x2, Type-C',
    mrpPrice: 30500,
    dpPrice: 28500,
    category: 'fhd',
    usbC: '65W PD',
    stand: 'Height / Tilt',
    image: 'https://www.lg.com/content/dam/channel/wcms/bd/monitors/24ms570-b_atrelsb/gallery/24MS570-B_Z01.jpg',
  },
  {
    id: 'lg-mon-003',
    sl: 3,
    model: '27U411A-B',
    size: '27"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '120Hz',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR 10',
    features: ['4-side Virtually Borderless design', '120Hz Refresh Rate', 'HDR 10 / sRGB 99%'],
    ports: 'D-Sub + HDMI',
    mrpPrice: 22500,
    dpPrice: 21500,
    category: 'fhd',
    image: 'https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/7483bd72-ab06-4d86-9be9-b5d18e560d27/Monitor-24U411A-B-gallery-01_5000x5000?io=transform:fill,width:800',
  },

  // ── 2K QHD Monitors ──
  {
    id: 'lg-mon-004',
    sl: 4,
    model: '24U631A-B',
    size: '23.8"',
    resolution: '2560 x 1440 (QHD)',
    resolutionTag: 'QHD',
    panelType: 'IPS',
    refreshRate: '100Hz',
    colorGamut: 'sRGB 99% (Typ.)',
    features: ['QHD (2560 x 1440) IPS display', '100Hz refresh rate', 'USB-C (PD 15W)', 'sRGB 99% (Typ.)'],
    ports: 'HDMI + Type-C',
    mrpPrice: 30500,
    dpPrice: 29000,
    category: 'qhd',
    usbC: '15W PD',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27UL500-W-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-005',
    sl: 5,
    model: '27U631A-B',
    size: '27"',
    resolution: '2560 x 1440 (QHD)',
    resolutionTag: 'QHD',
    panelType: 'IPS',
    refreshRate: '100Hz',
    colorGamut: 'sRGB 99% (Typ.)',
    features: ['QHD (2560 x 1440) IPS display', '100Hz refresh rate', 'USB-C (PD 15W)', 'sRGB 99% (Typ.)'],
    ports: 'HDMI + Type-C',
    mrpPrice: 33500,
    dpPrice: 32000,
    category: 'qhd',
    usbC: '15W PD',
    badge: 'Popular',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27UL500-W-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-006',
    sl: 6,
    model: '32U631A-B',
    size: '32"',
    resolution: '2560 x 1440 (QHD)',
    resolutionTag: 'QHD',
    panelType: 'IPS',
    refreshRate: '100Hz',
    colorGamut: 'sRGB 99% (Typ.)',
    features: ['QHD (2560 x 1440) IPS display', '100Hz refresh rate', 'USB-C (PD 15W)', 'sRGB 99% (Typ.)'],
    ports: 'HDMI + Type-C',
    mrpPrice: 39500,
    dpPrice: 38000,
    category: 'qhd',
    usbC: '15W PD',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/32UN880-B-Gallery-01.jpg',
  },

  // ── 4K UHD Monitors ──
  {
    id: 'lg-mon-007',
    sl: 7,
    model: '27EP950-B',
    size: '27"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'OLED',
    refreshRate: '60Hz',
    responseTime: '1ms (GTG)',
    colorGamut: 'Adobe RGB 99%, DCI-P3 99%',
    hdr: 'VESA DisplayHDR™ 400 True Black',
    features: ['UHD OLED Display', 'Adobe RGB 99% / DCI-P3 99%', 'VESA DisplayHDR™ 400 True Black', '1M:1 Contrast Ratio', 'USB Type-C™ 90W PD', 'Tilt/Height/Pivot Stand'],
    ports: 'DP, HDMI x2, USB x4, Type-C',
    mrpPrice: 310000,
    dpPrice: 302000,
    category: '4k',
    badge: 'Pro Grade',
    isOled: true,
    usbC: '90W PD',
    stand: 'Tilt/Height/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27EP950-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-008',
    sl: 8,
    model: '27US500-W',
    size: '27"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'IPS',
    refreshRate: '60Hz',
    colorGamut: '90% DCI-P3',
    hdr: 'HDR10',
    features: ['4K UHD IPS Display', 'HDR10 with 90% DCI-P3', 'Flicker Safe / Black Stabilizer', 'Dynamic Action Sync', 'LG Switch app'],
    ports: 'DP, HDMI x2',
    mrpPrice: 41000,
    dpPrice: 39000,
    category: '4k',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27UL500-W-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-009',
    sl: 9,
    model: '27UP600K-W',
    size: '27"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'IPS',
    refreshRate: '60Hz',
    colorGamut: 'DCI-P3 95%',
    hdr: 'VESA DisplayHDR 400',
    features: ['UHD IPS Display', 'VESA DisplayHDR 400', 'DCI-P3 95%', '3-Side Virtually Borderless', 'AMD FreeSync™'],
    ports: 'DP, HDMI x2',
    mrpPrice: 55700,
    dpPrice: 53000,
    category: '4k',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27UL500-W-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-010',
    sl: 10,
    model: '27UP850K-W',
    size: '27"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'IPS',
    refreshRate: '60Hz',
    colorGamut: 'DCI-P3 95%',
    hdr: 'VESA DisplayHDR 400',
    features: ['UHD IPS Display', 'VESA DisplayHDR 400 with DCI-P3 95%', 'USB-C with 90W Power Delivery', '3-Side Virtually Borderless', 'Height/Pivot/Tilt Adjustable Stand', 'AMD FreeSync'],
    ports: 'DP, HDMI x2, USB x2, Type-C',
    mrpPrice: 70000,
    dpPrice: 68000,
    category: '4k',
    badge: 'Popular',
    usbC: '90W PD',
    stand: 'Height/Pivot/Tilt',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27UL500-W-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-011',
    sl: 11,
    model: '32UN650K-W',
    size: '32"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'IPS',
    refreshRate: '60Hz',
    colorGamut: 'DCI-P3 95%',
    hdr: 'HDR10',
    features: ['4K UHD IPS Display', 'Up to 95% DCI-P3 Color Gamut', 'Tilt/Height Adjustable Stand', '3-Side Borderless Design', 'Built in Speakers with Maxx Audio'],
    ports: 'DP x1, HDMI x2',
    mrpPrice: 0,
    category: '4k',
    stand: 'Tilt/Height',
    speakers: 'MaxxAudio',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/32UN880-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-012',
    sl: 12,
    model: '32UN880K-B',
    size: '31.5"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'IPS',
    refreshRate: '60Hz',
    colorGamut: 'DCI-P3 (D65) 95%',
    hdr: 'HDR10',
    features: ['UHD 4K IPS Display', 'HDR10 with DCI-P3 95%', '350nits (Typ.)', 'Ergonomic Stand with C-Clamp', 'Extend/Retract/Swivel/Pivot/Height/Tilt', 'USB Type-C™'],
    ports: 'DP, HDMI x2, USB x2, Type-C',
    mrpPrice: 94000,
    dpPrice: 92000,
    category: '4k',
    badge: 'Ergonomic',
    usbC: 'Yes',
    stand: 'Ergo (C-Clamp)',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/32UN880-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-013',
    sl: 13,
    model: '32EP950-B',
    size: '32"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'OLED',
    refreshRate: '60Hz',
    responseTime: '1ms (GTG)',
    colorGamut: 'Adobe RGB 99%, DCI-P3 99%',
    hdr: 'VESA DisplayHDR™ 400 True Black',
    features: ['UHD OLED Display', 'Adobe RGB 99% / DCI-P3 99%', 'VESA DisplayHDR™ 400 True Black', '1M:1 Contrast Ratio', 'USB TypeC™ with 90W PD', 'Tilt/Height/Pivot Stand'],
    ports: 'DP, HDMI x2, USB x4, Type-C',
    mrpPrice: 445000,
    dpPrice: 432000,
    category: '4k',
    badge: 'Ultra Premium',
    isOled: true,
    usbC: '90W PD',
    stand: 'Tilt/Height/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27EP950-B-Gallery-01.jpg',
  },

  // ── UltraGear™ Gaming Monitors ──
  {
    id: 'lg-mon-014',
    sl: 14,
    model: '24GS65F-B',
    size: '23.8"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '180Hz',
    responseTime: '1ms (GtG)',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR10',
    features: ['FHD IPS 180Hz Display', '1ms (GtG) Response Time', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™', 'sRGB 99% with HDR10', '3-Side Virtually Borderless', 'Height/Tilt/Pivot Stand'],
    ports: 'HDMI + DP',
    mrpPrice: 26000,
    dpPrice: 24500,
    category: 'gaming',
    badge: 'Gaming',
    stand: 'Height/Tilt/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/24GN600-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-015',
    sl: 15,
    model: '25G523B-B',
    size: '25"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '200Hz',
    responseTime: '1ms (GtG)',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR10',
    features: ['FHD IPS 200Hz Display', '1ms (GtG) Response Time', 'HDR10 with sRGB 99%', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™ Premium', 'Crosshair'],
    ports: 'HDMI x2 + DP',
    mrpPrice: 22900,
    dpPrice: 22000,
    category: 'gaming',
    badge: 'Best Value',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/24GN600-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-016',
    sl: 16,
    model: '27GS65F-B',
    size: '27"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '180Hz',
    responseTime: '1ms (GtG)',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR10',
    features: ['FHD IPS 180Hz Display', '1ms (GtG) Response Time', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™ Premium', 'sRGB 99% with HDR10', '3-Side Virtually Borderless', 'Height/Tilt/Pivot Stand'],
    ports: 'HDMI + DP',
    mrpPrice: 35500,
    dpPrice: 33500,
    category: 'gaming',
    stand: 'Height/Tilt/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/24GN600-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-017',
    sl: 17,
    model: '27G523B-B',
    size: '27"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '200Hz',
    responseTime: '1ms (GtG)',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR10',
    features: ['FHD IPS 200Hz Display', '1ms (GtG) Response Time', 'HDR10 with sRGB 99%', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™ Premium', 'Crosshair'],
    ports: 'HDMI x2 + DP',
    mrpPrice: 26900,
    dpPrice: 26000,
    category: 'gaming',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/24GN600-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-018',
    sl: 18,
    model: '27GS75Q-B',
    size: '27"',
    resolution: '2560 x 1440 (QHD)',
    resolutionTag: 'QHD',
    panelType: 'IPS',
    refreshRate: '180Hz (200Hz O/C)',
    responseTime: '1ms (GtG)',
    colorGamut: 'sRGB 99% (Typ.)',
    hdr: 'HDR10',
    features: ['QHD IPS 180Hz (200Hz O/C)', '1ms GtG Response Time', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™', 'HDR10 & sRGB 99%', '3-Side Virtually Borderless', 'Tilt/Height/Pivot Stand'],
    ports: 'DP + HDMI x2',
    mrpPrice: 60000,
    dpPrice: 57000,
    category: 'gaming',
    badge: 'Hot',
    stand: 'Tilt/Height/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27GP850-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-019',
    sl: 19,
    model: '27GP850-B',
    size: '27"',
    resolution: '2560 x 1440 (QHD)',
    resolutionTag: 'QHD',
    panelType: 'Nano IPS',
    refreshRate: '165Hz (180Hz O/C)',
    responseTime: '1ms (GtG)',
    colorGamut: 'DCI-P3 98%',
    hdr: 'VESA DisplayHDR 400',
    features: ['QHD Nano IPS Display', '165Hz (180Hz O/C) / 1ms GtG', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™ Premium', 'DCI-P3 98% / VESA DisplayHDR 400', '3-Side Virtually Borderless', 'Tilt/Height/Pivot Stand'],
    ports: 'DP, HDMI x2, USB x3',
    mrpPrice: 70000,
    dpPrice: 67200,
    category: 'gaming',
    badge: 'Pro Grade',
    stand: 'Tilt/Height/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27GP850-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-020',
    sl: 20,
    model: '27GR95QE-B',
    size: '27"',
    resolution: '2560 x 1440 (QHD)',
    resolutionTag: 'QHD',
    panelType: 'OLED',
    refreshRate: '240Hz',
    responseTime: '0.03ms',
    colorGamut: 'DCI-P3 98.5%',
    hdr: 'DisplayHDR™ True Black 400',
    features: ['27" OLED 240Hz Gaming Display', '0.03ms Response Time', 'DisplayHDR™ True Black 400', 'Height/Tilt/Pivot Adjustable'],
    ports: 'DP, HDMI x2, USB x3',
    mrpPrice: 170000,
    dpPrice: 162000,
    category: 'gaming',
    badge: 'OLED',
    isOled: true,
    stand: 'Height/Tilt/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27GP850-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-021',
    sl: 21,
    model: '34GS95QE-B',
    size: '34"',
    resolution: '3440 x 1440 (WQHD)',
    resolutionTag: 'UltraWide',
    panelType: 'OLED (800R Curve)',
    refreshRate: '240Hz',
    responseTime: '0.03ms',
    colorGamut: 'DCI-P3 98.5%',
    hdr: 'DisplayHDR™ True Black 400',
    features: ['34" UltraGear OLED Curved (800R)', '240Hz / 0.03ms Response Time', 'DisplayHDR™ True Black 400', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™ Premium Pro', 'Height/Tilt/Pivot Adjustable'],
    ports: 'DP, HDMI x2, USB x3',
    mrpPrice: 272000,
    dpPrice: 267000,
    category: 'gaming',
    badge: 'Ultra Premium',
    isOled: true,
    stand: 'Height/Tilt/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/34GN850-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-022',
    sl: 22,
    model: '38WR85QC-W',
    size: '38"',
    resolution: '3840 x 1600 (WQHD+)',
    resolutionTag: 'UltraWide',
    panelType: 'Curved Nano IPS',
    refreshRate: '144Hz',
    responseTime: '1ms (GtG)',
    colorGamut: 'DCI-P3 98% (Typ.)',
    hdr: 'VESA DisplayHDR™ 600',
    features: ['38" WQHD+ Curved Nano IPS', '144Hz / 1ms GtG', 'VESA DisplayHDR™ 600', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™ Premium Pro', 'HDMI 2.1 / USB-C 90W PD', 'Built-in KVM & Speaker', '3-Side Borderless / Height/Tilt/Swivel Stand'],
    ports: 'DP, HDMI x2, USB x4, Type-C x2, Upstream, LAN',
    mrpPrice: 206000,
    dpPrice: 198000,
    category: 'gaming',
    badge: 'Pro Ultra',
    usbC: '90W PD',
    stand: 'Tilt/Height/Swivel',
    speakers: 'Built-in',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/34GN850-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-023',
    sl: 23,
    model: '39GS95QE-B',
    size: '39"',
    resolution: '3440 x 1440 (WQHD)',
    resolutionTag: 'UltraWide',
    panelType: 'OLED (800R Curve)',
    refreshRate: '240Hz',
    responseTime: '0.03ms',
    colorGamut: 'DCI-P3 98.5%',
    hdr: 'DisplayHDR™ True Black 400',
    features: ['39" UltraGear OLED Curved (800R)', '240Hz / 0.03ms Response Time', 'DisplayHDR™ True Black 400', 'NVIDIA® G-SYNC® Compatible', 'AMD FreeSync™ Premium Pro', 'Height/Tilt/Pivot Adjustable'],
    ports: 'DP, HDMI x2, USB x3',
    mrpPrice: 302000,
    dpPrice: 297000,
    category: 'gaming',
    badge: 'Flagship',
    isOled: true,
    stand: 'Height/Tilt/Pivot',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/34GN850-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-024',
    sl: 24,
    model: '49U950A-W',
    size: '49"',
    resolution: '5120 x 1440 (DQHD)',
    resolutionTag: 'DQHD',
    panelType: 'Curved Nano IPS',
    refreshRate: '144Hz',
    responseTime: '1ms MBR',
    colorGamut: 'sRGB 98% (Typ.)',
    hdr: 'VESA DisplayHDR™ 400',
    features: ['49" 32:9 DQHD Curved Nano IPS', '144Hz / 1ms MBR', 'Color Calibrated in factory', '400nits / VESA DisplayHDR™ 400', '2x10W Stereo Speaker with Rich Bass', 'Built-in KVM', 'Black Stabilizer / DAS / Game Mode'],
    ports: 'DP, HDMI x2, USB (3.0) x2, Type-C x2, Upstream, Built-in KVM',
    mrpPrice: 235000,
    dpPrice: 230000,
    category: 'gaming',
    badge: 'Super UltraWide',
    usbC: 'Yes',
    speakers: '2x10W Rich Bass',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/34GN850-B-Gallery-01.jpg',
  },

  // ── Smart Monitors ──
  {
    id: 'lg-mon-025',
    sl: 25,
    model: '27SR50F-W',
    size: '27"',
    resolution: '1920 x 1080 (Full HD)',
    resolutionTag: 'FHD',
    panelType: 'IPS',
    refreshRate: '60Hz',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR10',
    features: ['FHD IPS MyView Smart Monitor', 'webOS 23', 'ThinQ Home Dashboard', 'Magic Remote Support', 'AirPlay 2, Screen Share, Bluetooth', '5Wx2ch Stereo Speaker', 'Flicker Safe & Reader Mode'],
    ports: 'HDMI x2, USB x2',
    mrpPrice: 47000,
    dpPrice: 45000,
    category: 'smart',
    badge: 'Smart',
    speakers: '5W x2ch',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/27UL500-W-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-026',
    sl: 26,
    model: '32G810SA-W',
    size: '31.5"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'IPS',
    refreshRate: '144Hz',
    responseTime: '1ms',
    colorGamut: 'Wide Gamut',
    features: ['4K UHD Smart Monitor with 144Hz', 'AI-driven visuals and audio', 'FreeSync™ Premium & G-SYNC®', 'Popular streaming apps & cloud gaming', 'webOS'],
    ports: 'DP x1, HDMI (V2.1) x2, USB x2, Type-C (65W PD), LAN (RJ-45)',
    mrpPrice: 0,
    category: 'smart',
    badge: 'AI Smart',
    usbC: '65W PD',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/32UN880-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-027',
    sl: 27,
    model: '43SQ700S-W',
    size: '43"',
    resolution: '3840 x 2160 (4K UHD)',
    resolutionTag: '4K UHD',
    panelType: 'IPS',
    refreshRate: '60Hz',
    colorGamut: 'Wide Gamut',
    features: ['43" 4K UHD MyView Smart Monitor', 'webOS 23', 'ThinQ Home Dashboard', 'Magic Remote Support', 'AirPlay 2 / Screen Share / Bluetooth', 'USB Type-C™ with 65W PD', 'Slim & Flat Style Stand'],
    ports: 'Type-C, HDMI x2, USB x3, LAN port',
    mrpPrice: 0,
    category: 'smart',
    badge: 'Smart',
    usbC: '65W PD',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/32UN880-B-Gallery-01.jpg',
  },

  // ── UltraWide Monitors ──
  {
    id: 'lg-mon-028',
    sl: 28,
    model: '34U640B-B',
    size: '34"',
    resolution: '3440 x 1440 (WQHD)',
    resolutionTag: 'UltraWide',
    panelType: 'Curved IPS',
    refreshRate: '144Hz',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR10',
    features: ['34" WQHD Curved Display', '99% sRGB & HDR10', '144Hz Refresh Rate', 'USB Type-C with 65W PD', 'KVM switch', 'AMD FreeSync Premium™', '3-Side Virtually Borderless', 'One Click Stand / Height & Tilt'],
    ports: 'DP, HDMI x2, USB x2, Type-C',
    mrpPrice: 71000,
    dpPrice: 69000,
    category: 'ultrawide',
    badge: 'UltraWide',
    usbC: '65W PD',
    stand: 'Height / Tilt',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/34GN850-B-Gallery-01.jpg',
  },
  {
    id: 'lg-mon-029',
    sl: 29,
    model: '34U650A-B',
    size: '34"',
    resolution: '3440 x 1440 (WQHD)',
    resolutionTag: 'UltraWide',
    panelType: 'Curved IPS (3800R)',
    refreshRate: '100Hz',
    responseTime: '5ms (GtG)',
    colorGamut: 'sRGB 99%',
    hdr: 'HDR 10',
    features: ['34" 21:9 WQHD Curved IPS (3800R)', '3-Side Virtually Borderless', 'sRGB 99% / Color Calibrated', 'HDR 10 / 100Hz / 5ms GtG', 'Black Stabilizer / Dynamic Action Sync', '7W x2 speakers', 'Built-in KVM', 'Tilt/Height/Swivel / USB-C 96W PD'],
    ports: 'DP, HDMI x2, USB x2, Type-A (3.2), Type-C (3.2) (96W PD), LAN (RJ-45)',
    mrpPrice: 85000,
    dpPrice: 82000,
    category: 'ultrawide',
    badge: 'Premium',
    usbC: '96W PD',
    stand: 'Tilt/Height/Swivel',
    speakers: '7W x2',
    image: 'https://www.lg.com/content/dam/channel/wcms/global/monitors/images/34GN850-B-Gallery-01.jpg',
  },
];

// ══════════════════════════════════════════════════════════════
// Category definitions
// ══════════════════════════════════════════════════════════════

type CategoryTab = 'all' | 'fhd' | 'qhd' | '4k' | 'gaming' | 'smart' | 'ultrawide';

const CATEGORY_TABS: { id: CategoryTab; label: string; labelBn: string; icon: React.ElementType; color: string }[] = [
  { id: 'all', label: 'All Models', labelBn: 'সবগুলো', icon: Monitor, color: 'from-red-500 to-red-700' },
  { id: 'fhd', label: 'FHD (1080p)', labelBn: 'এফএইচডি', icon: Tv, color: 'from-blue-500 to-blue-700' },
  { id: 'qhd', label: '2K QHD', labelBn: '২কে কিউএইচডি', icon: Layers, color: 'from-purple-500 to-purple-700' },
  { id: '4k', label: '4K UHD', labelBn: '৪কে ইউএইচডি', icon: Sparkles, color: 'from-amber-500 to-amber-700' },
  { id: 'gaming', label: 'UltraGear™ Gaming', labelBn: 'আল্ট্রাগিয়ার গেমিং', icon: Gamepad2, color: 'from-rose-500 to-rose-700' },
  { id: 'smart', label: 'Smart Monitor', labelBn: 'স্মার্ট মনিটর', icon: Monitor, color: 'from-teal-500 to-teal-700' },
  { id: 'ultrawide', label: 'UltraWide', labelBn: 'আল্ট্রাওয়াইড', icon: Cable, color: 'from-indigo-500 to-indigo-700' },
];

// ══════════════════════════════════════════════════════════════
// Main Component
// ══════════════════════════════════════════════════════════════

export const LgMonitorShowcase: React.FC = () => {
  const {
    addToCart,
    setCurrentView,
    language
  } = useStore();

  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);

  // Filter monitors
  const filteredMonitors = useMemo(() => {
    return LG_MONITORS.filter(mon => {
      const tabMatch = activeTab === 'all' || mon.category === activeTab;
      const searchMatch =
        searchQuery.trim() === '' ||
        `${mon.model} ${mon.size} ${mon.resolution} ${mon.panelType} ${mon.features.join(' ')}`.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return tabMatch && searchMatch;
    });
  }, [activeTab, searchQuery]);

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: LG_MONITORS.length };
    LG_MONITORS.forEach(m => {
      counts[m.category] = (counts[m.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleAddToCart = (monitor: LgMonitor, e: React.MouseEvent) => {
    e.stopPropagation();
    // Create a minimal product-like object for cart
    const pseudoProduct = {
      id: monitor.id,
      name: `LG ${monitor.model} ${monitor.size} ${monitor.resolutionTag} ${monitor.panelType} Monitor`,
      slug: `lg-${monitor.model.toLowerCase()}`,
      brand: 'LG' as const,
      category: 'monitor' as const,
      categoryName: 'Monitor',
      subcategory: 'lg-monitor',
      badge: monitor.badge || undefined,
      regularPrice: monitor.mrpPrice,
      discountPrice: monitor.mrpPrice,
      discountPercentage: 0,
      rating: 4.7,
      reviewCount: 0,
      stockStatus: monitor.mrpPrice > 0 ? 'In Stock' as const : 'Pre-Order' as const,
      stockCount: monitor.mrpPrice > 0 ? 10 : 0,
      images: [monitor.image],
      shortSpecs: monitor.features.slice(0, 4),
      specifications: {},
      warranty: '2 Year LG Official Warranty',
      emiAvailable: monitor.mrpPrice >= 50000,
      reviews: [],
      questions: [],
      createdDate: '2026-07-09'
    } as unknown as Product;

    addToCart(pseudoProduct, 1);
    setAddedId(monitor.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const handleBuyNow = (monitor: LgMonitor, e: React.MouseEvent) => {
    e.stopPropagation();
    const pseudoProduct = {
      id: monitor.id,
      name: `LG ${monitor.model} ${monitor.size} ${monitor.resolutionTag} ${monitor.panelType} Monitor`,
      slug: `lg-${monitor.model.toLowerCase()}`,
      brand: 'LG' as const,
      category: 'monitor' as const,
      categoryName: 'Monitor',
      regularPrice: monitor.mrpPrice,
      discountPrice: monitor.mrpPrice,
      discountPercentage: 0,
      rating: 4.7,
      reviewCount: 0,
      stockStatus: 'In Stock' as const,
      stockCount: 10,
      images: [monitor.image],
      shortSpecs: monitor.features.slice(0, 4),
      specifications: {},
      warranty: '2 Year LG Official Warranty',
      emiAvailable: false,
      reviews: [],
      questions: [],
      createdDate: '2026-07-09'
    } as unknown as Product;

    addToCart(pseudoProduct, 1);
    setCurrentView('checkout');
  };

  // Badge color mapping
  const getBadgeStyles = (badge?: string) => {
    if (!badge) return '';
    const map: Record<string, string> = {
      'Best Value': 'bg-emerald-100 text-emerald-800 border-emerald-300',
      'Popular': 'bg-blue-100 text-blue-800 border-blue-300',
      'Hot': 'bg-red-100 text-red-800 border-red-300',
      'Gaming': 'bg-rose-100 text-rose-800 border-rose-300',
      'OLED': 'bg-violet-100 text-violet-800 border-violet-300',
      'Pro Grade': 'bg-amber-100 text-amber-800 border-amber-300',
      'Pro Ultra': 'bg-orange-100 text-orange-800 border-orange-300',
      'Ultra Premium': 'bg-purple-100 text-purple-800 border-purple-300',
      'Flagship': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300',
      'Ergonomic': 'bg-teal-100 text-teal-800 border-teal-300',
      'Smart': 'bg-cyan-100 text-cyan-800 border-cyan-300',
      'AI Smart': 'bg-indigo-100 text-indigo-800 border-indigo-300',
      'UltraWide': 'bg-sky-100 text-sky-800 border-sky-300',
      'Premium': 'bg-amber-100 text-amber-800 border-amber-300',
      'Super UltraWide': 'bg-pink-100 text-pink-800 border-pink-300',
    };
    return map[badge] || 'bg-slate-100 text-slate-800 border-slate-300';
  };

  // Resolution tag color
  const getResTagColor = (tag: string) => {
    const map: Record<string, string> = {
      'FHD': 'bg-blue-600',
      'QHD': 'bg-purple-600',
      '4K UHD': 'bg-amber-600',
      'OLED': 'bg-violet-600',
      'UltraWide': 'bg-indigo-600',
      'DQHD': 'bg-pink-600',
    };
    return map[tag] || 'bg-slate-600';
  };

  return (
    <section className="relative" id="lg-monitor-section">
      {/* Ambient Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-br from-red-500/5 via-slate-500/3 to-red-500/5 rounded-3xl blur-3xl pointer-events-none -z-10" />

      {/* ══ Section Header ══ */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-red-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/15 text-red-400 border border-red-500/30 text-xs font-black tracking-wide uppercase shadow-xs backdrop-blur-md">
              <Monitor className="w-4 h-4 text-red-400" />
              <span>{language === 'EN' ? 'Official LG Monitors — Price List 2026' : 'অফিসিয়াল এলজি মনিটর — মূল্য তালিকা ২০২৬'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              {language === 'EN' ? (
                <>LG Monitor <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Collection</span></>
              ) : (
                <>এলজি মনিটর <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">কালেকশন</span></>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-medium">
              {language === 'EN'
                ? 'Explore the complete LG Monitor lineup — from FHD office displays to 4K OLED UltraFine™, UltraGear™ Gaming 240Hz, and Smart Monitors with webOS. Official pricing in BDT.'
                : 'এফএইচডি অফিস ডিসপ্লে থেকে ৪কে ওএলইডি আল্ট্রাফাইন™, আল্ট্রাগিয়ার™ গেমিং ২৪০Hz ও স্মার্ট মনিটর — এলজির সম্পূর্ণ মনিটর লাইনআপ দেখুন। অফিসিয়াল মূল্য বাংলাদেশী টাকায়।'}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/25 backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine LG
              </span>
              <span className="flex items-center gap-1.5 text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/25 backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> 2 Year Official Warranty
              </span>
              <span className="flex items-center gap-1.5 text-red-400 bg-red-500/10 px-2.5 py-1 rounded-lg border border-red-500/25 backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> Official Price
              </span>
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
            <button
              onClick={() => {
                setCurrentView('lg-monitors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>{language === 'EN' ? 'View All in Catalog' : 'ক্যাটালগে দেখুন'}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="text-center text-xs text-slate-400 font-bold">
              Showing <strong className="text-white font-black">{filteredMonitors.length}</strong> of {LG_MONITORS.length} models
            </div>
          </div>
        </div>
      </div>

      {/* ══ Category Tabs & Search ══ */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mt-5 mb-5">
        {/* Category tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORY_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const count = categoryCounts[tab.id] || 0;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/25'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{language === 'EN' ? tab.label : tab.labelBn}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative flex-shrink-0 min-w-[240px] max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'EN' ? 'Search LG models (e.g. 27GP850, OLED)...' : 'মডেল সার্চ করুন...'}
            className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
          />
        </div>
      </div>

      {/* ══ Section Title for Active Category ══ */}
      {activeTab !== 'all' && (
        <div className="mb-5 flex items-center gap-3">
          <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${CATEGORY_TABS.find(t => t.id === activeTab)?.color || 'from-red-500 to-red-700'}`} />
          <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
            {CATEGORY_TABS.find(t => t.id === activeTab)?.[language === 'EN' ? 'label' : 'labelBn']}
            <span className="text-slate-400 font-bold text-sm ml-2">— LG</span>
          </h3>
        </div>
      )}

      {/* ══ Product Cards Grid ══ */}
      {filteredMonitors.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-500">
          <Monitor className="w-12 h-12 mx-auto text-slate-300 mb-3" />
          <p className="font-bold text-sm">No LG monitors match your search.</p>
          <button
            onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
            className="mt-3 text-xs font-bold text-red-500 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredMonitors.map((monitor) => {
            const isAdded = addedId === monitor.id;
            const isPriceAvailable = monitor.mrpPrice > 0;

            return (
              <div
                key={monitor.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-red-400 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* ── Top: Resolution Badge + OLED indicator ── */}
                <div className="flex items-center justify-between p-4 pb-0">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black text-white ${getResTagColor(monitor.resolutionTag)}`}>
                      {monitor.resolutionTag}
                    </span>
                    {monitor.isOled && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                        OLED
                      </span>
                    )}
                  </div>
                  {monitor.badge && (
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black border ${getBadgeStyles(monitor.badge)}`}>
                      {monitor.badge}
                    </span>
                  )}
                </div>

                {/* ── Monitor Image ── */}
                <div className="relative aspect-[4/3] flex items-center justify-center p-4 mx-4 mt-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-100/50 rounded-2xl" />
                  <img
                    src={monitor.image}
                    alt={`LG ${monitor.model}`}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                  {/* Size pill on image */}
                  <div className="absolute bottom-2 left-2 z-20 px-2 py-1 rounded-lg bg-white/90 backdrop-blur border border-slate-200 text-[10px] font-black text-slate-800 shadow-sm">
                    {monitor.size}
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="p-4 pt-2 flex-1 flex flex-col gap-2">
                  {/* Model & Panel */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-red-600 tracking-wider uppercase">LG</span>
                    <span className="text-sm font-black text-slate-950 tracking-tight">{monitor.model}</span>
                  </div>

                  {/* Resolution & Panel */}
                  <p className="text-[11px] font-bold text-slate-600">
                    {monitor.resolution} • {monitor.panelType}
                  </p>

                  {/* Key specs */}
                  <ul className="text-[11px] text-slate-700 font-medium space-y-1 flex-1">
                    {/* Refresh + Response */}
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="truncate">{monitor.refreshRate}{monitor.responseTime ? ` / ${monitor.responseTime}` : ''}</span>
                    </li>
                    {/* Color Gamut */}
                    {monitor.colorGamut && (
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                        <span className="truncate">{monitor.colorGamut}</span>
                      </li>
                    )}
                    {/* HDR */}
                    {monitor.hdr && (
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span className="truncate">{monitor.hdr}</span>
                      </li>
                    )}
                    {/* USB-C */}
                    {monitor.usbC && (
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="truncate">USB-C ({monitor.usbC})</span>
                      </li>
                    )}
                  </ul>

                  {/* Ports */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <Cable className="w-3 h-3 text-slate-400 flex-shrink-0" />
                    <span className="text-[10px] font-bold text-slate-500 truncate">{monitor.ports}</span>
                  </div>

                  {/* Stand & Speakers info */}
                  {(monitor.stand || monitor.speakers) && (
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {monitor.stand && (
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded">
                          Stand: {monitor.stand}
                        </span>
                      )}
                      {monitor.speakers && (
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded">
                          🔊 {monitor.speakers}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* ── Price & Actions Footer ── */}
                <div className="bg-slate-50 border-t border-slate-200 p-4 space-y-3">
                  {isPriceAvailable ? (
                    <>
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                            ৳{monitor.mrpPrice.toLocaleString('en-IN')}
                          </div>
                        </div>
                        <span className="text-[10px] font-black text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                          LG Official
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={(e) => handleAddToCart(monitor, e)}
                          className={`font-bold text-xs py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 border ${
                            isAdded
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                              : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-300'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Zap className="w-3.5 h-3.5 fill-current" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-3.5 h-3.5" />
                              <span>{language === 'EN' ? 'Add Cart' : 'কার্ট'}</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={(e) => handleBuyNow(monitor, e)}
                          className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-sm hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center gap-1.5 active:scale-95"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>{language === 'EN' ? 'Buy Now' : 'কিনুন'}</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                        {language === 'EN' ? '📞 Call for Price' : '📞 মূল্য জানতে কল করুন'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
