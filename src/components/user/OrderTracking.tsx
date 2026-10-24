import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Search, Truck, CheckCircle2, Clock } from 'lucide-react';

export const OrderTracking: React.FC = () => {
  const { orders, activeTrackingId, setActiveTrackingId, language } = useStore();
  const [searchInput, setSearchInput] = useState(activeTrackingId);

  const matchedOrder = orders.find(o => o.id.toUpperCase() === searchInput.trim().toUpperCase()) || orders[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setActiveTrackingId(searchInput.trim().toUpperCase());
    }
  };

  return (
    <div className="py-8 space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 text-white border border-blue-800/50 shadow-xl text-center space-y-4">
        <div className="p-3 rounded-2xl bg-orange-500 text-white w-12 h-12 flex items-center justify-center mx-auto shadow">
          <Truck className="w-6 h-6" />
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {language === 'EN' ? 'Live Order Tracking' : 'লাইভ অর্ডার ট্র্যাকিং'}
        </h1>
        <p className="text-xs text-blue-200/80 max-w-md mx-auto">
          Enter your Order Reference ID (e.g., MC-84920) to check real-time courier dispatch status.
        </p>

        <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto pt-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Order ID (e.g. MC-84920)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-400 border border-slate-700 text-xs font-bold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow"
          >
            Track
          </button>
        </form>
      </div>

      {/* Order Status Timeline Card */}
      {matchedOrder && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-lg space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs text-slate-400 font-semibold block">Order Reference</span>
              <h3 className="font-extrabold text-xl text-slate-900">
                {matchedOrder.id}
              </h3>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-semibold block">Order Status</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs">
                {matchedOrder.orderStatus}
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-semibold block">Estimated Delivery</span>
              <span className="font-bold text-xs text-slate-900">Within 24-48 Hours</span>
            </div>
          </div>

          {/* Interactive Steps Pipeline */}
          <div className="space-y-6 py-4">
            <h4 className="font-extrabold text-xs text-slate-400 uppercase tracking-wider">
              Tracking Progress Pipeline:
            </h4>

            <div className="relative pl-6 space-y-8 border-l-2 border-slate-200">
              {matchedOrder.trackingSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`absolute -left-[31px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
                      step.completed
                        ? 'bg-emerald-500 text-white border-emerald-400'
                        : step.current
                        ? 'bg-orange-500 text-white border-orange-400 animate-pulse'
                        : 'bg-slate-200 text-slate-400 border-slate-300'
                    }`}
                  >
                    {step.completed ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-3.5 h-3.5" />}
                  </div>

                  <div>
                    <h5 className={`font-bold text-sm ${step.completed || step.current ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recipient Summary */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 font-semibold block">Recipient Name:</span>
              <span className="font-bold text-slate-900">{matchedOrder.customerName} ({matchedOrder.customerPhone})</span>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block">Delivery Address:</span>
              <span className="font-bold text-slate-900">{matchedOrder.shippingAddress}, {matchedOrder.district}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
