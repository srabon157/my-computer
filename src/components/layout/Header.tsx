import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES } from '../../data/mockData';
import { MegaMenu } from './MegaMenu';
import { Logo } from '../common/Logo';
import {
  Search,
  Mic,
  ShoppingCart,
  Heart,
  GitCompare,
  User,
  Sun,
  Moon,
  PhoneCall,
  Truck,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Grid,
  Percent
} from 'lucide-react';

interface HeaderProps {
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart }) => {
  const {
    currentView,
    setCurrentView,
    theme,
    toggleTheme,
    language,
    toggleLanguage,
    searchQuery,
    setSearchQuery,
    setAiSearchOpen,
    cart,
    cartTotal,
    wishlist,
    compareList,
    setFilters
  } = useStore();

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setFilters(prev => ({ ...prev, searchQuery }));
      setCurrentView('shop');
    }
  };

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      setFilters(prev => ({ ...prev, category: val }));
      setCurrentView('shop');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Animated Ticker Top Bar */}
      <div className="relative overflow-hidden text-white text-xs py-2 border-b border-slate-800"
        style={{ background: 'linear-gradient(90deg, #0f172a, #1e1b4b, #0f172a)' }}
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s linear infinite',
          }}
        />
        <div className="ticker-wrapper">
          <div className="ticker-inner gap-0">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="flex items-center gap-0">
                <span className="flex items-center gap-1.5 px-6 text-orange-400 font-bold">
                  <PhoneCall className="w-3.5 h-3.5 flex-shrink-0" />
                  {language === 'EN' ? 'Hotline: 16789 (10AM–8PM)' : 'হটলাইন: ১৬৭৮৯'}
                </span>
                <span className="text-slate-600 px-2">•</span>
                <span className="flex items-center gap-1.5 px-6 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                  100% Genuine Products · Official Warranty
                </span>
                <span className="text-slate-600 px-2">•</span>
                <span className="flex items-center gap-1.5 px-6 text-blue-400 font-semibold">
                  <Truck className="w-3.5 h-3.5 flex-shrink-0" />
                  Free Delivery Inside Dhaka on orders ৳5,000+
                </span>
                <span className="text-slate-600 px-2">•</span>
                <span className="flex items-center gap-1.5 px-6 text-purple-400 font-semibold">
                  <Percent className="w-3.5 h-3.5 flex-shrink-0" />
                  0% EMI up to 24 months · All major banks
                </span>
                <span className="text-slate-600 px-2">•</span>
                <span className="flex items-center gap-1.5 px-6 text-amber-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                  Mega Sale! Up to 30% OFF on Gaming Laptops
                </span>
                <span className="text-slate-600 px-2">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right side controls - floating over ticker */}
        <div className="absolute right-4 top-0 bottom-0 flex items-center gap-3 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent pl-8 z-10">
          <button
            onClick={toggleLanguage}
            className="font-bold text-orange-400 hover:text-orange-300 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 transition-all text-[11px] hover-lift"
          >
            {language === 'EN' ? 'বাংলা' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>


      {/* 2. Main Sticky Header with Glassmorphism */}
      <div className="glass-nav border-b border-slate-200/80 dark:border-slate-800/80 px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div
            onClick={() => {
              setFilters(prev => ({ ...prev, category: null, searchQuery: '' }));
              setCurrentView('home');
            }}
            className="cursor-pointer hover:opacity-90 transition-opacity py-1 shrink-0"
            title="My Computer BD - Home"
          >
            <Logo size="md" showTagline={true} />
          </div>

          {/* AI Smart Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex flex-1 max-w-2xl items-center relative rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-300/80 dark:border-slate-700/80 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner"
          >
            {/* Category Filter Select Dropdown inside search */}
            <select
              onChange={handleCategorySelect}
              className="bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-300 pl-4 pr-2 py-2.5 border-r border-slate-300 dark:border-slate-700 focus:outline-none cursor-pointer rounded-l-full max-w-[140px] truncate"
            >
              <option value="">{language === 'EN' ? 'All Categories' : 'সকল ক্যাটাগরি'}</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                  {language === 'EN' ? c.name : c.nameBn}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === 'EN' ? 'Search laptops, graphics cards, TVs, ACs...' : 'ল্যাপটপ, জিপিইউ, টিভি, এসি খুঁজুন...'}
              className="w-full bg-transparent px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />

            {/* AI Prompt Assistant Trigger Button */}
            <button
              type="button"
              onClick={() => setAiSearchOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-[11px] font-semibold transition-all mr-1 shadow-sm"
              title="AI Smart Search"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-300" />
              <span>AI Search</span>
            </button>

            {/* Voice Search Trigger */}
            <button
              type="button"
              onClick={() => setAiSearchOpen(true)}
              className="p-2 text-slate-400 hover:text-orange-500 transition-colors"
              title="Voice Search"
            >
              <Mic className="w-4 h-4" />
            </button>

            {/* Submit Search Button */}
            <button
              type="submit"
              className="p-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-r-full transition-colors font-medium px-4 flex items-center justify-center"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Header Action Buttons (Compare, Wishlist, Cart, User) */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Compare */}
            <button
              onClick={() => setCurrentView('compare')}
              className="relative p-2.5 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              title="Product Comparison"
            >
              <GitCompare className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-sm">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setCurrentView('user-dashboard')}
              className="relative p-2.5 text-slate-700 dark:text-slate-200 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-sm">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2.5 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-3.5 py-2 rounded-xl transition-all shadow-md group"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 bg-orange-500 text-white font-bold text-[9px] rounded-full flex items-center justify-center animate-bounce">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-left pr-1">
                <p className="text-[10px] text-slate-300 leading-none">
                  {language === 'EN' ? 'Your Cart' : 'আপনার কার্ট'}
                </p>
                <p className="text-xs font-extrabold leading-tight text-orange-400">
                  ৳{cartTotal.toLocaleString()}
                </p>
              </div>
            </button>

            {/* User Profile / Dashboard Toggle */}
            <button
              onClick={() => setCurrentView('user-dashboard')}
              className="p-2.5 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-200 dark:border-slate-800"
              title="User Account"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Navigation Bar & Mega Menu Strip */}
      <div className="bg-white dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Mega Menu Toggle Button */}
          <div className="relative">
            <button
              onMouseEnter={() => setMegaMenuOpen(true)}
              onClick={() => setMegaMenuOpen(prev => !prev)}
              className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-3.5 transition-colors shadow-sm"
            >
              <Grid className="w-4 h-4 text-orange-300" />
              <span>{language === 'EN' ? 'Browse Categories' : 'সকল ক্যাটাগরি'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown Overlay */}
            <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-xs text-slate-700 dark:text-slate-200">
            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, category: null }));
                setCurrentView('home');
              }}
              className={`px-3 py-3.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                currentView === 'home' ? 'text-blue-600 dark:text-blue-400 font-extrabold border-b-2 border-blue-600' : ''
              }`}
            >
              {language === 'EN' ? 'Home' : 'হোম'}
            </button>

            <button
              onClick={() => setCurrentView('shop')}
              className={`px-3 py-3.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                currentView === 'shop' ? 'text-blue-600 dark:text-blue-400 font-extrabold border-b-2 border-blue-600' : ''
              }`}
            >
              {language === 'EN' ? 'All Products' : 'সকল প্রোডাক্ট'}
            </button>

            <button
              onClick={() => setCurrentView('pc-builder')}
              className={`px-3.5 py-3.5 flex items-center gap-1.5 text-orange-600 dark:text-orange-400 hover:text-orange-500 font-extrabold transition-colors ${
                currentView === 'pc-builder' ? 'bg-orange-50 dark:bg-orange-950/40 border-b-2 border-orange-500' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>{language === 'EN' ? 'PC Builder' : 'পিসি বিল্ডার'}</span>
            </button>

            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, category: 'gaming-pc', gamingOnly: true }));
                setCurrentView('shop');
              }}
              className="px-3 py-3.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              🎮 {language === 'EN' ? 'Gaming Zone' : 'গেমিং জোন'}
            </button>

            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, category: 'laptop' }));
                setCurrentView('shop');
              }}
              className="px-3 py-3.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              💻 {language === 'EN' ? 'Laptops' : 'ল্যাপটপ'}
            </button>

            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, category: 'tv-appliance' }));
                setCurrentView('shop');
              }}
              className="px-3 py-3.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              📺 {language === 'EN' ? 'TV & AC' : 'টিভি ও এসি'}
            </button>

            <button
              onClick={() => setCurrentView('offers')}
              className="px-3 py-3.5 text-red-600 dark:text-red-400 font-bold flex items-center gap-1 hover:text-red-700 transition-colors"
            >
              <Percent className="w-3.5 h-3.5" />
              <span>{language === 'EN' ? 'Hot Offers' : 'অফারসমূহ'}</span>
            </button>

            <button
              onClick={() => setCurrentView('blog')}
              className="px-3 py-3.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              📰 {language === 'EN' ? 'Tech Blog' : 'টেক ব্লগ'}
            </button>

            <button
              onClick={() => setCurrentView('admin')}
              className="px-3 py-3.5 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
            >
              ⚡ {language === 'EN' ? 'Admin Panel' : 'এডমিন প্যানেল'}
            </button>
          </nav>

          {/* EMI Badge */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-[10px]">
              0% EMI
            </span>
            <span>Available on 30+ BD Banks</span>
          </div>
        </div>
      </div>
    </header>
  );
};
