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
  EyeOff,
  Edit2,
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
  UserCheck,
  Users,
  Settings,
  Key,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Store,
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
  paymentNumber?: string;
  senderNumber?: string;
  trxId?: string;
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
  processingOrders?: number;
  shippedOrders?: number;
  deliveredOrders: number;
  cancelledOrders: number;
  totalProducts: number;
  lowStockProducts: number;
  totalUsers?: number;
  isDbConnected: boolean;
}

interface RegisteredUser {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
  createdAt: string;
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
  const { addToast, setCurrentView } = useStore();

  // Authentication state
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('mc_admin_token') || sessionStorage.getItem('mc_admin_token'));
  const [adminUser, setAdminUser] = useState<{ id?: string; email: string; name: string; username?: string; role?: string } | null>(null);
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Tabs
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'products' | 'users' | 'settings'>('overview');

  // Stats
  const [stats, setStats] = useState<AdminStats>({
    totalRevenue: 0,
    totalOrders: 0,
    pendingOrders: 0,
    confirmedOrders: 0,
    processingOrders: 0,
    shippedOrders: 0,
    deliveredOrders: 0,
    cancelledOrders: 0,
    totalProducts: 0,
    lowStockProducts: 0,
    totalUsers: 0,
    isDbConnected: false,
  });

  // Orders State
  const [orders, setOrders] = useState<ServerOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalOrdersCount, setTotalOrdersCount] = useState(0);

  // Order Details Modal
  const [selectedOrder, setSelectedOrder] = useState<ServerOrder | null>(null);
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);

  // Products State
  const [products, setProducts] = useState<any[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('all');

  // Add / Edit Product Modal State
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [productForm, setProductForm] = useState({
    name: '',
    slug: '',
    category: 'desktop',
    brand: 'Asus',
    price: '',
    salePrice: '',
    stock: '10',
    availability: 'In Stock',
    description: '',
    image: '',
  });
  const [productSubmitting, setProductSubmitting] = useState(false);

  // Users State
  const [users, setUsers] = useState<RegisteredUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [userSearch, setUserSearch] = useState('');

  // Settings State
  const [settingsForm, setSettingsForm] = useState({
    username: '',
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [settingsMessage, setSettingsMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Database Seed State
  const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<string | null>(null);

  // Immediate Re-login on Leaving: Clear session token on unmount or navigation away
  useEffect(() => {
    const handleExit = () => {
      sessionStorage.removeItem('mc_admin_token');
      localStorage.removeItem('mc_admin_token');
    };
    window.addEventListener('beforeunload', handleExit);
    window.addEventListener('pagehide', handleExit);
    return () => {
      handleExit();
      window.removeEventListener('beforeunload', handleExit);
      window.removeEventListener('pagehide', handleExit);
    };
  }, []);

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
            setSettingsForm(prev => ({
              ...prev,
              username: data.admin.username || 'admin',
              name: data.admin.name || 'Store Administrator',
              email: data.admin.email || '',
            }));
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
        body: JSON.stringify({
          username: loginIdentifier,
          email: loginIdentifier,
          password: loginPassword,
        }),
      });
      // Safely parse JSON, handling empty or invalid responses
      const text = await res.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        setLoginError('Invalid server response');
        return;
      }

      if (!res.ok || !data.success) {
        setLoginError(data.error || 'Authentication failed. Please verify credentials.');
        return;
      }

      sessionStorage.setItem('mc_admin_token', data.token);
      localStorage.removeItem('mc_admin_token');
      setToken(data.token);
      setAdminUser(data.admin);
      setSettingsForm(prev => ({
        ...prev,
        username: data.admin.username || 'admin',
        name: data.admin.name || 'Store Administrator',
        email: data.admin.email || '',
      }));
      addToast('Welcome Admin!', `Signed in as ${data.admin.username || data.admin.name}`);
    } catch (err: any) {
      setLoginError(err.message || 'Connection to authentication service failed.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('mc_admin_token');
    localStorage.removeItem('mc_admin_token');
    setToken(null);
    setAdminUser(null);
    setLoginIdentifier('');
    setLoginPassword('');
    setShowPassword(false);
    setLoginError(null);
  };

  /* ── 3. Fetch Orders ───────────────────────────────────────────────────── */
  const fetchOrders = useCallback(async () => {
    if (!token) return;
    setOrdersLoading(true);

    try {
      const params = new URLSearchParams({
        page: String(currentPage),
        limit: '15',
        sort: sortBy,
      });
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (statusFilter !== 'All') params.append('status', statusFilter);

      const res = await fetch(`/api/orders?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success && Array.isArray(data.orders)) {
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
            image: it.image || '/images/placeholder.webp',
            quantity: it.quantity || 1,
            unitPrice: it.unitPrice || it.price || 0,
            subtotal: it.subtotal || (it.unitPrice || it.price || 0) * (it.quantity || 1),
          })),
          subtotal: o.subtotal || 0,
          deliveryCharge: o.deliveryCharge !== undefined ? o.deliveryCharge : (o.shippingCost || 70),
          discount: o.discount || 0,
          grandTotal: o.grandTotal || o.total || 0,
          paymentMethod: o.paymentMethod || 'Cash on Delivery',
          paymentNumber: o.paymentNumber || '',
          senderNumber: o.senderNumber || '',
          trxId: o.trxId || '',
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
      const res = await fetch('/api/products?limit=200');
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

  /* ── 6. Fetch Users ────────────────────────────────────────────────────── */
  const fetchUsers = useCallback(async () => {
    if (!token) return;
    setUsersLoading(true);
    try {
      const params = new URLSearchParams({ limit: '50' });
      if (userSearch.trim()) params.append('search', userSearch.trim());

      const res = await fetch(`/api/admin/users?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.users)) {
        setUsers(data.users);
      }
    } catch (err) {
      console.warn('[Admin fetchUsers error]:', err);
    } finally {
      setUsersLoading(false);
    }
  }, [token, userSearch]);

  useEffect(() => {
    if (token) {
      fetchOrders();
      fetchStats();
      fetchProducts();
      fetchUsers();
    }
  }, [token, fetchOrders, fetchStats, fetchProducts, fetchUsers]);

  /* ── 7. Update Order Status ────────────────────────────────────────────── */
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

  /* ── 8. Open Add Product Modal ─────────────────────────────────────────── */
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      slug: '',
      category: 'desktop',
      brand: 'Asus',
      price: '',
      salePrice: '',
      stock: '10',
      availability: 'In Stock',
      description: '',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
    });
    setShowProductModal(true);
  };

  /* ── 9. Open Edit Product Modal ────────────────────────────────────────── */
  const handleOpenEditProduct = (prod: any) => {
    setEditingProduct(prod);
    setProductForm({
      name: prod.name || '',
      slug: prod.slug || '',
      category: prod.category || 'desktop',
      brand: prod.brand || 'Other',
      price: String(prod.price || prod.regularPrice || ''),
      salePrice: String(prod.salePrice || prod.discountPrice || prod.price || ''),
      stock: String(prod.stock ?? prod.stockCount ?? 10),
      availability: prod.availability || 'In Stock',
      description: prod.description || '',
      image: prod.image || (prod.images && prod.images[0]) || '',
    });
    setShowProductModal(true);
  };

  /* ── 10. Save Product (Create or Update) ────────────────────────────────── */
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !productForm.name || !productForm.price) {
      addToast('Validation Error', 'Product name and price are required.', 'warning');
      return;
    }

    setProductSubmitting(true);
    try {
      const isEdit = !!editingProduct;
      const targetId = editingProduct ? (editingProduct.productId || editingProduct.id || editingProduct._id) : null;
      const url = isEdit ? `/api/products/${targetId}` : '/api/products';
      const method = isEdit ? 'PUT' : 'POST';

      const payload = {
        name: productForm.name.trim(),
        slug: productForm.slug.trim() || productForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
        category: productForm.category,
        brand: productForm.brand.trim(),
        price: Number(productForm.price),
        salePrice: Number(productForm.salePrice || productForm.price),
        stock: Number(productForm.stock || 10),
        availability: productForm.availability,
        description: productForm.description.trim(),
        image: productForm.image.trim() || 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
        images: [productForm.image.trim() || 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop'],
      };

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        addToast(
          isEdit ? 'Product Updated!' : 'Product Added!',
          `${payload.name} saved successfully.`
        );
        setShowProductModal(false);
        fetchProducts();
        fetchStats();
      } else {
        addToast('Error', data.error || 'Failed to save product', 'warning');
      }
    } catch (err: any) {
      addToast('Error', err.message || 'Product save failed', 'warning');
    } finally {
      setProductSubmitting(false);
    }
  };

  /* ── 11. Delete Product ─────────────────────────────────────────────────── */
  const handleDeleteProduct = async (productId: string) => {
    if (!token) return;
    if (!window.confirm('Are you sure you want to permanently delete this product?')) return;

    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success) {
        setProducts(prev => prev.filter(p => p.productId !== productId && p.id !== productId && p._id !== productId));
        addToast('Product Deleted', `ID: ${productId}`, 'info');
        fetchStats();
      } else {
        addToast('Error', data.error || 'Failed to delete product', 'warning');
      }
    } catch (err: any) {
      addToast('Error', err.message || 'Delete request failed', 'warning');
    }
  };

  /* ── 12. Update Admin Credentials ──────────────────────────────────────── */
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsMessage(null);

    if (settingsForm.newPassword) {
      if (!settingsForm.currentPassword) {
        setSettingsMessage({ type: 'error', text: 'Current password is required to change password.' });
        return;
      }
      if (settingsForm.newPassword !== settingsForm.confirmPassword) {
        setSettingsMessage({ type: 'error', text: 'New password and confirmation do not match.' });
        return;
      }
      if (settingsForm.newPassword.length < 6) {
        setSettingsMessage({ type: 'error', text: 'New password must be at least 6 characters.' });
        return;
      }
    }

    setSettingsSaving(true);
    try {
      const res = await fetch('/api/admin/credentials', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: settingsForm.username,
          name: settingsForm.name,
          email: settingsForm.email,
          currentPassword: settingsForm.currentPassword,
          newPassword: settingsForm.newPassword,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSettingsMessage({ type: 'success', text: 'Admin credentials updated successfully!' });
        addToast('Settings Saved', 'Admin account credentials updated.');
        setSettingsForm(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }));
        if (data.admin) setAdminUser(data.admin);
      } else {
        setSettingsMessage({ type: 'error', text: data.error || 'Failed to update credentials' });
      }
    } catch (err: any) {
      setSettingsMessage({ type: 'error', text: err.message || 'Request failed' });
    } finally {
      setSettingsSaving(false);
    }
  };

  /* ── 13. Database Sync / Seed ───────────────────────────────────────────── */
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

  // Filtered products list for product management tab
  const filteredProductsList = products.filter(p => {
    const matchesSearch =
      !productSearch.trim() ||
      (p.name && p.name.toLowerCase().includes(productSearch.toLowerCase())) ||
      (p.brand && p.brand.toLowerCase().includes(productSearch.toLowerCase())) ||
      (p.productId && p.productId.toLowerCase().includes(productSearch.toLowerCase()));

    const matchesCategory =
      productCategoryFilter === 'all' ||
      p.category === productCategoryFilter ||
      p.subcategory === productCategoryFilter;

    return matchesSearch && matchesCategory;
  });

  /* ── Render: Login Screen if not authenticated ─────────────────────────── */
  if (!token) {
    return (
      <div className="py-12 max-w-md mx-auto animate-fadeIn px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
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

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Admin Username or Email
              </label>
              <input
                type="text"
                required
                value={loginIdentifier}
                onChange={e => setLoginIdentifier(e.target.value)}
                placeholder="admin or admin@mycomputer.com"
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-medium text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password (পাসওয়ার্ড)
              </label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="admin_login_password"
                  autoComplete="new-password"
                  required
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-3.5 pr-12 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-medium text-sm transition-all"
                />
                
                {/* Eye Icon button inside input: Touch click & mouse hover */}
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(prev => !prev)}
                  onMouseEnter={() => setShowPassword(true)}
                  onMouseLeave={() => setShowPassword(false)}
                  title={showPassword ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখুন'}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer flex items-center justify-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Eye className="w-5 h-5 text-slate-500 hover:text-blue-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <p className="font-bold text-slate-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Protected Management Console</span>
              </p>
              <p>Default admin login is configured via environment variables. You can update username &amp; password anytime from Settings.</p>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
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
    <div className="py-8 space-y-8 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <Logo size="sm" variant="dark" />
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-500/30 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{adminUser?.username || 'admin'} ({adminUser?.role || 'super_admin'})</span>
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
            My Computer Management Portal
          </h1>
          <p className="text-xs text-slate-400">
            Real-time customer orders, automated stock management, catalog control &amp; admin configuration
          </p>
        </div>

        {/* Navigation Tabs, Exit Store & Logout */}
        <div className="flex flex-wrap items-center gap-2 max-w-full">
          <div className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'overview' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'orders' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Orders ({totalOrdersCount || orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'products' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Products ({products.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'users' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Users ({stats.totalUsers || users.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'settings' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                handleLogout();
                setCurrentView('home');
              }}
              title="Exit Admin & Return to Store"
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors text-xs font-bold flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Store className="w-3.5 h-3.5 text-blue-400" />
              <span>Exit Admin</span>
            </button>

            <button
              onClick={handleLogout}
              title="Log Out Immediately"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-950/40 text-slate-400 hover:text-red-400 border border-slate-700 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── TAB 1: DASHBOARD OVERVIEW ────────────────────────────────────────── */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Total Revenue</span>
                <span className="text-xl font-black text-slate-900">
                  ৳{(stats.totalRevenue || 0).toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">Active Gross Sales</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Total Orders</span>
                <span className="text-xl font-black text-slate-900">
                  {stats.totalOrders || orders.length || 0}
                </span>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">
                  {stats.pendingOrders || 0} Pending Action
                </span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Total Products</span>
                <span className="text-xl font-black text-slate-900">
                  {stats.totalProducts || products.length}
                </span>
                <span className="text-[10px] text-purple-600 font-bold block mt-0.5">
                  {stats.lowStockProducts || 0} Low In Stock
                </span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Total Customers</span>
                <span className="text-xl font-black text-slate-900">
                  {stats.totalUsers || users.length || 1}
                </span>
                <span className="text-[10px] text-amber-600 font-bold block mt-0.5">Registered Accounts</span>
              </div>
            </div>
          </div>

          {/* Status Breakdown Pills */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Order Pipeline Status</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { status: 'Pending', count: stats.pendingOrders || 0, color: 'text-amber-700 bg-amber-50 border-amber-200' },
                { status: 'Confirmed', count: stats.confirmedOrders || 0, color: 'text-blue-700 bg-blue-50 border-blue-200' },
                { status: 'Processing', count: stats.processingOrders || 0, color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
                { status: 'Shipped', count: stats.shippedOrders || 0, color: 'text-purple-700 bg-purple-50 border-purple-200' },
                { status: 'Delivered', count: stats.deliveredOrders || 0, color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
                { status: 'Cancelled', count: stats.cancelledOrders || 0, color: 'text-red-700 bg-red-50 border-red-200' },
              ].map(item => (
                <div key={item.status} className={`p-3 rounded-xl border ${item.color} text-center`}>
                  <div className="text-lg font-black">{item.count}</div>
                  <div className="text-[11px] font-bold">{item.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Overview with Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">Recent Customer Orders</h3>
                <p className="text-xs text-slate-400">Latest orders placed with quick status update</p>
              </div>
              <button
                onClick={() => setActiveTab('orders')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>View All Orders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Items</th>
                    <th className="p-4">Total Amount</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Quick Update</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {orders.slice(0, 5).map(order => (
                    <tr key={order.orderId} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono font-bold text-blue-600">{order.orderId}</span>
                        <div className="text-[10px] text-slate-400">
                          {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Recent'}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900">{order.customer.name}</div>
                        <div className="text-[11px] text-slate-500">{order.customer.phone}</div>
                      </td>
                      <td className="p-4">
                        <span>{order.items.length} items</span>
                        <div className="text-[10px] text-slate-400 truncate max-w-[150px]">
                          {order.items[0]?.name || ''}
                        </div>
                      </td>
                      <td className="p-4 font-bold text-slate-900">
                        ৳{order.grandTotal.toLocaleString()}
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                          (STATUS_COLORS[order.orderStatus] || STATUS_COLORS.Pending).bg
                        } ${(STATUS_COLORS[order.orderStatus] || STATUS_COLORS.Pending).text} ${
                          (STATUS_COLORS[order.orderStatus] || STATUS_COLORS.Pending).border
                        }`}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <select
                          value={order.orderStatus}
                          disabled={statusUpdating === order.orderId}
                          onChange={e => handleUpdateStatus(order.orderId, e.target.value as any)}
                          className="text-xs p-1.5 rounded-lg border border-slate-300 bg-white font-medium focus:outline-none focus:border-blue-500"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: ORDER MANAGEMENT ──────────────────────────────────────────── */}
      {activeTab === 'orders' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Controls Bar: Search, Filters, Refresh */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search by Order ID, Customer, Phone, or City..."
                  value={searchQuery}
                  onChange={e => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Status:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {['All', 'Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map(st => (
                    <button
                      key={st}
                      onClick={() => {
                        setStatusFilter(st);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        statusFilter === st
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => fetchOrders()}
                  disabled={ordersLoading}
                  className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold flex items-center gap-1 ml-auto"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${ordersLoading ? 'animate-spin text-blue-600' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Order ID &amp; Date</th>
                    <th className="p-4">Customer Details</th>
                    <th className="p-4">Destination</th>
                    <th className="p-4">Products</th>
                    <th className="p-4">Total Amount</th>
                    <th className="p-4">Order Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {ordersLoading ? (
                    <tr>
                      <td colSpan={7} className="p-10 text-center text-slate-400">
                        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                        <span>Loading orders...</span>
                      </td>
                    </tr>
                  ) : orders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-10 text-center text-slate-400">
                        <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-30" />
                        <span>No orders found matching the filter criteria.</span>
                      </td>
                    </tr>
                  ) : (
                    orders.map(order => (
                      <tr key={order.orderId} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4">
                          <span className="font-mono font-bold text-blue-600 text-sm block">
                            {order.orderId}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3" />
                            {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Recent'}
                          </span>
                        </td>

                        <td className="p-4">
                          <div className="font-bold text-slate-900">{order.customer.name}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{order.customer.phone}</div>
                          {order.customer.email && (
                            <div className="text-[10px] text-slate-400">{order.customer.email}</div>
                          )}
                        </td>

                        <td className="p-4">
                          <span className="font-bold text-slate-800">{order.delivery.district}</span>
                          <div className="text-[11px] text-slate-400 max-w-[160px] truncate">
                            {order.delivery.address}
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">
                              {order.items.length} items
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 max-w-[180px] truncate mt-0.5">
                            {order.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}
                          </div>
                        </td>

                        <td className="p-4">
                          <span className="font-extrabold text-slate-900 text-sm">
                            ৳{order.grandTotal.toLocaleString()}
                          </span>
                          <span className="block text-[10px] text-slate-400 font-medium">
                            {order.paymentMethod}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border inline-block ${
                            (STATUS_COLORS[order.orderStatus] || STATUS_COLORS.Pending).bg
                          } ${(STATUS_COLORS[order.orderStatus] || STATUS_COLORS.Pending).text} ${
                            (STATUS_COLORS[order.orderStatus] || STATUS_COLORS.Pending).border
                          }`}>
                            {order.orderStatus}
                          </span>
                        </td>

                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              title="View Details"
                              className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <select
                              value={order.orderStatus}
                              disabled={statusUpdating === order.orderId}
                              onChange={e => handleUpdateStatus(order.orderId, e.target.value as any)}
                              className="text-xs p-1.5 rounded-lg border border-slate-300 bg-white font-medium focus:outline-none focus:border-blue-500"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="Processing">Processing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>
                  Page {currentPage} of {totalPages} ({totalOrdersCount} orders total)
                </span>
                <div className="flex items-center gap-1">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="p-1.5 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-100"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="p-1.5 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-100"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── TAB 3: PRODUCT MANAGEMENT (CRUD) ─────────────────────────────────── */}
      {activeTab === 'products' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Product Header & Filters */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search products by title, brand, or code..."
                  value={productSearch}
                  onChange={e => setProductSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                />
              </div>

              <select
                value={productCategoryFilter}
                onChange={e => setProductCategoryFilter(e.target.value)}
                className="text-xs p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="desktop">Desktop PC</option>
                <option value="laptop">Laptop</option>
                <option value="component">Component</option>
                <option value="monitor">Monitor</option>
                <option value="security">Security &amp; CCTV</option>
                <option value="networking">Networking</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            <button
              onClick={handleOpenAddProduct}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Item &amp; Image</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Brand</th>
                    <th className="p-4">Regular Price</th>
                    <th className="p-4">Sale Price</th>
                    <th className="p-4">Stock</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {productsLoading ? (
                    <tr>
                      <td colSpan={8} className="p-10 text-center text-slate-400">
                        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                        <span>Loading catalog inventory...</span>
                      </td>
                    </tr>
                  ) : filteredProductsList.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-10 text-center text-slate-400">
                        <Package className="w-8 h-8 mx-auto mb-2 opacity-30" />
                        <span>No products found matching your search.</span>
                      </td>
                    </tr>
                  ) : (
                    filteredProductsList.slice(0, 50).map(p => (
                      <tr key={p.productId || p.id || p._id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.image || (p.images && p.images[0]) || '/images/placeholder.webp'}
                              alt=""
                              className="w-10 h-10 object-contain rounded-lg border border-slate-100 bg-white p-0.5"
                            />
                            <div>
                              <div className="font-bold text-slate-900 max-w-[220px] truncate">
                                {p.name}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono">
                                {p.productId || p.id}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="p-4 font-bold text-slate-600 capitalize">
                          {p.category || 'desktop'}
                        </td>

                        <td className="p-4 font-bold text-slate-900">
                          {p.brand || 'Other'}
                        </td>

                        <td className="p-4 text-slate-400 line-through">
                          ৳{(p.price || p.regularPrice || 0).toLocaleString()}
                        </td>

                        <td className="p-4 font-extrabold text-blue-600 text-sm">
                          ৳{(p.salePrice || p.discountPrice || p.price || 0).toLocaleString()}
                        </td>

                        <td className="p-4 font-bold">
                          <span className={`px-2 py-0.5 rounded-md text-[11px] ${
                            (p.stock ?? p.stockCount ?? 10) <= 3
                              ? 'bg-red-50 text-red-600 border border-red-200'
                              : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                          }`}>
                            {p.stock ?? p.stockCount ?? 10} units
                          </span>
                        </td>

                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                            p.availability === 'Out of Stock'
                              ? 'bg-red-50 text-red-700 border-red-200'
                              : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          }`}>
                            {p.availability || 'In Stock'}
                          </span>
                        </td>

                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => handleOpenEditProduct(p)}
                              title="Edit Product"
                              className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(p.productId || p.id || p._id)}
                              title="Delete Product"
                              className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 4: USER MANAGEMENT ───────────────────────────────────────────── */}
      {activeTab === 'users' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">Registered Users &amp; Customers</h3>
              <p className="text-xs text-slate-400">View customer accounts registered via User Dashboard</p>
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search user by name or email..."
                value={userSearch}
                onChange={e => setUserSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Registration Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {usersLoading ? (
                    <tr>
                      <td colSpan={5} className="p-10 text-center text-slate-400">
                        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                        <span>Loading user directory...</span>
                      </td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-10 text-center text-slate-400">
                        <Users className="w-8 h-8 mx-auto mb-2 opacity-30" />
                        <span>No registered user accounts found.</span>
                      </td>
                    </tr>
                  ) : (
                    users.map(u => (
                      <tr key={u._id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">
                          {u.name}
                        </td>
                        <td className="p-4 font-mono text-slate-600">
                          {u.email}
                        </td>
                        <td className="p-4 font-mono text-slate-500">
                          {u.phone || 'N/A'}
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                            u.role === 'admin'
                              ? 'bg-purple-50 text-purple-700 border-purple-200'
                              : 'bg-blue-50 text-blue-700 border-blue-200'
                          }`}>
                            {u.role || 'user'}
                          </span>
                        </td>
                        <td className="p-4 text-slate-400">
                          {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'Active'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 5: SETTINGS & DATABASE MANAGEMENT ────────────────────────────── */}
      {activeTab === 'settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn">
          {/* Admin Credentials Update Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-200 mb-2">
                <Key className="w-3.5 h-3.5" />
                <span>Security Configuration</span>
              </div>
              <h3 className="font-extrabold text-xl text-slate-900">Admin Account Credentials</h3>
              <p className="text-xs text-slate-500">
                Update your login username, administrator name, and account password
              </p>
            </div>

            {settingsMessage && (
              <div className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 ${
                settingsMessage.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {settingsMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                )}
                <span>{settingsMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={settingsForm.username}
                    onChange={e => setSettingsForm({ ...settingsForm, username: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    required
                    value={settingsForm.name}
                    onChange={e => setSettingsForm({ ...settingsForm, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={settingsForm.email}
                  onChange={e => setSettingsForm({ ...settingsForm, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 block mb-3">Change Password (Optional)</span>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={settingsForm.currentPassword}
                      onChange={e => setSettingsForm({ ...settingsForm, currentPassword: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={settingsForm.newPassword}
                        onChange={e => setSettingsForm({ ...settingsForm, newPassword: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={settingsForm.confirmPassword}
                        onChange={e => setSettingsForm({ ...settingsForm, confirmPassword: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={settingsSaving}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {settingsSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving Credentials...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Save Account Settings</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Database Operations & Diagnostics Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200 mb-2">
                <Database className="w-3.5 h-3.5" />
                <span>MongoDB Operations</span>
              </div>
              <h3 className="font-extrabold text-xl text-slate-900">Database Synchronization</h3>
              <p className="text-xs text-slate-500">
                Sync full 164+ product catalog into MongoDB Atlas collections
              </p>
            </div>

            {/* Status indicator */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              stats.isDbConnected
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                : 'bg-amber-50/70 border-amber-200 text-amber-900'
            }`}>
              <Database className={`w-5 h-5 ${stats.isDbConnected ? 'text-emerald-600' : 'text-amber-600'}`} />
              <div>
                <span className="font-bold text-xs block">
                  {stats.isDbConnected ? 'MongoDB Atlas Cluster Connected' : 'Local Fallback Mode Active'}
                </span>
                <span className="text-[11px] opacity-80 block">
                  {stats.isDbConnected
                    ? 'All products and orders are persisted live in Atlas.'
                    : 'Atlas IP Whitelist pending. You can still manage catalog locally.'}
                </span>
              </div>
            </div>

            {/* Sync actions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Catalog Actions</h4>
              <button
                onClick={() => handleSeedDatabase(false)}
                disabled={seeding}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {seeding ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Synchronizing Catalog with MongoDB...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Sync All 164+ Products to MongoDB</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleSeedDatabase(true)}
                disabled={seeding}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Force Overwrite &amp; Reseed All Products</span>
              </button>

              {seedResult && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs">
                  {seedResult}
                </div>
              )}
            </div>

            {/* Atlas Setup Guide */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-2 text-xs text-slate-700">
              <h4 className="font-extrabold text-blue-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>MongoDB Atlas Setup Checklist</span>
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-slate-600 font-medium text-[11px]">
                <li>In MongoDB Atlas, navigate to <strong>Network Access</strong>.</li>
                <li>Ensure IP <code>0.0.0.0/0</code> is added so connections from all ISPs pass TLS handshake.</li>
                <li>In <strong>Database Access</strong>, verify user <code>mycomputer_admin</code> exists.</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: ADD / EDIT PRODUCT ────────────────────────────────────────── */}
      {showProductModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-xl max-h-[90vh] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {editingProduct ? 'Update Product' : 'Catalog Management'}
                </span>
                <h3 className="font-extrabold text-xl text-slate-900">
                  {editingProduct ? 'Edit Existing Product' : 'Add New Product to Database'}
                </h3>
              </div>
              <button
                onClick={() => setShowProductModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                  placeholder="e.g. Intel Core i5-12400F Gaming Desktop"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={productForm.category}
                    onChange={e => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="desktop">Desktop PC</option>
                    <option value="laptop">Laptop</option>
                    <option value="component">Component</option>
                    <option value="monitor">Monitor</option>
                    <option value="security">Security &amp; CCTV</option>
                    <option value="networking">Networking</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brand *
                  </label>
                  <input
                    type="text"
                    required
                    value={productForm.brand}
                    onChange={e => setProductForm({ ...productForm, brand: e.target.value })}
                    placeholder="e.g. Asus, Intel, MSI"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Regular Price (৳) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={productForm.price}
                    onChange={e => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="25000"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sale Price (৳)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={productForm.salePrice}
                    onChange={e => setProductForm({ ...productForm, salePrice: e.target.value })}
                    placeholder="22500"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={productForm.stock}
                    onChange={e => setProductForm({ ...productForm, stock: e.target.value })}
                    placeholder="10"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  value={productForm.image}
                  onChange={e => setProductForm({ ...productForm, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={productForm.description}
                  onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                  placeholder="Brief specifications, warranty, or description..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowProductModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={productSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold shadow flex items-center gap-1.5"
                >
                  {productSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>{editingProduct ? 'Save Changes' : 'Create Product'}</span>
                </button>
              </div>
            </form>
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
                  } ${(STATUS_COLORS[selectedOrder.orderStatus] || STATUS_COLORS.Pending).text} ${
                    (STATUS_COLORS[selectedOrder.orderStatus] || STATUS_COLORS.Pending).border
                  }`}>
                    {selectedOrder.orderStatus}
                  </span>
                </h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Status Update Bar */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-700">Update Order Status:</span>
              <div className="flex flex-wrap gap-1.5">
                {(['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] as const).map(st => (
                  <button
                    key={st}
                    disabled={statusUpdating === selectedOrder.orderId || selectedOrder.orderStatus === st}
                    onClick={() => handleUpdateStatus(selectedOrder.orderId, st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedOrder.orderStatus === st
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer & Delivery Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                  Customer Details
                </span>
                <p className="font-bold text-slate-900 text-sm">{selectedOrder.customer.name}</p>
                <p className="text-slate-600">Phone: <span className="font-mono font-bold text-slate-800">{selectedOrder.customer.phone}</span></p>
                {selectedOrder.customer.email && (
                  <p className="text-slate-500">Email: {selectedOrder.customer.email}</p>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                  Shipping Destination
                </span>
                <p className="font-bold text-slate-900">{selectedOrder.delivery.district}</p>
                <p className="text-slate-600">{selectedOrder.delivery.address}</p>
                {selectedOrder.delivery.note && (
                  <p className="text-amber-700 font-medium">Note: {selectedOrder.delivery.note}</p>
                )}
              </div>
            </div>

            {/* Payment & Verification Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">
                Payment Verification (পেমেন্ট তথ্য)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-slate-500 block">Payment Method:</span>
                  <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mt-0.5">
                    {selectedOrder.paymentMethod}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Payment Status:</span>
                  <span className={`inline-block font-bold px-2 py-0.5 rounded text-xs mt-0.5 ${
                    selectedOrder.paymentStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedOrder.paymentStatus || 'Pending'}
                  </span>
                </div>
                {selectedOrder.senderNumber && (
                  <div>
                    <span className="text-slate-500 block">Customer Sender Number:</span>
                    <span className="font-mono font-bold text-slate-800 text-sm mt-0.5 block">
                      {selectedOrder.senderNumber}
                    </span>
                  </div>
                )}
                {selectedOrder.trxId && (
                  <div>
                    <span className="text-slate-500 block">Transaction ID (TrxID):</span>
                    <span className="font-mono font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200 text-sm inline-block mt-0.5">
                      {selectedOrder.trxId}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Purchased Products ({selectedOrder.items.length})
              </h4>
              <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                {selectedOrder.items.map((it, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between gap-3 bg-white">
                    <div className="flex items-center gap-3">
                      <img
                        src={it.image || '/images/placeholder.webp'}
                        alt=""
                        className="w-12 h-12 object-contain rounded-lg border border-slate-100 bg-white p-1"
                      />
                      <div>
                        <p className="font-bold text-xs text-slate-900 line-clamp-1">{it.name}</p>
                        <p className="text-[11px] text-slate-400">
                          ৳{it.unitPrice.toLocaleString()} × {it.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-extrabold text-sm text-slate-900">
                      ৳{it.subtotal.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Financial Summary */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span className="font-bold">৳{selectedOrder.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Charge:</span>
                <span className="font-bold">৳{selectedOrder.deliveryCharge.toLocaleString()}</span>
              </div>
              {selectedOrder.discount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Discount:</span>
                  <span className="font-bold">-৳{selectedOrder.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-2 flex justify-between font-extrabold text-sm text-slate-900">
                <span>Total Amount:</span>
                <span className="text-blue-600 font-black">৳{selectedOrder.grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
