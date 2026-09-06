import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Laptop, Cpu, Tv, ChevronRight, Sparkles, Signal } from 'lucide-react';

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
        {/* Column 1: Systems & Mobile */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            <Laptop className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{language === 'EN' ? 'Systems & Mobile' : 'সিস্টেম ও মোবাইল'}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <button onClick={() => navigateCategory('desktop')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>🖥️ Desktop PCs & Workstations</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('laptop')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>💻 Laptops & Apple MacBooks</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('phone')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>📱 Smartphones & iPhones</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('tablet')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>📟 Tablets & iPads</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('monitor')} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between w-full py-1">
                <span>🖥️ Monitors & 4K Displays</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2: Components & Infrastructure */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            <Cpu className="w-5 h-5 text-orange-500" />
            <span>{language === 'EN' ? 'Components & Infrastructure' : 'কম্পোনেন্ট ও সার্ভার'}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <button onClick={() => navigateCategory('component')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>⚙️ Core PC Components (CPU, GPU, RAM)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('power')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>⚡ Power (Online UPS, IPS, Inverter)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('server-storage')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>🗄️ Server & Storage (NAS, SAS HDD)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            {/* ── Networking + ONU side-by-side ── */}
            <li className="border-t border-slate-100 dark:border-slate-800 pt-2 mt-1">
              <button onClick={() => navigateCategory('networking')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>📶 Networking (Routers, MikroTik, Switches)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateCategory('onu-device')}
                className="flex items-center justify-between w-full py-1.5 px-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Signal className="w-3.5 h-3.5" />
                  <span className="font-semibold">ONU / ONT Fiber Devices</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 opacity-70" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('software')} className="hover:text-orange-500 flex items-center justify-between w-full py-1">
                <span>💿 Genuine Software & Antivirus</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Electronics, Office & Gadgets */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            <Tv className="w-5 h-5 text-emerald-500" />
            <span>{language === 'EN' ? 'Electronics & Security' : 'ইলেকট্রনিক্স ও সিকিউরিটি'}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <button onClick={() => navigateCategory('security')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>🛡️ Security & CCTV Systems</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('camera')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>📷 Mirrorless & Action Cameras</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('office-equipment')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>🖨️ Office Equipment & Printers</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('tv')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>📺 Smart OLED & 4K Google TVs</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('appliance')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>❄️ Appliances (Inverter ACs & Fridge)</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
            <li>
              <button onClick={() => navigateCategory('gadget')} className="hover:text-emerald-500 flex items-center justify-between w-full py-1">
                <span>⌚ Smartwatches & TWS Earbuds</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Gaming & Interactive PC Builder Promo */}
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
                : 'পার্টস সামঞ্জস্যতা পরীক্ষা করুন, পাওয়ার হিসেব করুন এবং প্রিন্ট করুন।'}
            </p>

            <button
              onClick={() => navigateCategory('gaming')}
              className="text-xs font-bold text-orange-300 hover:text-white flex items-center gap-1 mt-2"
            >
              <span>🎮 Explore Gaming Consoles & Gear</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
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

