import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { Sparkles, ChevronRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();
  const [activeTab, setActiveTab] = useState<'all' | 'laptop' | 'components' | 'gaming' | 'smart-home'>('all');

  const filtered = PRODUCTS.filter(p => {
    if (activeTab === 'laptop') return p.category === 'laptop';
    if (activeTab === 'components') return ['processor', 'graphics-card', 'motherboard', 'ram', 'storage'].includes(p.category);
    if (activeTab === 'gaming') return p.isGaming;
    if (activeTab === 'smart-home') return p.isSmartHome || ['tv-appliance', 'air-conditioner', 'cctv-security'].includes(p.category);
    return true;
  });

  return (
    <section className="py-8">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {language === 'EN' ? 'Featured Technology' : 'বিশেষ আকর্ষণ'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Top performing gadgets, laptops & components with full BD official warranty
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {language === 'EN' ? 'All Products' : 'সকল পণ্য'}
          </button>

          <button
            onClick={() => setActiveTab('laptop')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'laptop'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            💻 {language === 'EN' ? 'Laptops' : 'ল্যাপটপ'}
          </button>

          <button
            onClick={() => setActiveTab('components')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'components'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            ⚙️ {language === 'EN' ? 'PC Parts' : 'পিসি পার্টস'}
          </button>

          <button
            onClick={() => setActiveTab('gaming')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'gaming'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            🎮 {language === 'EN' ? 'Gaming' : 'গেমিং'}
          </button>

          <button
            onClick={() => setActiveTab('smart-home')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'smart-home'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            📺 {language === 'EN' ? 'TV & AC' : 'টিভি ও এসি'}
          </button>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.slice(0, 8).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: null }));
            setCurrentView('shop');
          }}
          className="inline-flex items-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-orange-500 text-white font-extrabold text-xs px-8 py-3.5 rounded-xl transition-all shadow-md"
        >
          <span>{language === 'EN' ? 'Explore Full Store Catalog' : 'সম্পূর্ণ ক্যাটালগ দেখুন'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
