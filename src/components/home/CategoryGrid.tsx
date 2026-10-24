import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES } from '../../data/mockData';
import { useStaggerReveal, useScrollReveal } from '../../hooks/useScrollReveal';
import {
  Laptop, Monitor, Gamepad2, Cpu, CircuitBoard, HardDrive,
  MemoryStick, Database, Tv, Keyboard, Headphones, Wifi,
  Camera, Tv2, Wind, Plug, Zap, Smartphone, Tablet,
  Printer, ShieldCheck, Terminal, Server, Watch, ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Monitor:      <Monitor      className="w-6 h-6 text-blue-500" />,
  Laptop:       <Laptop       className="w-6 h-6 text-indigo-500" />,
  Cpu:          <Cpu          className="w-6 h-6 text-orange-500" />,
  Tv:           <Tv           className="w-6 h-6 text-blue-600" />,
  Zap:          <Zap          className="w-6 h-6 text-amber-500" />,
  Smartphone:   <Smartphone   className="w-6 h-6 text-purple-500" />,
  Tablet:       <Tablet       className="w-6 h-6 text-violet-500" />,
  Printer:      <Printer      className="w-6 h-6 text-emerald-500" />,
  Camera:       <Camera       className="w-6 h-6 text-rose-500" />,
  ShieldCheck:  <ShieldCheck  className="w-6 h-6 text-teal-500" />,
  Wifi:         <Wifi         className="w-6 h-6 text-sky-500" />,
  Terminal:     <Terminal     className="w-6 h-6 text-red-500" />,
  Server:       <Server       className="w-6 h-6 text-cyan-600" />,
  Keyboard:     <Keyboard     className="w-6 h-6 text-amber-600" />,
  Watch:        <Watch        className="w-6 h-6 text-pink-500" />,
  Gamepad2:     <Gamepad2     className="w-6 h-6 text-purple-600" />,
  Tv2:          <Tv2          className="w-6 h-6 text-indigo-600" />,
  Wind:         <Wind         className="w-6 h-6 text-cyan-500" />,
  CircuitBoard: <CircuitBoard className="w-6 h-6 text-red-500" />,
  HardDrive:    <HardDrive    className="w-6 h-6 text-emerald-500" />,
  MemoryStick:  <MemoryStick  className="w-6 h-6 text-cyan-500" />,
  Database:     <Database     className="w-6 h-6 text-teal-500" />,
  Headphones:   <Headphones   className="w-6 h-6 text-pink-500" />,
  Plug:         <Plug         className="w-6 h-6 text-slate-500" />,
};

export const CategoryGrid: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();

  const { ref: headingRef, inView: headingInView } = useScrollReveal<HTMLDivElement>();
  const { containerRef, inView: gridInView } = useStaggerReveal<HTMLDivElement>(CATEGORIES.length);

  const handleCategoryClick = (categoryId: string) => {
    setFilters(prev => ({ ...prev, category: categoryId }));
    setCurrentView('shop');
  };

  return (
    <section>
      {/* Header */}
      <div
        ref={headingRef}
        className={`flex items-center justify-between mb-4 sm:mb-5 transition-all duration-700 ${
          headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <h2 className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-950 animated-underline ${headingInView ? 'in-view' : ''}`}>
            {language === 'EN' ? 'Featured Categories' : 'জনপ্রিয় ক্যাটাগরি'}
          </h2>
          <p className="text-xs text-slate-600 font-medium mt-1 hidden sm:block">
            Explore 100% genuine technology components &amp; electronics
          </p>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: null }));
            setCurrentView('shop');
          }}
          className="text-xs font-bold text-blue-600 hover:text-orange-600 flex items-center gap-1 transition-colors group whitespace-nowrap"
        >
          <span className="hidden sm:inline">{language === 'EN' ? 'View All' : 'সবগুলো দেখুন'}</span>
          <span className="sm:hidden">All</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Grid */}
      <div
        ref={containerRef}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-2.5 sm:gap-3 md:gap-4"
      >
        {CATEGORIES.map(category => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`stagger-item ${gridInView ? 'in-view' : ''} group cursor-pointer bg-white p-2.5 sm:p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden`}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 rounded-xl pointer-events-none" />

            {/* Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-200 flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
              {iconMap[category.icon] || <Plug className="w-5 h-5 text-slate-500" />}
            </div>

            <h3 className="font-bold text-[10px] sm:text-[11px] text-slate-800 group-hover:text-blue-600 line-clamp-2 leading-tight transition-colors">
              {language === 'EN' ? category.name : category.nameBn}
            </h3>

            <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium mt-0.5">
              {category.itemCount}+
            </span>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </div>
        ))}
      </div>
    </section>
  );
};
