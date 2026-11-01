import { Router, type Request, type Response } from 'express';
import { connectDB, isDbConnected } from '../config/db.ts';
import { Product } from '../models/Product.ts';
import { User } from '../models/User.ts';
import { Counter } from '../models/Counter.ts';
import { PRODUCTS } from '../../src/data/mockData.ts';
import dotenv from 'dotenv';

dotenv.config();

export const seedRouter = Router();

export async function runDatabaseSeed(force = false) {
  await connectDB();
  if (!isDbConnected()) {
    return { success: false, message: 'Database not connected. Please verify MONGODB_URI in .env.' };
  }

  // 1. Seed / verify Admin user
  const adminEmail = (process.env.ADMIN_EMAIL || 'admin@mycomputer.com').toLowerCase().trim();
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123456';
  const adminName = process.env.ADMIN_NAME || 'Store Admin';

  let adminUser = await User.findOne({ email: adminEmail });
  if (!adminUser) {
    adminUser = new User({
      name: adminName,
      email: adminEmail,
      password: adminPassword,
      role: 'admin',
    });
    await adminUser.save();
    console.log(`[Seed] Created initial Admin user: ${adminEmail}`);
  }

  // 2. Initialize Order Counter if not exists
  const existingCounter = await Counter.findById('orderId');
  if (!existingCounter) {
    await Counter.create({ _id: 'orderId', seq: 10000 });
    console.log('[Seed] Initialized Order Counter starting at 10000');
  }

  // 3. Seed Products
  const currentCount = await Product.countDocuments();
  if (currentCount === 0 || force) {
    console.log(`[Seed] Syncing ${PRODUCTS.length} products to MongoDB...`);
    let synced = 0;
    for (const p of PRODUCTS) {
      await Product.findOneAndUpdate(
        { productId: p.id },
        {
          productId: p.id,
          name: p.name,
          slug: p.slug || p.id,
          description: p.shortSpecs ? p.shortSpecs.join('. ') : p.name,
          price: p.regularPrice,
          salePrice: p.discountPrice,
          discountPercentage: p.discountPercentage || 0,
          image: p.images && p.images.length > 0 ? p.images[0] : '',
          images: p.images || [],
          category: p.category,
          categoryName: p.categoryName || '',
          subcategory: p.subcategory || '',
          brand: p.brand,
          stock: p.stockCount !== undefined ? p.stockCount : 10,
          availability: p.stockStatus || 'In Stock',
          badge: p.badge || '',
          rating: p.rating || 5.0,
          reviewCount: p.reviewCount || 0,
          shortSpecs: p.shortSpecs || [],
          specifications: p.specifications || {},
          warranty: p.warranty || '1 Year Official Warranty',
          emiAvailable: !!p.emiAvailable,
          isFeatured: !!p.isFeatured,
          isFlashSale: !!p.isFlashSale,
          isGaming: !!p.isGaming,
          isSmartHome: !!p.isSmartHome,
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      synced++;
    }
    console.log(`[Seed] Successfully synced ${synced} products to MongoDB!`);
    return {
      success: true,
      message: `Database seeded successfully: ${synced} products synced and Admin account ready.`,
      adminEmail,
      productsCount: synced,
    };
  }

  return {
    success: true,
    message: `Database already initialized (${currentCount} products exist). Admin account ready.`,
    adminEmail,
    productsCount: currentCount,
  };
}

seedRouter.post('/seed', async (req: Request, res: Response) => {
  try {
    const force = req.query.force === 'true';
    const result = await runDatabaseSeed(force);
    res.json(result);
  } catch (error: any) {
    console.error('[Seed Error]:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Database seed failed',
    });
  }
});
