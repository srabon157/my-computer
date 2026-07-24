import React from 'react';
import { useStore } from '../../context/StoreContext';
import { GitCompare, Trash2, ShoppingCart } from 'lucide-react';

export const ComparePage: React.FC = () => {
  const { compareList, removeFromCompare, clearCompare, addToCart, setCurrentView } = useStore();

  if (compareList.length === 0) {
    return (
      <div className="py-16 text-center max-w-md mx-auto space-y-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center mx-auto">
          <GitCompare className="w-8 h-8" />
        </div>
        <h2 className="font-extrabold text-xl text-slate-900 dark:text-white">
          Comparison Tool Empty
        </h2>
        <p className="text-xs text-slate-500">
          Add up to 4 products from the shop to compare technical specifications, prices, and features side-by-side.
        </p>
        <button
          onClick={() => setCurrentView('shop')}
          className="bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-xl shadow"
        >
          Browse Store Products
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Product Comparison ({compareList.length}/4)
          </h1>
          <p className="text-xs text-slate-500">Side-by-side specifications and price comparison</p>
        </div>

        <button
          onClick={clearCompare}
          className="text-xs font-bold text-red-500 hover:underline flex items-center gap-1"
        >
          <Trash2 className="w-4 h-4" /> Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className="p-4 w-48 text-slate-400 font-bold uppercase">Attribute</th>
              {compareList.map(p => (
                <th key={p.id} className="p-4 min-w-[220px] text-center border-l border-slate-200 dark:border-slate-800 relative">
                  <button
                    onClick={() => removeFromCompare(p.id)}
                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500"
                    title="Remove"
                  >
                    ✕
                  </button>
                  <img src={p.images[0]} alt={p.name} className="w-24 h-24 object-contain mx-auto mb-2" />
                  <h4 className="font-bold text-slate-900 dark:text-white line-clamp-2">{p.name}</h4>
                  <span className="font-extrabold text-sm text-orange-500 block mt-1">৳{p.discountPrice.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 shadow"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <tr>
              <td className="p-4 font-bold text-slate-500">Brand</td>
              {compareList.map(p => (
                <td key={p.id} className="p-4 text-center font-bold text-blue-600 border-l border-slate-200 dark:border-slate-800">{p.brand}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-500">Stock Status</td>
              {compareList.map(p => (
                <td key={p.id} className="p-4 text-center font-semibold text-emerald-500 border-l border-slate-200 dark:border-slate-800">{p.stockStatus}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-500">Rating</td>
              {compareList.map(p => (
                <td key={p.id} className="p-4 text-center font-bold text-amber-500 border-l border-slate-200 dark:border-slate-800">★ {p.rating} ({p.reviewCount})</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-500">Warranty</td>
              {compareList.map(p => (
                <td key={p.id} className="p-4 text-center text-slate-700 dark:text-slate-300 border-l border-slate-200 dark:border-slate-800">{p.warranty}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-500">Key Features</td>
              {compareList.map(p => (
                <td key={p.id} className="p-4 border-l border-slate-200 dark:border-slate-800 text-left">
                  <ul className="space-y-1">
                    {p.shortSpecs.map((s, idx) => (
                      <li key={idx} className="truncate">• {s}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
