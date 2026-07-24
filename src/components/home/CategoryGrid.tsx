import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES } from '../../data/mockData';
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
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-6 h-6 text-blue-500" />,
  Monitor: <Monitor className="w-6 h-6 text-indigo-500" />,
  Gamepad2: <Gamepad2 className="w-6 h-6 text-purple-500" />,
  Cpu: <Cpu className="w-6 h-6 text-orange-500" />,
  CircuitBoard: <CircuitBoard className="w-6 h-6 text-red-500" />,
  HardDrive: <HardDrive className="w-6 h-6 text-emerald-500" />,
  MemoryStick: <MemoryStick className="w-6 h-6 text-cyan-500" />,
  Database: <Database className="w-6 h-6 text-teal-500" />,
  Tv: <Tv className="w-6 h-6 text-blue-600" />,
  Keyboard: <Keyboard className="w-6 h-6 text-amber-500" />,
  Headphones: <Headphones className="w-6 h-6 text-pink-500" />,
  Wifi: <Wifi className="w-6 h-6 text-sky-500" />,
  Camera: <Camera className="w-6 h-6 text-rose-500" />,
  Tv2: <Tv2 className="w-6 h-6 text-indigo-600" />,
  Wind: <Wind className="w-6 h-6 text-cyan-600" />,
  Plug: <Plug className="w-6 h-6 text-slate-500" />
};

export const CategoryGrid: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();

  const handleCategoryClick = (categoryId: string) => {
    setFilters(prev => ({ ...prev, category: categoryId }));
    setCurrentView('shop');
  };

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {language === 'EN' ? 'Featured Categories' : 'জনপ্রিয় ক্যাটাগরি'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Explore 100% genuine technology components & electronics
          </p>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: null }));
            setCurrentView('shop');
          }}
          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-orange-500 flex items-center gap-1 transition-colors"
        >
          <span>{language === 'EN' ? 'View All Categories' : 'সকল ক্যাটাগরি দেখুন'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid of Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3.5">
        {CATEGORIES.map(category => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="group cursor-pointer bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Soft Glow Background */}
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 flex items-center justify-center mb-3 transition-colors">
              {iconMap[category.icon] || <Plug className="w-6 h-6 text-slate-500" />}
            </div>

            <h3 className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1 transition-colors">
              {language === 'EN' ? category.name : category.nameBn}
            </h3>

            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium">
              {category.itemCount}+ Items
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
