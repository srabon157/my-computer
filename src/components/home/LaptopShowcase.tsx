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
  const { containerRef, inView } = useStaggerReveal<HTMLDivElement>(3);

  return (
    <section className="bg-gradient-to-br from-sky-50/70 via-white to-indigo-50/50 rounded-3xl p-5 md:p-6 border border-blue-200/80 relative overflow-hidden shadow-[0_4px_20px_rgba(37,99,235,0.05)]">

      {/* Title */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-2xl bg-blue-600/10 text-blue-600"
            style={{ animation: headerInView ? 'iconSpinPop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
          >
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <h2 className={`text-xl md:text-2xl font-black tracking-tight text-slate-950 animated-underline ${headerInView ? 'in-view' : ''}`}>
              {language === 'EN' ? 'Laptop Collection 2024' : 'ল্যাপটপ কালেকশন'}
            </h2>
            <p className="text-xs text-slate-800 font-semibold mt-0.5">
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap hover:-translate-y-0.5 border ${
                segment === seg
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-slate-900 border-blue-200 hover:bg-blue-50 shadow-xs'
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 gap-y-7"
        key={segment}
      >
        {displayedLaptops.slice(0, 4).map((laptop, idx) => (
          <div
            key={laptop.id}
            className={`stagger-item ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: `${idx * 0.08}s` }}
          >
            <ProductCard product={laptop} />
          </div>
        ))}
      </div>
    </section>
  );
};
