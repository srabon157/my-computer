import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  productId: string;
  name: string;
  slug: string;
  description?: string;
  price: number; // Regular price in BDT
  salePrice: number; // Discount / Selling price in BDT
  discountPercentage?: number;
  image: string; // Primary image URL
  images: string[]; // Gallery images
  category: string;
  categoryName?: string;
  subcategory?: string;
  brand: string;
  stock: number;
  availability: 'In Stock' | 'Limited Stock' | 'Out of Stock' | 'Pre-Order';
  badge?: string;
  rating?: number;
  reviewCount?: number;
  shortSpecs?: string[];
  specifications?: Record<string, Array<{ label: string; value: string }>>;
  warranty?: string;
  emiAvailable?: boolean;
  isFeatured?: boolean;
  isFlashSale?: boolean;
  isGaming?: boolean;
  isSmartHome?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    productId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, index: true, trim: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    salePrice: { type: Number, required: true, min: 0 },
    discountPercentage: { type: Number, default: 0 },
    image: { type: String, required: true },
    images: { type: [String], default: [] },
    category: { type: String, required: true, index: true },
    categoryName: { type: String, default: '' },
    subcategory: { type: String, default: '' },
    brand: { type: String, required: true, index: true },
    stock: { type: Number, required: true, default: 10, min: 0 },
    availability: {
      type: String,
      enum: ['In Stock', 'Limited Stock', 'Out of Stock', 'Pre-Order'],
      default: 'In Stock',
      index: true,
    },
    badge: { type: String, default: '' },
    rating: { type: Number, default: 5.0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    shortSpecs: { type: [String], default: [] },
    specifications: { type: Schema.Types.Mixed, default: {} },
    warranty: { type: String, default: '1 Year Official Warranty' },
    emiAvailable: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    isFlashSale: { type: Boolean, default: false },
    isGaming: { type: Boolean, default: false },
    isSmartHome: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Search indexes for fast product search
productSchema.index({ name: 'text', description: 'text', brand: 'text', category: 'text' });

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

