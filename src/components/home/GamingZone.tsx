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
    <section className="py-10 my-8 bg-slate-950 rounded-3xl p-6 md:p-10 border border-purple-900/60 shadow-2xl relative overflow-hidden text-white gaming-scan section-divider">
      {/* Neon Glow Blobs — floating */}
      <div className="floating-orb w-80 h-80 bg-purple-600/20 -top-20 -left-20" />
      <div className="floating-orb w-80 h-80 bg-blue-600/20 -bottom-20 -right-20" style={{ animationDelay: '4s' }} />
      <div className="floating-orb w-48 h-48 bg-pink-600/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(168,85,247,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.5) 1px,transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Title Bar */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-purple-900/40 pb-6 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
            style={{ animation: headerInView ? 'iconSpinPop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
          >
            <Gamepad2 className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2
                className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"
                style={{ animation: headerInView ? 'fadeInBlur 0.7s 0.3s both' : 'none' }}
              >
                GAMING ZONE &amp; RIGS
              </h2>
              <span
                className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-bold uppercase tracking-widest"
                style={{ animation: headerInView ? 'badgeBounce 0.5s 0.5s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
              >
                <Zap className="inline w-2.5 h-2.5 mr-0.5" />
                RGB Edition
              </span>
            </div>
            <p className="text-xs text-purple-200/80 mt-1">
              High FPS esports laptops, RTX 40-series cards, 240Hz OLED monitors &amp; mechanical gear
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, gamingOnly: true }));
            setCurrentView('shop');
          }}
          className="bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white font-bold text-xs px-5 py-2.5 rounded-xl border border-purple-500/40 transition-all flex items-center gap-2 shadow-md self-start md:self-auto hover:-translate-y-1 hover:shadow-purple-500/30 btn-ripple"
        >
          <span>{language === 'EN' ? 'Explore Gaming Hub' : 'গেমিং হাব দেখুন'}</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Grid — staggered */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10"
      >
        {gamingProducts.slice(0, 4).map((product, idx) => (
          <div
            key={product.id}
            className={`stagger-item ${gridInView ? 'in-view' : ''}`}
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
