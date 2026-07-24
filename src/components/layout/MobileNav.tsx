import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Home, ShoppingBag, Sparkles, ShoppingCart, User } from 'lucide-react';

interface MobileNavProps {
  onOpenCart: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onOpenCart }) => {
  const { currentView, setCurrentView, cart, wishlist, compareList } = useStore();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const tabs = [
    {
      key: 'home',
      label: 'Home',
      icon: <Home className="w-5 h-5" />,
      onClick: () => setCurrentView('home'),
      active: currentView === 'home',
    },
    {
      key: 'shop',
      label: 'Shop',
      icon: <ShoppingBag className="w-5 h-5" />,
      onClick: () => setCurrentView('shop'),
      active: currentView === 'shop',
    },
    {
      key: 'pc-builder',
      label: 'PC Build',
      icon: (
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white -mt-5 shadow-xl border-2 border-white dark:border-slate-950 transition-all ${
          currentView === 'pc-builder'
            ? 'bg-gradient-to-br from-orange-400 to-red-500 scale-110'
            : 'bg-gradient-to-br from-orange-500 to-amber-500'
        }`}>
          <Sparkles className="w-5 h-5" />
        </div>
      ),
      onClick: () => setCurrentView('pc-builder'),
      active: currentView === 'pc-builder',
      isFab: true,
    },
    {
      key: 'cart',
      label: 'Cart',
      icon: (
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 text-white font-bold text-[9px] rounded-full flex items-center justify-center animate-bounce">
              {cartItemCount}
            </span>
          )}
        </div>
      ),
      onClick: onOpenCart,
      active: false,
    },
    {
      key: 'account',
      label: 'Account',
      icon: (
        <div className="relative">
          <User className="w-5 h-5" />
          {(wishlist.length > 0 || compareList.length > 0) && (
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border border-white dark:border-slate-900" />
          )}
        </div>
      ),
      onClick: () => setCurrentView('user-dashboard'),
      active: currentView === 'user-dashboard',
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      {/* Safe area padding for iOS */}
      <div className="flex items-center justify-around px-2 pb-safe-bottom" style={{ paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={tab.onClick}
            className={`flex flex-col items-center gap-0.5 pt-2 pb-1 px-3 text-[10px] font-semibold transition-all min-w-0 flex-1 ${
              tab.isFab
                ? 'text-orange-500 font-bold'
                : tab.active
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            {tab.icon}
            <span className={`leading-tight truncate ${tab.isFab ? 'mt-1' : ''}`}>
              {tab.label}
            </span>
            {/* Active indicator dot */}
            {tab.active && !tab.isFab && (
              <span className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 mt-0.5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
