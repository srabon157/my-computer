import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { Sparkles, ChevronRight } from 'lucide-react';

const TABS = [
  { id: 'all',        label: { EN: 'All',       BN: 'সকল' },        emoji: '🛒', color: 'blue' },
  { id: 'laptop',     label: { EN: 'Laptops',   BN: 'ল্যাপটপ' },     emoji: '💻', color: 'blue' },
  { id: 'components', label: { EN: 'PC Parts',  BN: 'পিসি পার্টস' }, emoji: '⚙️', color: 'blue' },
  { id: 'gaming',     label: { EN: 'Gaming',    BN: 'গেমিং' },       emoji: '🎮', color: 'purple' },
  { id: 'smart-home', label: { EN: 'TV & AC',   BN: 'টিভি ও এসি' },  emoji: '📺', color: 'emerald' },
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
    <section>
      {/* Header & Tabs */}
      <div
        ref={headerRef}
        className={`flex flex-col gap-3 mb-5 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Title row */}
        <div className="flex items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles
              className="w-5 h-5 text-orange-500 flex-shrink-0"
              style={{ animation: headerInView ? 'iconSpinPop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
            />
            <div>
              <h2 className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-950 animated-underline ${headerInView ? 'in-view' : ''}`}>
                {language === 'EN' ? 'Featured Technology' : 'বিশেষ আকর্ষণ'}
              </h2>
              <p className="text-xs text-slate-600 font-medium mt-0.5 hidden sm:block">
                Top laptops, components &amp; gadgets with BD official warranty
              </p>
            </div>
          </div>
          <button
            onClick={() => { setFilters(p => ({ ...p, category: null })); setCurrentView('shop'); }}
            className="text-xs font-bold text-blue-600 hover:text-orange-600 flex items-center gap-1 group transition-colors whitespace-nowrap flex-shrink-0"
          >
            <span className="hidden sm:inline">{language === 'EN' ? 'View All' : 'সবগুলো'}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
          {TABS.map((tab, i) => {
            const isActive = activeTab === tab.id;
            const colorMap: Record<string, string> = {
              blue:    isActive ? 'bg-blue-600 text-white shadow-md'   : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300',
              purple:  isActive ? 'bg-purple-600 text-white shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300',
              emerald: isActive ? 'bg-emerald-600 text-white shadow-md': 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-300',
            };
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${colorMap[tab.color]} hover:-translate-y-0.5 active:translate-y-0`}
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                {tab.emoji} {language === 'EN' ? tab.label.EN : tab.label.BN}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 gap-y-7"
        key={activeTab}
      >
        {filtered.slice(0, 8).map((product, idx) => (
          <div
            key={product.id}
            className="stagger-item in-view"
            style={{ transitionDelay: `${idx * 0.06}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* View All */}
      <div className={`mt-4 text-center transition-all duration-700 delay-300 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <button
          onClick={() => {
            const catMap: Record<TabId, string | null> = {
              all: null, laptop: 'laptop', components: 'processor', gaming: 'gaming-pc', 'smart-home': 'tv-appliance'
            };
            setFilters(p => ({ ...p, category: catMap[activeTab] }));
            setCurrentView('shop');
          }}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm px-8 py-3 rounded-2xl transition-all shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{language === 'EN' ? 'See All Products in Category' : 'সকল পণ্য দেখুন'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
