import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import { Logo } from '../common/Logo';
import { ShieldCheck, Plus, Package, DollarSign, Users, ShoppingBag, Eye, Edit } from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { language, addToast } = useStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders'>('overview');

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-6 md:p-8 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="dark" />
            <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Admin Portal</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {language === 'EN' ? 'Store Admin Console & Inventory' : 'অ্যাডমিন প্যানেল'}
          </h1>
          <p className="text-xs text-slate-400">
            Manage product catalog, check live BDT revenue metrics & monitor pending customer orders
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          {(['overview', 'products', 'orders'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Total Sales (Monthly)</span>
            <DollarSign className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-2xl font-extrabold text-slate-900">৳ 1,48,50,000</p>
          <span className="text-[10px] font-bold text-emerald-500">+14.2% from last month</span>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Active Products</span>
            <Package className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-extrabold text-slate-900">{PRODUCTS.length}</p>
          <span className="text-[10px] font-bold text-blue-500">In stock & listed</span>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Orders Processed</span>
            <ShoppingBag className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-2xl font-extrabold text-slate-900">842</p>
          <span className="text-[10px] font-bold text-orange-500">98% fulfillment rate</span>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Registered Users</span>
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-2xl font-extrabold text-slate-900">12,450</p>
          <span className="text-[10px] font-bold text-purple-500">Active customer accounts</span>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-base text-slate-900">Product Inventory Table</h3>
          <button
            onClick={() => addToast('Simulated Action', 'Add Product modal triggered in admin mode', 'info')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-bold border-y border-slate-200">
              <tr>
                <th className="p-3">Product Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price (BDT)</th>
                <th className="p-3">Stock Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {PRODUCTS.map(p => (
                <tr key={p.id} className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900 max-w-xs truncate">{p.name}</td>
                  <td className="p-3 text-slate-500 uppercase">{p.category}</td>
                  <td className="p-3 font-bold text-slate-900">৳{p.discountPrice.toLocaleString()}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      {p.stockStatus} ({p.stockCount})
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-2 text-slate-400">
                      <button className="hover:text-blue-500"><Eye className="w-4 h-4" /></button>
                      <button className="hover:text-orange-500"><Edit className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
