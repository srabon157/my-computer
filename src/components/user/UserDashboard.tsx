import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import {
  Package,
  Heart,
  ShieldCheck,
  MapPin,
  LogOut,
  ChevronRight,
  User,
  Lock,
  Mail,
  Phone,
  AlertCircle,
  Loader2,
  CheckCircle2
} from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const { wishlist, orders, addToCart, setCurrentView, setActiveTrackingId, addToast } = useStore();

  // Authentication State
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; phone?: string } | null>(() => {
    const saved = localStorage.getItem('mc_customer_profile');
    return saved ? JSON.parse(saved) : null;
  });

  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'warranty'>('orders');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setAuthError(data.error || 'Login failed. Please check credentials.');
        return;
      }

      localStorage.setItem('mc_customer_token', data.token);
      localStorage.setItem('mc_customer_profile', JSON.stringify(data.user));
      setCurrentUser(data.user);
      addToast('Welcome Back!', `Signed in as ${data.user.name}`);
    } catch (err: any) {
      setAuthError(err.message || 'Login request failed.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setAuthError(data.error || 'Registration failed.');
        return;
      }

      localStorage.setItem('mc_customer_token', data.token);
      localStorage.setItem('mc_customer_profile', JSON.stringify(data.user));
      setCurrentUser(data.user);
      addToast('Account Created!', `Welcome to My Computer, ${data.user.name}`);
    } catch (err: any) {
      setAuthError(err.message || 'Registration request failed.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('mc_customer_token');
    localStorage.removeItem('mc_customer_profile');
    setCurrentUser(null);
    addToast('Signed Out', 'You have been logged out.');
  };

  /* ── 1. If Not Authenticated, show Login / Register Card ─────────────── */
  if (!currentUser) {
    return (
      <div className="py-12 max-w-md mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-200">
              <User className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {authMode === 'login' ? 'Customer Sign In' : 'Create Customer Account'}
            </h2>
            <p className="text-xs text-slate-500">
              {authMode === 'login'
                ? 'Access your orders, tracking status, and warranty records.'
                : 'Register for priority delivery and faster checkout.'}
            </p>
          </div>

          {/* Mode Switch Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl text-xs font-bold">
            <button
              onClick={() => {
                setAuthMode('login');
                setAuthError(null);
              }}
              className={`py-2.5 rounded-xl transition-all ${
                authMode === 'login' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Sign In (লগইন)
            </button>
            <button
              onClick={() => {
                setAuthMode('register');
                setAuthError(null);
              }}
              className={`py-2.5 rounded-xl transition-all ${
                authMode === 'register' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Register (রেজিস্ট্রেশন)
            </button>
          </div>

          {authError && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
              <span>{authError}</span>
            </div>
          )}

          {authMode === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {authLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign In to Account</span>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Mobile Phone (BD)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="01711000111"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Create Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {authLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <span>Register Account</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  /* ── 2. Authenticated Dashboard ────────────────────────────────────────── */
  const initials = currentUser.name
    .split(' ')
    .map(p => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 md:p-8 text-white border border-blue-800/50 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg">
            {initials || 'MC'}
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold">{currentUser.name}</h1>
            <p className="text-xs text-blue-200/80">
              {currentUser.email} {currentUser.phone ? `• ${currentUser.phone}` : ''}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Customer</span>
              </span>
              <span className="text-[11px] text-slate-300 font-semibold">{orders.length} Active Orders</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="text-xs text-slate-300 hover:text-white font-bold flex items-center gap-1.5 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 self-start md:self-auto transition-colors"
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

              {orders.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  No orders placed yet.
                </div>
              ) : (
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
                        <span className="text-slate-500">
                          Total: <strong className="text-slate-900 font-extrabold">৳{order.total.toLocaleString()}</strong> ({order.paymentMethod})
                        </span>
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
              )}
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
                <h4 className="font-bold text-slate-900">{currentUser.name}</h4>
                <p className="text-slate-500">Dhaka, Bangladesh</p>
                <p className="text-slate-500">Phone: {currentUser.phone || '+880 1711-000000'}</p>
                <p className="text-slate-500">Email: {currentUser.email}</p>
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
