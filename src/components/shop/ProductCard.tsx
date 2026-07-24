import React, { useState } from 'react';
import type { Product } from '../../types';
import { useStore } from '../../context/StoreContext';
import { Star, ShoppingCart, Heart, GitCompare, Eye, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    addToCompare,
    isInCompare,
    setQuickViewProduct,
    openProductDetail,
    language
  } = useStore();

  const [addedPulse, setAddedPulse] = useState(false);
  const inWish    = isInWishlist(product.id);
  const inCompare = isInCompare(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAddedPulse(true);
    setTimeout(() => setAddedPulse(false), 600);
  };

  const badgeColors: Record<string, string> = {
    Hot:          'bg-gradient-to-r from-orange-500 to-red-500',
    New:          'bg-gradient-to-r from-blue-500 to-indigo-600',
    'Best Seller':'bg-gradient-to-r from-purple-600 to-violet-600',
    Sale:         'bg-gradient-to-r from-emerald-500 to-teal-600',
  };

  return (
    <div className="product-card group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between p-4 relative overflow-hidden">

      {/* Shimmer overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.8s linear infinite',
          }}
        />
      </div>

      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.badge && (
          <span
            className={`px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md ${badgeColors[product.badge] ?? 'bg-slate-600'}`}
            style={{ animation: product.badge === 'Hot' ? 'glowPulse 2s infinite' : undefined }}
          >
            {product.badge === 'Hot' && '🔥 '}
            {product.badge}
          </span>
        )}
        {product.discountPercentage > 0 && (
          <span className="px-2 py-0.5 rounded-lg bg-red-500 text-white font-extrabold text-[10px] shadow-md">
            -{product.discountPercentage}%
          </span>
        )}
      </div>

      {/* Action Buttons (slide in from right on hover) */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0">
        <button
          onClick={() => toggleWishlist(product)}
          className={`p-2 rounded-xl backdrop-blur-md border shadow-md transition-all hover:scale-110 ${
            inWish
              ? 'bg-red-500 text-white border-red-400 shadow-red-500/30'
              : 'bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:text-red-500 border-slate-200 dark:border-slate-700'
          }`}
          title="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${inWish ? 'fill-current' : ''}`} />
        </button>

        <button
          onClick={() => addToCompare(product)}
          className={`p-2 rounded-xl backdrop-blur-md border shadow-md transition-all hover:scale-110 ${
            inCompare
              ? 'bg-blue-600 text-white border-blue-500 shadow-blue-500/30'
              : 'bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:text-blue-600 border-slate-200 dark:border-slate-700'
          }`}
          title="Compare Specs"
        >
          <GitCompare className="w-4 h-4" />
        </button>

        <button
          onClick={() => setQuickViewProduct(product)}
          className="p-2 rounded-xl bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:text-orange-500 border border-slate-200 dark:border-slate-700 backdrop-blur-md shadow-md transition-all hover:scale-110"
          title="Quick View"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Image Container */}
      <div
        onClick={() => openProductDetail(product.id)}
        className="w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer mb-3 bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-2 relative"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center rounded-xl">
          <button
            onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 frosted-badge px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 flex-1">
        {/* Brand & Stock */}
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            {product.brand}
          </span>
          <span className={`font-semibold px-2 py-0.5 rounded-full text-[10px] ${
            product.stockStatus === 'In Stock'
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300'
              : 'bg-amber-100 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300'
          }`}>
            {product.stockStatus === 'In Stock' ? '● ' : '○ '}
            {product.stockStatus}
          </span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => openProductDetail(product.id)}
          className="font-bold text-xs md:text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 line-clamp-2 cursor-pointer transition-colors leading-snug"
        >
          {product.name}
        </h3>

        {/* Short Specs */}
        <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-0.5">
          {product.shortSpecs.slice(0, 2).map((spec, idx) => (
            <li key={idx} className="truncate flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        {/* Rating */}
        <div className="flex items-center gap-1.5 pt-0.5">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300 dark:text-slate-700'}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{product.rating}</span>
          <span className="text-[10px] text-slate-400">({product.reviewCount})</span>
        </div>

        {/* Pricing */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-baseline space-x-2">
            <span className="font-extrabold text-base md:text-lg text-slate-900 dark:text-white">
              ৳{product.discountPrice.toLocaleString()}
            </span>
            {product.discountPrice < product.regularPrice && (
              <span className="text-xs text-slate-400 line-through">
                ৳{product.regularPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.emiAvailable && product.emiStartingBDT && (
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
              EMI ৳{product.emiStartingBDT.toLocaleString()}/mo
            </p>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`mt-3 w-full font-bold text-xs py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm overflow-hidden relative ${
          addedPulse
            ? 'bg-emerald-500 text-white scale-95'
            : 'bg-slate-900 dark:bg-blue-600 hover:bg-orange-500 dark:hover:bg-orange-500 text-white'
        }`}
        style={{ transform: addedPulse ? 'scale(0.97)' : undefined }}
      >
        {addedPulse ? (
          <>
            <Zap className="w-4 h-4" />
            <span>Added!</span>
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
            <span>{language === 'EN' ? 'Add to Cart' : 'কার্টে যোগ করুন'}</span>
          </>
        )}
        {/* Ripple shimmer */}
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
      </button>
    </div>
  );
};
