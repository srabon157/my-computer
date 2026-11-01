import React, { useState, useEffect, useCallback } from 'react';
import { useStore } from '../../context/StoreContext';
import { Logo } from '../common/Logo';
import {
  Package,
  ShoppingBag,
  DollarSign,
  Plus,
  Trash2,
  Eye,
  Search,
  Filter,
  Clock,
  ShieldCheck,
  Lock,
  LogOut,
  Database,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  X,
  AlertTriangle,
  Loader2,
  UserCheck
} from 'lucide-react';

interface OrderItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

interface ServerOrder {
  _id?: string;
  orderId: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  delivery: {
    address: string;
    area?: string;
    district: string;
    note?: string;
  };
  items: OrderItem[];
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  grandTotal: number;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  trackingSteps?: Array<{ title: string; date: string; completed: boolean; current?: boolean }>;
  createdAt?: string;
  updatedAt?: string;
}

interface AdminStats {
  totalRevenue: number;
  totalOrders: number;
  pendingOrders: number;
  confirmedOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  totalProducts: number;
  lowStockProducts: number;
  isDbConnected: boolean;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Pending: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  Confirmed: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  Processing: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  Shipped: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  Delivered: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  Cancelled: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
};

export const AdminDashboard: React.FC = () => {
  const { addToast } = useStore();

  // Authentication state
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('mc_admin_token'));
  const [adminUser, setAdminUser] = useState<{ email: string; name: string } | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Tabs
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'stats' | 'database'>('orders');

  // Stats
  const [stats, setStats] = useState<AdminStats>({
    totalRevenue: 0,
    totalOrders: 0,
    pendingOrders: 0,
    confirmedOrders: 0,
    deliveredOrders: 0,
    cancelledOrders: 0,
    totalProducts: 0,
    lowStockProducts: 0,
    isDbConnected: false,
  });

  // Orders State
  const [orders, setOrders] = useState<ServerOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalOrdersCount, setTotalOrdersCount] = useState(0);

  // Order Details Modal
  const [selectedOrder, setSelectedOrder] = useState<ServerOrder | null>(null);
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);

  // Products State
  const [products, setProducts] = useState<any[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdPrice, setNewProdPrice] = useState('');
  const [newProdSalePrice, setNewProdSalePrice] = useState('');
  const [newProdCategory, setNewProdCategory] = useState('desktop');
  const [newProdBrand, setNewProdBrand] = useState('Asus');
  const [newProdStock, setNewProdStock] = useState('10');

  // Database Seed State
  const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<string | null>(null);

  /* ── 1. Check or Verify Token ─────────────────────────────────────────── */
  useEffect(() => {
    if (token) {
      fetch('/api/admin/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.json())
        .then(data => {
          if (data.success && data.admin) {
            setAdminUser(data.admin);
          } else {
            handleLogout();
          }
        })
        .catch(() => handleLogout());
    }
  }, [token]);

  /* ── 2. Login Handler ──────────────────────────────────────────────────── */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setLoginError(data.error || 'Authentication failed. Please verify credentials.');
        return;
      }

      localStorage.setItem('mc_admin_token', data.token);
      setToken(data.token);
      setAdminUser(data.admin);
      addToast('Welcome Admin!', `Signed in as ${data.admin.email}`);
    } catch (err: any) {
      setLoginError(err.message || 'Connection to authentication service failed.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('mc_admin_token');
    setToken(null);
    setAdminUser(null);
  };

  /* ── 3. Fetch Orders ───────────────────────────────────────────────────── */
  const fetchOrders = useCallback(async () => {
    if (!token) return;
    setOrdersLoading(true);

    try {
      const params = new URLSearchParams({
        page: String(currentPage),
        limit: '10',
        sort: sortBy,
      });
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (statusFilter !== 'All') params.append('status', statusFilter);

      const res = await fetch(`/api/orders?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success && Array.isArray(data.orders)) {
        // Normalize order objects so both server and fallback schema fit
        const normalized: ServerOrder[] = data.orders.map((o: any) => ({
          _id: o._id,
          orderId: o.orderId || o.id,
          customer: {
            name: o.customer?.name || o.customerName || 'Customer',
            phone: o.customer?.phone || o.customerPhone || '',
            email: o.customer?.email || o.customerEmail || '',
          },
          delivery: {
            address: o.delivery?.address || o.shippingAddress || '',
            area: o.delivery?.area || o.area || '',
            district: o.delivery?.district || o.district || 'Dhaka',
            note: o.delivery?.note || o.note || '',
          },
          items: (o.items || []).map((it: any) => ({
            productId: it.productId,
            name: it.name || it.productName || 'Product',
            image: it.image || 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
            quantity: it.quantity || 1,
            unitPrice: it.unitPrice || it.price || 0,
            subtotal: it.subtotal || (it.unitPrice || it.price || 0) * (it.quantity || 1),
          })),
          subtotal: o.subtotal || 0,
          deliveryCharge: o.deliveryCharge !== undefined ? o.deliveryCharge : (o.shippingCost || 120),
          discount: o.discount || 0,
          grandTotal: o.grandTotal || o.total || 0,
          paymentMethod: o.paymentMethod || 'Cash on Delivery',
          paymentStatus: o.paymentStatus || 'Pending',
          orderStatus: o.orderStatus || 'Pending',
          trackingSteps: o.trackingSteps || [],
          createdAt: o.createdAt || (o.date ? new Date(o.date).toISOString() : new Date().toISOString()),
          updatedAt: o.updatedAt,
        }));

        setOrders(normalized);
        if (data.pagination) {
          setTotalPages(data.pagination.totalPages || 1);
          setTotalOrdersCount(data.pagination.total || normalized.length);
        }
      }
    } catch (err: any) {
      console.error('[Admin fetchOrders error]:', err);
    } finally {
      setOrdersLoading(false);
    }
  }, [token, currentPage, searchQuery, statusFilter, sortBy]);

  /* ── 4. Fetch Stats ────────────────────────────────────────────────────── */
  const fetchStats = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/admin/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success && data.stats) {
        setStats(data.stats);
      }
    } catch (err) {
      console.warn('[Admin fetchStats error]:', err);
    }
  }, [token]);

  /* ── 5. Fetch Products ─────────────────────────────────────────────────── */
  const fetchProducts = useCallback(async () => {
    setProductsLoading(true);
    try {
      const res = await fetch('/api/products?limit=100');
      const data = await res.json();
      if (data.success && Array.isArray(data.products)) {
        setProducts(data.products);
      }
    } catch (err) {
      console.warn('[Admin fetchProducts error]:', err);
    } finally {
      setProductsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchOrders();
      fetchStats();
      fetchProducts();
    }
  }, [token, fetchOrders, fetchStats, fetchProducts]);

  /* ── 6. Update Order Status ────────────────────────────────────────────── */
  const handleUpdateStatus = async (orderId: string, newStatus: ServerOrder['orderStatus']) => {
    if (!token) return;
    setStatusUpdating(orderId);

    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ orderStatus: newStatus }),
      });
      const data = await res.json();

      if (data.success) {
        setOrders(prev =>
          prev.map(o => (o.orderId === orderId ? { ...o, orderStatus: newStatus } : o))
        );
        if (selectedOrder && selectedOrder.orderId === orderId) {
          setSelectedOrder({ ...selectedOrder, orderStatus: newStatus });
        }
        addToast('Status Updated!', `Order ${orderId} changed to ${newStatus}`);
        fetchStats();
      } else {
        addToast('Update Failed', data.error || 'Failed to update order status', 'warning');
      }
    } catch (err: any) {
      addToast('Error', err.message || 'Status update request failed', 'warning');
    } finally {
      setStatusUpdating(null);
    }
  };

  /* ── 7. Add Product ────────────────────────────────────────────────────── */
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !newProdName || !newProdPrice) return;

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: newProdName,
          price: Number(newProdPrice),
          salePrice: Number(newProdSalePrice || newProdPrice),
          category: newProdCategory,
          brand: newProdBrand,
          stock: Number(newProdStock || 10),
          availability: 'In Stock',
        }),
      });

      const data = await res.json();
      if (data.success && data.product) {
        addToast('Product Added!', `${newProdName} added successfully.`);
        setShowAddProductModal(false);
        setNewProdName('');
        setNewProdPrice('');
        setNewProdSalePrice('');
        fetchProducts();
        fetchStats();
      } else {
        addToast('Error', data.error || 'Failed to create product', 'warning');
      }
    } catch (err: any) {
      addToast('Error', err.message || 'Product creation request failed', 'warning');
    }
  };

  /* ── 8. Delete Product ─────────────────────────────────────────────────── */
  const handleDeleteProduct = async (productId: string) => {
    if (!token) return;
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success) {
        setProducts(prev => prev.filter(p => p.productId !== productId && p.id !== productId));
        addToast('Product Deleted', `ID: ${productId}`, 'info');
        fetchStats();
      } else {
        addToast('Error', data.error || 'Failed to delete product', 'warning');
      }
    } catch (err: any) {
      addToast('Error', err.message || 'Delete request failed', 'warning');
    }
  };

  /* ── 9. Database Sync / Seed ───────────────────────────────────────────── */
  const handleSeedDatabase = async (force: boolean) => {
    setSeeding(true);
    setSeedResult(null);

    try {
      const res = await fetch(`/api/seed?force=${force}`, { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        setSeedResult(data.message);
        addToast('Database Synced!', `${data.productsCount} products synchronized with MongoDB.`);
        fetchProducts();
        fetchStats();
      } else {
        setSeedResult(`Failed: ${data.error || data.message}`);
        addToast('Sync Issue', data.error || data.message, 'warning');
      }
    } catch (err: any) {
      setSeedResult(`Error: ${err.message}`);
      addToast('Error', err.message, 'warning');
    } finally {
      setSeeding(false);
    }
  };

  /* ── Render: Login Screen if not authenticated ─────────────────────────── */
  if (!token) {
    return (
      <div className="py-12 max-w-md mx-auto animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-2">
              <Logo size="md" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-200">
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Security Portal</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Sign In to Management
            </h2>
            <p className="text-xs text-slate-500">
              Enter your authorized admin credentials to manage orders, inventory, and database.
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-500" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Admin Email</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                placeholder="admin@mycomputer.com"
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Password</label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-medium"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">Administrator Access:</p>
              <p>Please enter the secure admin credentials configured in your environment variables.</p>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              {loginLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Access Admin Console</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Render: Authenticated Admin Portal ────────────────────────────────── */
  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="dark" />
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-500/30 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Admin: {adminUser?.name || 'Store Admin'}</span>
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 border ${
              stats.isDbConnected
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
            }`}>
              <Database className="w-3 h-3" />
              <span>{stats.isDbConnected ? 'MongoDB Live' : 'Local Fallback'}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            My Computer Admin & Order Console
          </h1>
          <p className="text-xs text-slate-400">
            Real-time customer orders, automated stock synchronization, inventory control & status tracking
          </p>
        </div>

        {/* Navigation Tabs & Logout */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'orders' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Orders ({totalOrdersCount || orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'products' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Products ({products.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('database')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'database' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>MongoDB Atlas</span>
            </button>
          </div>

          <button
            onClick={handleLogout}
            title="Log Out"
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-950/40 text-slate-400 hover:text-red-400 border border-slate-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Metrics Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Revenue (BDT)</span>
            <span className="text-xl font-black text-slate-900">
              ৳{(stats.totalRevenue || 0).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Customer Orders</span>
            <span className="text-xl font-black text-slate-900">
              {stats.totalOrders || orders.length} Orders
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Pending Dispatch</span>
            <span className="text-xl font-black text-amber-600">
              {stats.pendingOrders} Pending
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Active Catalog Items</span>
            <span className="text-xl font-black text-slate-900">
              {stats.totalProducts || products.length} Items
            </span>
          </div>
        </div>
      </div>

      {/* ── TAB 1: ORDER MANAGEMENT ────────────────────────────────────────── */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <span>Customer Order Management System</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Inspect customer orders, verify items, and update live fulfillment statuses
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => fetchOrders()}
                className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold flex items-center gap-1.5 transition-all"
                title="Refresh Orders"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${ordersLoading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Search, Filter & Sort Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
            {/* Search */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Order ID, Customer Name, or Phone..."
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>

            {/* Status Filter */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {['All', 'Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map(st => (
                <button
                  key={st}
                  onClick={() => {
                    setStatusFilter(st);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                    statusFilter === st
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="md:col-span-3 flex items-center justify-end gap-2">
              <span className="text-slate-400 font-semibold flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="p-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 font-semibold focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Orders Table */}
          {ordersLoading ? (
            <div className="py-16 text-center text-slate-400 space-y-2">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
              <p className="text-xs font-semibold">Loading orders from database...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="py-16 text-center text-slate-400 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-slate-300" />
              <p className="font-bold text-sm text-slate-700">No Orders Found</p>
              <p className="text-xs text-slate-400">
                {searchQuery || statusFilter !== 'All'
                  ? 'No orders match your current filter criteria.'
                  : 'No customer orders have been placed yet.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5">Order ID</th>
                    <th className="p-3.5">Customer</th>
                    <th className="p-3.5">Contact</th>
                    <th className="p-3.5">Products Summary</th>
                    <th className="p-3.5">Total Amount</th>
                    <th className="p-3.5">Payment</th>
                    <th className="p-3.5">Order Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map(order => {
                    const statusStyle = STATUS_COLORS[order.orderStatus] || STATUS_COLORS.Pending;
                    const itemsCount = order.items.reduce((s, it) => s + it.quantity, 0);

                    return (
                      <tr key={order.orderId} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-3.5 font-extrabold text-blue-600">
                          {order.orderId}
                          <span className="block text-[10px] text-slate-400 font-normal">
                            {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : ''}
                          </span>
                        </td>

                        <td className="p-3.5 font-bold text-slate-900">
                          {order.customer.name}
                          <span className="block text-[10px] text-slate-400 font-normal truncate max-w-[140px]">
                            {order.delivery.district}
                          </span>
                        </td>

                        <td className="p-3.5 text-slate-600 font-medium">
                          {order.customer.phone}
                        </td>

                        <td className="p-3.5 text-slate-700 max-w-xs">
                          <span className="font-semibold">{itemsCount} {itemsCount === 1 ? 'item' : 'items'}</span>
                          <span className="block text-[11px] text-slate-400 truncate">
                            {order.items.map(i => `${i.name} (×${i.quantity})`).join(', ')}
                          </span>
                        </td>

                        <td className="p-3.5 font-extrabold text-orange-600 text-sm">
                          ৳{(order.grandTotal || 0).toLocaleString()}
                        </td>

                        <td className="p-3.5">
                          <span className="font-semibold text-slate-700 block">{order.paymentMethod}</span>
                          <span className={`text-[10px] font-bold ${order.paymentStatus === 'Paid' ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {order.paymentStatus}
                          </span>
                        </td>

                        {/* Status Select inside Row */}
                        <td className="p-3.5">
                          <div className="relative inline-block">
                            <select
                              value={order.orderStatus}
                              disabled={statusUpdating === order.orderId}
                              onChange={e => handleUpdateStatus(order.orderId, e.target.value as any)}
                              className={`px-3 py-1.5 rounded-xl font-bold text-xs border cursor-pointer focus:outline-none transition-all ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="Processing">Processing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                            {statusUpdating === order.orderId && (
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600 absolute -right-5 top-1/2 -translate-y-1/2" />
                            )}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-bold px-3 py-1.5 rounded-xl transition-all inline-flex items-center gap-1.5 text-xs shadow-sm"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Details</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
              <span className="text-slate-500">
                Page <strong className="text-slate-900">{currentPage}</strong> of <strong className="text-slate-900">{totalPages}</strong> ({totalOrdersCount} Total Orders)
              </span>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 2: PRODUCT INVENTORY ────────────────────────────────────────── */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                <span>Product Inventory & Stock Management</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Total {products.length} products listed in your database
              </p>
            </div>

            <button
              onClick={() => setShowAddProductModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </div>

          {productsLoading ? (
            <div className="py-16 text-center text-slate-400 space-y-2">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
              <p className="text-xs font-semibold">Loading products catalog...</p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 rounded-2xl max-h-[600px] overflow-y-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px] sticky top-0 z-10">
                  <tr>
                    <th className="p-3.5">Product Title</th>
                    <th className="p-3.5">Brand</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Regular Price</th>
                    <th className="p-3.5">Sale Price</th>
                    <th className="p-3.5">Stock Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((p: any) => {
                    const currentStock = p.stock !== undefined ? p.stock : (p.stockCount ?? 10);
                    const isOutOfStock = currentStock <= 0 || p.availability === 'Out of Stock';

                    return (
                      <tr key={p.productId || p.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 max-w-xs truncate">
                          {p.name}
                          <span className="block text-[10px] text-slate-400 font-normal">
                            ID: {p.productId || p.id}
                          </span>
                        </td>
                        <td className="p-3.5 font-bold text-blue-600">{p.brand}</td>
                        <td className="p-3.5 uppercase text-slate-500">{p.category}</td>
                        <td className="p-3.5 text-slate-500 line-through">৳{(p.price || p.regularPrice || 0).toLocaleString()}</td>
                        <td className="p-3.5 font-extrabold text-orange-600">
                          ৳{(p.salePrice || p.discountPrice || p.price || 0).toLocaleString()}
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                            isOutOfStock
                              ? 'bg-red-100 text-red-700'
                              : currentStock <= 3
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {isOutOfStock ? 'Out of Stock' : `In Stock (${currentStock})`}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => handleDeleteProduct(p.productId || p.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 3: MONGODB ATLAS & DATABASE MANAGEMENT ────────────────────── */}
      {activeTab === 'database' && (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <Database className="w-6 h-6 text-emerald-600" />
              <span>MongoDB Atlas Database Integration</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Production database connection status, schema synchronization, and one-click data migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-600 uppercase tracking-wider">Connection Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                  stats.isDbConnected
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${stats.isDbConnected ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <span>{stats.isDbConnected ? 'Connected to MongoDB Atlas' : 'Local Fallback Mode'}</span>
                </span>
              </div>

              <div className="text-xs space-y-2 text-slate-700">
                <p><strong>Configured Database:</strong> <code>my_computer</code></p>
                <p><strong>Indexed Collections:</strong> <code>products</code>, <code>orders</code>, <code>users</code>, <code>counters</code></p>
                <p><strong>Order ID Sequence:</strong> Atomic sequential (e.g. <code>MC-10001</code>)</p>
              </div>

              <div className="pt-2">
                <button
                  disabled={seeding}
                  onClick={() => handleSeedDatabase(true)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  {seeding ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Syncing Catalog to MongoDB Atlas...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      <span>Sync All 164+ Products to MongoDB Atlas</span>
                    </>
                  )}
                </button>
              </div>

              {seedResult && (
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                  {seedResult}
                </div>
              )}
            </div>

            {/* Quick Setup Guide */}
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3 text-xs text-slate-700">
              <h4 className="font-extrabold text-sm text-blue-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>MongoDB Atlas Setup Summary</span>
              </h4>
              <p>To connect your MongoDB Atlas Cluster:</p>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-600 font-medium">
                <li>Create a free cluster at <strong>cloud.mongodb.com</strong>.</li>
                <li>In <em>Database Access</em>, create a database user (e.g. <code>db_user</code>).</li>
                <li>In <em>Network Access</em>, allow IP <code>0.0.0.0/0</code> (all IPs).</li>
                <li>Click <em>Connect &gt; Drivers</em> and copy the connection URI.</li>
                <li>Put the connection URI into your root <code>.env</code> file:
                  <div className="p-2 mt-1 rounded bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
                    MONGODB_URI=mongodb+srv-connection-string-from-atlas
                  </div>
                </li>
                <li>Click <strong>Sync All 164+ Products</strong> above to populate the database!</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: ORDER DETAILS ────────────────────────────────────────────── */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Order Details</span>
                <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
                  <span>{selectedOrder.orderId}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                    (STATUS_COLORS[selectedOrder.orderStatus] || STATUS_COLORS.Pending).bg
                  } ${(STATUS_COLORS[selectedOrder.orderStatus] || STATUS_COLORS.Pending).text}`}>
                    {selectedOrder.orderStatus}
                  </span>
                </h3>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Customer Information Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
              <h4 className="font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>CUSTOMER INFORMATION</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                <p><strong>Name:</strong> {selectedOrder.customer.name}</p>
                <p><strong>Phone:</strong> {selectedOrder.customer.phone}</p>
                <p><strong>Email:</strong> {selectedOrder.customer.email || 'N/A'}</p>
                <p><strong>District:</strong> {selectedOrder.delivery.district}</p>
                {selectedOrder.delivery.area && <p><strong>Area / Thana:</strong> {selectedOrder.delivery.area}</p>}
                <p className="sm:col-span-2"><strong>Full Address:</strong> {selectedOrder.delivery.address}</p>
                {selectedOrder.delivery.note && (
                  <p className="sm:col-span-2 text-blue-700 bg-blue-50 p-2 rounded-lg border border-blue-200">
                    <strong>Customer Note:</strong> {selectedOrder.delivery.note}
                  </p>
                )}
              </div>
            </div>

            {/* Order Items Table */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-blue-600" />
                <span>ORDERED PRODUCTS ({selectedOrder.items.length})</span>
              </h4>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                {selectedOrder.items.map((it, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-50">
                    <div className="flex items-center space-x-3 min-w-0">
                      <img src={it.image} alt="" className="w-12 h-12 object-contain rounded-xl bg-slate-50 p-1 border border-slate-200" />
                      <div className="min-w-0">
                        <h5 className="font-bold text-slate-900 truncate max-w-xs">{it.name}</h5>
                        <span className="text-[11px] text-slate-400">
                          Unit Price: ৳{it.unitPrice.toLocaleString()} × {it.quantity}
                        </span>
                      </div>
                    </div>
                    <span className="font-extrabold text-orange-600">
                      ৳{it.subtotal.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Summary */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span className="font-bold text-slate-800">৳{selectedOrder.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Charge ({selectedOrder.delivery.district}):</span>
                <span className="font-bold text-slate-800">৳{selectedOrder.deliveryCharge.toLocaleString()}</span>
              </div>
              {selectedOrder.discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Discount:</span>
                  <span>-৳{selectedOrder.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Grand Total:</span>
                <span className="text-orange-600 text-lg">৳{selectedOrder.grandTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                <span>Payment Method: <strong>{selectedOrder.paymentMethod}</strong> ({selectedOrder.paymentStatus})</span>
                <span>Date: {selectedOrder.createdAt ? new Date(selectedOrder.createdAt).toLocaleString() : ''}</span>
              </div>
            </div>

            {/* Quick Status Updater */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="font-bold text-xs text-slate-700 block">Update Order Status:</span>
              <div className="flex flex-wrap gap-2">
                {(['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] as const).map(st => (
                  <button
                    key={st}
                    onClick={() => handleUpdateStatus(selectedOrder.orderId, st)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs border transition-all ${
                      selectedOrder.orderStatus === st
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: ADD PRODUCT ──────────────────────────────────────────────── */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-extrabold text-base text-slate-900">Add New Catalog Product</h3>
              <button onClick={() => setShowAddProductModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  value={newProdName}
                  onChange={e => setNewProdName(e.target.value)}
                  placeholder="e.g. ASUS ROG Swift 360Hz Gaming Monitor"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Regular Price (BDT)</label>
                  <input
                    type="number"
                    required
                    value={newProdPrice}
                    onChange={e => setNewProdPrice(e.target.value)}
                    placeholder="75000"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Sale / Discount Price (BDT)</label>
                  <input
                    type="number"
                    value={newProdSalePrice}
                    onChange={e => setNewProdSalePrice(e.target.value)}
                    placeholder="70000"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold mb-1">Category</label>
                  <select
                    value={newProdCategory}
                    onChange={e => setNewProdCategory(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300"
                  >
                    <option value="desktop">Desktop</option>
                    <option value="laptop">Laptop</option>
                    <option value="monitor">Monitor</option>
                    <option value="component">Component</option>
                    <option value="camera">Camera</option>
                    <option value="networking">Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-1">Brand</label>
                  <select
                    value={newProdBrand}
                    onChange={e => setNewProdBrand(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300"
                  >
                    <option value="Asus">Asus</option>
                    <option value="Apple">Apple</option>
                    <option value="Dell">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Intel">Intel</option>
                    <option value="AMD">AMD</option>
                    <option value="LG">LG</option>
                    <option value="Samsung">Samsung</option>
                    <option value="EZVIZ">EZVIZ</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-1">Stock Count</label>
                  <input
                    type="number"
                    value={newProdStock}
                    onChange={e => setNewProdStock(e.target.value)}
                    placeholder="10"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow transition-all hover:scale-[1.01]"
              >
                Save & Publish to Database
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
