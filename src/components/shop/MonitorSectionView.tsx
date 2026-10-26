import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { LG_MONITORS, type LgMonitor } from '../home/LgMonitorShowcase';
import { ASUS_MONITORS } from '../../data/asusMonitorsData';
import type { Product } from '../../types';
import {
  Monitor,
  ShoppingCart,
  Zap,
  CheckCircle2,
  Tv,
  Gamepad2,
  Search
} from 'lucide-react';

interface MonitorSectionViewProps {
  initialBrand?: string | null;
}

export const MonitorSectionView: React.FC<MonitorSectionViewProps> = ({ initialBrand = 'LG' }) => {
  const { addToCart, setCurrentView } = useStore();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(initialBrand || 'LG');
  const [activeTab, setActiveTab] = useState<'all' | 'fhd' | 'qhd' | '4k' | 'gaming' | 'smart_ultrawide'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewMonitor, setPreviewMonitor] = useState<LgMonitor | null>(null);

  const brands = [
    { id: 'LG', name: 'LG', count: 29, isOfficial: true, color: 'text-red-600 border-red-500 bg-red-50/50' },
    { id: 'Samsung', name: 'Samsung', count: 18, isOfficial: false, color: 'text-blue-600 border-blue-200 bg-blue-50/30' },
    { id: 'Asus', name: 'Asus', count: ASUS_MONITORS.length, isOfficial: true, color: 'text-blue-600 border-blue-500 bg-blue-50/50' },
    { id: 'Dell', name: 'Dell', count: 12, isOfficial: false, color: 'text-blue-700 border-blue-200 bg-blue-50/30' },
    { id: 'MSI', name: 'MSI', count: 10, isOfficial: false, color: 'text-red-700 border-red-200 bg-red-50/30' },
    { id: 'Acer', name: 'Acer', count: 8, isOfficial: false, color: 'text-emerald-700 border-emerald-200 bg-emerald-50/30' },
    { id: 'BenQ', name: 'BenQ', count: 6, isOfficial: false, color: 'text-purple-700 border-purple-200 bg-purple-50/30' }
  ];

  // Filter monitors for LG
  const fhdMonitors = LG_MONITORS.filter(m => m.category === 'fhd');
  const qhdMonitors = LG_MONITORS.filter(m => m.category === 'qhd');
  const uhdMonitors = LG_MONITORS.filter(m => m.category === '4k');
  const gamingMonitors = LG_MONITORS.filter(m => m.category === 'gaming');
  const smartAndUltrawideMonitors = LG_MONITORS.filter(m => m.category === 'smart' || m.category === 'ultrawide');

  const filterList = (list: LgMonitor[]) => {
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(m => 
      m.model.toLowerCase().includes(q) ||
      m.size.toLowerCase().includes(q) ||
      m.resolution.toLowerCase().includes(q) ||
      m.ports.toLowerCase().includes(q) ||
      m.panelType.toLowerCase().includes(q)
    );
  };

  const convertToStoreProduct = (m: LgMonitor): Product => ({
    id: `lg-mon-${m.model.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    name: `LG ${m.model} ${m.size} ${m.resolutionTag} ${m.panelType} Monitor`,
    slug: `lg-${m.model.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    category: 'monitor',
    categoryName: 'Monitor',
    subcategory: m.category === 'gaming' ? 'gaming-monitor' : m.category === '4k' ? '4k-monitor' : 'fhd-monitor',
    brand: 'LG',
    regularPrice: m.mrpPrice > 0 ? Math.round(m.mrpPrice * 1.08) : 28000,
    discountPrice: m.mrpPrice > 0 ? m.mrpPrice : 25000,
    discountPercentage: 0,
    stockStatus: 'In Stock',
    stockCount: 15,
    rating: 4.8,
    reviewCount: 28,
    images: [m.image],
    shortSpecs: m.features,
    specifications: {},
    warranty: '3 Years Official LG Warranty',
    emiAvailable: m.mrpPrice >= 30000,
    reviews: [],
    questions: [],
    createdDate: '2026-07-09'
  } as unknown as Product);

  const handleAddToCart = (m: LgMonitor) => {
    const product = convertToStoreProduct(m);
    addToCart(product, 1);
  };

  const handleOrderNow = (m: LgMonitor) => {
    const product = convertToStoreProduct(m);
    addToCart(product, 1);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Card component
  const MonitorCard: React.FC<{ monitor: LgMonitor }> = ({ monitor }) => (
    <div 
      onClick={() => setPreviewMonitor(monitor)}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(239,68,68,0.12)] hover:border-red-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer hover:-translate-y-1 relative"
    >
      {/* Top Badges */}
      <div className="p-4 pb-2 flex items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold tracking-wider uppercase ${
            monitor.resolutionTag === 'FHD'
              ? 'bg-blue-100 text-blue-700 border border-blue-200'
              : monitor.resolutionTag === 'QHD'
              ? 'bg-purple-100 text-purple-700 border border-purple-200'
              : monitor.resolutionTag === '4K UHD' || monitor.resolutionTag === 'OLED'
              ? 'bg-amber-100 text-amber-800 border border-amber-300'
              : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
          }`}>
            {monitor.resolutionTag}
          </span>
          {monitor.isOled && (
            <span className="px-2 py-0.5 rounded-md text-[9.5px] font-black bg-slate-950 text-amber-400 border border-amber-400/40">
              OLED
            </span>
          )}
          {monitor.badge && (
            <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-red-50 text-red-600 border border-red-200">
              {monitor.badge}
            </span>
          )}
        </div>
        <span className="text-[11px] font-black text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80">
          {monitor.size}
        </span>
      </div>

      {/* Image with quick view preview */}
      <div 
        className="relative h-48 sm:h-52 w-full px-5 py-4 flex items-center justify-center bg-gradient-to-b from-slate-50/70 via-slate-50/30 to-white overflow-hidden group/img"
      >
        <img
          src={monitor.image}
          alt={`LG ${monitor.model}`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop';
          }}
          className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-slate-200">
            প্রিভিউ দেখুন
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 pt-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest block mb-0.5">
              LG Official
            </span>
            <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
              LG {monitor.model}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-1.5 mb-3 text-[11px]">
            <div className="bg-slate-50/80 rounded-lg p-2 border border-slate-200/60">
              <span className="text-slate-400 block text-[9.5px] uppercase font-bold tracking-wider">প্যানেল</span>
              <span className="font-bold text-slate-800 truncate block text-[11px]">{monitor.panelType}</span>
            </div>
            <div className="bg-slate-50/80 rounded-lg p-2 border border-slate-200/60">
              <span className="text-slate-400 block text-[9.5px] uppercase font-bold tracking-wider">রিফ্রেশ রেট</span>
              <span className="font-bold text-slate-800 text-[11px]">{monitor.refreshRate}</span>
            </div>
          </div>

          <ul className="space-y-1 mb-3">
            {monitor.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="text-[11.5px] text-slate-600 flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1 leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Order Actions */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              {monitor.mrpPrice > 0 ? (
                <div className="text-xl font-black text-slate-950 tracking-tight leading-none">
                  ৳{monitor.mrpPrice.toLocaleString()}
                </div>
              ) : (
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Call for Price
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              In Stock
            </span>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); handleAddToCart(monitor); }}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 border border-slate-200"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-slate-600" />
              <span>কার্ট</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleOrderNow(monitor); }}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-xs flex items-center justify-center gap-1 transition-all shadow-sm active:scale-95 shadow-red-500/20"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>অর্ডার করুন</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ── Brand Selection Section ─────────────────────────── */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-blue-600" />
              <span>মনিটর ব্র্যান্ড নির্বাচন করুন (Select Monitor Brand)</span>
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              আপনার পছন্দের ব্র্যান্ডে ক্লিক করে সকল মডেলের প্রাইস ও স্পেসিফিকেশন দেখুন
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="মডেল বা রেজুলেশন খুঁজুন..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:border-red-500 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Brands Badges / Cards */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-1">
          {brands.map((b) => {
            const isSelected = selectedBrand === b.id;
            return (
              <button
                key={b.id}
                onClick={() => {
                  if (b.id === 'Asus') {
                    setCurrentView('asus-monitors');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                  }
                  setSelectedBrand(b.id);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-all flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? b.id === 'LG'
                      ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-500/25 scale-105'
                      : 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                  isSelected ? 'bg-white/20 text-white' : b.id === 'LG' ? 'bg-red-100 text-red-600 font-black' : 'bg-slate-100 text-slate-700'
                }`}>
                  {b.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm leading-none">{b.name}</span>
                    {b.isOfficial && (
                      <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded ${
                        isSelected ? 'bg-white text-red-600' : 'bg-red-600 text-white'
                      }`}>
                        Official
                      </span>
                    )}
                  </div>
                  <span className={`text-[10px] font-medium leading-none ${isSelected ? 'text-white/80' : 'text-slate-600'}`}>
                    {b.count} মডেল
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── If LG is selected: Render the complete official catalog ── */}
      {selectedBrand === 'LG' ? (
        <div className="space-y-8">
          {/* Quick Resolution Anchors */}
          <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>সব LG মডেল ({LG_MONITORS.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab('fhd'); document.getElementById('sec-fhd')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'fhd'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>FHD ডিসপ্লে (1080p)</span>
              <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded-full font-bold ml-1">
                {fhdMonitors.length}
              </span>
            </button>

            <button
              onClick={() => { setActiveTab('qhd'); document.getElementById('sec-qhd')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'qhd'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>2K QHD ডিসপ্লে (1440p)</span>
              <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded-full font-bold ml-1">
                {qhdMonitors.length}
              </span>
            </button>

            <button
              onClick={() => { setActiveTab('4k'); document.getElementById('sec-4k')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === '4k'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>4K UHD ও OLED (2160p)</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-full font-bold ml-1">
                {uhdMonitors.length}
              </span>
            </button>

            <button
              onClick={() => { setActiveTab('gaming'); document.getElementById('sec-gaming')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'gaming'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>UltraGear™ Gaming</span>
              <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.2 rounded-full font-bold ml-1">
                {gamingMonitors.length}
              </span>
            </button>

            <button
              onClick={() => { setActiveTab('smart_ultrawide'); document.getElementById('sec-smart')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'smart_ultrawide'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Smart &amp; UltraWide</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-bold ml-1">
                {smartAndUltrawideMonitors.length}
              </span>
            </button>
          </div>

          {/* ════════ SECTION 1: FHD DISPLAYS (1080p) ════════ */}
          {(activeTab === 'all' || activeTab === 'fhd') && (
            <section id="sec-fhd" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-4 sm:p-5 rounded-2xl mb-5 flex flex-wrap items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-black text-lg text-blue-300">
                    FHD
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        LG Full HD Displays (1080p)
                      </h3>
                      <span className="text-xs bg-blue-500 text-white font-bold px-2 py-0.5 rounded-full">
                        {fhdMonitors.length} মডেল
                      </span>
                    </div>
                    <p className="text-xs text-blue-200">
                      1920x1080 রেজুলেশন, 100Hz–120Hz রিফ্রেশ রেট, IPS প্যানেল ও ৩ বছর অফিশিয়াল ওয়ারেন্টি।
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                  ৳15,700 – ৳30,500
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filterList(fhdMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            </section>
          )}

          {/* ════════ SECTION 2: 2K QHD DISPLAYS (1440p) ════════ */}
          {(activeTab === 'all' || activeTab === 'qhd') && (
            <section id="sec-qhd" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-purple-900 to-slate-950 text-white p-4 sm:p-5 rounded-2xl mb-5 flex flex-wrap items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center font-black text-lg text-purple-300">
                    2K
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        LG 2K QHD Displays (2560 x 1440)
                      </h3>
                      <span className="text-xs bg-purple-500 text-white font-bold px-2 py-0.5 rounded-full">
                        {qhdMonitors.length} মডেল
                      </span>
                    </div>
                    <p className="text-xs text-purple-200">
                      2560x1440 শার্প রেজুলেশন, 100Hz রিফ্রেশ রেট, USB-C পাওয়ার ডেলিভারি ও sRGB 99%।
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                  ৳30,500 – ৳39,500
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filterList(qhdMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            </section>
          )}

          {/* ════════ SECTION 3: 4K UHD & OLED DISPLAYS (2160p) ════════ */}
          {(activeTab === 'all' || activeTab === '4k') && (
            <section id="sec-4k" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-black text-white p-4 sm:p-5 rounded-2xl mb-5 flex flex-wrap items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center font-black text-lg text-amber-300">
                    4K
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        LG 4K UHD &amp; OLED Professional Displays (3840 x 2160)
                      </h3>
                      <span className="text-xs bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-full">
                        {uhdMonitors.length} মডেল
                      </span>
                    </div>
                    <p className="text-xs text-amber-200">
                      প্রফেশনাল গ্রাফিক্স ডিজাইনার, ভিডিও এডিটর ও ক্রিয়েটরদের জন্য প্রিমিয়াম কালার প্যানেল।
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                  ৳46,500 – ৳470,000
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filterList(uhdMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            </section>
          )}

          {/* ════════ SECTION 4: ULTRAGEAR™ GAMING MONITORS ════════ */}
          {(activeTab === 'all' || activeTab === 'gaming') && (
            <section id="sec-gaming" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-red-950 via-rose-950 to-slate-950 text-white p-4 sm:p-5 rounded-2xl mb-5 flex flex-wrap items-center justify-between gap-3 shadow-md border border-red-900/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/40 flex items-center justify-center font-black text-lg text-red-400">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        LG UltraGear™ Gaming Series (144Hz – 240Hz OLED)
                      </h3>
                      <span className="text-xs bg-red-600 text-white font-extrabold px-2 py-0.5 rounded-full">
                        {gamingMonitors.length} মডেল
                      </span>
                    </div>
                    <p className="text-xs text-rose-200">
                      1ms response time, 180Hz–240Hz রিফ্রেশ রেট, G-Sync এবং ফ্ল্যাগশিপ OLED প্যানেল।
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                  ৳23,000 – ৳155,000
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filterList(gamingMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            </section>
          )}

          {/* ════════ SECTION 5: SMART & ULTRAWIDE MONITORS ════════ */}
          {(activeTab === 'all' || activeTab === 'smart_ultrawide') && (
            <section id="sec-smart" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white p-4 sm:p-5 rounded-2xl mb-5 flex flex-wrap items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-black text-lg text-emerald-300">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        LG MyView Smart Monitor &amp; UltraWide
                      </h3>
                      <span className="text-xs bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-full">
                        {smartAndUltrawideMonitors.length} মডেল
                      </span>
                    </div>
                    <p className="text-xs text-emerald-200">
                      webOS স্মার্ট অ্যাপস এবং 21:9 সিনেমাটিক আল্ট্রাওয়াইড মাল্টিটাস্কিং ডিসপ্লে।
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                  ৳32,000 – ৳75,000
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filterList(smartAndUltrawideMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        /* If another brand is clicked */
        <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3 font-black text-xl text-slate-700">
            {selectedBrand}
          </div>
          <h3 className="text-lg font-black text-slate-900 mb-1">{selectedBrand} Monitor Catalog</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto mb-4">
            এখানে {selectedBrand} এর নিয়মিত মনিটর সমূহ ব্রাউজ করতে পারবেন। সম্পূর্ণ অফিশিয়াল কালেকশন ও স্পেসিফিকেশন আলাদা সেকশন দেখতে LG ব্র্যান্ড নির্বাচন করুন।
          </p>
          <button
            onClick={() => setSelectedBrand('LG')}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-colors shadow-md shadow-red-500/20"
          >
            LG অফিশিয়াল মনিটর সেকশনে যান
          </button>
        </div>
      )}

      {/* ── Detail Preview Modal ────────────────────────────── */}
      {previewMonitor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200 relative animate-scaleUp">
            <button
              onClick={() => setPreviewMonitor(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-1/2 h-64 bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100">
                <img
                  src={previewMonitor.image}
                  alt={previewMonitor.model}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-red-100 text-red-700">
                      LG Official
                    </span>
                    <span className="text-xs text-slate-500">#{previewMonitor.sl}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-2">
                    LG {previewMonitor.model}
                  </h3>
                  <p className="text-sm text-slate-600 font-bold mb-3">
                    {previewMonitor.size} • {previewMonitor.resolution}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-700 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p><strong>Panel:</strong> {previewMonitor.panelType}</p>
                    <p><strong>Refresh Rate:</strong> {previewMonitor.refreshRate}</p>
                    <p><strong>Color Gamut:</strong> {previewMonitor.colorGamut}</p>
                    <p><strong>Ports:</strong> {previewMonitor.ports}</p>
                    {previewMonitor.usbC && <p><strong>USB-C:</strong> {previewMonitor.usbC}</p>}
                    {previewMonitor.stand && <p><strong>Stand:</strong> {previewMonitor.stand}</p>}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-black text-slate-900">
                      {previewMonitor.mrpPrice > 0 ? `৳${previewMonitor.mrpPrice.toLocaleString()}` : 'Call for Price'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        handleAddToCart(previewMonitor);
                        setPreviewMonitor(null);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5"
                    >
                      <ShoppingCart className="w-4 h-4" /> কার্টে যোগ করুন
                    </button>
                    <button
                      onClick={() => {
                        handleOrderNow(previewMonitor);
                        setPreviewMonitor(null);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-xs flex items-center justify-center gap-1 shadow-md shadow-red-500/20"
                    >
                      <Zap className="w-4 h-4 text-amber-300" /> সরাসরি অর্ডার করুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
