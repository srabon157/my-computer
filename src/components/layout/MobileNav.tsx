import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Home, ShoppingBag, Sparkles, ShoppingCart, User } from 'lucide-react';

interface MobileNavProps {
  onOpenCart: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onOpenCart }) => {
  const { currentView, setCurrentView, cart } = useStore();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-2 flex items-center justify-around shadow-lg">
      <button
        onClick={() => setCurrentView('home')}
        className={`flex flex-col items-center gap-1 p-1 text-[10px] font-semibold transition-colors ${
          currentView === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </button>

      <button
        onClick={() => setCurrentView('shop')}
        className={`flex flex-col items-center gap-1 p-1 text-[10px] font-semibold transition-colors ${
          currentView === 'shop' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        <ShoppingBag className="w-5 h-5" />
        <span>Shop</span>
      </button>

      <button
        onClick={() => setCurrentView('pc-builder')}
        className={`flex flex-col items-center gap-1 p-1 text-[10px] font-semibold transition-colors ${
          currentView === 'pc-builder' ? 'text-orange-500' : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white -mt-4 shadow-lg">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-orange-500 font-bold">PC Builder</span>
      </button>

      <button
        onClick={onOpenCart}
        className="relative flex flex-col items-center gap-1 p-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Cart</span>
        {cartItemCount > 0 && (
          <span className="absolute -top-1 right-2 w-4 h-4 bg-orange-500 text-white font-bold text-[9px] rounded-full flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>

      <button
        onClick={() => setCurrentView('user-dashboard')}
        className={`flex flex-col items-center gap-1 p-1 text-[10px] font-semibold transition-colors ${
          currentView === 'user-dashboard' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        <User className="w-5 h-5" />
        <span>Account</span>
      </button>
    </div>
  );
};
