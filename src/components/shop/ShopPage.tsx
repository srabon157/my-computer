import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { FilterSidebar } from './FilterSidebar';
import { ProductCard } from './ProductCard';
import { Grid, List, Search, X, SlidersHorizontal } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { filteredProducts, filters, setFilters, resetFilters, language } = useStore();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div className="py-8 space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 md:p-8 text-white border border-blue-800/50 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {language === 'EN' ? 'Technology Product Catalog' : 'প্রযুক্তি পণ্য ক্যাটালগ'}
          </h1>
          <p className="text-xs text-blue-200/80 mt-1">
            Browse official computers, laptops, PC parts, smart TVs & accessories with BDT pricing
          </p>
        </div>

        <div className="text-xs font-semibold px-4 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md self-start md:self-auto">
          Showing <strong className="text-orange-400 font-bold">{filteredProducts.length}</strong> items
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <FilterSidebar />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between">
          <button
            onClick={() => setMobileFilterOpen(prev => !prev)}
            className="flex items-center gap-2 bg-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>

        {mobileFilterOpen && (
          <div className="lg:hidden">
            <FilterSidebar />
          </div>
        )}

        {/* Main Catalog View */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Controls Strip */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Active Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {filters.category && (
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold flex items-center gap-1.5">
                  Cat: {filters.category}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, category: null }))} />
                </span>
              )}
              {filters.brand.map(b => (
                <span key={b} className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 font-bold flex items-center gap-1.5">
                  Brand: {b}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, brand: p.brand.filter(x => x !== b) }))} />
                </span>
              ))}
              {filters.searchQuery && (
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 font-bold flex items-center gap-1.5">
                  Query: "{filters.searchQuery}"
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, searchQuery: '' }))} />
                </span>
              )}
            </div>

            {/* Sort & Grid/List View Toggles */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              <select
                value={filters.sortBy}
                onChange={e => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>

              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-300 dark:border-slate-700">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow text-blue-600' : 'text-slate-400'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow text-blue-600' : 'text-slate-400'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid / List */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-4">
              <Search className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                No matching products found
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try adjusting your search filters or resetting brand criteria to explore all available stock.
              </p>
              <button
                onClick={resetFilters}
                className="bg-blue-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5' : 'space-y-4'}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
