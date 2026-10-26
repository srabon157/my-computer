import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ASUS_MONITORS, type AsusMonitor } from '../../data/asusMonitorsData';
import type { Product } from '../../types';
import {
  Monitor,
  ShoppingCart,
  Zap,
  CheckCircle2,
  Search,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Eye,
  SlidersHorizontal
} from 'lucide-react';

export const AsusMonitorPage: React.FC = () => {
  const { setCurrentView, addToCart, addToast } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewMonitor, setPreviewMonitor] = useState<AsusMonitor | null>(null);

  const categories = [
    { id: 'all', name: 'সকল আসুস মডেল', count: ASUS_MONITORS.length },
    { id: 'Portable', name: 'Portable ZenScreen', count: ASUS_MONITORS.filter(m => m.category === 'Portable').length },
    { id: 'Smart', name: 'Smart ZenScreen', count: ASUS_MONITORS.filter(m => m.category === 'Smart').length },
    { id: 'Touch', name: 'Touch Monitor', count: ASUS_MONITORS.filter(m => m.category === 'Touch').length },
    { id: 'Air Ionizer', name: 'Air Ionizer Series', count: ASUS_MONITORS.filter(m => m.category === 'Air Ionizer').length },
    { id: 'Docking', name: 'Docking Monitor', count: ASUS_MONITORS.filter(m => m.category === 'Docking').length },
    { id: 'Learning, Creating, Working', name: 'Eye Care Series', count: ASUS_MONITORS.filter(m => m.category === 'Learning, Creating, Working').length },
  ];

  const filteredMonitors = ASUS_MONITORS.filter(m => {
    const matchCat = selectedCategory === 'all' || m.category === selectedCategory;
    const matchSearch =
      searchQuery.trim() === '' ||
      `${m.model} ${m.name} ${m.description} ${m.size} ${m.resolution}`.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchCat && matchSearch;
  });

  const convertToStoreProduct = (m: AsusMonitor): Product => ({
    id: `asus-mon-${m.model.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    name: m.name,
    slug: `asus-${m.model.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    category: 'monitor',
    categoryName: 'Monitor',
    subcategory: 'asus-monitors',
    brand: 'Asus',
    regularPrice: m.price > 0 ? Math.round(m.price * 1.08) : 28000,
    discountPrice: m.price > 0 ? m.price : 25000,
    discountPercentage: 0,
    stockStatus: m.isUpcoming ? 'Out of Stock' : 'In Stock',
    stockCount: m.isUpcoming ? 0 : 15,
    rating: 4.9,
    reviewCount: 24,
    images: [m.image],
    shortSpecs: m.features,
    specifications: {},
    warranty: '3 Years Official ASUS Warranty',
    emiAvailable: m.price >= 30000,
    reviews: [],
    questions: [],
    createdDate: '2026-07-09'
  } as unknown as Product);

  const handleAddToCart = (m: AsusMonitor, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (m.isUpcoming) {
      if (addToast) addToast('Upcoming Product', `${m.model} খুব শীঘ্রই আসছে!`, 'info');
      return;
    }
    const product = convertToStoreProduct(m);
    addToCart(product, 1);
    if (addToast) addToast('Added to Cart', `${m.model} সফলভাবে কার্টে যোগ করা হয়েছে!`, 'success');
  };

  const handleOrderNow = (m: AsusMonitor, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (m.isUpcoming) {
      if (addToast) addToast('Upcoming Product', `${m.model} খুব শীঘ্রই আসছে!`, 'info');
      return;
    }
    const product = convertToStoreProduct(m);
    addToCart(product, 1);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 animate-fadeIn font-sans antialiased text-slate-800">
      {/* ── Top Bar / Breadcrumb ─────────────────────────────── */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-16 z-30 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button 
              onClick={() => setCurrentView('home')} 
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> হোম
            </button>
            <span className="text-slate-300">/</span>
            <button 
              onClick={() => setCurrentView('shop')} 
              className="hover:text-blue-600 transition-colors"
            >
              মনিটর
            </button>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              ASUS Official Store
            </span>
          </div>

          {/* Search box with subtle styling */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="আসুস মডেল বা ফিচার খুঁজুন (e.g. ZenScreen, 120Hz)..."
              className="w-full pl-9 pr-3.5 py-2 text-xs font-medium rounded-xl bg-slate-100/90 border border-slate-200/90 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0e1f3d] text-white p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              ASUS Official Displays Lineup (2026 Collection)
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              ASUS Monitors <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Official Showcase</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              পোর্টেবল ZenScreen, 4K Smart Google TV ডিসপ্লে, 10-Point Touch, এয়ার আয়নাইজার এবং 100Hz–120Hz Eye Care প্রোডাক্টিভিটি ও গেমিং মনিটর। প্রতিটি মডেলের ছবি ও স্পেসিফিকেশন দেখে সরাসরি অর্ডার করুন।
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs font-semibold">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>১০০% জেনুইন আসুস</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-slate-200">
                <Truck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>সারা দেশে হোম ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-slate-200">
                <RotateCcw className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>৩ বছর অফিসিয়াল সার্ভিস</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-slate-200">
                <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>প্রিমিয়াম কোয়ালিটি</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Category Filter Pills ────────────────────────────── */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-400 border-r border-slate-200/80 mr-1 flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">সিরিজ:</span>
          </div>

          {categories.map((c) => {
            const isSelected = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{c.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Monitor Cards Grid ──────────────────────────────── */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {filteredMonitors.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 shadow-xs">
            <Monitor className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">কোনো মনিটর পাওয়া যায়নি</h3>
            <p className="text-xs text-slate-500 mt-1">অন্য কোনো ক্যাটাগরি বা মডেল লিখে সার্চ করুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredMonitors.map((m) => {
              const isAvailable = m.price > 0 && !m.isUpcoming;
              return (
                <div
                  key={m.id}
                  onClick={() => setPreviewMonitor(m)}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:border-blue-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer hover:-translate-y-1 relative"
                >
                  {/* Top Bar with Category, Badges & Screen Size */}
                  <div className="p-4 pb-2 flex items-center justify-between gap-2 z-10">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                        {m.category === 'Learning, Creating, Working' ? 'Eye Care Series' : m.category}
                      </span>
                      {m.statusBadge && (
                        <span className={`px-2 py-0.5 rounded-md text-[9.5px] font-black tracking-wide uppercase ${
                          m.statusBadge === 'RESTOCK'
                            ? 'bg-blue-600 text-white'
                            : m.statusBadge === 'LIMITED'
                            ? 'bg-amber-600 text-white'
                            : 'bg-emerald-600 text-white'
                        }`}>
                          {m.statusBadge}
                        </span>
                      )}
                      {m.isUpcoming && (
                        <span className="px-2 py-0.5 rounded-md text-[9.5px] font-black uppercase tracking-wide bg-amber-100 text-amber-800 border border-amber-300">
                          Upcoming
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-black text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                      {m.size.split(' ')[0]}
                    </span>
                  </div>

                  {/* Clean Visual Stage for Monitor Image */}
                  <div className="relative h-48 sm:h-52 w-full px-5 py-4 flex items-center justify-center bg-gradient-to-b from-slate-50/70 via-slate-50/30 to-white overflow-hidden group/img">
                    <img
                      src={m.image}
                      alt={m.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop';
                      }}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Subtle Hover Overlay to view preview */}
                    <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/95 text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-slate-200">
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        প্রিভিউ দেখুন
                      </span>
                    </div>
                  </div>

                  {/* Content Area with Standardized Typography */}
                  <div className="p-4 pt-2 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Model Title */}
                      <div className="mb-2">
                        <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-0.5">
                          ASUS Official
                        </span>
                        <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                          {m.model}
                        </h3>
                      </div>

                      {/* Specs Tags Matrix */}
                      <div className="grid grid-cols-2 gap-1.5 mb-3 text-[11px]">
                        <div className="bg-slate-50/80 rounded-lg p-2 border border-slate-200/60">
                          <span className="text-slate-400 block text-[9.5px] uppercase font-bold tracking-wider">প্যানেল</span>
                          <span className="font-bold text-slate-800 truncate block text-[11px]">
                            {m.panelType}
                          </span>
                        </div>
                        <div className="bg-slate-50/80 rounded-lg p-2 border border-slate-200/60">
                          <span className="text-slate-400 block text-[9.5px] uppercase font-bold tracking-wider">রিফ্রেশ রেট</span>
                          <span className="font-bold text-slate-800 text-[11px]">
                            {m.refreshRate}
                          </span>
                        </div>
                      </div>

                      {/* Key Features Bullet Points */}
                      <ul className="space-y-1 mb-3">
                        {m.features.slice(0, 2).map((feat, idx) => (
                          <li key={idx} className="text-[11.5px] text-slate-600 flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1 leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Pricing & Action Controls */}
                    <div className="pt-3 border-t border-slate-100 mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          {isAvailable ? (
                            <div className="text-xl font-black text-slate-950 tracking-tight leading-none">
                              ৳{m.price.toLocaleString()}
                            </div>
                          ) : (
                            <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                              Upcoming
                            </span>
                          )}
                        </div>

                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          isAvailable
                            ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                            : 'text-amber-700 bg-amber-50 border-amber-200'
                        }`}>
                          {isAvailable ? 'In Stock' : 'Coming Soon'}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={(e) => handleAddToCart(m, e)}
                          disabled={m.isUpcoming}
                          className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all border ${
                            m.isUpcoming
                              ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 active:scale-95'
                          }`}
                        >
                          <ShoppingCart className="w-3.5 h-3.5 text-slate-600" />
                          <span>কার্ট</span>
                        </button>

                        <button
                          onClick={(e) => handleOrderNow(m, e)}
                          disabled={m.isUpcoming}
                          className={`w-full py-2.5 px-3 rounded-xl text-white font-extrabold text-xs flex items-center justify-center gap-1 transition-all shadow-sm active:scale-95 ${
                            m.isUpcoming
                              ? 'bg-slate-300 text-slate-500 shadow-none cursor-not-allowed'
                              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20'
                          }`}
                        >
                          <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                          <span>অর্ডার করুন</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Detail Preview Modal ────────────────────────────── */}
      {previewMonitor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-scaleUp">
            <button
              onClick={() => setPreviewMonitor(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors text-sm"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-1/2 h-64 bg-slate-50 rounded-2xl p-6 flex items-center justify-center border border-slate-100">
                <img
                  src={previewMonitor.image}
                  alt={previewMonitor.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-lg"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-blue-100 text-blue-700 border border-blue-200">
                      ASUS Official
                    </span>
                    <span className="text-xs font-semibold text-slate-400">#{previewMonitor.sl}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 leading-tight mb-1.5">
                    {previewMonitor.model}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    {previewMonitor.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-700 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="flex justify-between border-b border-slate-100 pb-1">
                      <strong className="text-slate-500">Category:</strong>
                      <span className="font-semibold text-slate-800">{previewMonitor.category}</span>
                    </p>
                    <p className="flex justify-between border-b border-slate-100 pb-1">
                      <strong className="text-slate-500">Size:</strong>
                      <span className="font-semibold text-slate-800">{previewMonitor.size}</span>
                    </p>
                    <p className="flex justify-between border-b border-slate-100 pb-1">
                      <strong className="text-slate-500">Resolution:</strong>
                      <span className="font-semibold text-slate-800">{previewMonitor.resolution}</span>
                    </p>
                    <p className="flex justify-between border-b border-slate-100 pb-1">
                      <strong className="text-slate-500">Panel Type:</strong>
                      <span className="font-semibold text-slate-800">{previewMonitor.panelType}</span>
                    </p>
                    <p className="flex justify-between">
                      <strong className="text-slate-500">Refresh Rate:</strong>
                      <span className="font-semibold text-slate-800">{previewMonitor.refreshRate}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    {previewMonitor.price > 0 && !previewMonitor.isUpcoming ? (
                      <span className="text-2xl font-black text-slate-950">
                        ৳{previewMonitor.price.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-base font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                        Upcoming Product
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        handleAddToCart(previewMonitor);
                        setPreviewMonitor(null);
                      }}
                      disabled={previewMonitor.isUpcoming}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
                    >
                      <ShoppingCart className="w-4 h-4 text-slate-600" /> কার্ট
                    </button>
                    <button
                      onClick={() => {
                        handleOrderNow(previewMonitor);
                        setPreviewMonitor(null);
                      }}
                      disabled={previewMonitor.isUpcoming}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs flex items-center justify-center gap-1 transition-all shadow-md shadow-blue-500/20 active:scale-95 disabled:opacity-50"
                    >
                      <Zap className="w-4 h-4 text-amber-300 fill-amber-300" /> অর্ডার করুন
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
