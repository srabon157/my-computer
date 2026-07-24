import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../shop/ProductCard';
import {
  Star,
  ShoppingCart,
  Heart,
  GitCompare,
  ShieldCheck,
  Truck,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProductId,
    addToCart,
    toggleWishlist,
    isInWishlist,
    addToCompare,
    setCurrentView
  } = useStore();

  const product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'emi' | 'reviews' | 'qa'>('specs');

  const inWish = isInWishlist(product.id);

  // Bank EMI list calculation
  const emiOptions = [
    { bank: 'City Bank Amex', m3: Math.round(product.discountPrice / 3), m6: Math.round(product.discountPrice / 6), m12: Math.round(product.discountPrice / 12) },
    { bank: 'BRAC Bank', m3: Math.round(product.discountPrice / 3), m6: Math.round(product.discountPrice / 6), m12: Math.round(product.discountPrice / 12) },
    { bank: 'Eastern Bank (EBL)', m3: Math.round(product.discountPrice / 3), m6: Math.round(product.discountPrice / 6), m12: Math.round(product.discountPrice / 12) },
    { bank: 'DBBL Nexus', m3: Math.round(product.discountPrice / 3), m6: Math.round(product.discountPrice / 6), m12: Math.round(product.discountPrice / 12) }
  ];

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);

  return (
    <div className="py-8 space-y-10 animate-fadeIn">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
        <button onClick={() => setCurrentView('home')} className="hover:text-blue-600">Home</button>
        <ChevronRight className="w-3 h-3" />
        <button onClick={() => setCurrentView('shop')} className="hover:text-blue-600">Catalog</button>
        <ChevronRight className="w-3 h-3" />
        <span className="font-semibold text-slate-900 dark:text-white truncate max-w-xs">{product.name}</span>
      </div>

      {/* Main Details Grid */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-5 space-y-4">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center relative">
            <img
              src={product.images[selectedImg] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImg(idx)}
                className={`w-16 h-16 rounded-xl border-2 p-1 bg-white dark:bg-slate-950 overflow-hidden flex-shrink-0 transition-all ${
                  selectedImg === idx ? 'border-orange-500 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Title, Specs, Price, Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center space-x-3 text-xs mb-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-extrabold uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                {product.stockStatus} ({product.stockCount} Available)
              </span>
            </div>

            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{product.rating} / 5.0</span>
              <span className="text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-extrabold text-orange-500">
                  ৳{product.discountPrice.toLocaleString()}
                </span>
                {product.discountPrice < product.regularPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    ৳{product.regularPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Regular Price: ৳{product.regularPrice.toLocaleString()} (Cash / Card)
              </p>
            </div>

            {product.emiAvailable && product.emiStartingBDT && (
              <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                0% EMI from ৳{product.emiStartingBDT.toLocaleString()}/mo
              </div>
            )}
          </div>

          {/* Short Specifications List */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Key Features:</h4>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
              {product.shortSpecs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warranty & Delivery Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">Official Warranty</h5>
                <p className="text-[11px] text-slate-500">{product.warranty}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 flex items-center space-x-3">
              <Truck className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">Delivery Support</h5>
                <p className="text-[11px] text-slate-500">24h Dhaka • 48h Courier Outside</p>
              </div>
            </div>
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1 border border-slate-300 dark:border-slate-700">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                -
              </button>
              <span className="w-10 text-center font-extrabold text-sm text-slate-900 dark:text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-8 h-8 rounded-lg font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity)}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs md:text-sm py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product)}
              className={`p-3 rounded-xl border transition-all ${
                inWish ? 'bg-red-500 text-white border-red-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-500 border-slate-300 dark:border-slate-700'
              }`}
            >
              <Heart className="w-5 h-5" />
            </button>

            {/* Compare Button */}
            <button
              onClick={() => addToCompare(product)}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 border border-slate-300 dark:border-slate-700 transition-all"
            >
              <GitCompare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabbed Specification & EMI breakdown */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md p-6">
        <div className="flex space-x-3 border-b border-slate-200 dark:border-slate-800 pb-4 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'specs' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Full Technical Specifications
          </button>

          <button
            onClick={() => setActiveTab('emi')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'emi' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Bank EMI Options (0% Interest)
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'reviews' ? 'bg-purple-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Customer Reviews ({product.reviews.length})
          </button>
        </div>

        {/* Tab 1: Specs */}
        {activeTab === 'specs' && (
          <div className="py-6 space-y-6">
            {Object.entries(product.specifications).map(([section, items]) => (
              <div key={section} className="space-y-3">
                <h3 className="font-bold text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider">{section}</h3>
                <div className="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden text-xs">
                  {items.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50/50 dark:bg-slate-900/50">
                      <span className="font-semibold text-slate-500 dark:text-slate-400">{item.label}</span>
                      <span className="sm:col-span-2 font-medium text-slate-900 dark:text-white mt-1 sm:mt-0">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: EMI */}
        {activeTab === 'emi' && (
          <div className="py-6 space-y-4">
            <p className="text-xs text-slate-500">
              Avail 0% interest EMI options with major credit cards in Bangladesh for product values above ৳10,000.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white uppercase font-bold">
                  <tr>
                    <th className="p-3">Bank Partner</th>
                    <th className="p-3">3 Months EMI</th>
                    <th className="p-3">6 Months EMI</th>
                    <th className="p-3">12 Months EMI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {emiOptions.map((opt, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-blue-600 dark:text-blue-400">{opt.bank}</td>
                      <td className="p-3 font-semibold">৳{opt.m3.toLocaleString()}/mo</td>
                      <td className="p-3 font-semibold">৳{opt.m6.toLocaleString()}/mo</td>
                      <td className="p-3 font-bold text-orange-500">৳{opt.m12.toLocaleString()}/mo</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Reviews */}
        {activeTab === 'reviews' && (
          <div className="py-6 space-y-4">
            {product.reviews.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No customer reviews yet. Be the first to leave a review!</p>
            ) : (
              product.reviews.map(r => (
                <div key={r.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white">{r.userName}</span>
                    <span className="text-slate-400">{r.date}</span>
                  </div>
                  <div className="flex text-amber-400">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{r.comment}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
            Frequently Bought Together
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
