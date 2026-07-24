import React from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { Gamepad2, ChevronRight } from 'lucide-react';

export const GamingZone: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();

  const gamingProducts = PRODUCTS.filter(p => p.isGaming || p.category === 'gaming-pc');

  return (
    <section className="py-10 my-8 bg-slate-950 rounded-3xl p-6 md:p-10 border border-purple-900/60 shadow-2xl relative overflow-hidden text-white">
      {/* Neon Glow Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Title Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-purple-900/40 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30">
            <Gamepad2 className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                GAMING ZONE & RIGS
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-bold uppercase tracking-widest">
                RGB Edition
              </span>
            </div>
            <p className="text-xs text-purple-200/80 mt-1">
              High FPS esports laptops, RTX 40-series cards, 240Hz OLED monitors & mechanical gear
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, gamingOnly: true }));
            setCurrentView('shop');
          }}
          className="bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white font-bold text-xs px-5 py-2.5 rounded-xl border border-purple-500/40 transition-all flex items-center gap-2 shadow-md self-start md:self-auto"
        >
          <span>{language === 'EN' ? 'Explore Gaming Hub' : 'গেমিং হাব দেখুন'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {gamingProducts.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
