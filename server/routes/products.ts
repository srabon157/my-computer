import { Router, type Request, type Response } from 'express';
import { connectDB, isDbConnected } from '../config/db.ts';
import { Product } from '../models/Product.ts';
import { verifyAdminToken } from '../middleware/auth.ts';
import { PRODUCTS } from '../../src/data/mockData.ts';

export const productsRouter = Router();

// GET /api/products - List products with search, filter, and pagination
productsRouter.get('/', async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { category, brand, search, availability, page = '1', limit = '50', sort = 'newest' } = req.query;

    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    const limitNum = Math.max(1, Math.min(200, parseInt(limit as string, 10) || 50));

    if (isDbConnected()) {
      const filter: Record<string, any> = {};

      if (category && category !== 'all') {
        filter.$or = [
          { category: category },
          { subcategory: category },
        ];
      }

      if (brand) {
        const brands = (brand as string).split(',').map(b => b.trim());
        filter.brand = { $in: brands };
      }

      if (availability) {
        filter.availability = availability;
      }

      if (search) {
        const regex = new RegExp((search as string).trim(), 'i');
        filter.$or = [
          { name: regex },
          { brand: regex },
          { category: regex },
          { categoryName: regex },
          { shortSpecs: regex },
        ];
      }

      let sortOption: Record<string, 1 | -1> = { createdAt: -1 };
      if (sort === 'price-low') sortOption = { salePrice: 1 };
      if (sort === 'price-high') sortOption = { salePrice: -1 };
      if (sort === 'rating') sortOption = { rating: -1 };
      if (sort === 'oldest') sortOption = { createdAt: 1 };

      const total = await Product.countDocuments(filter);
      const products = await Product.find(filter)
        .sort(sortOption)
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum)
        .lean();

      res.json({
        success: true,
        source: 'mongodb',
        products,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      });
      return;
    }

    // Fallback to local catalog if MongoDB is not connected
    let filtered = [...PRODUCTS];

    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category === category || p.subcategory === category);
    }

    if (brand) {
      const brands = (brand as string).split(',').map(b => b.trim().toLowerCase());
      filtered = filtered.filter(p => brands.includes(p.brand.toLowerCase()));
    }

    if (search) {
      const q = (search as string).toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    const total = filtered.length;
    const paginated = filtered.slice((pageNum - 1) * limitNum, pageNum * limitNum);

    res.json({
      success: true,
      source: 'local_catalog',
      products: paginated,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error: any) {
    console.error('[Products GET Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
});

// GET /api/products/:id - Single product by ID or Slug
productsRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await connectDB();

    if (isDbConnected()) {
      const product = await Product.findOne({
        $or: [{ productId: id }, { slug: id }],
      }).lean();

      if (product) {
        res.json({ success: true, product });
        return;
      }
    }

    // Fallback check
    const localProduct = PRODUCTS.find(p => p.id === id || p.slug === id);
    if (localProduct) {
      res.json({ success: true, product: localProduct });
      return;
    }

    res.status(404).json({ success: false, error: 'Product not found' });
  } catch (error: any) {
    console.error('[Products GET Single Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
});

// POST /api/products - Create product (Admin protected)
productsRouter.post('/', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    await connectDB();
    if (!isDbConnected()) {
      res.status(503).json({ success: false, error: 'Database unavailable. Please check MongoDB configuration.' });
      return;
    }

    const body = req.body;
    if (!body.name || !body.price) {
      res.status(400).json({ success: false, error: 'Product name and price are required.' });
      return;
    }

    const productId = body.productId || `prod-${Date.now()}`;
    const slug = body.slug || body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const newProduct = new Product({
      productId,
      name: body.name,
      slug,
      description: body.description || '',
      price: Number(body.price),
      salePrice: Number(body.salePrice || body.price),
      discountPercentage: body.discountPercentage || 0,
      image: body.image || 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
      images: body.images || [body.image || 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop'],
      category: body.category || 'desktop',
      categoryName: body.categoryName || (body.category || 'desktop').toUpperCase(),
      brand: body.brand || 'Other',
      stock: Number(body.stock ?? 10),
      availability: body.availability || 'In Stock',
      badge: body.badge || '',
      shortSpecs: body.shortSpecs || [],
      specifications: body.specifications || {},
      warranty: body.warranty || '1 Year Official Warranty',
      emiAvailable: !!body.emiAvailable,
    });

    await newProduct.save();
    res.status(201).json({ success: true, product: newProduct });
  } catch (error: any) {
    console.error('[Products POST Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to create product' });
  }
});

// PUT /api/products/:id - Update product (Admin protected)
productsRouter.put('/:id', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await connectDB();
    if (!isDbConnected()) {
      res.status(503).json({ success: false, error: 'Database unavailable.' });
      return;
    }

    const updated = await Product.findOneAndUpdate(
      { $or: [{ productId: id }, { slug: id }] },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updated) {
      res.status(404).json({ success: false, error: 'Product not found' });
      return;
    }

    res.json({ success: true, product: updated });
  } catch (error: any) {
    console.error('[Products PUT Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to update product' });
  }
});

// DELETE /api/products/:id - Delete product (Admin protected)
productsRouter.delete('/:id', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await connectDB();
    if (!isDbConnected()) {
      res.status(503).json({ success: false, error: 'Database unavailable.' });
      return;
    }

    const deleted = await Product.findOneAndDelete({
      $or: [{ productId: id }, { slug: id }],
    });

    if (!deleted) {
      res.status(404).json({ success: false, error: 'Product not found' });
      return;
    }

    res.json({ success: true, message: 'Product deleted successfully', productId: id });
  } catch (error: any) {
    console.error('[Products DELETE Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to delete product' });
  }
});
