import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { Laptop } from 'lucide-react';

const SEGMENTS = ['All', 'Gaming', 'Premium', 'Business', 'Student'] as const;
type Segment = typeof SEGMENTS[number];

export const LaptopShowcase: React.FC = () => {
  const { language } = useStore();
  const [segment, setSegment] = useState<Segment>('All');

  const laptops = PRODUCTS.filter(p => p.category === 'laptop');
  const displayedLaptops = laptops.filter(l => {
    if (segment === 'All') return true;
    return l.laptopSegment === segment;
  });

  const { ref: headerRef, inView: headerInView } = useScrollReveal<HTMLDivElement>();
  const { containerRef, inView: gridInView } = useStaggerReveal<HTMLDivElement>(3);

  return (
    <section className="py-8 bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800 my-6 relative overflow-hidden">
      {/* Subtle background orbs */}
      <div className="floating-orb w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 -top-16 -right-16" />
      <div className="floating-orb w-48 h-48 bg-indigo-500/5 dark:bg-indigo-500/10 -bottom-12 -left-12" style={{ animationDelay: '3s' }} />

      {/* Title */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400"
            style={{ animation: headerInView ? 'iconSpinPop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
          >
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <h2 className={`text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white animated-underline ${headerInView ? 'in-view' : ''}`}>
              {language === 'EN' ? 'Laptop Collection 2024' : 'ল্যাপটপ কালেকশন'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ASUS ROG, Apple MacBook, Dell XPS, HP Spectre &amp; Lenovo Legion
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {SEGMENTS.map((seg, i) => (
            <button
              key={seg}
              onClick={() => setSegment(seg)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap hover:-translate-y-0.5 ${
                segment === seg
                  ? 'bg-blue-600 text-white shadow shadow-blue-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              {seg}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        key={segment}
      >
        {displayedLaptops.slice(0, 3).map((laptop, idx) => (
          <div
            key={laptop.id}
            className="stagger-item in-view"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <ProductCard product={laptop} />
          </div>
        ))}
      </div>
    </section>
  );
};
