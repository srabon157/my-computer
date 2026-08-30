import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import type { Product } from '../../types';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { Clock, Zap, Heart, Eye, ShoppingCart, Flame } from 'lucide-react';

export const FlashSale: React.FC = () => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, openProductDetail, language } = useStore();

  const flashProducts = PRODUCTS.filter(p => p.isFlashSale || p.discountPercentage >= 10);

  // Timer countdown
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });
  const [prevSeconds, setPrevSeconds] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        setPrevSeconds(prev.seconds);
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { ref: headerRef, inView: headerInView } = useScrollReveal<HTMLDivElement>();
  const { containerRef, inView: cardsInView } = useStaggerReveal<HTMLDivElement>(4);

  const timerDigit = (val: number, prev: number) => (
    <span
      key={val !== prev ? `${val}-new` : `${val}-same`}
      className="bg-red-600 px-2.5 py-1 rounded-md text-white shadow font-mono font-extrabold text-sm inline-block"
      style={{ animation: val !== prev ? 'slideUpBounce 0.35s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
    >
      {String(val).padStart(2, '0')}
    </span>
  );

  return (
    <section className="py-8 my-6 bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 rounded-3xl p-6 md:p-8 text-white border border-red-900/50 shadow-2xl relative overflow-hidden section-divider gaming-scan">

      {/* Animated background orbs */}
      <div className="floating-orb w-96 h-96 bg-red-600/15 -top-32 -right-16" />
      <div className="floating-orb w-64 h-64 bg-orange-600/10 -bottom-24 -left-16" style={{ animationDelay: '3s' }} />

      {/* Mesh overlay */}
      <div className="absolute inset-0 mesh-bg opacity-30 rounded-3xl pointer-events-none" />

      {/* Header with Countdown Timer */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-red-900/60 pb-6 relative z-10 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Title */}
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-2xl bg-orange-500 text-white shadow-lg"
            style={{ animation: headerInView ? 'iconSpinPop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
          >
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                {language === 'EN' ? 'Flash Sale' : 'ফ্ল্যাশ সেল'}
              </h2>
              <span
                className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold text-xs uppercase"
                style={{ animation: headerInView ? 'badgeBounce 0.5s 0.4s cubic-bezier(0.34,1.56,0.64,1) both, glowPulse 2s infinite 1s' : 'none' }}
              >
                <Flame className="inline w-3 h-3 mr-1" />
                Hot Deals
              </span>
            </div>
            <p className="text-xs text-red-200/80 mt-1">
              {language === 'EN' ? 'Limited time offers with massive BDT discounts!' : 'সীমিত সময়ের মেগা ছাড়!'}
            </p>
          </div>
        </div>

        {/* Ticking Timer */}
        <div className="flex items-center gap-3 bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-red-800/60 shadow-inner">
          <Clock className="w-4 h-4 text-orange-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-300">Ends In:</span>
          <div className="flex items-center gap-1.5 font-mono font-extrabold text-sm">
            {timerDigit(timeLeft.hours, timeLeft.hours)}
            <span className="text-red-400 animate-pulse">:</span>
            {timerDigit(timeLeft.minutes, timeLeft.minutes)}
            <span className="text-red-400 animate-pulse">:</span>
            <span
              key={timeLeft.seconds}
              className="bg-red-600 px-2.5 py-1 rounded-md text-orange-300 shadow font-mono font-extrabold text-sm inline-block"
              style={{ animation: timeLeft.seconds !== prevSeconds ? 'slideUpBounce 0.3s ease both' : 'none' }}
            >
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Product Cards Row — staggered */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10"
      >
        {flashProducts.slice(0, 4).map((product: Product) => {
          const inWish = isInWishlist(product.id);
          const soldPercentage = Math.floor(65 + (product.stockCount % 30));

          return (
            <div
              key={product.id}
              className={`stagger-item ${cardsInView ? 'in-view' : ''} bg-slate-900/90 rounded-2xl p-4 border border-slate-800 hover:border-red-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden hover:shadow-red-500/20`}
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none rounded-2xl" />

              {/* Discount Tag */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-extrabold text-xs shadow-md badge-pop">
                  -{product.discountPercentage}% OFF
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2 rounded-xl backdrop-blur-md border transition-all hover:scale-110 ${
                    inWish ? 'bg-red-600 text-white border-red-500' : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWish ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="p-2 rounded-xl bg-slate-900/80 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all hover:scale-110"
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
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

                {/* Animated Stock Progress Bar */}
                <div className="space-y-1 pt-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Stock Sold: {soldPercentage}%</span>
                    <span className="text-red-400 font-bold">Only {product.stockCount} left</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full relative overflow-hidden"
                      style={{
                        width: cardsInView ? `${soldPercentage}%` : '0%',
                        transition: 'width 1.2s cubic-bezier(0.22,1,0.36,1)'
                      }}
                    >
                      {/* Shimmer */}
                      <div className="absolute inset-0 shimmer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product, 1)}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md btn-glow-orange btn-ripple hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{language === 'EN' ? 'Claim Offer' : 'অফার নিন'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
