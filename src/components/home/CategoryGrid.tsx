import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES } from '../../data/mockData';
import { useStaggerReveal, useScrollReveal } from '../../hooks/useScrollReveal';
import {
  Laptop,
  Monitor,
  Gamepad2,
  Cpu,
  CircuitBoard,
  HardDrive,
  MemoryStick,
  Database,
  Tv,
  Keyboard,
  Headphones,
  Wifi,
  Camera,
  Tv2,
  Wind,
  Plug,
  Zap,
  Smartphone,
  Tablet,
  Printer,
  ShieldCheck,
  Terminal,
  Server,
  Watch,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6 text-blue-500" />,
  Laptop: <Laptop className="w-6 h-6 text-indigo-500" />,
  Cpu: <Cpu className="w-6 h-6 text-orange-500" />,
  Tv: <Tv className="w-6 h-6 text-blue-600" />,
  Zap: <Zap className="w-6 h-6 text-amber-500" />,
  Smartphone: <Smartphone className="w-6 h-6 text-purple-500" />,
  Tablet: <Tablet className="w-6 h-6 text-violet-500" />,
  Printer: <Printer className="w-6 h-6 text-emerald-500" />,
  Camera: <Camera className="w-6 h-6 text-rose-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-500" />,
  Wifi: <Wifi className="w-6 h-6 text-sky-500" />,
  Terminal: <Terminal className="w-6 h-6 text-red-500" />,
  Server: <Server className="w-6 h-6 text-cyan-600" />,
  Keyboard: <Keyboard className="w-6 h-6 text-amber-600" />,
  Watch: <Watch className="w-6 h-6 text-pink-500" />,
  Gamepad2: <Gamepad2 className="w-6 h-6 text-purple-600" />,
  Tv2: <Tv2 className="w-6 h-6 text-indigo-600" />,
  Wind: <Wind className="w-6 h-6 text-cyan-500" />,
  CircuitBoard: <CircuitBoard className="w-6 h-6 text-red-500" />,
  HardDrive: <HardDrive className="w-6 h-6 text-emerald-500" />,
  MemoryStick: <MemoryStick className="w-6 h-6 text-cyan-500" />,
  Database: <Database className="w-6 h-6 text-teal-500" />,
  Headphones: <Headphones className="w-6 h-6 text-pink-500" />,
  Plug: <Plug className="w-6 h-6 text-slate-500" />
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
    <section className="py-8">
      {/* Header */}
      <div
        ref={headingRef}
        className={`flex items-center justify-between mb-6 transition-all duration-700 ${
          headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <h2 className={`text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white animated-underline ${headingInView ? 'in-view' : ''}`}>
            {language === 'EN' ? 'Featured Categories' : 'জনপ্রিয় ক্যাটাগরি'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Explore 100% genuine technology components &amp; electronics
          </p>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: null }));
            setCurrentView('shop');
          }}
          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-orange-500 flex items-center gap-1 transition-colors group"
        >
          <span>{language === 'EN' ? 'View All Categories' : 'সকল ক্যাটাগরি দেখুন'}</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Grid of Category Cards — staggered */}
      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3.5"
      >
        {CATEGORIES.map(category => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`stagger-item ${gridInView ? 'in-view' : ''} group cursor-pointer bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center relative overflow-hidden tilt-card`}
          >
            {/* Hover glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-orange-500/0 group-hover:from-blue-500/5 group-hover:to-orange-500/5 transition-all duration-500 rounded-2xl pointer-events-none" />

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              {iconMap[category.icon] || <Plug className="w-6 h-6 text-slate-500" />}
            </div>

            <h3 className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1 transition-colors">
              {language === 'EN' ? category.name : category.nameBn}
            </h3>

            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium">
              {category.itemCount}+ Items
            </span>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </div>
        ))}
      </div>
    </section>
  );
};
