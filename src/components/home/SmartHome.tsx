import React from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { Tv, ChevronRight, Wifi } from 'lucide-react';

export const SmartHome: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();

  const smartProducts = PRODUCTS.filter(
    p => p.isSmartHome || ['tv-appliance', 'air-conditioner', 'cctv-security'].includes(p.category)
  );

  const { ref: headerRef, inView: headerInView } = useScrollReveal<HTMLDivElement>();
  const { containerRef, inView: gridInView } = useStaggerReveal<HTMLDivElement>(3);

  return (
    <section className="relative">

      {/* Title */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600"
            style={{ animation: headerInView ? 'iconSpinPop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
          >
            <Tv className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className={`text-xl md:text-2xl font-black tracking-tight text-slate-950 animated-underline ${headerInView ? 'in-view' : ''}`}>
                {language === 'EN' ? 'Smart Home, TV & Appliances' : 'স্মার্ট হোম, টিভি ও অ্যাপ্লায়েন্স'}
              </h2>
              <span
                className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold"
                style={{ animation: headerInView ? 'badgeBounce 0.5s 0.4s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
              >
                <Wifi className="w-2.5 h-2.5" />
                Smart
              </span>
            </div>
            <p className="text-xs text-slate-800 font-semibold mt-0.5">
              OLED TVs, Inverter Air Conditioners, and Hikvision CCTV Security packages
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: 'tv-appliance' }));
            setCurrentView('shop');
          }}
          className="text-xs font-bold text-emerald-600 hover:text-orange-500 flex items-center gap-1 transition-all group hover:-translate-y-0.5"
        >
          <span>{language === 'EN' ? 'View Smart Devices' : 'স্মার্ট ডিভাইস দেখুন'}</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 gap-y-7"
      >
        {smartProducts.slice(0, 4).map((product, idx) => (
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
