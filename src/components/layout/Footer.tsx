import React from 'react';
import { useStore } from '../../context/StoreContext';
import { STORE_LOCATIONS } from '../../data/mockData';
import { Logo } from '../common/Logo';
import { useStaggerReveal, useScrollReveal } from '../../hooks/useScrollReveal';
import {
  PhoneCall,
  Mail,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  Clock,
  ChevronRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, setFilters } = useStore();
  const { containerRef: valueRef, inView: valueInView } = useStaggerReveal<HTMLDivElement>(4);
  const { ref: colRef, inView: colInView } = useScrollReveal<HTMLDivElement>();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* 1. Value Proposition Banner — staggered */}
        <div ref={valueRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80">
          <div className={`stagger-item ${valueInView ? 'in-view' : ''} flex items-center space-x-4`}>
            <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">100% Genuine Products</h4>
              <p className="text-xs text-slate-400">Official Brand Warranty</p>
            </div>
          </div>

          <div className={`stagger-item ${valueInView ? 'in-view' : ''} flex items-center space-x-4`}>
            <div className="p-3 rounded-xl bg-orange-600/20 text-orange-400 hover:scale-110 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Superfast BD Delivery</h4>
              <p className="text-xs text-slate-400">24h Dhaka, 48h Outside</p>
            </div>
          </div>

          <div className={`stagger-item ${valueInView ? 'in-view' : ''} flex items-center space-x-4`}>
            <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">0% EMI Facility</h4>
              <p className="text-xs text-slate-400">Up to 36 Months EMI</p>
            </div>
          </div>

          <div className={`stagger-item ${valueInView ? 'in-view' : ''} flex items-center space-x-4`}>
            <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 hover:scale-110 transition-transform">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Easy Return Policy</h4>
              <p className="text-xs text-slate-400">7 Days Replacement</p>
            </div>
          </div>
        </div>

        {/* 2. Main Footer Columns */}
        <div ref={colRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 transition-all duration-700 ${colInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <Logo size="lg" variant="dark" showTagline={true} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              My Computer is Bangladesh’s leading online technology marketplace. We provide top-tier Gaming Laptops, Custom PC Components, Apple MacBooks, Smart TVs, Inverter ACs, and CCTV Security Systems with unmatched official warranty support.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-white">Hotline: 16789 / +880 9678-000111</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@mycomputer.com.bd</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Everyday: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Categories */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-orange-400">
              Top Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setFilters(p => ({ ...p, category: 'laptop' })); setCurrentView('shop'); }} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Gaming Laptops
                </button>
              </li>
              <li>
                <button onClick={() => { setFilters(p => ({ ...p, category: 'processor' })); setCurrentView('shop'); }} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Intel & Ryzen Processors
                </button>
              </li>
              <li>
                <button onClick={() => { setFilters(p => ({ ...p, category: 'graphics-card' })); setCurrentView('shop'); }} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> NVIDIA RTX Graphics Cards
                </button>
              </li>
              <li>
                <button onClick={() => { setFilters(p => ({ ...p, category: 'monitor' })); setCurrentView('shop'); }} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> 240Hz OLED Monitors
                </button>
              </li>
              <li>
                <button onClick={() => { setFilters(p => ({ ...p, category: 'tv-appliance' })); setCurrentView('shop'); }} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Smart OLED & QLED TVs
                </button>
              </li>
              <li>
                <button onClick={() => { setFilters(p => ({ ...p, category: 'networking' })); setCurrentView('shop'); }} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Networking & Wi-Fi Routers
                </button>
              </li>
              <li>
                <button onClick={() => { setFilters(p => ({ ...p, category: 'onu-device' })); setCurrentView('shop'); }} className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors text-emerald-400 font-medium">
                  <ChevronRight className="w-3 h-3 text-emerald-600" /> ONU / ONT Fiber Devices
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('pc-builder')} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors font-bold text-blue-400">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> Custom PC Builder Tool
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-orange-400">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentView('order-tracking')} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Track Your Order
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('store-locator')} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Store Locations in BD
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('user-dashboard')} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Warranty Policy & Claims
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('contact')} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Contact Support Team
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> About My Computer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: BD Physical Store Hubs */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-orange-400">
              Store Branches
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              {STORE_LOCATIONS.slice(0, 3).map(store => (
                <div key={store.id} className="border-b border-slate-800 pb-2">
                  <p className="font-semibold text-slate-200">{store.name}</p>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{store.address}</p>
                </div>
              ))}
              <button
                onClick={() => setCurrentView('store-locator')}
                className="text-blue-400 hover:text-blue-300 font-bold text-xs flex items-center gap-1 mt-1"
              >
                <span>View All 5 Branches</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Payment Partners & Social Channels */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment Badges */}
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-slate-400">Accepted Payment Methods & Banking Partners:</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 font-bold text-xs text-pink-500">bKash</span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 font-bold text-xs text-orange-500">Nagad</span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 font-bold text-xs text-purple-400">Rocket</span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 font-bold text-xs text-blue-400">Visa / Mastercard</span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 font-bold text-xs text-emerald-400">SSLCommerz</span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 font-bold text-xs text-slate-200">Cash On Delivery</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="#facebook" className="p-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors" title="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#youtube" className="p-2.5 rounded-full bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white transition-colors" title="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#instagram" className="p-2.5 rounded-full bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white transition-colors" title="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* 4. Copyright & Legal */}
        <div className="pt-6 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} My Computer BD Ltd. All Rights Reserved. Designed for Enterprise Tech E-Commerce.</p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#sitemap" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
