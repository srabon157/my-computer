import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS, MOCK_ORDERS } from '../../data/mockData';
import type { Product } from '../../types';
import { Logo } from '../common/Logo';
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  Plus,
  Trash2
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { addToast } = useStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'coupons'>('overview');
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [showAddModal, setShowAddModal] = useState(false);

  // Add Product Form State
  const [newProdName, setNewProdName] = useState('');
  const [newProdPrice, setNewProdPrice] = useState('');
  const [newProdCategory] = useState('laptop');
  const [newProdBrand, setNewProdBrand] = useState('Asus');

  const totalRevenue = MOCK_ORDERS.reduce((sum, o) => sum + o.total, 0);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName || !newProdPrice) return;

    const newProduct: Product = {
      id: `prod-${Math.floor(100 + Math.random() * 900)}`,
      name: newProdName,
      slug: newProdName.toLowerCase().replace(/\s+/g, '-'),
      brand: newProdBrand as any,
      category: newProdCategory as any,
      categoryName: newProdCategory.toUpperCase(),
      regularPrice: parseInt(newProdPrice) * 1.1,
      discountPrice: parseInt(newProdPrice),
      discountPercentage: 10,
      rating: 5.0,
      reviewCount: 1,
      stockStatus: 'In Stock',
      stockCount: 10,
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop'],
      shortSpecs: ['New Admin Product Added', 'Full Official Warranty'],
      specifications: { 'Basic Info': [{ label: 'Added', value: 'Today' }] },
      warranty: '2 Years Official Warranty',
      emiAvailable: true,
      reviews: [],
      questions: [],
      createdDate: new Date().toISOString()
    };

    setProductList([newProduct, ...productList]);
    addToast('Product Added!', `${newProdName.slice(0, 30)} added to catalog.`);
    setShowAddModal(false);
    setNewProdName('');
    setNewProdPrice('');
  };

  const handleDeleteProduct = (id: string) => {
    setProductList(prev => prev.filter(p => p.id !== id));
    addToast('Product Deleted', '', 'warning');
  };

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white border border-indigo-900/60 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="dark" />
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wider border border-indigo-500/40">
              System Admin Console
            </span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            My Computer Management Panel
          </h1>
          <p className="text-xs text-slate-300">
            Real-time sales monitoring, product inventory management & order dispatch control
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Revenue</span>
            <span className="text-xl font-extrabold text-slate-900">
              ৳{totalRevenue.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
            <ShoppingCart className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Orders</span>
            <span className="text-xl font-extrabold text-slate-900">
              {MOCK_ORDERS.length} Orders
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Active Products</span>
            <span className="text-xl font-extrabold text-slate-900">
              {productList.length} Items
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Registered Users</span>
            <span className="text-xl font-extrabold text-slate-900">
              1,420 Users
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6">
        <div className="flex space-x-3 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            Inventory Table
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'orders' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            Order Status Controller
          </button>
        </div>

        {/* Tab 1: Product Inventory */}
        {activeTab === 'overview' && (
          <div className="py-6 space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-2xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-900 font-bold uppercase">
                  <tr>
                    <th className="p-3">Product Name</th>
                    <th className="p-3">Brand</th>
                    <th className="p-3">Price (BDT)</th>
                    <th className="p-3">Stock Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {productList.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900 max-w-xs truncate">{p.name}</td>
                      <td className="p-3 font-bold text-blue-600">{p.brand}</td>
                      <td className="p-3 font-extrabold text-orange-500">৳{p.discountPrice.toLocaleString()}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                          {p.stockStatus} ({p.stockCount})
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Orders */}
        {activeTab === 'orders' && (
          <div className="py-6 space-y-4">
            <div className="space-y-4">
              {MOCK_ORDERS.map(o => (
                <div key={o.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{o.id} • {o.customerName} ({o.customerPhone})</h4>
                    <p className="text-[11px] text-slate-500">{o.shippingAddress}, {o.district}</p>
                    <span className="font-extrabold text-xs text-orange-500">Total: ৳{o.total.toLocaleString()} ({o.paymentMethod})</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">{o.orderStatus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-base text-slate-900">Add New Tech Product</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
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
                  <label className="block font-bold mb-1">Price (BDT)</label>
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
                  <label className="block font-bold mb-1">Brand</label>
                  <select
                    value={newProdBrand}
                    onChange={e => setNewProdBrand(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300"
                  >
                    <option value="Asus">Asus</option>
                    <option value="Apple">Apple</option>
                    <option value="Dell">Dell</option>
                    <option value="Intel">Intel</option>
                    <option value="AMD">AMD</option>
                    <option value="Hikvision">Hikvision</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow"
              >
                Save & Publish Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
