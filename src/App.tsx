import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';

// Home Section Components
import { HeroSlider } from './components/home/HeroSlider';
import { CategoryGrid } from './components/home/CategoryGrid';
import { FlashSale } from './components/home/FlashSale';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { LaptopShowcase } from './components/home/LaptopShowcase';
import { GamingZone } from './components/home/GamingZone';
import { SmartHome } from './components/home/SmartHome';

// View Pages
import { ShopPage } from './components/shop/ShopPage';
import { ProductDetailPage } from './components/product/ProductDetailPage';
import { PCBuilderPage } from './components/pc-builder/PCBuilderPage';
import { ComparePage } from './components/compare/ComparePage';
import { CheckoutPage } from './components/cart/CheckoutPage';
import { OrderTracking } from './components/user/OrderTracking';
import { UserDashboard } from './components/user/UserDashboard';
import { StoreLocatorPage } from './components/pages/StoreLocatorPage';
import { BlogPage } from './components/pages/BlogPage';
import { OffersPage } from './components/pages/OffersPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminPage } from './components/pages/AdminPage';

// Modals & Extra
import { CartDrawer } from './components/cart/CartDrawer';
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { AiSearchModal } from './components/modals/AiSearchModal';
import { ToastContainer } from './components/extra/ToastContainer';
import { LiveChatWidget } from './components/extra/LiveChatWidget';

const MainContent: React.FC = () => {
  const { currentView } = useStore();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="space-y-8">
            <HeroSlider />
            <CategoryGrid />
            <FlashSale />
            <FeaturedProducts />
            <LaptopShowcase />
            <GamingZone />
            <SmartHome />
          </div>
        );
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'pc-builder':
        return <PCBuilderPage />;
      case 'compare':
        return <ComparePage />;
      case 'cart':
        return <CheckoutPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'order-tracking':
        return <OrderTracking />;
      case 'user-dashboard':
        return <UserDashboard />;
      case 'store-locator':
        return <StoreLocatorPage />;
      case 'blog':
        return <BlogPage />;
      case 'offers':
        return <OffersPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return (
          <div className="space-y-8">
            <HeroSlider />
            <CategoryGrid />
            <FlashSale />
            <FeaturedProducts />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <Header onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderView()}
      </main>

      <Footer />
      <MobileNav onOpenCart={() => setIsCartOpen(true)} />

      {/* Global Modals & Notifications */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ProductDetailModal />
      <AiSearchModal />
      <ToastContainer />
      <LiveChatWidget />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}
