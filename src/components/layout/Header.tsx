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
  Percent,
  Menu,
  X,
  Home,
  ShoppingBag,
  Zap,
  Tv,
  Laptop,
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

  const [megaMenuOpen, setMegaMenuOpen]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch]     = useState(false);

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

  const navLinks = [
    { label: language === 'EN' ? 'Home'         : 'হোম',          icon: <Home className="w-4 h-4" />,        view: 'home',      onClick: () => { setFilters(p => ({ ...p, category: null })); setCurrentView('home'); } },
    { label: language === 'EN' ? 'All Products' : 'সকল প্রোডাক্ট', icon: <ShoppingBag className="w-4 h-4" />, view: 'shop',      onClick: () => setCurrentView('shop') },
    { label: language === 'EN' ? 'PC Builder'   : 'পিসি বিল্ডার',  icon: <Sparkles className="w-4 h-4" />,    view: 'pc-builder',onClick: () => setCurrentView('pc-builder'), highlight: 'orange' },
    { label: language === 'EN' ? 'Gaming Zone'  : 'গেমিং জোন',    icon: <Zap className="w-4 h-4" />,          view: 'gaming',    onClick: () => { setFilters(p => ({ ...p, category: 'gaming-pc', gamingOnly: true })); setCurrentView('shop'); } },
    { label: language === 'EN' ? 'Laptops'      : 'ল্যাপটপ',      icon: <Laptop className="w-4 h-4" />,      view: 'laptops',   onClick: () => { setFilters(p => ({ ...p, category: 'laptop' })); setCurrentView('shop'); } },
    { label: language === 'EN' ? 'TV & AC'      : 'টিভি ও এসি',   icon: <Tv className="w-4 h-4" />,           view: 'tv',        onClick: () => { setFilters(p => ({ ...p, category: 'tv-appliance' })); setCurrentView('shop'); } },
    { label: language === 'EN' ? 'Hot Offers'   : 'অফারসমূহ',     icon: <Percent className="w-4 h-4" />,      view: 'offers',    onClick: () => setCurrentView('offers'), highlight: 'red' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">

      {/* ── Ticker Bar (hidden on very small screens) ──────── */}
      <div
        className="hidden sm:block relative overflow-hidden text-white text-xs py-1.5 border-b border-slate-800"
        style={{ background: 'linear-gradient(90deg, #0f172a, #1e1b4b, #0f172a)' }}
      >
        {/* shimmer */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.04) 50%,transparent 100%)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite' }}
        />
        <div className="ticker-wrapper">
          <div className="ticker-inner">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="flex items-center gap-0">
                {[
                  { icon: <PhoneCall className="w-3 h-3 flex-shrink-0" />, text: 'Hotline: 16789 (10AM–8PM)', color: 'text-orange-400' },
                  { icon: <ShieldCheck className="w-3 h-3 flex-shrink-0" />, text: '100% Genuine · Official Warranty', color: 'text-emerald-400' },
                  { icon: <Truck className="w-3 h-3 flex-shrink-0" />, text: 'Free Delivery Inside Dhaka ৳5,000+', color: 'text-blue-400' },
                  { icon: <Percent className="w-3 h-3 flex-shrink-0" />, text: '0% EMI up to 24 months', color: 'text-purple-400' },
                  { icon: <Sparkles className="w-3 h-3 flex-shrink-0" />, text: 'Mega Sale! Up to 30% OFF Gaming Laptops', color: 'text-amber-400' },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-0">
                    <span className={`flex items-center gap-1.5 px-5 font-semibold ${item.color}`}>
                      {item.icon}{item.text}
                    </span>
                    <span className="text-slate-700 px-1">•</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        {/* right controls */}
        <div className="absolute right-3 top-0 bottom-0 flex items-center gap-2 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent pl-6 z-10">
          <button onClick={toggleLanguage} className="font-bold text-orange-400 hover:text-orange-300 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px]">
            {language === 'EN' ? 'বাংলা' : 'EN'}
          </button>
          <button onClick={toggleTheme} className="p-0.5 rounded-full text-slate-400 hover:text-white transition-all">
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* ── Main Header Row ─────────────────────────────────── */}
      <div className="glass-nav border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2.5 flex items-center gap-2 sm:gap-3">

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex-shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <div
            onClick={() => { setFilters(p => ({ ...p, category: null, searchQuery: '' })); setCurrentView('home'); setMobileMenuOpen(false); }}
            className="cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0"
          >
            {/* Mobile: small logo, Desktop: full logo */}
            <div className="hidden sm:block">
              <Logo size="md" showTagline={true} />
            </div>
            <div className="sm:hidden">
              <Logo size="sm" showTagline={false} />
            </div>
          </div>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex flex-1 max-w-2xl items-center relative rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-300/80 dark:border-slate-700/80 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner"
          >
            <select
              onChange={handleCategorySelect}
              className="bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-300 pl-4 pr-2 py-2.5 border-r border-slate-300 dark:border-slate-700 focus:outline-none cursor-pointer rounded-l-full max-w-[130px] truncate"
            >
              <option value="">{language === 'EN' ? 'All Categories' : 'সকল'}</option>
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
              placeholder={language === 'EN' ? 'Search laptops, GPUs, TVs, ACs...' : 'ল্যাপটপ, জিপিইউ, টিভি খুঁজুন...'}
              className="w-full bg-transparent px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <button type="button" onClick={() => setAiSearchOpen(true)}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-[11px] font-semibold mr-1 shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-orange-300" /><span>AI</span>
            </button>
            <button type="button" onClick={() => setAiSearchOpen(true)} className="p-2 text-slate-400 hover:text-orange-500 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
            <button type="submit" className="p-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-r-full transition-colors px-4 flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Spacer on mobile */}
          <div className="flex-1 lg:hidden" />

          {/* Mobile: Search icon */}
          <button
            onClick={() => setMobileSearch(prev => !prev)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Compare - hidden on mobile */}
            <button
              onClick={() => setCurrentView('compare')}
              className="hidden sm:flex relative p-2.5 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              title="Compare"
            >
              <GitCompare className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white font-bold text-[9px] rounded-full flex items-center justify-center">{compareList.length}</span>
              )}
            </button>

            {/* Wishlist - hidden on mobile */}
            <button
              onClick={() => setCurrentView('user-dashboard')}
              className="hidden sm:flex relative p-2.5 text-slate-700 dark:text-slate-200 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white font-bold text-[9px] rounded-full flex items-center justify-center">{wishlist.length}</span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-2.5 sm:px-3.5 py-2 rounded-xl transition-all shadow-md group"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 bg-orange-500 text-white font-bold text-[9px] rounded-full flex items-center justify-center animate-bounce">{cartItemCount}</span>
                )}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-[10px] text-slate-300 leading-none">{language === 'EN' ? 'Cart' : 'কার্ট'}</p>
                <p className="text-xs font-extrabold leading-tight text-orange-400">৳{cartTotal.toLocaleString()}</p>
              </div>
            </button>

            {/* User - hidden on mobile (shown in MobileNav) */}
            <button
              onClick={() => setCurrentView('user-dashboard')}
              className="hidden sm:flex p-2.5 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-200 dark:border-slate-800"
              title="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile: theme toggle */}
            <button
              onClick={toggleTheme}
              className="sm:hidden p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (expandable) */}
        {mobileSearch && (
          <div className="lg:hidden px-3 pb-3 animate-fade-down">
            <form onSubmit={handleSearchSubmit} className="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus-within:border-blue-500 transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={language === 'EN' ? 'Search products...' : 'প্রোডাক্ট খুঁজুন...'}
                autoFocus
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              <button type="button" onClick={() => setAiSearchOpen(true)}
                className="p-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
              </button>
              <button type="submit" className="p-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-r-xl transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ── Nav Strip (Desktop only) ─────────────────────────── */}
      <div className="hidden md:block bg-white dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between">

          {/* Mega Menu Toggle */}
          <div className="relative">
            <button
              onMouseEnter={() => setMegaMenuOpen(true)}
              onClick={() => setMegaMenuOpen(p => !p)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-3 transition-colors"
            >
              <Grid className="w-4 h-4 text-orange-300" />
              <span className="hidden lg:inline">{language === 'EN' ? 'Browse Categories' : 'সকল ক্যাটাগরি'}</span>
              <span className="lg:hidden">{language === 'EN' ? 'Categories' : 'ক্যাটাগরি'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-0 font-semibold text-xs text-slate-700 dark:text-slate-200 overflow-x-auto no-scrollbar">
            {navLinks.map(link => (
              <button
                key={link.view}
                onClick={() => link.onClick()}
                className={`px-3 py-3 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 ${
                  link.highlight === 'orange'
                    ? 'text-orange-600 dark:text-orange-400 font-extrabold'
                    : link.highlight === 'red'
                    ? 'text-red-600 dark:text-red-400 font-bold'
                    : ''
                } ${currentView === link.view ? 'text-blue-600 dark:text-blue-400 font-extrabold border-b-2 border-blue-600' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => setCurrentView('blog')} className="px-3 py-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">
              📰 Blog
            </button>
          </nav>

          {/* EMI Badge */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium flex-shrink-0">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-[10px]">0% EMI</span>
            <span>30+ Banks</span>
          </div>
        </div>
      </div>

      {/* ── Mobile Slide-Down Menu ───────────────────────────── */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 glass-nav border-b border-slate-200 dark:border-slate-800 shadow-2xl animate-fade-down">
          {/* Category Quick Links */}
          <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Categories</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: '💻 Laptops', cat: 'laptop' },
                { label: '🎮 Gaming', cat: 'gaming-pc' },
                { label: '📺 TV & AC', cat: 'tv-appliance' },
                { label: '🖥️ Monitors', cat: 'monitor' },
                { label: '🖨️ Printers', cat: 'printer' },
                { label: '📷 Cameras', cat: 'camera' },
              ].map(item => (
                <button
                  key={item.cat}
                  onClick={() => { setFilters(p => ({ ...p, category: item.cat })); setCurrentView('shop'); setMobileMenuOpen(false); }}
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 rounded-lg px-2 py-2 text-center transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="px-4 py-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Navigation</p>
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.view}
                  onClick={() => { link.onClick(); setMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                    link.highlight === 'orange'
                      ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/30'
                      : link.highlight === 'red'
                      ? 'text-red-600 bg-red-50 dark:bg-red-950/30'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setCurrentView('admin'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all"
              >
                <Zap className="w-4 h-4" /> Admin Panel
              </button>
            </div>
          </div>

          {/* Bottom: Language + Theme */}
          <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-medium">Hotline: 16789</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleLanguage} className="font-bold text-orange-400 px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                {language === 'EN' ? 'বাংলা' : 'EN'}
              </button>
              <button onClick={toggleTheme} className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-all">
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
