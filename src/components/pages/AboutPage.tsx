import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Monitor, ShieldCheck, Truck, Wrench } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { language } = useStore();

  return (
    <div className="py-8 space-y-12 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white border border-blue-800/50 shadow-2xl text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center mx-auto shadow-lg">
          <Monitor className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {language === 'EN' ? 'About My Computer BD' : 'মাই কম্পিউটার সম্পর্কে'}
        </h1>
        <p className="text-sm text-blue-200 max-w-2xl mx-auto leading-relaxed">
          Bangladesh’s leading multi-brand computer hardware retailer, offering 100% genuine laptops, custom gaming PCs, server equipment, and home security solutions since 2012.
        </p>
      </div>

      {/* 4 Key Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">100% Official Warranty</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            All laptops, graphics cards, and processors sold at My Computer come with verified manufacturer warranties backed directly by Asus, Apple, Dell, HP, Lenovo & Intel.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <div className="p-3 rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400 w-fit">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Expert PC Building</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Our certified hardware engineers assemble custom rigs with precision cable management, thermal compound application, stress testing & BIOS optimization.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 w-fit">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Rapid Delivery Nationwide</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Same-day express delivery within Dhaka metropolitan area and insured courier dispatch across all 64 districts of Bangladesh.
          </p>
        </div>
      </div>

      {/* Trust & Milestones */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <span className="font-extrabold text-3xl md:text-4xl text-orange-400">12+</span>
          <p className="text-xs text-slate-400 mt-1">Years of Excellence</p>
        </div>
        <div>
          <span className="font-extrabold text-3xl md:text-4xl text-blue-400">500K+</span>
          <p className="text-xs text-slate-400 mt-1">Happy Customers</p>
        </div>
        <div>
          <span className="font-extrabold text-3xl md:text-4xl text-emerald-400">5</span>
          <p className="text-xs text-slate-400 mt-1">Flagship Showrooms</p>
        </div>
        <div>
          <span className="font-extrabold text-3xl md:text-4xl text-purple-400">100%</span>
          <p className="text-xs text-slate-400 mt-1">Genuine Product Guarantee</p>
        </div>
      </div>
    </div>
  );
};
