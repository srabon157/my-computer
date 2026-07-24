import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ShoppingCart, X, Trash2, Plus, Minus, Tag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartTotal,
    couponDiscountBDT,
    appliedCoupon,
    applyCoupon,
    setCurrentView,
    language
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setCouponInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex justify-end animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5 text-orange-400" />
            <h3 className="font-extrabold text-base">
              {language === 'EN' ? 'Shopping Cart' : 'শপিং কার্ট'} ({cart.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="font-bold text-sm text-slate-700 dark:text-slate-300">Your cart is empty</p>
              <p className="text-xs text-slate-400">Add products to cart to complete order.</p>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.product.id}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center space-x-3"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-16 object-contain rounded-xl bg-white dark:bg-slate-900 p-1"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                    {item.product.name}
                  </h4>
                  <span className="font-extrabold text-xs text-orange-500 block mt-1">
                    ৳{item.product.discountPrice.toLocaleString()}
                  </span>

                  {/* Qty Counter */}
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-l-lg"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-slate-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-r-lg"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-slate-400 hover:text-red-500 text-xs"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Promo */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 dark:border-slate-800 space-y-4 bg-slate-50 dark:bg-slate-900">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={couponInput}
                  onChange={e => setCouponInput(e.target.value)}
                  placeholder="Coupon Code (MYCOMP10)"
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-slate-900 dark:bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-orange-500 transition-colors"
              >
                Apply
              </button>
            </form>
            {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">৳{cartSubtotal.toLocaleString()}</span>
              </div>
              {couponDiscountBDT > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Discount ({appliedCoupon?.code}):</span>
                  <span>-৳{couponDiscountBDT.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-extrabold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
                <span>Total Amount:</span>
                <span className="text-orange-500">৳{cartTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => {
                setCurrentView('checkout');
                onClose();
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
