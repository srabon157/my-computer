import React, { useState, useEffect, useRef } from 'react';
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
import { EzvizCameraShowcase } from './components/home/EzvizCameraShowcase';
import { LgMonitorPage } from './components/pages/LgMonitorPage';
import { AsusMonitorPage } from './components/pages/AsusMonitorPage';

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

  const [pageKey, setPageKey] = useState(0);
  const prevView = useRef(currentView);

  useEffect(() => {
    if (currentView !== prevView.current) {
      prevView.current = currentView;
      setPageKey(k => k + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="w-full flex flex-col gap-10 sm:gap-14 lg:gap-16">
            <HeroSlider />
            <CategoryGrid />
            <FlashSale />
            <EzvizCameraShowcase />
            <FeaturedProducts />
            <LaptopShowcase />
            <GamingZone />
            <SmartHome />
          </div>
        );
      case 'lg-monitors':
        return <LgMonitorPage />;
      case 'asus-monitors':
        return <AsusMonitorPage />;
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
          <div className="flex flex-col gap-5 sm:gap-7">
            <HeroSlider />
            <CategoryGrid />
            <FlashSale />
            <FeaturedProducts />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-950 font-sans">
      <Header onOpenCart={() => setIsCartOpen(true)} />

      <main
        key={pageKey}
        className="grow w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 pb-24 md:pb-16 page-enter"
      >
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
