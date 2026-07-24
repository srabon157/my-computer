import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { Search, Sparkles, X } from 'lucide-react';

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AISearchModal: React.FC<AISearchModalProps> = ({ isOpen, onClose }) => {
  const { setFilters, setCurrentView, openProductDetail } = useStore();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        p =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.shortSpecs.some(s => s.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelectProduct = (id: string) => {
    openProductDetail(id);
    onClose();
  };

  const handlePresetSearch = (term: string) => {
    setFilters(prev => ({ ...prev, searchQuery: term }));
    setCurrentView('shop');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-16 md:pt-24 p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 bg-slate-900 text-white flex items-center space-x-3 border-b border-slate-800">
          <Sparkles className="w-6 h-6 text-orange-400 animate-pulse flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="AI Smart Search: Type 'Gaming Laptop', 'i9 CPU', 'OLED TV'..."
            className="w-full bg-transparent text-white placeholder-slate-400 font-bold text-sm md:text-base focus:outline-none"
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Suggestions */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-slate-400 font-bold flex-shrink-0">Popular:</span>
          {['RTX 4080', 'ROG Strix', 'MacBook M3', '4K TV', 'Hikvision CCTV', 'LGA1700'].map(term => (
            <button
              key={term}
              onClick={() => handlePresetSearch(term)}
              className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold hover:border-orange-500 hover:text-orange-500 transition-all flex-shrink-0"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {query.trim() === '' ? (
            <div className="text-center py-12 text-slate-400 text-xs space-y-2">
              <Search className="w-10 h-10 text-slate-500 mx-auto" />
              <p>Type any keyword to instantly search specs, socket compatibility, or BDT pricing.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No products found matching "{query}". Try another search query.
            </div>
          ) : (
            results.map(p => (
              <div
                key={p.id}
                onClick={() => handleSelectProduct(p.id)}
                className="p-3 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-blue-500 cursor-pointer flex items-center justify-between gap-3 transition-all hover:shadow-md"
              >
                <img src={p.images[0]} alt={p.name} className="w-12 h-12 object-contain rounded-xl bg-slate-50 dark:bg-slate-900 p-1" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-blue-500">{p.brand}</span>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">{p.name}</h4>
                  <p className="text-[11px] text-slate-400 truncate">{p.shortSpecs[0]}</p>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-sm text-orange-500 block">৳{p.discountPrice.toLocaleString()}</span>
                  <span className="text-[10px] text-emerald-500 font-semibold">{p.stockStatus}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
