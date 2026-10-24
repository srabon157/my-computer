import React from 'react';
import { useStore } from '../../context/StoreContext';
import { BRANDS } from '../../data/mockData';
import { ShieldCheck } from 'lucide-react';

export const BrandCarousel: React.FC = () => {
  const { setFilters, setCurrentView, language } = useStore();

  const handleBrandClick = (brandName: string) => {
    setFilters(prev => ({ ...prev, brand: [brandName] }));
    setCurrentView('shop');
  };

  return (
    <section className="py-8 border-t border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
            {language === 'EN' ? 'Official Brand Partners' : 'অফিসিয়াল ব্র্যান্ডসমূহ'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Authorised distributor & partner for top global technology brands in BD
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Authentic Products</span>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {BRANDS.map(brand => (
          <div
            key={brand.name}
            onClick={() => handleBrandClick(brand.name)}
            className="group cursor-pointer bg-white p-3.5 rounded-2xl border border-slate-200/80 hover:border-orange-500/50 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center"
          >
            <span className="font-extrabold text-sm text-slate-700 group-hover:text-orange-500 transition-colors">
              {brand.name}
            </span>
            <span className="text-[9px] text-slate-400 truncate w-full mt-0.5">
              {brand.category.split(',')[0]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
