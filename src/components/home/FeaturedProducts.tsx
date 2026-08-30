import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { Sparkles, ChevronRight } from 'lucide-react';

const TABS = [
  { id: 'all',        label: { EN: 'All Products',   BN: 'সকল পণ্য' },       emoji: '🛒', color: 'blue' },
  { id: 'laptop',     label: { EN: 'Laptops',        BN: 'ল্যাপটপ' },         emoji: '💻', color: 'blue' },
  { id: 'components', label: { EN: 'PC Parts',       BN: 'পিসি পার্টস' },     emoji: '⚙️', color: 'blue' },
  { id: 'gaming',     label: { EN: 'Gaming',         BN: 'গেমিং' },           emoji: '🎮', color: 'purple' },
  { id: 'smart-home', label: { EN: 'TV & AC',        BN: 'টিভি ও এসি' },      emoji: '📺', color: 'emerald' },
] as const;

type TabId = typeof TABS[number]['id'];

export const FeaturedProducts: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();
  const [activeTab, setActiveTab] = useState<TabId>('all');

  const filtered = PRODUCTS.filter(p => {
    if (activeTab === 'laptop') return p.category === 'laptop';
    if (activeTab === 'components') return ['processor', 'graphics-card', 'motherboard', 'ram', 'storage'].includes(p.category);
    if (activeTab === 'gaming') return p.isGaming;
    if (activeTab === 'smart-home') return p.isSmartHome || ['tv-appliance', 'air-conditioner', 'cctv-security'].includes(p.category);
    return true;
  });

  const { ref: headerRef, inView: headerInView } = useScrollReveal<HTMLDivElement>();
  const { containerRef, inView: gridInView } = useStaggerReveal<HTMLDivElement>(8);

  return (
    <section className="py-8">
      {/* Header & Tabs */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <div className="flex items-center gap-2">
            <Sparkles
              className="w-5 h-5 text-orange-500"
              style={{ animation: headerInView ? 'iconSpinPop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
            />
            <h2 className={`text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white animated-underline ${headerInView ? 'in-view' : ''}`}>
              {language === 'EN' ? 'Featured Technology' : 'বিশেষ আকর্ষণ'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Top performing gadgets, laptops &amp; components with full BD official warranty
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {TABS.map((tab, i) => {
            const isActive = activeTab === tab.id;
            const colorMap: Record<string, string> = {
              blue: isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700',
              purple: isActive ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700',
              emerald: isActive ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700',
            };
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${colorMap[tab.color]} hover:-translate-y-0.5 active:translate-y-0`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {tab.emoji} {language === 'EN' ? tab.label.EN : tab.label.BN}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Product Cards — staggered */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        key={activeTab}  // re-trigger stagger when tab changes
      >
        {filtered.slice(0, 8).map((product, idx) => (
          <div
            key={product.id}
            className="stagger-item in-view"
            style={{ transitionDelay: `${idx * 0.07}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div
        className={`mt-8 text-center transition-all duration-700 delay-300 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: null }));
            setCurrentView('shop');
          }}
          className="inline-flex items-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-orange-500 dark:hover:bg-orange-500 text-white font-extrabold text-xs px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-orange-500/30 hover:-translate-y-1 active:translate-y-0 btn-ripple"
        >
          <span>{language === 'EN' ? 'Explore Full Store Catalog' : 'সম্পূর্ণ ক্যাটালগ দেখুন'}</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};
