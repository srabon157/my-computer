import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import type { Order } from '../../types';
import { ShieldCheck, Truck, CheckCircle2, Printer } from 'lucide-react';

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

  if (completedOrder) {
    return (
      <div className="py-12 max-w-2xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Order Placed Successfully!
          </h2>

          <p className="text-xs text-slate-500">
            Thank you for shopping at My Computer. Your Order ID is{' '}
            <strong className="text-orange-500 font-extrabold text-sm">{completedOrder.id}</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-slate-400">Customer Name:</span>
              <span className="font-bold text-slate-900 dark:text-white">{completedOrder.customerName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-slate-400">Payment Method:</span>
              <span className="font-bold text-blue-600">{completedOrder.paymentMethod}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-slate-400">Delivery Address:</span>
              <span className="font-bold text-slate-900 dark:text-white">{completedOrder.shippingAddress}, {completedOrder.district}</span>
            </div>
            <div className="flex justify-between text-sm font-extrabold pt-1">
              <span>Total Payable:</span>
              <span className="text-orange-500">৳{completedOrder.total.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={handlePrintInvoice}
              className="w-full sm:w-auto bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 border border-slate-700"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Invoice</span>
            </button>

            <button
              onClick={() => setCurrentView('order-tracking')}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow"
            >
              <Truck className="w-4 h-4" />
              <span>Track Order Live</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 text-white border border-blue-900/60 shadow-xl">
        <h1 className="text-2xl font-extrabold">Checkout & Order Confirmation</h1>
        <p className="text-xs text-slate-300 mt-1">Provide your delivery details and choose your preferred Bangladeshi payment method.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3">
            Shipping & Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Phone (BD)</label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">District / Division</label>
              <select
                value={formData.district}
                onChange={e => setFormData({ ...formData, district: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="Dhaka">Dhaka (৳120 Shipping - 24h)</option>
                <option value="Chittagong">Chittagong (৳200 Shipping - 48h)</option>
                <option value="Sylhet">Sylhet (৳200 Shipping - 48h)</option>
                <option value="Rajshahi">Rajshahi (৳200 Shipping - 48h)</option>
                <option value="Khulna">Khulna (৳200 Shipping - 48h)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Full Street Address</label>
              <textarea
                rows={2}
                required
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
              ></textarea>
            </div>
          </div>

          {/* Payment Gateways */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Payment Gateway
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                { id: 'bKash', label: 'bKash Online', desc: 'Mobile Financial Service', color: 'border-pink-500 bg-pink-500/10 text-pink-600' },
                { id: 'Nagad', label: 'Nagad', desc: 'Instant MFS Checkout', color: 'border-orange-500 bg-orange-500/10 text-orange-600' },
                { id: 'SSLCommerz', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, AMEX', color: 'border-blue-500 bg-blue-500/10 text-blue-600' },
                { id: 'Cash on Delivery', label: 'Cash On Delivery', desc: 'Pay Cash at Doorstep', color: 'border-slate-500 bg-slate-500/10 text-slate-700' }
              ].map(pay => (
                <div
                  key={pay.id}
                  onClick={() => setFormData({ ...formData, paymentMethod: pay.id as any })}
                  className={`p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                    formData.paymentMethod === pay.id ? pay.color : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40'
                  }`}
                >
                  <h5 className="font-bold">{pay.label}</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5">{pay.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary Column */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3">
              Order Summary ({cart.length} Items)
            </h3>

            <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-60 overflow-y-auto my-4 pr-1 text-xs">
              {cart.map(i => (
                <div key={i.product.id} className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={i.product.images[0]} alt="" className="w-10 h-10 object-contain rounded-lg bg-slate-100 dark:bg-slate-800 p-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white line-clamp-1">{i.product.name}</h5>
                      <span className="text-[10px] text-slate-400">Qty: {i.quantity}</span>
                    </div>
                  </div>
                  <span className="font-bold text-orange-500">৳{(i.product.discountPrice * i.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-900 dark:text-white">৳{cartSubtotal.toLocaleString()}</span>
              </div>

              {couponDiscountBDT > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Discount:</span>
                  <span>-৳{couponDiscountBDT.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-500">
                <span>Shipping Cost ({formData.district}):</span>
                <span className="font-semibold text-slate-900 dark:text-white">৳{shippingCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
                <span>Total Payable:</span>
                <span className="text-orange-500 text-lg">৳{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Confirm Order & Pay ৳{grandTotal.toLocaleString()}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
