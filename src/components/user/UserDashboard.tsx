import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Package, Heart, ShieldCheck, MapPin, LogOut, ChevronRight } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const { wishlist, orders, addToCart, setCurrentView, setActiveTrackingId } = useStore();
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'warranty'>('orders');

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 md:p-8 text-white border border-blue-800/50 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg">
            TH
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold">Tanvir Hossain</h1>
            <p className="text-xs text-blue-200/80">tanvir@example.com • +880 1711-000111</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wider border border-orange-500/30">
                VIP Tech Platinum Member
              </span>
              <span className="text-[11px] text-slate-300 font-semibold">2,450 Reward Points</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentView('home')}
          className="text-xs text-slate-300 hover:text-white font-bold flex items-center gap-1.5 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 self-start md:self-auto"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Navigation Sidebar */}
        <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm space-y-1">
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'orders' ? 'bg-blue-600 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Order History ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'wishlist' ? 'bg-blue-600 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Saved Wishlist ({wishlist.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'addresses' ? 'bg-blue-600 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Saved Addresses</span>
          </button>

          <button
            onClick={() => setActiveTab('warranty')}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'warranty' ? 'bg-blue-600 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Warranty Claims</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm min-h-[400px]">
          
          {/* Tab 1: Orders */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 uppercase tracking-wider">
                My Recent Orders
              </h3>

              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between text-xs border-b border-slate-200 pb-2 gap-2">
                      <div>
                        <span className="font-extrabold text-blue-600">{order.id}</span>
                        <span className="text-slate-400 ml-2">• {order.date}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        {order.orderStatus}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-3">
                            <img src={item.image} alt="" className="w-10 h-10 object-contain rounded-lg bg-white p-1" />
                            <span className="font-semibold text-slate-900 line-clamp-1">{item.productName} (x{item.quantity})</span>
                          </div>
                          <span className="font-bold text-orange-500">৳{item.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                      <span className="text-slate-500">Total Paid: <strong className="text-slate-900 font-extrabold">৳{order.total.toLocaleString()}</strong> ({order.paymentMethod})</span>
                      <button
                        onClick={() => {
                          setActiveTrackingId(order.id);
                          setCurrentView('order-tracking');
                        }}
                        className="text-blue-600 hover:underline font-bold flex items-center gap-1"
                      >
                        Track Shipment <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Wishlist */}
          {activeTab === 'wishlist' && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 uppercase tracking-wider">
                My Wishlist Items ({wishlist.length})
              </h3>

              {wishlist.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Your wishlist is empty right now. Click the heart icon on any product to save it here!
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlist.map(p => (
                    <div key={p.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                      <img src={p.images[0]} alt="" className="w-14 h-14 object-contain rounded-xl bg-white p-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{p.name}</h4>
                        <span className="font-extrabold text-xs text-orange-500 block mt-1">৳{p.discountPrice.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-2 rounded-xl"
                      >
                        Buy
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Addresses */}
          {activeTab === 'addresses' && (
            <div className="space-y-4 text-xs">
              <h3 className="font-extrabold text-base text-slate-900 uppercase tracking-wider">
                Primary Shipping Address
              </h3>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">Tanvir Hossain</h4>
                <p className="text-slate-500">House 14, Road 5, Block C, Banani, Dhaka-1213, Bangladesh</p>
                <p className="text-slate-500">Phone: +880 1711-000111</p>
              </div>
            </div>
          )}

          {/* Tab 4: Warranty */}
          {activeTab === 'warranty' && (
            <div className="space-y-4 text-xs">
              <h3 className="font-extrabold text-base text-slate-900 uppercase tracking-wider">
                Active Warranty Registrations
              </h3>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">ASUS ROG Strix G16 Gaming Laptop</h4>
                  <p className="text-slate-500 text-[11px]">Serial: ROG-849201948 • Warranty Valid Until: Jul 2026</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                  Active Official Warranty
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
