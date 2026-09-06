import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES, BRANDS } from '../../data/mockData';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

export const FilterSidebar: React.FC = () => {
  const { filters, setFilters, resetFilters, language } = useStore();

  const handleCategoryChange = (catId: string | null) => {
    setFilters(prev => ({ ...prev, category: catId }));
  };

  const handleBrandToggle = (brandName: string) => {
    setFilters(prev => {
      const exists = prev.brand.includes(brandName);
      if (exists) {
        return { ...prev, brand: prev.brand.filter(b => b !== brandName) };
      } else {
        return { ...prev, brand: [...prev.brand, brandName] };
      }
    });
  };

  return (
    <aside className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
            {language === 'EN' ? 'Filter Products' : 'ফিল্টার অপশন'}
          </h3>
        </div>

        <button
          onClick={resetFilters}
          className="text-xs text-slate-500 hover:text-orange-500 flex items-center gap-1 font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Category
        </h4>
        <div className="space-y-1 max-h-52 overflow-y-auto pr-1 no-scrollbar text-xs">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`w-full text-left px-3 py-2 rounded-xl transition-all font-semibold flex items-center justify-between ${
              filters.category === null
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>All Categories</span>
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-xl transition-all font-semibold flex items-center justify-between ${
                filters.category === cat.id
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{language === 'EN' ? cat.name : cat.nameBn}</span>
              <span className="text-[10px] opacity-70">({cat.itemCount})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Checkboxes */}
      <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider text-orange-500">
          Brand
        </h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 no-scrollbar text-xs">
          {BRANDS.map(brand => {
            const isChecked = filters.brand.includes(brand.name);
            return (
              <label
                key={brand.name}
                className="flex items-center space-x-2.5 cursor-pointer text-slate-700 dark:text-slate-300 hover:text-blue-600 select-none py-1"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleBrandToggle(brand.name)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                />
                <span className="font-medium">{brand.name}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs">
          <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Max Price (BDT)
          </h4>
          <span className="font-extrabold text-orange-500">
            ৳{filters.priceRange[1].toLocaleString()}
          </span>
        </div>

        <input
          type="range"
          min="1000"
          max="500000"
          step="1000"
          value={filters.priceRange[1]}
          onChange={e =>
            setFilters(prev => ({
              ...prev,
              priceRange: [prev.priceRange[0], parseInt(e.target.value)]
            }))
          }
          className="w-full accent-orange-500 cursor-pointer"
        />
      </div>

      {/* Additional Toggles */}
      <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
        <label className="flex items-center justify-between cursor-pointer py-1">
          <span className="font-bold text-slate-700 dark:text-slate-300">In Stock Only</span>
          <input
            type="checkbox"
            checked={filters.stockOnly}
            onChange={e => setFilters(prev => ({ ...prev, stockOnly: e.target.checked }))}
            className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer py-1">
          <span className="font-bold text-slate-700 dark:text-slate-300">Gaming Gear Only</span>
          <input
            type="checkbox"
            checked={filters.gamingOnly}
            onChange={e => setFilters(prev => ({ ...prev, gamingOnly: e.target.checked }))}
            className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer py-1">
          <span className="font-bold text-slate-700 dark:text-slate-300">0% EMI Available</span>
          <input
            type="checkbox"
            checked={filters.emiOnly}
            onChange={e => setFilters(prev => ({ ...prev, emiOnly: e.target.checked }))}
            className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
          />
        </label>
      </div>
    </aside>
  );
};
