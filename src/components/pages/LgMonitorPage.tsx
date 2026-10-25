import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { LG_MONITORS, type LgMonitor } from '../home/LgMonitorShowcase';
import type { Product } from '../../types';
import {
  Monitor,
  ShoppingCart,
  Zap,
  CheckCircle2,
  Tv,
  Gamepad2,
  Sparkles,
  Layers,
  Cable,
  ArrowLeft,
  Filter,
  Check,
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  SlidersHorizontal,
  Search
} from 'lucide-react';

export const LgMonitorPage: React.FC = () => {
  const { setCurrentView, addToCart, language, addToast } = useStore();
  const [activeTab, setActiveTab] = useState<'all' | 'fhd' | 'qhd' | '4k' | 'gaming' | 'smart_ultrawide'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonitor, setSelectedMonitor] = useState<LgMonitor | null>(null);

  // Group monitors into distinct resolution sections as specifically requested
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
    nameBn: `এলজি ${m.model} ${m.size} মনিটর`,
    category: 'monitor',
    subCategory: m.category === 'gaming' ? 'gaming-monitor' : m.category === '4k' ? '4k-monitor' : 'fhd-monitor',
    brand: 'LG',
    price: m.mrpPrice > 0 ? m.mrpPrice : 25000,
    regularPrice: m.mrpPrice > 0 ? Math.round(m.mrpPrice * 1.08) : 28000,
    stock: 15,
    rating: 4.8,
    reviewsCount: 34,
    images: [m.image],
    specs: {
      'Model': m.model,
      'Size': m.size,
      'Resolution': m.resolution,
      'Panel Type': m.panelType,
      'Refresh Rate': m.refreshRate,
      'Ports': m.ports,
      ...(m.responseTime ? { 'Response Time': m.responseTime } : {}),
      ...(m.usbC ? { 'USB-C': m.usbC } : {}),
      ...(m.hdr ? { 'HDR': m.hdr } : {})
    },
    keyFeatures: m.features,
    isFeatured: true,
    isOfficial: true,
    warranty: '3 Years Official Warranty'
  });

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

  // Card component for each monitor
  const MonitorCard: React.FC<{ monitor: LgMonitor }> = ({ monitor }) => {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-400 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1">
        {/* Top Badges */}
        <div className="p-3.5 pb-0 flex items-center justify-between gap-2 z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold tracking-wide uppercase ${
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
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-900 text-amber-400 border border-amber-400/40 animate-pulse">
                OLED
              </span>
            )}
            {monitor.badge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-600 border border-red-200">
                {monitor.badge}
              </span>
            )}
          </div>
          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            {monitor.size}
          </span>
        </div>

        {/* Product Image */}
        <div 
          onClick={() => setSelectedMonitor(monitor)}
          className="relative h-48 sm:h-52 w-full p-4 flex items-center justify-center bg-gradient-to-b from-slate-50/60 to-white cursor-pointer overflow-hidden"
        >
          <img
            src={monitor.image}
            alt={`LG ${monitor.model}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop';
            }}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
              বিস্তারিত প্রিভিউ দেখুন
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 pt-2 flex-1 flex flex-col justify-between">
          <div>
            {/* Model Name */}
            <div className="flex items-start justify-between gap-1 mb-1">
              <div>
                <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider">LG Official</span>
                <h3 className="text-base font-black text-slate-900 group-hover:text-red-600 transition-colors leading-tight">
                  LG {monitor.model}
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-400">#{monitor.sl}</span>
            </div>

            {/* Resolution & Specs Chips */}
            <p className="text-xs text-slate-600 font-semibold mb-2 line-clamp-1">
              {monitor.resolution}
            </p>

            <div className="grid grid-cols-2 gap-1.5 mb-3 text-[11px]">
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <span className="text-slate-600 block text-[10px]">Panel</span>
                <span className="font-bold text-slate-800">{monitor.panelType}</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <span className="text-slate-600 block text-[10px]">Refresh</span>
                <span className="font-bold text-slate-800">{monitor.refreshRate}</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <span className="text-slate-600 block text-[10px]">Color</span>
                <span className="font-bold text-slate-800 truncate block">{monitor.colorGamut}</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <span className="text-slate-600 block text-[10px]">Ports</span>
                <span className="font-bold text-slate-800 truncate block">{monitor.ports}</span>
              </div>
            </div>

            {/* Key feature bullet points */}
            <ul className="space-y-1 mb-3">
              {monitor.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="text-[11.5px] text-slate-600 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Order Actions */}
          <div className="pt-3 border-t border-slate-100 mt-auto">
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-red-600 tracking-wider block">
                  Official MRP Rate
                </span>
                {monitor.mrpPrice > 0 ? (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-slate-900 tracking-tight">
                      ৳{monitor.mrpPrice.toLocaleString()}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600">MRP</span>
                  </div>
                ) : (
                  <span className="text-sm font-bold text-orange-600">
                    Call for Price
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                In Stock
              </span>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleAddToCart(monitor)}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 border border-slate-200"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>কার্ট</span>
              </button>
              <button
                onClick={() => handleOrderNow(monitor)}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-xs flex items-center justify-center gap-1 transition-all shadow-md shadow-red-500/20 active:scale-95"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>অর্ডার করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-w-0 w-full pb-16 bg-slate-50/50">
      {/* ── Breadcrumb & Top Bar ────────────────────────────── */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button 
              onClick={() => setCurrentView('home')} 
              className="hover:text-blue-600 font-medium flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> হোম
            </button>
            <span>/</span>
            <button 
              onClick={() => { setCurrentView('shop'); }} 
              className="hover:text-blue-600 font-medium"
            >
              মনিটর
            </button>
            <span>/</span>
            <span className="font-bold text-red-600">LG Official Brand Store</span>
          </div>

          {/* Search box inside page */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="LG মডেল বা সাইজ খুঁজুন (e.g. 24U411A, 4K)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:border-red-500 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white p-6 sm:p-10 shadow-xl border border-red-900/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LG Electronics Official Monitor Collection (2026 Price List)
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
              LG Monitors <span className="text-red-500">Official MRP Store</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
              এখানে LG ব্র্যান্ডের সকল অরিজিনাল মনিটরের সম্পূর্ণ প্রাইস লিস্ট ও স্পেসিফিকেশন দেওয়া হলো। FHD, 2K QHD, 4K UHD OLED এবং UltraGear গেমিং সিরিজের যে কোনো মনিটর সরাসরি দেখে প্রিভিউ করুন এবং অর্ডার করুন।
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="font-semibold text-white">৩ বছর অফিশিয়াল ওয়ারেন্টি</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-white">১০০% জেনুইন LG প্যানেল</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                <Truck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="font-semibold text-white">সারা দেশে দ্রুত ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                <RotateCcw className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-white">সহজ রিটার্ন ও রিপ্লেসমেন্ট</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Anchor Navigation Pills ───────────────────── */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>সব মনিটর (All 29)</span>
          </button>

          <button
            onClick={() => { setActiveTab('fhd'); document.getElementById('sec-fhd')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
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
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
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
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
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
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'gaming'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-red-50 hover:text-red-600'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>UltraGear™ Gaming (144Hz–240Hz)</span>
            <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.2 rounded-full font-bold ml-1">
              {gamingMonitors.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab('smart_ultrawide'); document.getElementById('sec-smart')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'smart_ultrawide'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Smart &amp; UltraWide Displays</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-bold ml-1">
              {smartAndUltrawideMonitors.length}
            </span>
          </button>
        </div>
      </div>

      {/* ── Main Content: Distinct Resolution Sections ─────── */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">

        {/* ════════ SECTION 1: FHD DISPLAYS (1080p) ════════ */}
        {(activeTab === 'all' || activeTab === 'fhd') && (
          <section id="sec-fhd" className="scroll-mt-32">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-5 rounded-2xl mb-6 flex flex-wrap items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-black text-xl text-blue-300">
                  FHD
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      LG Full HD Displays (1080p)
                    </h2>
                    <span className="text-xs bg-blue-500 text-white font-bold px-2 py-0.5 rounded-full">
                      {fhdMonitors.length} মডেল
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-200">
                    1920x1080 রেজুলেশন, 100Hz–120Hz রিফ্রেশ রেট, IPS প্যানেল এবং অফিস/বাসার দৈনন্দিন কাজের জন্য সেরা ভ্যালু।
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                Official MRP: ৳15,700 – ৳30,500
              </span>
            </div>

            {filterList(fhdMonitors).length === 0 ? (
              <div className="text-center py-8 text-sm text-slate-500">কোনো FHD মনিটর পাওয়া যায়নি।</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {filterList(fhdMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ════════ SECTION 2: 2K QHD DISPLAYS (1440p) ════════ */}
        {(activeTab === 'all' || activeTab === 'qhd') && (
          <section id="sec-qhd" className="scroll-mt-32">
            <div className="bg-gradient-to-r from-purple-900 to-slate-950 text-white p-5 rounded-2xl mb-6 flex flex-wrap items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center font-black text-xl text-purple-300">
                  2K
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      LG 2K QHD Displays (2560 x 1440)
                    </h2>
                    <span className="text-xs bg-purple-500 text-white font-bold px-2 py-0.5 rounded-full">
                      {qhdMonitors.length} মডেল
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-purple-200">
                    2560x1440 আল্ট্রা-শার্প রেজুলেশন, 100Hz রিফ্রেশ রেট, USB-C পাওয়ার ডেলিভারি ও sRGB 99% কালার একিউরেসি।
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                Official MRP: ৳30,500 – ৳39,500
              </span>
            </div>

            {filterList(qhdMonitors).length === 0 ? (
              <div className="text-center py-8 text-sm text-slate-500">কোনো 2K মনিটর পাওয়া যায়নি।</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {filterList(qhdMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ════════ SECTION 3: 4K UHD & OLED DISPLAYS (2160p) ════════ */}
        {(activeTab === 'all' || activeTab === '4k') && (
          <section id="sec-4k" className="scroll-mt-32">
            <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-black text-white p-5 rounded-2xl mb-6 flex flex-wrap items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center font-black text-xl text-amber-300">
                  4K
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      LG 4K UHD &amp; OLED Professional Displays (3840 x 2160)
                    </h2>
                    <span className="text-xs bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-full">
                      {uhdMonitors.length} মডেল
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-200">
                    কনটেন্ট ক্রিয়েটর, ভিডিও এডিটর ও প্রফেশনাল গ্রাফিক্স ডিজাইনারদের জন্য ফ্ল্যাগশিপ 4K UHD ও OLED কালার মাস্টার ডিসপ্লে।
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                Official MRP: ৳46,500 – ৳470,000
              </span>
            </div>

            {filterList(uhdMonitors).length === 0 ? (
              <div className="text-center py-8 text-sm text-slate-500">কোনো 4K মনিটর পাওয়া যায়নি।</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filterList(uhdMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ════════ SECTION 4: ULTRAGEAR™ GAMING MONITORS ════════ */}
        {(activeTab === 'all' || activeTab === 'gaming') && (
          <section id="sec-gaming" className="scroll-mt-32">
            <div className="bg-gradient-to-r from-red-950 via-rose-950 to-slate-950 text-white p-5 rounded-2xl mb-6 flex flex-wrap items-center justify-between gap-4 shadow-md border border-red-900/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-600/30 border border-red-500/40 flex items-center justify-center font-black text-xl text-red-400">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      LG UltraGear™ Gaming Series (144Hz – 240Hz OLED)
                    </h2>
                    <span className="text-xs bg-red-600 text-white font-extrabold px-2 py-0.5 rounded-full">
                      {gamingMonitors.length} মডেল
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-200">
                    eSports ও হার্ডকোর গেমারদের জন্য আল্ট্রা-ফাস্ট 1ms response time, 180Hz–240Hz রিফ্রেশ রেট, G-Sync এবং OLED প্যানেল।
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                Official MRP: ৳23,000 – ৳155,000
              </span>
            </div>

            {filterList(gamingMonitors).length === 0 ? (
              <div className="text-center py-8 text-sm text-slate-500">কোনো গেমিং মনিটর পাওয়া যায়নি।</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filterList(gamingMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ════════ SECTION 5: SMART & ULTRAWIDE MONITORS ════════ */}
        {(activeTab === 'all' || activeTab === 'smart_ultrawide') && (
          <section id="sec-smart" className="scroll-mt-32">
            <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white p-5 rounded-2xl mb-6 flex flex-wrap items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-black text-xl text-emerald-300">
                  <Tv className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      LG MyView Smart Monitor &amp; UltraWide
                    </h2>
                    <span className="text-xs bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-full">
                      {smartAndUltrawideMonitors.length} মডেল
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    webOS স্মার্ট প্ল্যাটফর্ম (Netflix/YouTube বিল্ট-ইন) এবং 21:9 সিনেমাটিক আল্ট্রাওয়াইড মাল্টিটাস্কিং ডিসপ্লে।
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-xl border border-white/20">
                Official MRP: ৳32,000 – ৳75,000
              </span>
            </div>

            {filterList(smartAndUltrawideMonitors).length === 0 ? (
              <div className="text-center py-8 text-sm text-slate-500">কোনো স্মার্ট বা আল্ট্রাওয়াইড মনিটর পাওয়া যায়নি।</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {filterList(smartAndUltrawideMonitors).map(m => (
                  <MonitorCard key={m.id} monitor={m} />
                ))}
              </div>
            )}
          </section>
        )}

      </div>

      {/* ── Detail Preview Modal ────────────────────────────── */}
      {selectedMonitor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200 relative animate-scaleUp">
            <button
              onClick={() => setSelectedMonitor(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-1/2 h-64 bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100">
                <img
                  src={selectedMonitor.image}
                  alt={selectedMonitor.model}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-red-100 text-red-700">
                      LG Official
                    </span>
                    <span className="text-xs text-slate-500">#{selectedMonitor.sl}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-2">
                    LG {selectedMonitor.model}
                  </h3>
                  <p className="text-sm text-slate-600 font-bold mb-3">
                    {selectedMonitor.size} • {selectedMonitor.resolution}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-700 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p><strong>Panel:</strong> {selectedMonitor.panelType}</p>
                    <p><strong>Refresh Rate:</strong> {selectedMonitor.refreshRate}</p>
                    <p><strong>Color Gamut:</strong> {selectedMonitor.colorGamut}</p>
                    <p><strong>Ports:</strong> {selectedMonitor.ports}</p>
                    {selectedMonitor.usbC && <p><strong>USB-C:</strong> {selectedMonitor.usbC}</p>}
                    {selectedMonitor.stand && <p><strong>Stand:</strong> {selectedMonitor.stand}</p>}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-black text-slate-900">
                      {selectedMonitor.mrpPrice > 0 ? `৳${selectedMonitor.mrpPrice.toLocaleString()}` : 'Call for Price'}
                    </span>
                    <span className="text-xs text-red-600 font-extrabold uppercase">Official MRP</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        handleAddToCart(selectedMonitor);
                        setSelectedMonitor(null);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5"
                    >
                      <ShoppingCart className="w-4 h-4" /> কার্টে যোগ করুন
                    </button>
                    <button
                      onClick={() => {
                        handleOrderNow(selectedMonitor);
                        setSelectedMonitor(null);
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
