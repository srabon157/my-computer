import React from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { Sparkles, ChevronRight } from 'lucide-react';

export const FlashSale: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();

  const trendingProducts = PRODUCTS.filter(
    p => p.isFlashSale || p.badge === 'Hot' || p.badge === 'Best Seller'
  ).slice(0, 4);

  const { ref: headerRef, inView: headerInView } = useScrollReveal<HTMLDivElement>();
  const { containerRef, inView: cardsInView } = useStaggerReveal<HTMLDivElement>(4);

  return (
    <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">

      {/* Subtle decorative bg */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header */}
      <div
        ref={headerRef}
        className={`relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-slate-100 pb-4 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-950">
                {language === 'EN' ? 'Trending Highlights' : 'ট্রেন্ডিং হাইলাইটস'}
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-black text-[10px] uppercase tracking-wide">
                Curated
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              {language === 'EN'
                ? 'Top demanded high-performance tech devices'
                : 'জনপ্রিয় ও শীর্ষ পারফর্মিং টেক ডিভাইস'}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(p => ({ ...p, category: null }));
            setCurrentView('shop');
          }}
          className="text-xs font-bold text-blue-600 hover:text-orange-600 flex items-center gap-1 group self-start sm:self-auto whitespace-nowrap transition-colors"
        >
          <span>{language === 'EN' ? 'View All Products' : 'সকল পণ্য দেখুন'}</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Product Grid */}
      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 gap-y-7"
      >
        {trendingProducts.map((product) => (
          <div key={product.id} className={`stagger-item ${cardsInView ? 'in-view' : ''}`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
