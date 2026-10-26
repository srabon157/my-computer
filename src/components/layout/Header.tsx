import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES } from '../../data/mockData';
import { Logo } from '../common/Logo';
import { PCBuildDropdown } from './PCBuildDropdown';
import {
  Search,
  Mic,
  ShoppingCart,
  Heart,
  GitCompare,
  User,
  PhoneCall,
  Truck,
  Sparkles,
  ShieldCheck,
  Percent,
  Menu,
  X,
  Home,
  ShoppingBag,
  Zap,
  Tv,
  Laptop,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

interface HeaderProps {
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart }) => {
  const {
    currentView,
    setCurrentView,
    language,
    toggleLanguage,
    searchQuery,
    setSearchQuery,
    setAiSearchOpen,
    cart,
    cartTotal,
    wishlist,
    compareList,
    filters,
    setFilters
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch]     = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(null);
  const [expandedMobileCat, setExpandedMobileCat] = useState<string | null>(null);
  const [expandedMobileSubCat, setExpandedMobileSubCat] = useState<string | null>(null);
  const categoryNavRef = useRef<HTMLDivElement>(null);

  // Close desktop/tablet category dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (categoryNavRef.current && !categoryNavRef.current.contains(e.target as Node)) {
        setHoveredCategory(null);
        setHoveredSubCategory(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

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
    { label: language === 'EN' ? 'Top Picks'    : 'জনপ্রিয় পণ্য',  icon: <Sparkles className="w-4 h-4" />,    view: 'offers',    onClick: () => setCurrentView('offers') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">

      {/* ── Ticker Bar (hidden on very small screens) ──────── */}
      <div className="hidden sm:block relative overflow-hidden text-slate-800 text-xs py-1.5 border-b border-blue-100 bg-gradient-to-r from-sky-100/90 via-blue-50 to-indigo-100/90 shadow-xs">
        {/* shimmer */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.4) 50%,transparent 100%)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite' }}
        />
        <div className="ticker-wrapper">
          <div className="ticker-inner">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="flex items-center gap-0">
                {[
                  { icon: <PhoneCall className="w-3 h-3 flex-shrink-0" />, text: 'Hotline: 16789 (10AM–8PM)', color: 'text-orange-600' },
                  { icon: <ShieldCheck className="w-3 h-3 flex-shrink-0" />, text: '100% Genuine · Official Warranty', color: 'text-emerald-700' },
                  { icon: <Truck className="w-3 h-3 flex-shrink-0" />, text: 'Fast Delivery Inside Dhaka ৳5,000+', color: 'text-blue-700' },
                  { icon: <Percent className="w-3 h-3 flex-shrink-0" />, text: '0% EMI Available up to 24 Months', color: 'text-purple-700' },
                  { icon: <Sparkles className="w-3 h-3 flex-shrink-0" />, text: 'Flagship Laptops, Custom Rigs & OLED TVs', color: 'text-amber-700' },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-0">
                    <span className={`flex items-center gap-1.5 px-5 font-semibold ${item.color}`}>
                      {item.icon}{item.text}
                    </span>
                    <span className="text-blue-200 px-1">•</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        {/* right controls */}
        <div className="absolute right-3 top-0 bottom-0 flex items-center gap-2 bg-gradient-to-l from-indigo-100 via-indigo-100/90 to-transparent pl-6 z-10">
          <button onClick={toggleLanguage} className="font-bold text-orange-600 hover:text-orange-700 px-1.5 py-0.5 rounded bg-white border border-blue-200 text-[10px] shadow-xs">
            {language === 'EN' ? 'বাংলা' : 'EN'}
          </button>
        </div>
      </div>

      {/* ── Main Header Row ─────────────────────────────────── */}
      <div className="glass-nav border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5 flex items-center gap-3 sm:gap-4">

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all flex-shrink-0"
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
              <Logo size="lg" showTagline={true} />
            </div>
            <div className="sm:hidden">
              <Logo size="md" showTagline={false} />
            </div>
          </div>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex flex-1 max-w-2xl items-center relative rounded-full bg-slate-100 border border-slate-300/80 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner"
          >
            <select
              onChange={handleCategorySelect}
              className="bg-transparent text-xs font-semibold text-slate-700 pl-4 pr-2 py-2.5 border-r border-slate-300 focus:outline-none cursor-pointer rounded-l-full max-w-[130px] truncate"
            >
              <option value="">{language === 'EN' ? 'All Categories' : 'সকল'}</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id} className="bg-white text-slate-900">
                  {language === 'EN' ? c.name : c.nameBn}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === 'EN' ? 'Search laptops, GPUs, TVs, ACs...' : 'ল্যাপটপ, জিপিইউ, টিভি খুঁজুন...'}
              className="w-full bg-transparent px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
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
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Compare - hidden on mobile */}
            <button
              onClick={() => setCurrentView('compare')}
              className="hidden sm:flex relative p-2.5 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-all"
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
              className="hidden sm:flex relative p-2.5 text-slate-700 hover:text-red-500 hover:bg-slate-100 rounded-xl transition-all"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white font-bold text-[9px] rounded-full flex items-center justify-center">{wishlist.length}</span>
              )}
            </button>

            {/* PC Build Dropdown — always visible */}
            <PCBuildDropdown />

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-2.5 sm:px-3.5 py-2 rounded-xl transition-all shadow-md group"
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
              className="hidden sm:flex p-2.5 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-all border border-slate-200"
              title="Account"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (expandable) */}
        {mobileSearch && (
          <div className="lg:hidden px-3 pb-3 animate-fade-down">
            <form onSubmit={handleSearchSubmit} className="flex items-center rounded-xl bg-slate-100 border border-slate-300 focus-within:border-blue-500 transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={language === 'EN' ? 'Search products...' : 'প্রোডাক্ট খুঁজুন...'}
                autoFocus
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
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

      {/* ── Category Navigation Bar (All 18 Categories from User) ── */}
      <div ref={categoryNavRef} className="hidden md:block bg-white border-b border-slate-200 shadow-sm relative z-30">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          {/* Horizontal list of all 18 categories */}
          <nav className="flex items-center gap-0 overflow-visible no-scrollbar py-0 flex-1 justify-between relative">
            {CATEGORIES.map((category, idx) => {
              const isSelected = filters.category === category.id;
              const isHovered = hoveredCategory === category.id;
              const isRightAligned = idx >= 8;

              return (
                <div
                  key={category.id}
                  className="relative group"
                  onMouseEnter={() => {
                    setHoveredCategory(category.id);
                    setHoveredSubCategory(null);
                  }}
                  onMouseLeave={() => {
                    setHoveredCategory(null);
                    setHoveredSubCategory(null);
                  }}
                >
                  <button
                    onClick={(e) => {
                      // On touch/tablet devices, if category has dropdown subcategories, first tap toggles it open
                      if (category.subCategories && category.subCategories.length > 0) {
                        if (hoveredCategory !== category.id) {
                          e.stopPropagation();
                          setHoveredCategory(category.id);
                          setHoveredSubCategory(null);
                          return;
                        }
                      }
                      setFilters(prev => ({ ...prev, category: category.id, brand: [] }));
                      setCurrentView('shop');
                      setHoveredCategory(null);
                      setHoveredSubCategory(null);
                    }}
                    className={`px-2 lg:px-2.5 xl:px-3 py-3 text-[12px] lg:text-[12.5px] xl:text-[13px] font-extrabold whitespace-nowrap transition-all flex items-center gap-0.5 relative ${
                      isHovered || isSelected
                        ? 'text-orange-600 font-black'
                        : 'text-slate-950 hover:text-orange-600'
                    }`}
                  >
                    {/* Top orange accent bar on hover/active just like screenshot */}
                    {(isHovered || isSelected) && (
                      <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-orange-600 animate-fadeIn" />
                    )}
                    <span>{category.name}</span>
                  </button>

                  {/* Hover / Tap Dropdown matching user screenshot */}
                  {category.subCategories && category.subCategories.length > 0 && isHovered && (
                    <div
                      className={`absolute top-full ${isRightAligned ? 'right-0' : 'left-0'} min-w-[230px] bg-white border border-slate-200 shadow-[0_12px_36px_rgba(0,0,0,0.18)] border-t-2 border-t-orange-600 py-1.5 z-50 animate-fadeIn`}
                    >
                      <div className="max-h-[500px] overflow-visible py-0.5">
                        {category.subCategories.map(sub => {
                          const isShowAll = sub.isShowAll;
                          const hasChildren = sub.hasChildren || (sub.children && sub.children.length > 0);

                          return (
                            <div
                              key={sub.id}
                              className="relative group/sub"
                              onMouseEnter={() => setHoveredSubCategory(sub.id)}
                            >
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // On touch devices, if sub has children, toggle flyout
                                  if (hasChildren && hoveredSubCategory !== sub.id) {
                                    setHoveredSubCategory(sub.id);
                                    return;
                                  }
                                  if (sub.id === 'lg-monitors') {
                                    setCurrentView('lg-monitors');
                                    setHoveredCategory(null);
                                    setHoveredSubCategory(null);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    return;
                                  }
                                  if (sub.id === 'asus-monitors') {
                                    setCurrentView('asus-monitors');
                                    setHoveredCategory(null);
                                    setHoveredSubCategory(null);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    return;
                                  }
                                  if (sub.id === 'samsung-monitors') {
                                    setFilters(prev => ({ ...prev, category: 'monitor', brand: ['Samsung'] }));
                                    setCurrentView('shop');
                                    setHoveredCategory(null);
                                    setHoveredSubCategory(null);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    return;
                                  }
                                  if (isShowAll) {
                                    setFilters(prev => ({ ...prev, category: category.id, brand: [] }));
                                  } else {
                                    setFilters(prev => ({ ...prev, category: sub.id, brand: [] }));
                                  }
                                  setCurrentView('shop');
                                  setHoveredCategory(null);
                                  setHoveredSubCategory(null);
                                }}
                                className={`w-full text-left px-4 py-2 text-[13px] transition-colors flex items-center justify-between group-hover/sub:bg-sky-50 group-hover/sub:text-orange-600 ${
                                  isShowAll
                                    ? 'font-black text-slate-950 border-t border-slate-100 mt-1 pt-2 hover:bg-orange-50/50'
                                    : 'font-semibold text-slate-900'
                                }`}
                              >
                                <span>{sub.name}</span>
                                {hasChildren && (
                                  <span className="text-[#f87171] text-sm font-bold opacity-75 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all">
                                    ›
                                  </span>
                                )}
                              </button>

                              {/* Nested 2nd-level Flyout on hover or tap */}
                              {sub.children && sub.children.length > 0 && (
                                <div
                                  className={`absolute top-0 ${isRightAligned ? 'right-full -mr-1' : 'left-full -ml-1'} min-w-[215px] bg-white border border-slate-200 shadow-[0_12px_36px_rgba(0,0,0,0.22)] border-t-2 border-t-orange-600 py-1.5 z-[60] animate-fadeIn ${
                                    hoveredSubCategory === sub.id ? 'block' : 'hidden group-hover/sub:block'
                                  }`}
                                >
                                  <div className="max-h-[460px] overflow-y-auto no-scrollbar py-0.5">
                                    {sub.children.map(child => (
                                      <button
                                        key={child.name}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (child.brand) {
                                            setFilters(prev => ({
                                              ...prev,
                                              category: child.id || category.id,
                                              brand: [child.brand as any]
                                            }));
                                          } else {
                                            setFilters(prev => ({
                                              ...prev,
                                              category: child.id,
                                              brand: []
                                            }));
                                          }
                                          setCurrentView('shop');
                                          setHoveredCategory(null);
                                          setHoveredSubCategory(null);
                                        }}
                                        className="w-full text-left px-4 py-2 text-[12.5px] font-normal text-slate-700 hover:text-orange-600 hover:bg-slate-50 transition-colors flex items-center justify-between"
                                      >
                                        <span>{child.name}</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ── Mobile Horizontal Quick Category Strip (1-Tap Access) ── */}
      <div className="md:hidden bg-white border-b border-slate-200 px-3 py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5 shadow-sm">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-xl flex-shrink-0 shadow-sm"
        >
          <Menu className="w-3.5 h-3.5" />
          <span>{language === 'EN' ? 'Categories' : 'ক্যাটাগরি'}</span>
        </button>
        {CATEGORIES.map(cat => {
          const isSelected = filters.category === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                if (cat.subCategories && cat.subCategories.length > 0) {
                  setExpandedMobileCat(cat.id);
                  setExpandedMobileSubCat(null);
                  setMobileMenuOpen(true);
                } else {
                  setFilters(p => ({ ...p, category: cat.id, brand: [] }));
                  setCurrentView('shop');
                }
              }}
              className={`text-[11.5px] font-semibold px-2.5 py-1.5 rounded-xl whitespace-nowrap flex-shrink-0 transition-all border flex items-center gap-1 ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm font-bold'
                  : 'bg-slate-100/90 text-slate-700 border-slate-200/80 hover:border-orange-500'
              }`}
            >
              <span>{language === 'EN' ? cat.name : cat.nameBn}</span>
              {cat.subCategories && cat.subCategories.length > 0 && (
                <ChevronDown className="w-2.5 h-2.5 opacity-60" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Mobile Slide-Down Menu ───────────────────────────── */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 glass-nav border-b border-slate-200 shadow-2xl animate-fade-down max-h-[85vh] overflow-y-auto">
          {/* Mobile Drawer Brand Header */}
          <div className="px-4 py-2.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
            <Logo size="sm" />
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Official Tech Store</span>
          </div>

          {/* All 18 Categories - Interactive Accordion Dropdowns for Mobile */}
          <div className="px-3 py-3 border-b border-slate-200">
            <div className="flex items-center justify-between mb-2.5 px-1">
              <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                {language === 'EN' ? 'Categories & Dropdowns (18)' : 'ক্যাটাগরি ও মেনু (১৮টি)'}
              </p>
              <span className="text-[10px] bg-orange-500/10 text-orange-600 font-bold px-2 py-0.5 rounded-full">
                Tap to Expand
              </span>
            </div>

            <div className="space-y-1.5">
              {CATEGORIES.map(category => {
                const isCatExpanded = expandedMobileCat === category.id;
                const isCatSelected = filters.category === category.id;
                const hasSubs = category.subCategories && category.subCategories.length > 0;

                return (
                  <div
                    key={category.id}
                    className={`rounded-xl border transition-all overflow-hidden ${
                      isCatExpanded
                        ? 'border-orange-500/50 bg-orange-50/40 shadow-sm'
                        : isCatSelected
                        ? 'border-blue-500 bg-blue-50/50'
                        : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
                    }`}
                  >
                    {/* Category Header Row */}
                    <div className="flex items-center justify-between p-2">
                      <button
                        onClick={() => {
                          setFilters(p => ({ ...p, category: category.id, brand: [] }));
                          setCurrentView('shop');
                          setMobileMenuOpen(false);
                        }}
                        className="flex-1 flex items-center gap-2.5 text-left min-w-0"
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          isCatSelected
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-white text-slate-700 border border-slate-200'
                        }`}>
                          {category.name.slice(0, 2).toUpperCase()}
                        </span>
                        <div className="min-w-0">
                          <p className={`text-xs font-bold truncate ${
                            isCatSelected ? 'text-blue-600' : 'text-slate-800'
                          }`}>
                            {language === 'EN' ? category.name : category.nameBn}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {category.itemCount} {language === 'EN' ? 'products' : 'পণ্য'}
                          </p>
                        </div>
                      </button>

                      {/* Dropdown Expand Toggle */}
                      {hasSubs && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedMobileCat(prev => prev === category.id ? null : category.id);
                            setExpandedMobileSubCat(null);
                          }}
                          className={`px-2 py-1 rounded-lg transition-all flex items-center gap-1 text-[11px] font-bold ${
                            isCatExpanded
                              ? 'bg-orange-500 text-white shadow-sm'
                              : 'bg-white text-slate-600 hover:text-orange-600 border border-slate-200'
                          }`}
                          aria-label={`Toggle ${category.name} dropdown`}
                        >
                          <span className="text-[10px]">{isCatExpanded ? 'Close' : 'Menu'}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Level 1 Subcategories Accordion */}
                    {hasSubs && isCatExpanded && (
                      <div className="border-t border-orange-200/60 bg-white/95 px-2 py-2 space-y-1 animate-fadeIn">
                        {/* Show All link */}
                        <button
                          onClick={() => {
                            setFilters(p => ({ ...p, category: category.id, brand: [] }));
                            setCurrentView('shop');
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg bg-orange-50 text-orange-600 font-extrabold text-[11.5px] hover:bg-orange-100 flex items-center justify-between"
                        >
                          <span>{language === 'EN' ? `View All ${category.name} Products` : `${category.nameBn} এর সকল পণ্য দেখুন`}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                        </button>

                        {/* Subcategories list */}
                        {category.subCategories!.map(sub => {
                          const hasChildren = sub.children && sub.children.length > 0;
                          const isSubExpanded = expandedMobileSubCat === sub.id;

                          return (
                            <div key={sub.id} className="rounded-lg overflow-hidden border border-slate-100">
                              <div className="flex items-center justify-between px-2.5 py-1.5 hover:bg-slate-50 transition-colors">
                                <button
                                  onClick={() => {
                                    if (sub.id === 'lg-monitors') {
                                      setCurrentView('lg-monitors');
                                      setMobileMenuOpen(false);
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                      return;
                                    }
                                    if (sub.id === 'asus-monitors') {
                                      setCurrentView('asus-monitors');
                                      setMobileMenuOpen(false);
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                      return;
                                    }
                                    if (sub.id === 'samsung-monitors') {
                                      setFilters(p => ({ ...p, category: 'monitor', brand: ['Samsung'] }));
                                      setCurrentView('shop');
                                      setMobileMenuOpen(false);
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                      return;
                                    }
                                    if (sub.isShowAll) {
                                      setFilters(p => ({ ...p, category: category.id, brand: [] }));
                                    } else {
                                      setFilters(p => ({ ...p, category: sub.id, brand: [] }));
                                    }
                                    setCurrentView('shop');
                                    setMobileMenuOpen(false);
                                  }}
                                  className="text-left flex-1 text-xs font-semibold text-slate-700 hover:text-orange-600 truncate"
                                >
                                  {sub.name}
                                </button>

                                {hasChildren && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setExpandedMobileSubCat(prev => prev === sub.id ? null : sub.id);
                                    }}
                                    className={`p-1 rounded text-slate-400 hover:text-orange-500 transition-all ${
                                      isSubExpanded ? 'text-orange-500' : ''
                                    }`}
                                  >
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSubExpanded ? 'rotate-180' : ''}`} />
                                  </button>
                                )}
                              </div>

                              {/* Level 2 Sub-options / Brands (Mobile flyout accordion) */}
                              {hasChildren && isSubExpanded && (
                                <div className="pl-3 pr-2 py-1.5 space-y-1 bg-slate-50/80 border-t border-slate-100">
                                  {sub.children!.map(child => (
                                    <button
                                      key={child.name}
                                      onClick={() => {
                                        if (child.brand) {
                                          setFilters(p => ({
                                            ...p,
                                            category: child.id || category.id,
                                            brand: [child.brand as any]
                                          }));
                                        } else {
                                          setFilters(p => ({
                                            ...p,
                                            category: child.id,
                                            brand: []
                                          }));
                                        }
                                        setCurrentView('shop');
                                        setMobileMenuOpen(false);
                                      }}
                                      className="w-full text-left px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:text-orange-600 hover:bg-white rounded-md transition-colors flex items-center justify-between"
                                    >
                                      <span>{child.name}</span>
                                      <ChevronRight className="w-2.5 h-2.5 opacity-40 text-orange-500" />
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nav Links */}
          <div className="px-4 py-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Quick Navigation</p>
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.view}
                  onClick={() => { link.onClick(); setMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                    currentView === link.view
                      ? 'bg-blue-600 text-white font-bold'
                      : link.highlight === 'orange'
                      ? 'text-orange-600 bg-orange-50'
                      : link.highlight === 'red'
                      ? 'text-red-600 bg-red-50'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setCurrentView('admin'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition-all"
              >
                <Zap className="w-4 h-4" /> Admin Panel
              </button>
            </div>
          </div>

          {/* Bottom: Language + Theme */}
          <div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-medium">Hotline: 16789</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleLanguage} className="font-bold text-orange-600 px-3 py-1 rounded-lg bg-orange-50 border border-orange-200 text-xs">
                {language === 'EN' ? 'বাংলা' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
