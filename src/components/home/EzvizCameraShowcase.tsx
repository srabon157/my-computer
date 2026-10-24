import React, { useState, useMemo } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import type { Product } from '../../types';
import {
  ShieldCheck,
  Camera,
  Wifi,
  Sun,
  Radio,
  Search,
  ShoppingCart,
  Zap,
  Eye,
  ChevronRight,
  Star,
  CheckCircle2,
  Video
} from 'lucide-react';

export const EzvizCameraShowcase: React.FC = () => {
  const {
    addToCart,
    openProductDetail,
    setQuickViewProduct,
    setFilters,
    setCurrentView,
    language
  } = useStore();

  const [activeTab, setActiveTab] = useState<'all' | 'indoor' | 'outdoor' | 'cellular-solar' | 'poe-doorbell'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);

  // Filter all EZVIZ products
  const ezvizProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.brand === 'EZVIZ' || p.subcategory === 'ezviz-camera');
  }, []);

  // Filter by active tab & search
  const filteredList = useMemo(() => {
    return ezvizProducts.filter(item => {
      const nameLower = (item.name + ' ' + (item.shortSpecs?.join(' ') || '')).toLowerCase();
      
      // Tab matching
      let tabMatch = true;
      if (activeTab === 'indoor') {
        tabMatch = nameLower.includes('indoor') || nameLower.includes('cp1') || nameLower.includes('h6c') || nameLower.includes('h6') || nameLower.includes('fisheye');
      } else if (activeTab === 'outdoor') {
        tabMatch = (nameLower.includes('outdoor') || nameLower.includes('h8c') || nameLower.includes('h9c') || nameLower.includes('h90') || nameLower.includes('h80x')) && !nameLower.includes('solar') && !nameLower.includes('battery');
      } else if (activeTab === 'cellular-solar') {
        tabMatch = nameLower.includes('4g') || nameLower.includes('sim') || nameLower.includes('solar') || nameLower.includes('battery') || nameLower.includes('hb8') || nameLower.includes('eb3');
      } else if (activeTab === 'poe-doorbell') {
        tabMatch = nameLower.includes('poe') || nameLower.includes('doorbell') || nameLower.includes('peep-hole') || nameLower.includes('dp2c') || nameLower.includes('hp4') || nameLower.includes('bracket') || nameLower.includes('nvr');
      }

      // Search matching
      const searchMatch = searchQuery.trim() === '' || nameLower.includes(searchQuery.toLowerCase().trim());

      return tabMatch && searchMatch;
    });
  }, [ezvizProducts, activeTab, searchQuery]);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  const handleBuyNow = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setCurrentView('checkout');
  };

  // Helper to extract clean Model Number
  const getModelNumber = (product: Product): string => {
    const specModel = product.specifications?.['Basic Specifications']?.find(s => s.label === 'Model Number')?.value
      || product.specifications?.['Camera Specifications']?.find(s => s.label === 'Model Number')?.value
      || product.specifications?.['Dual-Lens Architecture']?.find(s => s.label === 'Model Number')?.value
      || product.specifications?.['Power & Cellular']?.find(s => s.label === 'Model Number')?.value
      || product.specifications?.['Doorbell Specifications']?.find(s => s.label === 'Model Number')?.value
      || product.specifications?.['Technical Specs']?.find(s => s.label === 'Model Number')?.value;

    if (specModel) return specModel;

    // Fallback from short specs
    const modelSpec = product.shortSpecs?.find(s => s.startsWith('Model:'));
    if (modelSpec) return modelSpec.replace('Model:', '').split('(')[0].trim();

    return product.name.split(' ').slice(1, 4).join(' ');
  };

  return (
    <section className="relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-orange-500/5 via-blue-500/5 to-emerald-500/5 rounded-3xl blur-3xl pointer-events-none -z-10" />

      {/* ── Section Header (Pure White Theme, Crisp Black Text) ── */}
      <div className="bg-white text-slate-950 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200 text-xs font-black tracking-wide uppercase shadow-xs">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>{language === 'EN' ? 'Official EZVIZ Surveillance' : 'অফিসিয়াল ইজভিজ সিকিউরিটি ক্যামেরা'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950">
              {language === 'EN' ? (
                <>EZVIZ Smart Security Cameras <span className="text-orange-600">&amp; CCTV</span></>
              ) : (
                <>ইজভিজ স্মার্ট সিসি ক্যামেরা <span className="text-orange-600">ও সিকিউরিটি সিস্টেম</span></>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-800 max-w-2xl leading-relaxed font-semibold">
              {language === 'EN'
                ? 'Explore the full lineup of authentic EZVIZ Indoor Wi-Fi, Outdoor PTZ 360°, 4G SIM Cellular, Solar Battery Cameras & Video Doorbells with official Bangladesh warranty and best sale prices.'
                : 'ইনডোর ওয়াইফাই, আউটডোর পিটিজেড, ৪জি সিম সাপোর্টেড ও সোলার সিকিউরিটি ক্যামেরার সকল অথেনটিক মডেল দেখুন সেরা মূল্যে এবং অফিসিয়াল ওয়ারেন্টি সহ।'}
            </p>

            {/* Quality Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-900 font-bold">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Genuine EZVIZ
              </span>
              <span className="flex items-center gap-1.5 text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 1 Year Official Warranty
              </span>
              <span className="flex items-center gap-1.5 text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" /> Same-Day Dispatch inside Dhaka
              </span>
            </div>
          </div>

          {/* Action button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, category: 'ezviz-camera', brand: ['EZVIZ'] }));
                setCurrentView('shop');
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 group hover:shadow-orange-500/25 active:scale-95"
            >
              <span>{language === 'EN' ? 'View All in Catalog' : 'ক্যাটালগে সবগুলো দেখুন'}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="text-center text-xs text-slate-700 font-bold">
              Showing <strong className="text-slate-950 font-black">{filteredList.length}</strong> of {ezvizProducts.length} models
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter Tabs & Search Bar ── */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mt-4 mb-4">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: 'all', label: language === 'EN' ? 'All Models' : 'সবগুলো', count: ezvizProducts.length, icon: Camera },
            { id: 'indoor', label: language === 'EN' ? 'Indoor Wi-Fi' : 'ইনডোর ওয়াইফাই', count: 6, icon: Wifi },
            { id: 'outdoor', label: language === 'EN' ? 'Outdoor PTZ' : 'আউটডোর পিটিজেড', count: 5, icon: Video },
            { id: 'cellular-solar', label: language === 'EN' ? '4G SIM & Solar' : '৪জি সিম ও সোলার', count: 4, icon: Sun },
            { id: 'poe-doorbell', label: language === 'EN' ? 'PoE & Doorbell' : 'পিওই ও ডোরবেল', count: 7, icon: Radio },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="relative flex-shrink-0 min-w-[240px] max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'EN' ? 'Filter EZVIZ models (e.g. CP1, H8c, 4G)...' : 'মডেল সার্চ করুন (যেমন CP1, H8c, 4G)...'}
            className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
        </div>
      </div>

      {/* ── Product Cards Grid ── */}
      {filteredList.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-500">
          <Camera className="w-12 h-12 mx-auto text-slate-300 mb-3" />
          <p className="font-bold text-sm">No EZVIZ models match your search.</p>
          <button
            onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
            className="mt-3 text-xs font-bold text-orange-500 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 gap-y-7">
          {filteredList.map((product) => {
            const modelNum = getModelNumber(product);
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                onClick={() => openProductDetail(product.id)}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-orange-400 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative cursor-pointer"
              >
                {/* Top Row: Badge & Model Pill */}
                <div className="flex items-center justify-between gap-2 mb-2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-950 border border-slate-300 text-[10.5px] font-black uppercase tracking-wider">
                    <span className="text-orange-600 font-black">MODEL:</span>
                    <span className="text-slate-950 font-black">{modelNum}</span>
                  </div>

                  {product.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-orange-100 text-orange-800 border border-orange-300">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Camera Image Preview */}
                <div className="relative aspect-square rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center p-3 mb-3 border border-slate-200 group-hover:border-orange-300 transition-colors">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Quick View Floating Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewProduct(product);
                    }}
                    className="absolute bottom-2 right-2 p-2 rounded-xl bg-white hover:bg-orange-50 text-slate-900 hover:text-orange-600 shadow-md border border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Quick Preview"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand & Stock */}
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-black text-orange-600 text-[10px] tracking-wider uppercase">
                        EZVIZ Official
                      </span>
                      <span className="font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-300 px-2 py-0.5 rounded-full text-[10px]">
                        ● In Stock ({product.stockCount})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-black text-xs sm:text-sm text-slate-950 hover:text-orange-600 line-clamp-2 leading-snug transition-colors">
                      {product.name}
                    </h3>

                    {/* Short Specs Bullet Highlights */}
                    <ul className="text-[11px] text-slate-800 font-medium space-y-1 mt-2">
                      {product.shortSpecs?.slice(1, 3).map((spec, i) => (
                        <li key={i} className="truncate flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          <span className="truncate">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rating & Warranty */}
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1">
                      <div className="flex text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`}
                          />
                        ))}
                      </div>
                      <span className="font-black text-slate-950">{product.rating}</span>
                    </div>
                    <span className="text-[10px] text-slate-800 font-bold bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">1 Year Warranty</span>
                  </div>

                  {/* SALE PRICE ONLY (Strictly Sale Price - Zero Bottom Price) */}
                  <div className="pt-2 bg-slate-50 -mx-4 -mb-4 p-4 rounded-b-2xl border-t border-slate-200 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-slate-600 font-extrabold block uppercase tracking-wider">Sale Price</span>
                        <div className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                          ৳{product.discountPrice.toLocaleString()}
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300">
                        Official Price
                      </span>
                    </div>

                    {/* Action Buttons: Add to Cart & Buy Now */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className={`font-bold text-xs py-2 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 border ${
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
                        onClick={(e) => handleBuyNow(product, e)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs py-2 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 active:scale-95"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>{language === 'EN' ? 'Buy Now' : 'কিনুন'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
