export type CategoryId = 
  | 'desktop'
  | 'laptop'
  | 'component'
  | 'monitor'
  | 'power'
  | 'phone'
  | 'tablet'
  | 'office-equipment'
  | 'camera'
  | 'security'
  | 'networking'
  | 'software'
  | 'server-storage'
  | 'accessories'
  | 'gadget'
  | 'gaming'
  | 'tv'
  | 'appliance'
  | 'desktop-pc'
  | 'gaming-pc'
  | 'processor'
  | 'graphics-card'
  | 'motherboard'
  | 'ram'
  | 'storage'
  | 'keyboard-mouse'
  | 'headphone-audio'
  | 'cctv-security'
  | 'tv-appliance'
  | 'air-conditioner'
  | 'mobile-tablet';

export type BrandName = 
  | 'Apple'
  | 'Asus'
  | 'Dell'
  | 'HP'
  | 'Lenovo'
  | 'Acer'
  | 'MSI'
  | 'Gigabyte'
  | 'Intel'
  | 'AMD'
  | 'Nvidia'
  | 'Corsair'
  | 'Samsung'
  | 'LG'
  | 'Sony'
  | 'Xiaomi'
  | 'Hikvision'
  | 'Dahua'
  | 'TP-Link'
  | 'Logitech';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface BankEMI {
  bankName: string;
  months: number;
  monthlyBDT: number;
}

export interface ProductReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface ProductQuestion {
  id: string;
  userName: string;
  question: string;
  date: string;
  answer?: string;
  answeredBy?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: BrandName;
  category: CategoryId;
  categoryName: string;
  subcategory?: string;
  badge?: 'Hot' | 'New' | 'Flash Sale' | 'Best Seller' | 'Offer';
  regularPrice: number; // in BDT
  discountPrice: number; // in BDT
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  stockStatus: 'In Stock' | 'Limited Stock' | 'Out of Stock' | 'Pre-Order';
  stockCount: number;
  isFeatured?: boolean;
  isFlashSale?: boolean;
  isGaming?: boolean;
  isSmartHome?: boolean;
  laptopSegment?: 'Business' | 'Student' | 'Creator' | 'Gaming' | 'Budget' | 'Premium';
  images: string[];
  shortSpecs: string[];
  specifications: Record<string, ProductSpecification[]>;
  warranty: string;
  emiAvailable: boolean;
  emiStartingBDT?: number;
  pcBuilderCategory?: 'cpu' | 'motherboard' | 'ram' | 'gpu' | 'storage' | 'psu' | 'case' | 'cooler';
  wattage?: number; // for PC builder calculation
  socketType?: string; // for compatibility check (e.g. LGA1700, AM5)
  ramType?: string; // e.g., DDR4, DDR5
  reviews: ProductReview[];
  questions: ProductQuestion[];
  createdDate: string;
}

export interface SubCategory {
  id: string;
  name: string;
  nameBn: string;
  popular?: boolean;
  hasChildren?: boolean;
  isShowAll?: boolean;
}

export interface Category {
  id: CategoryId;
  name: string;
  nameBn: string;
  icon: string;
  image: string;
  itemCount: number;
  popular?: boolean;
  subCategories?: SubCategory[];
}

export interface Brand {
  name: BrandName;
  logo: string;
  category: string;
  popular: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface PCBuildComponent {
  slotId: 'cpu' | 'motherboard' | 'ram' | 'gpu' | 'storage' | 'psu' | 'case' | 'cooler';
  slotName: string;
  slotNameBn: string;
  icon: string;
  product: Product | null;
}

export interface FilterState {
  category: string | null;
  brand: string[];
  priceRange: [number, number];
  stockOnly: boolean;
  gamingOnly: boolean;
  emiOnly: boolean;
  rating: number | null;
  searchQuery: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
}

export interface OrderItem {
  productId: string;
  productName: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  shippingAddress: string;
  district: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;
  paymentMethod: 'bKash' | 'Nagad' | 'SSLCommerz' | 'Cash on Delivery';
  paymentStatus: 'Paid' | 'Pending';
  orderStatus: 'Placed' | 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  trackingSteps: {
    title: string;
    date: string;
    completed: boolean;
    current?: boolean;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface StoreLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl: string;
  isHeadquarter?: boolean;
}

export interface Coupon {
  code: string;
  discountPercent: number;
  maxDiscountBDT: number;
  minSpendBDT: number;
  validUntil: string;
}

export type ViewMode = 
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'pc-builder'
  | 'compare'
  | 'cart'
  | 'checkout'
  | 'order-tracking'
  | 'user-dashboard'
  | 'admin'
  | 'store-locator'
  | 'blog'
  | 'offers'
  | 'about'
  | 'contact';
