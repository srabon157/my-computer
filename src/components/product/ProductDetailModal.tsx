import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { X, Star, ShoppingCart, ShieldCheck, Check } from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, openProductDetail } = useStore();
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row relative max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery */}
        <div className="md:w-1/2 p-6 bg-slate-50 flex flex-col items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-white p-2 flex items-center justify-center border border-slate-200">
            <img
              src={product.images[selectedImgIdx] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex space-x-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImgIdx(idx)}
                className={`w-12 h-12 rounded-xl border-2 p-1 bg-white overflow-hidden transition-all ${
                  selectedImgIdx === idx ? 'border-orange-500 shadow' : 'border-slate-200 opacity-60'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-black text-blue-600 uppercase tracking-wider">{product.brand}</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{product.stockStatus}</span>
            </div>

            <h2 className="font-black text-base md:text-lg text-slate-950 leading-snug">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center space-x-2 my-2">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`} />
                ))}
              </div>
              <span className="text-xs font-black text-slate-950">{product.rating}</span>
            </div>

            {/* Specs */}
            <ul className="text-xs text-slate-800 font-medium space-y-1.5 my-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
              {product.shortSpecs.map((spec, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="my-4">
              <div className="flex items-baseline space-x-3">
                <span className="font-black text-2xl text-slate-950">৳{product.discountPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold mt-1 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{product.warranty} · Official Warranty</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                addToCart(product, 1);
                setQuickViewProduct(null);
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Shopping Cart</span>
            </button>

            <button
              onClick={() => {
                openProductDetail(product.id);
                setQuickViewProduct(null);
              }}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-bold text-xs py-2.5 rounded-xl transition-all"
            >
              View Full Details & Bank EMI Breakdown
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
