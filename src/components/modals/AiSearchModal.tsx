import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { Sparkles, X, ArrowRight, Bot, Check } from 'lucide-react';

export const AiSearchModal: React.FC = () => {
  const { aiSearchOpen, setAiSearchOpen, openProductDetail } = useStore();
  const [prompt, setPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendedProductIds, setRecommendedProductIds] = useState<string[] | null>(null);

  if (!aiSearchOpen) return null;

  const samplePrompts = [
    'Laptop for 4K video editing & 3D rendering under 3.5 Lakh BDT',
    'Best gaming PC build parts under 1.5 Lakh BDT with RTX GPU',
    'Student laptop with long battery life under 80,000 BDT',
    'Full HD high refresh rate monitor for competitive FPS gaming'
  ];

  const handleAiSearch = (queryText: string) => {
    const query = queryText || prompt;
    if (!query.trim()) return;

    setIsAnalyzing(true);
    setPrompt(query);

    // Simulate AI match analysis based on query keywords
    setTimeout(() => {
      setIsAnalyzing(false);
      const lower = query.toLowerCase();

      let matched = PRODUCTS;
      if (lower.includes('gaming') || lower.includes('fps')) {
        matched = PRODUCTS.filter(p => p.isGaming || p.category === 'gaming-pc' || p.category === 'graphics-card');
      } else if (lower.includes('laptop') || lower.includes('editing')) {
        matched = PRODUCTS.filter(p => p.category === 'laptop');
      } else if (lower.includes('monitor')) {
        matched = PRODUCTS.filter(p => p.category === 'monitor');
      } else if (lower.includes('student') || lower.includes('budget')) {
        matched = PRODUCTS.filter(p => p.discountPrice < 100000);
      }

      setRecommendedProductIds(matched.slice(0, 3).map(p => p.id));
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-purple-800/60 w-full max-w-2xl rounded-3xl p-6 md:p-8 text-white shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Glow Blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-900/60 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                AI Tech Advisor & Finder
              </h3>
              <p className="text-xs text-purple-200/70">
                Describe your requirements, budget, or intended workflow in natural language
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setAiSearchOpen(false);
              setRecommendedProductIds(null);
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleAiSearch(prompt);
          }}
          className="space-y-3 relative z-10"
        >
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="e.g. I need a quiet laptop for programming and 4K YouTube streaming..."
              className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-slate-950 border border-purple-700/50 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 shadow-inner"
            />
            <button
              type="submit"
              disabled={isAnalyzing}
              className="absolute right-2 top-2 p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Prompt Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[10px] text-slate-400 self-center">Try asking:</span>
            {samplePrompts.map((sp, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleAiSearch(sp)}
                className="px-2.5 py-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 border border-purple-800/40 text-[10px] font-medium text-purple-300 transition-colors text-left truncate max-w-xs"
              >
                "{sp}"
              </button>
            ))}
          </div>
        </form>

        {/* Results */}
        {isAnalyzing && (
          <div className="py-8 text-center space-y-3 relative z-10">
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs text-purple-300 font-semibold animate-pulse">
              Analyzing component compatibility, BDT price ratios & user ratings...
            </p>
          </div>
        )}

        {recommendedProductIds && !isAnalyzing && (
          <div className="space-y-3 relative z-10 pt-2 border-t border-purple-900/40">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>AI Recommended Matches:</span>
            </h4>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {PRODUCTS.filter(p => recommendedProductIds.includes(p.id)).map(product => (
                <div
                  key={product.id}
                  onClick={() => {
                    setAiSearchOpen(false);
                    openProductDetail(product.id);
                  }}
                  className="bg-slate-950 p-3 rounded-2xl border border-purple-900/50 hover:border-purple-500 transition-all flex items-center justify-between gap-3 cursor-pointer group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-12 object-contain rounded-xl bg-slate-900 p-1 shrink-0"
                  />
                  <div className="grow min-w-0">
                    <span className="text-[10px] font-bold text-orange-400 uppercase">{product.brand}</span>
                    <h5 className="font-bold text-xs text-white group-hover:text-purple-300 truncate">
                      {product.name}
                    </h5>
                    <span className="font-extrabold text-xs text-emerald-400">
                      ৳{product.discountPrice.toLocaleString()}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
