import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, FilterState, ViewMode, Order, Coupon, PCBuildComponent } from '../types';
import { PRODUCTS, MOCK_ORDERS, MOCK_COUPONS } from '../data/mockData';

interface Toast {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}

interface StoreContextType {
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  openProductDetail: (id: string) => void;
  
  // Theme & Language
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: 'EN' | 'BN';
  toggleLanguage: () => void;

  // Search & Modals
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  aiSearchOpen: boolean;
  setAiSearchOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartSubtotal: number;
  appliedCoupon: Coupon | null;
  couponDiscountBDT: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  cartTotal: number;

  // Wishlist & Compare
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;

  // PC Builder State
  pcBuildComponents: PCBuildComponent[];
  addPCComponent: (slotId: string, product: Product) => void;
  removePCComponent: (slotId: string) => void;
  clearPCBuild: () => void;
  pcBuildTotalBDT: number;
  pcBuildTotalWattage: number;
  pcBuildCompatibilityIssue: string | null;
  addAllPCToCart: () => void;

  // Filters & Catalog
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  filteredProducts: Product[];

  // Orders & Account
  orders: Order[];
  createOrder: (orderData: Partial<Order>) => Order;
  activeTrackingId: string;
  setActiveTrackingId: (id: string) => void;

  // Toasts
  toasts: Toast[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
}

const initialFilters: FilterState = {
  category: null,
  brand: [],
  priceRange: [0, 500000],
  stockOnly: false,
  gamingOnly: false,
  emiOnly: false,
  rating: null,
  searchQuery: '',
  sortBy: 'featured'
};

const initialPCComponents: PCBuildComponent[] = [
  { slotId: 'cpu', slotName: 'Processor (CPU)', slotNameBn: 'প্রসেসর', icon: 'Cpu', product: null },
  { slotId: 'motherboard', slotName: 'Motherboard', slotNameBn: 'মাদারবোর্ড', icon: 'HardDrive', product: null },
  { slotId: 'ram', slotName: 'Memory (RAM)', slotNameBn: 'র‌্যাম', icon: 'MemoryStick', product: null },
  { slotId: 'gpu', slotName: 'Graphics Card (GPU)', slotNameBn: 'গ্রাফিক্স কার্ড', icon: 'CircuitBoard', product: null },
  { slotId: 'storage', slotName: 'Storage (SSD/HDD)', slotNameBn: 'স্টোরেজ', icon: 'Database', product: null },
  { slotId: 'psu', slotName: 'Power Supply (PSU)', slotNameBn: 'পাওয়ার সাপ্লাই', icon: 'Zap', product: null },
  { slotId: 'case', slotName: 'Casing', slotNameBn: 'কেসিং', icon: 'Box', product: null },
  { slotId: 'cooler', slotName: 'CPU Cooler', slotNameBn: 'সিপিইউ কুলার', icon: 'Fan', product: null }
];

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'EN' | 'BN'>('EN');

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [aiSearchOpen, setAiSearchOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [compareList, setCompareList] = useState<Product[]>([]);

  const [pcBuildComponents, setPcBuildComponents] = useState<PCBuildComponent[]>(initialPCComponents);
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [activeTrackingId, setActiveTrackingId] = useState<string>('MC-84920');

  const [toasts, setToasts] = useState<Toast[]>([]);

  // Toast System
  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Theme Manager
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'BN' : 'EN'));
  };

  const openProductDetail = (id: string) => {
    setSelectedProductId(id);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Functions
  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    addToast(language === 'EN' ? 'Added to Cart' : 'কার্টে যোগ করা হয়েছে', `${product.name.slice(0, 35)}...`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    addToast(language === 'EN' ? 'Item Removed' : 'আইটেম সরানো হয়েছে', '', 'info');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.discountPrice * item.quantity,
    0
  );

  const couponDiscountBDT = appliedCoupon
    ? Math.min((cartSubtotal * appliedCoupon.discountPercent) / 100, appliedCoupon.maxDiscountBDT)
    : 0;

  const cartTotal = Math.max(0, cartSubtotal - couponDiscountBDT);

  const applyCoupon = (code: string) => {
    const coupon = MOCK_COUPONS.find(c => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!coupon) {
      return { success: false, message: language === 'EN' ? 'Invalid Coupon Code' : 'অকার্যকর কুপন কোড' };
    }
    if (cartSubtotal < coupon.minSpendBDT) {
      return { 
        success: false, 
        message: language === 'EN' 
          ? `Minimum spend of ৳${coupon.minSpendBDT.toLocaleString()} required` 
          : `ন্যূনতম ৳${coupon.minSpendBDT.toLocaleString()} খরচ করতে হবে` 
      };
    }
    setAppliedCoupon(coupon);
    addToast(language === 'EN' ? 'Coupon Applied!' : 'কুপন প্রয়োগ করা হয়েছে!', `${coupon.discountPercent}% Discount`);
    return { success: true, message: language === 'EN' ? 'Coupon Applied Successfully!' : 'কুপন সফলভাবে প্রয়োগ করা হয়েছে!' };
  };

  // Wishlist & Compare
  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        addToast(language === 'EN' ? 'Removed from Wishlist' : 'উইশলিস্ট থেকে সরানো হয়েছে', '', 'info');
        return prev.filter(p => p.id !== product.id);
      } else {
        addToast(language === 'EN' ? 'Added to Wishlist' : 'উইশলিস্টে যোগ করা হয়েছে', product.name.slice(0, 30));
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.some(p => p.id === productId);

  const addToCompare = (product: Product) => {
    if (compareList.some(p => p.id === product.id)) {
      addToast(language === 'EN' ? 'Already in Comparison' : 'ইতিমধ্যে তুলনামূলক তালিকায় আছে', '', 'warning');
      return;
    }
    if (compareList.length >= 4) {
      addToast(language === 'EN' ? 'Compare limit reached' : 'সর্বোচ্চ ৪ টি পণ্য তুলনা করতে পারবেন', '', 'warning');
      return;
    }
    setCompareList(prev => [...prev, product]);
    addToast(language === 'EN' ? 'Added to Compare' : 'তুলনায় যোগ করা হয়েছে', product.name.slice(0, 30));
  };

  const removeFromCompare = (productId: string) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  const clearCompare = () => setCompareList([]);

  const isInCompare = (productId: string) => compareList.some(p => p.id === productId);

  // PC Builder
  const addPCComponent = (slotId: string, product: Product) => {
    setPcBuildComponents(prev =>
      prev.map(slot => (slot.slotId === slotId ? { ...slot, product } : slot))
    );
    addToast(language === 'EN' ? 'PC Part Selected' : 'কম্পোনেন্ট নির্বাচন করা হয়েছে', product.name.slice(0, 30));
  };

  const removePCComponent = (slotId: string) => {
    setPcBuildComponents(prev =>
      prev.map(slot => (slot.slotId === slotId ? { ...slot, product: null } : slot))
    );
  };

  const clearPCBuild = () => {
    setPcBuildComponents(initialPCComponents);
    addToast(language === 'EN' ? 'Build Reset' : 'পিসি বিল্ড রিসেট হয়েছে', '', 'info');
  };

  const pcBuildTotalBDT = pcBuildComponents.reduce(
    (sum, slot) => sum + (slot.product ? slot.product.discountPrice : 0),
    0
  );

  const pcBuildTotalWattage = pcBuildComponents.reduce(
    (sum, slot) => sum + (slot.product?.wattage || 0),
    0
  );

  // Check socket compatibility (CPU vs Motherboard)
  const cpuComp = pcBuildComponents.find(s => s.slotId === 'cpu')?.product;
  const moboComp = pcBuildComponents.find(s => s.slotId === 'motherboard')?.product;
  const psuComp = pcBuildComponents.find(s => s.slotId === 'psu')?.product;

  let pcBuildCompatibilityIssue: string | null = null;
  if (cpuComp && moboComp && cpuComp.socketType && moboComp.socketType) {
    if (cpuComp.socketType !== moboComp.socketType) {
      pcBuildCompatibilityIssue = `Socket Mismatch! CPU (${cpuComp.socketType}) is incompatible with Motherboard (${moboComp.socketType}).`;
    }
  }
  if (psuComp && psuComp.wattage && pcBuildTotalWattage > psuComp.wattage) {
    pcBuildCompatibilityIssue = `Power Warning! Estimated system draw (${pcBuildTotalWattage}W) exceeds PSU rating (${psuComp.wattage}W). Please upgrade PSU.`;
  }

  const addAllPCToCart = () => {
    const selected = pcBuildComponents.filter(s => s.product !== null);
    if (selected.length === 0) return;

    selected.forEach(slot => {
      if (slot.product) addToCart(slot.product, 1);
    });
    addToast(
      language === 'EN' ? 'Custom Rig Added to Cart!' : 'কাস্টম পিসি কার্টে যোগ করা হয়েছে!',
      `${selected.length} components added`
    );
  };

  // Filtering System
  const resetFilters = () => setFilters(initialFilters);

  const filteredProducts = PRODUCTS.filter(product => {
    // Category filter
    if (filters.category && product.category !== filters.category) return false;
    
    // Brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) return false;

    // Price range
    if (product.discountPrice < filters.priceRange[0] || product.discountPrice > filters.priceRange[1]) return false;

    // Stock
    if (filters.stockOnly && product.stockStatus !== 'In Stock') return false;

    // Gaming
    if (filters.gamingOnly && !product.isGaming) return false;

    // EMI
    if (filters.emiOnly && !product.emiAvailable) return false;

    // Rating
    if (filters.rating && product.rating < filters.rating) return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCategory = product.categoryName.toLowerCase().includes(q);
      const matchSpecs = product.shortSpecs.some(s => s.toLowerCase().includes(q));
      if (!matchName && !matchBrand && !matchCategory && !matchSpecs) return false;
    }

    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'price-low') return a.discountPrice - b.discountPrice;
    if (filters.sortBy === 'price-high') return b.discountPrice - a.discountPrice;
    if (filters.sortBy === 'rating') return b.rating - a.rating;
    if (filters.sortBy === 'newest') return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  // Create New Order
  const createOrder = (orderData: Partial<Order>): Order => {
    const newId = `MC-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder: Order = {
      id: newId,
      date: new Date().toISOString().split('T')[0],
      customerName: orderData.customerName || 'Customer',
      customerPhone: orderData.customerPhone || '',
      customerEmail: orderData.customerEmail || '',
      shippingAddress: orderData.shippingAddress || '',
      district: orderData.district || 'Dhaka',
      items: cart.map(i => ({
        productId: i.product.id,
        productName: i.product.name,
        image: i.product.images[0],
        price: i.product.discountPrice,
        quantity: i.quantity
      })),
      subtotal: cartSubtotal,
      discount: couponDiscountBDT,
      shippingCost: orderData.district === 'Dhaka' ? 120 : 200,
      total: cartTotal + (orderData.district === 'Dhaka' ? 120 : 200),
      paymentMethod: orderData.paymentMethod || 'Cash on Delivery',
      paymentStatus: orderData.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
      orderStatus: 'Placed',
      trackingSteps: [
        { title: 'Order Placed', date: 'Just Now', completed: true, current: true },
        { title: 'Payment Verification', date: 'Pending', completed: false },
        { title: 'Packing at Central Warehouse', date: 'Pending', completed: false },
        { title: 'Handed to Courier (Paperfly/RedX)', date: 'Pending', completed: false },
        { title: 'Delivered', date: 'Pending', completed: false }
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    setActiveTrackingId(newId);
    clearCart();
    return newOrder;
  };

  return (
    <StoreContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedProductId,
        setSelectedProductId,
        openProductDetail,
        theme,
        toggleTheme,
        language,
        toggleLanguage,
        searchQuery,
        setSearchQuery,
        aiSearchOpen,
        setAiSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartSubtotal,
        appliedCoupon,
        couponDiscountBDT,
        applyCoupon,
        cartTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        pcBuildComponents,
        addPCComponent,
        removePCComponent,
        clearPCBuild,
        pcBuildTotalBDT,
        pcBuildTotalWattage,
        pcBuildCompatibilityIssue,
        addAllPCToCart,
        filters,
        setFilters,
        resetFilters,
        filteredProducts,
        orders,
        createOrder,
        activeTrackingId,
        setActiveTrackingId,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};
