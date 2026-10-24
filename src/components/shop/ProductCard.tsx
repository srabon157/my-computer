import React, { useState, useRef } from 'react';
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

  // ── 3D Interactive Tilt & Specular Light ────────────────────
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({
    rotX: 0,
    rotY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate rotation between -7 and +7 degrees for smooth, natural 3D depth
    const rotX = ((y - centerY) / centerY) * -6.5;
    const rotY = ((x - centerX) / centerX) * 6.5;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotX, rotY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ rotX: 0, rotY: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAddedPulse(true);
    setTimeout(() => setAddedPulse(false), 600);
  };

  const badgeColors: Record<string, string> = {
    Hot:           'bg-blue-600 text-white',
    New:           'bg-emerald-600 text-white',
    'Best Seller': 'bg-slate-900 text-white',
  };

  const getCleanBadge = (badge?: string) => {
    if (!badge || badge.toLowerCase() === 'sale' || badge.toLowerCase() === 'offer') return null;
    return badge;
  };

  const cleanBadge = getCleanBadge(product.badge);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotX.toFixed(2)}deg) rotateY(${tilt.rotY.toFixed(2)}deg) translateY(${tilt.isHovered ? '-6px' : '0px'})`,
        transformStyle: 'preserve-3d',
        transition: tilt.isHovered
          ? 'transform 0.08s ease-out, box-shadow 0.25s ease'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className={`product-card group bg-white rounded-2xl border border-slate-200 flex flex-col justify-between p-4 sm:p-5 relative cursor-pointer ${
        tilt.isHovered
          ? 'shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15),0_0_20px_-5px_rgba(37,99,235,0.18)] border-blue-500'
          : 'shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-blue-400'
      }`}
    >
      {/* 3D Specular Sheen Reflex */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-30 overflow-hidden"
        style={{
          opacity: tilt.isHovered ? 0.35 : 0,
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)`,
        }}
      />

      {/* Top Badges - 3D Pop Out */}
      <div
        className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none"
        style={{
          transform: tilt.isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
          transition: 'transform 0.25s ease',
        }}
      >
        {cleanBadge && (
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide shadow-xs ${badgeColors[cleanBadge] ?? 'bg-slate-700 text-white'}`}
          >
            {cleanBadge === 'Hot' ? 'Popular' : cleanBadge}
          </span>
        )}
      </div>

      {/* Action Buttons - 3D Pop Out */}
      <div
        className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0"
        style={{
          transform: tilt.isHovered ? 'translateZ(35px)' : 'translateZ(0px)',
          transition: 'transform 0.25s ease, opacity 0.2s ease',
        }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
          className={`p-2 rounded-xl backdrop-blur-md border shadow-sm transition-all hover:scale-110 active:scale-95 ${
            inWish
              ? 'bg-rose-500 text-white border-rose-400'
              : 'bg-white text-slate-700 hover:text-rose-500 border-slate-200 shadow-sm'
          }`}
          title="Add to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${inWish ? 'fill-current' : ''}`} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); addToCompare(product); }}
          className={`p-2 rounded-xl backdrop-blur-md border shadow-sm transition-all hover:scale-110 active:scale-95 ${
            inCompare
              ? 'bg-blue-600 text-white border-blue-500'
              : 'bg-white text-slate-700 hover:text-blue-600 border-slate-200 shadow-sm'
          }`}
          title="Compare Specs"
        >
          <GitCompare className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }}
          className="p-2 rounded-xl bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-sm transition-all hover:scale-110 active:scale-95"
          title="Quick View"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Image Container - 3D Depth Layer */}
      <div
        onClick={() => openProductDetail(product.id)}
        className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-slate-50 border border-slate-100 flex items-center justify-center p-3 relative group/img"
        style={{
          transform: tilt.isHovered ? 'translateZ(25px)' : 'translateZ(0px)',
          transition: 'transform 0.25s ease',
        }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover/img:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-xl pointer-events-none">
          <span className="bg-white text-slate-900 text-[11px] font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-slate-200">
            <Eye className="w-3 h-3 text-blue-600" />
            Quick View
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="space-y-2 flex-1 flex flex-col justify-between"
        style={{
          transform: tilt.isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
          transition: 'transform 0.25s ease',
        }}
      >
        <div>
          {/* Brand & Stock */}
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="font-bold text-blue-600 uppercase tracking-wider text-[10px]">
              {product.brand}
            </span>
            <span className={`font-semibold px-2 py-0.5 rounded-full text-[10px] ${
              product.stockStatus === 'In Stock'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}>
              {product.stockStatus === 'In Stock' ? '● ' : '○ '}
              {product.stockStatus}
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => openProductDetail(product.id)}
            className="font-bold text-xs sm:text-sm text-slate-950 hover:text-blue-600 line-clamp-2 transition-colors leading-snug"
          >
            {product.name}
          </h3>

          {/* Short Specs */}
          <ul className="text-[11px] text-slate-700 font-medium space-y-0.5 mt-1.5">
            {product.shortSpecs.slice(0, 2).map((spec, idx) => (
              <li key={idx} className="truncate flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="truncate">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 pt-2">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`}
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-slate-900">{product.rating}</span>
            <span className="text-[10px] text-slate-600 font-semibold">({product.reviewCount})</span>
          </div>

          {/* Pricing - Regular/Current price ONLY, no discounts */}
          <div className="pt-2 mt-2 border-t border-slate-200 flex items-center justify-between">
            <div>
              <span className="font-black text-base md:text-lg text-slate-950 tracking-tight">
                ৳{product.discountPrice.toLocaleString()}
              </span>
              {product.emiAvailable && product.emiStartingBDT && (
                <p className="text-[10px] text-slate-600 font-bold">
                  EMI ৳{product.emiStartingBDT.toLocaleString()}/mo
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart Button - 3D Pop Out */}
      <button
        onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
        style={{
          transform: tilt.isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          transition: 'transform 0.25s ease, background-color 0.2s ease',
        }}
        className={`mt-3 w-full font-bold text-xs py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] ${
          addedPulse
            ? 'bg-emerald-600 text-white scale-[0.98]'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {addedPulse ? (
          <>
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Added!</span>
          </>
        ) : (
          <>
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{language === 'EN' ? 'Add to Cart' : 'কার্টে যোগ করুন'}</span>
          </>
        )}
      </button>
    </div>
  );
};
