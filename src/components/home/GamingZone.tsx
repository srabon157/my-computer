import React from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { Gamepad2, ChevronRight, Zap } from 'lucide-react';

export const GamingZone: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();

  const gamingProducts = PRODUCTS.filter(p => p.isGaming || p.category === 'gaming-pc');

  const { ref: headerRef, inView: headerInView } = useScrollReveal<HTMLDivElement>();
  const { containerRef, inView: gridInView } = useStaggerReveal<HTMLDivElement>(4);

  return (
    <section className="bg-gradient-to-br from-purple-50/60 via-white to-sky-50/60 rounded-3xl p-6 md:p-8 border border-blue-200/80 shadow-[0_4px_20px_rgba(37,99,235,0.05)] relative overflow-hidden">

      {/* Header */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-950">
                {language === 'EN' ? 'Gaming Zone & High FPS Gear' : 'গেমিং জোন ও হাই-এফপিএস গিয়ার'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-extrabold text-[10px] uppercase">
                <Zap className="inline w-3 h-3 mr-0.5" />
                Performance
              </span>
            </div>
            <p className="text-xs text-slate-800 font-semibold mt-0.5">
              Esports laptops, RTX 40-series cards, 240Hz OLED monitors &amp; mechanical peripherals
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, gamingOnly: true }));
            setCurrentView('shop');
          }}
          className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 group self-start md:self-auto"
        >
          <span>{language === 'EN' ? 'Explore All Gaming' : 'সকল গেমিং পণ্য'}</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Grid */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 gap-y-7"
      >
        {gamingProducts.slice(0, 4).map((product, idx) => (
          <div
            key={product.id}
            className={`stagger-item ${gridInView ? 'in-view' : ''}`}
            style={{ transitionDelay: `${idx * 0.08}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
