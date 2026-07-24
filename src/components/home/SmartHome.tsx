import React from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { Tv, ChevronRight } from 'lucide-react';

export const SmartHome: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();

  const smartProducts = PRODUCTS.filter(
    p => p.isSmartHome || ['tv-appliance', 'air-conditioner', 'cctv-security'].includes(p.category)
  );

  return (
    <section className="py-8">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Tv className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {language === 'EN' ? 'Smart Home, TV & Appliances' : 'স্মার্ট হোম, টিভি ও অ্যাপ্লায়েন্স'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              OLED TVs, Inverter Air Conditioners, and Hikvision CCTV Security packages
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: 'tv-appliance' }));
            setCurrentView('shop');
          }}
          className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-orange-500 flex items-center gap-1 transition-colors"
        >
          <span>{language === 'EN' ? 'View Smart Devices' : 'স্মার্ট ডিভাইস দেখুন'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {smartProducts.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
