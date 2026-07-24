import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Laptop, Cpu, Tv, ChevronRight, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { setCurrentView, setFilters, language } = useStore();

  if (!isOpen) return null;

  const navigateCategory = (catId: string) => {
    setFilters(prev => ({ ...prev, category: catId }));
    setCurrentView('shop');
    onClose();
  };

  return (
    <div
      className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-2xl border-b border-slate-200 dark:border-slate-800 z-40 animate-fadeIn"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Laptops & Computers */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            <Laptop className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{language === 'EN' ? 'Laptops & Computers' : 'ল্যাপটপ ও কম্পিউটার'}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <button onClick={() => navigateCategory('laptop')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>Gaming Laptops (ASUS ROG, MSI, Legion)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('laptop')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>Apple MacBooks (M3 Pro & Max)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('desktop-pc')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>Brand Desktop PCs (Dell, HP, Lenovo)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('gaming-pc')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>Custom Built Gaming Rigs</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2: Components */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            <Cpu className="w-5 h-5 text-orange-500" />
            <span>{language === 'EN' ? 'Core Components' : 'মূল কম্পোনেন্ট'}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <button onClick={() => navigateCategory('processor')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>Intel 14th Gen & AMD Ryzen CPUs</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('graphics-card')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>NVIDIA RTX 4090 / 4080 / 4070 GPUs</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('motherboard')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>Z790 & B650 Motherboards</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('ram')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>DDR5 High Speed RAM Kits</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('storage')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>NVMe PCIe 4.0 SSDs</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: TV, Appliances & Security */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            <Tv className="w-5 h-5 text-emerald-500" />
            <span>{language === 'EN' ? 'TV, AC & Security' : 'টিভি, এসি ও সিকিউরিটি'}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <button onClick={() => navigateCategory('tv-appliance')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>LG OLED & Samsung Neo QLED TVs</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('air-conditioner')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>Gree & General Inverter ACs</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('cctv-security')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>Hikvision ColorVu 4K Security Kits</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('networking')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>Wi-Fi 7 & High Range Routers</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Interactive PC Builder Promo */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Tool</span>
            </div>
            <h3 className="font-bold text-lg leading-tight">
              {language === 'EN' ? 'Build Your Dream PC' : 'আপনার স্বপ্নের পিসি তৈরি করুন'}
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              {language === 'EN'
                ? 'Check part compatibility, calculate power consumption & instantly print quotation in BDT.'
                : 'পার্টস সামঞ্জস্যতা পরীক্ষা করুন, পাওয়ার হিসেব করুন এবং প্রিন্ট করুন।'}
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentView('pc-builder');
              onClose();
            }}
            className="mt-4 bg-white text-blue-950 hover:bg-orange-500 hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <span>{language === 'EN' ? 'Launch PC Builder' : 'পিসি বিল্ডার খুলুন'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
