import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import type { Order } from '../../types';
import { ShieldCheck, Truck, CheckCircle2, Printer, Smartphone, CreditCard, Banknote, Lock, Sparkles } from 'lucide-react';

/* ── Payment method definitions ─────────────────────────────── */
const PAYMENT_METHODS = [
  {
    id: 'bKash',
    label: 'bKash',
    desc: 'Mobile Financial Service',
    tagline: 'Pay with bKash wallet',
    icon: Smartphone,
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-gradient-to-br from-pink-50 to-rose-50',
    borderActive: 'border-pink-400',
    ringColor: 'ring-pink-400/30',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    badgeColor: 'bg-pink-500',
  },
  {
    id: 'Nagad',
    label: 'Nagad',
    desc: 'Instant MFS Checkout',
    tagline: 'Fast & secure Nagad pay',
    icon: Smartphone,
    gradient: 'from-orange-500 to-amber-600',
    lightBg: 'bg-gradient-to-br from-orange-50 to-amber-50',
    borderActive: 'border-orange-400',
    ringColor: 'ring-orange-400/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 'SSLCommerz',
    label: 'Card Payment',
    desc: 'Visa, Mastercard, AMEX',
    tagline: 'Secure SSL encrypted',
    icon: CreditCard,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    borderActive: 'border-blue-400',
    ringColor: 'ring-blue-400/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'Cash on Delivery',
    label: 'Cash on Delivery',
    desc: 'Pay at your doorstep',
    tagline: 'No advance needed',
    icon: Banknote,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    borderActive: 'border-emerald-400',
    ringColor: 'ring-emerald-400/30',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    badgeColor: 'bg-emerald-500',
  },
];

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, couponDiscountBDT, cartTotal, createOrder, setCurrentView } = useStore();

  const [formData, setFormData] = useState({
    name: 'Tanvir Hossain',
    phone: '01711000111',
    email: 'tanvir@example.com',
    address: 'House 14, Road 5, Block C, Banani',
    district: 'Dhaka',
    paymentMethod: 'bKash' as 'bKash' | 'Nagad' | 'SSLCommerz' | 'Cash on Delivery'
  });

  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  const shippingCost = formData.district === 'Dhaka' ? 120 : 200;
  const grandTotal = cartTotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const order = createOrder({
      customerName: formData.name,
      customerPhone: formData.phone,
      customerEmail: formData.email,
      shippingAddress: formData.address,
      district: formData.district,
      paymentMethod: formData.paymentMethod
    });

    setCompletedOrder(order);
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  /* ── Order success view ─────────────────────────────────── */
  if (completedOrder) {
    return (
      <div className="py-12 max-w-2xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xl text-center space-y-4 backdrop-blur-sm">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-200/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-800">
            Order Placed Successfully!
          </h2>

          <p className="text-xs text-slate-400">
            Thank you for shopping at My Computer. Your Order ID is{' '}
            <strong className="text-orange-500 font-extrabold text-sm">{completedOrder.id}</strong>.
          </p>

          <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 text-left text-xs space-y-3">
            <div className="flex justify-between border-b border-slate-200/60 pb-2.5">
              <span className="text-slate-400">Customer Name:</span>
              <span className="font-bold text-slate-800">{completedOrder.customerName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2.5">
              <span className="text-slate-400">Payment Method:</span>
              <span className="font-bold text-blue-500">{completedOrder.paymentMethod}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2.5">
              <span className="text-slate-400">Delivery Address:</span>
              <span className="font-bold text-slate-800">{completedOrder.shippingAddress}, {completedOrder.district}</span>
            </div>
            <div className="flex justify-between text-sm font-extrabold pt-1">
              <span>Total Payable:</span>
              <span className="text-orange-500">৳{completedOrder.total.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={handlePrintInvoice}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 border border-slate-600/50 transition-all hover:shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Invoice</span>
            </button>

            <button
              onClick={() => setCurrentView('order-tracking')}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-200/50 transition-all"
            >
              <Truck className="w-4 h-4" />
              <span>Track Order Live</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Checkout form ───────────────────────────────────────── */
  return (
    <div className="py-8 space-y-6 animate-fadeIn">
      {/* Page Header — lighter gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 rounded-3xl p-6 text-white border border-blue-800/40 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-purple-600/10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="relative">
          <h1 className="text-2xl font-extrabold flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-blue-300" />
            Checkout & Order Confirmation
          </h1>
          <p className="text-xs text-blue-200/80 mt-1">Provide your delivery details and choose your preferred Bangladeshi payment method.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-white/90 p-6 rounded-3xl border border-slate-200/50 shadow-md space-y-6 backdrop-blur-sm">
          <h3 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider border-b border-slate-200/60 pb-3 flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-500" />
            Shipping & Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-600 mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-600 mb-1.5">Mobile Phone (BD)</label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-600 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-600 mb-1.5">District / Division</label>
              <select
                value={formData.district}
                onChange={e => setFormData({ ...formData, district: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 cursor-pointer transition-all"
              >
                <option value="Dhaka">Dhaka (৳120 Shipping - 24h)</option>
                <option value="Chittagong">Chittagong (৳200 Shipping - 48h)</option>
                <option value="Sylhet">Sylhet (৳200 Shipping - 48h)</option>
                <option value="Rajshahi">Rajshahi (৳200 Shipping - 48h)</option>
                <option value="Khulna">Khulna (৳200 Shipping - 48h)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-600 mb-1.5">Full Street Address</label>
              <textarea
                rows={2}
                required
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
              ></textarea>
            </div>
          </div>

          {/* ── Premium Payment Gateway Section ─────────────── */}
          <div className="space-y-4 pt-5 border-t border-slate-200/60">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-500" />
                Payment Gateway
              </h4>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-bit SSL Secure</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PAYMENT_METHODS.map((pay) => {
                const isSelected = formData.paymentMethod === pay.id;
                const IconComp = pay.icon;

                return (
                  <div
                    key={pay.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: pay.id as any })}
                    className={`relative group cursor-pointer rounded-2xl border-2 p-4 transition-all duration-300 ${
                      isSelected
                        ? `${pay.lightBg} ${pay.borderActive} ring-4 ${pay.ringColor} shadow-lg scale-[1.02]`
                        : 'border-slate-200/60 bg-white/60 hover:border-slate-300 hover:shadow-md hover:scale-[1.01]'
                    }`}
                  >
                    {/* Selected checkmark badge */}
                    {isSelected && (
                      <div className={`absolute -top-2 -right-2 w-6 h-6 ${pay.badgeColor} rounded-full flex items-center justify-center shadow-lg z-10`}
                        style={{ animation: 'popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both' }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}

                    {/* Top gradient line for active state */}
                    {isSelected && (
                      <div className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${pay.gradient} rounded-full`} />
                    )}

                    <div className="flex items-start gap-3">
                      {/* Icon circle */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isSelected ? pay.iconBg : 'bg-slate-100/80'
                      }`}>
                        <IconComp className={`w-5 h-5 transition-colors duration-300 ${
                          isSelected ? pay.iconColor : 'text-slate-400'
                        }`} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h5 className={`font-bold text-[13px] transition-colors duration-300 ${
                          isSelected ? 'text-slate-900' : 'text-slate-600'
                        }`}>
                          {pay.label}
                        </h5>
                        <p className={`text-[10px] mt-0.5 transition-colors duration-300 ${
                          isSelected ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          {pay.desc}
                        </p>
                        {isSelected && (
                          <p className={`text-[10px] mt-1 font-semibold ${pay.iconColor} flex items-center gap-1`}
                            style={{ animation: 'fadeInUp 0.3s ease-out both' }}
                          >
                            <Sparkles className="w-3 h-3" />
                            {pay.tagline}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Radio indicator */}
                    <div className={`absolute bottom-3 right-3 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isSelected ? `${pay.borderActive} bg-white` : 'border-slate-300'
                    }`}>
                      {isSelected && (
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${pay.gradient}`}
                          style={{ animation: 'scaleIn 0.25s ease-out both' }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" /> Encrypted
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> PCI DSS Compliant
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Bangladesh Bank Approved</span>
            </div>
          </div>
        </div>

        {/* Right Summary Column */}
        <div className="lg:col-span-5 bg-white/90 p-6 rounded-3xl border border-slate-200/50 shadow-md space-y-6 flex flex-col justify-between backdrop-blur-sm">
          <div>
            <h3 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider border-b border-slate-200/60 pb-3">
              Order Summary ({cart.length} Items)
            </h3>

            <div className="divide-y divide-slate-100/80 max-h-60 overflow-y-auto my-4 pr-1 text-xs">
              {cart.map(i => (
                <div key={i.product.id} className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={i.product.images[0]} alt="" className="w-10 h-10 object-contain rounded-lg bg-slate-100/80 p-1" />
                    <div>
                      <h5 className="font-bold text-slate-800 line-clamp-1">{i.product.name}</h5>
                      <span className="text-[10px] text-slate-400">Qty: {i.quantity}</span>
                    </div>
                  </div>
                  <span className="font-bold text-orange-500">৳{(i.product.discountPrice * i.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 text-xs pt-4 border-t border-slate-200/60">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-700">৳{cartSubtotal.toLocaleString()}</span>
              </div>

              {couponDiscountBDT > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Voucher Applied:</span>
                  <span>-৳{couponDiscountBDT.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-400">
                <span>Shipping Cost ({formData.district}):</span>
                <span className="font-semibold text-slate-700">৳{shippingCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-slate-800 pt-3 border-t border-slate-200/60">
                <span>Total Payable:</span>
                <span className="text-orange-500 text-lg">৳{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm py-4 rounded-2xl transition-all shadow-lg shadow-orange-200/50 flex items-center justify-center gap-2 btn-ripple hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Confirm Order & Pay ৳{grandTotal.toLocaleString()}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
