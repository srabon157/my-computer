import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { Laptop } from 'lucide-react';

export const LaptopShowcase: React.FC = () => {
  const { language } = useStore();
  const [segment, setSegment] = useState<'All' | 'Gaming' | 'Premium' | 'Business' | 'Student'>('All');

  const laptops = PRODUCTS.filter(p => p.category === 'laptop');
  const displayedLaptops = laptops.filter(l => {
    if (segment === 'All') return true;
    return l.laptopSegment === segment;
  });

  return (
    <section className="py-8 bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800 my-6">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {language === 'EN' ? 'Laptop Collection 2024' : 'ল্যাপটপ কালেকশন'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ASUS ROG, Apple MacBook, Dell XPS, HP Spectre & Lenovo Legion
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {['All', 'Gaming', 'Premium', 'Business', 'Student'].map(seg => (
            <button
              key={seg}
              onClick={() => setSegment(seg as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                segment === seg
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {seg}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedLaptops.slice(0, 3).map(laptop => (
          <ProductCard key={laptop.id} product={laptop} />
        ))}
      </div>
    </section>
  );
};
