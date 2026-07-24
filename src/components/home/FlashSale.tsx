import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import type { Product } from '../../types';
import { Clock, Zap, Heart, Eye, ShoppingCart } from 'lucide-react';

export const FlashSale: React.FC = () => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, openProductDetail, language } = useStore();

  const flashProducts = PRODUCTS.filter(p => p.isFlashSale || p.discountPercentage >= 10);

  // Timer countdown
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 my-6 bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 rounded-3xl p-6 md:p-8 text-white border border-red-900/50 shadow-2xl relative overflow-hidden">
      
      {/* Decorative Light Rays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header with Countdown Timer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-red-900/60 pb-6 relative z-10">
        
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-orange-500 text-white shadow-lg animate-pulse">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                {language === 'EN' ? 'Flash Sale' : 'ফ্ল্যাশ সেল'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold text-xs uppercase animate-bounce">
                Hot Deals
              </span>
            </div>
            <p className="text-xs text-red-200/80 mt-1">
              {language === 'EN' ? 'Limited time offers with massive BDT discounts!' : 'সীমিত সময়ের মেগা ছাড়!'}
            </p>
          </div>
        </div>

        {/* Ticking Timer */}
        <div className="flex items-center gap-3 bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-red-800/60 shadow-inner">
          <Clock className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-semibold text-slate-300">Ends In:</span>
          <div className="flex items-center gap-1.5 font-mono font-extrabold text-sm">
            <span className="bg-red-600 px-2.5 py-1 rounded-md text-white shadow">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-red-400">:</span>
            <span className="bg-red-600 px-2.5 py-1 rounded-md text-white shadow">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-red-400">:</span>
            <span className="bg-red-600 px-2.5 py-1 rounded-md text-white shadow text-orange-300">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Product Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {flashProducts.slice(0, 4).map((product: Product) => {
          const inWish = isInWishlist(product.id);
          const soldPercentage = Math.floor(65 + (product.stockCount % 30));

          return (
            <div
              key={product.id}
              className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 hover:border-red-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
            >
              {/* Discount Tag */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-extrabold text-xs shadow-md">
                  -{product.discountPercentage}% OFF
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2 rounded-xl backdrop-blur-md border transition-all ${
                    inWish ? 'bg-red-600 text-white border-red-500' : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700'
                  }`}
                  title="Wishlist"
                >
                  <Heart className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="p-2 rounded-xl bg-slate-900/80 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all"
                  title="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Image */}
              <div
                onClick={() => openProductDetail(product.id)}
                className="w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer mb-3 bg-slate-950 flex items-center justify-center relative"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                  {product.brand}
                </span>

                <h3
                  onClick={() => openProductDetail(product.id)}
                  className="font-bold text-xs text-white hover:text-orange-400 line-clamp-2 cursor-pointer transition-colors"
                >
                  {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-baseline space-x-2 pt-1">
                  <span className="font-extrabold text-base text-orange-400">
                    ৳{product.discountPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 line-through">
                    ৳{product.regularPrice.toLocaleString()}
                  </span>
                </div>

                {/* Stock Progress Bar */}
                <div className="space-y-1 pt-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Stock Sold: {soldPercentage}%</span>
                    <span className="text-red-400 font-bold">Only {product.stockCount} left</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
                      style={{ width: `${soldPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product, 1)}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{language === 'EN' ? 'Claim Offer' : 'অফারটি ফ্রি কিনুন'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
