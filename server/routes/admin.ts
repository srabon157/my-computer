import { Router, type Request, type Response } from 'express';
import { connectDB, isDbConnected } from '../config/db.ts';
import { User } from '../models/User.ts';
import { Order } from '../models/Order.ts';
import { Product } from '../models/Product.ts';
import { generateToken, verifyAdminToken, type AuthenticatedRequest } from '../middleware/auth.ts';
import dotenv from 'dotenv';

dotenv.config();

export const adminRouter = Router();

// POST /api/admin/login - Authenticate admin & issue JWT
adminRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ success: false, error: 'Email and password are required.' });
      return;
    }

    const cleanEmail = email.toLowerCase().trim();
    const envAdminEmail = (process.env.ADMIN_EMAIL || 'admin@mycomputer.com').toLowerCase().trim();
    const envAdminPassword = process.env.ADMIN_PASSWORD || 'Admin@123456';

    await connectDB();
    if (isDbConnected()) {
      let user = await User.findOne({ email: cleanEmail });

      // If user is not yet created but matches environment admin, auto-seed the admin
      if (!user && cleanEmail === envAdminEmail) {
        user = new User({
          name: process.env.ADMIN_NAME || 'Store Admin',
          email: envAdminEmail,
          password: envAdminPassword,
          role: 'admin',
        });
        await user.save();
      }

      if (user) {
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          res.status(401).json({ success: false, error: 'Invalid email or password.' });
          return;
        }

        const token = generateToken({
          userId: user._id.toString(),
          email: user.email,
          role: user.role,
        });

        res.json({
          success: true,
          message: 'Admin login successful',
          token,
          admin: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        });
        return;
      }
    }

    // Direct fallback with configured ENV credentials
    if (cleanEmail === envAdminEmail && password === envAdminPassword) {
      const token = generateToken({
        userId: 'admin_env',
        email: envAdminEmail,
        role: 'admin',
      });

      res.json({
        success: true,
        message: 'Admin login successful (Configuration Auth)',
        token,
        admin: {
          id: 'admin_env',
          name: process.env.ADMIN_NAME || 'Store Admin',
          email: envAdminEmail,
          role: 'admin',
        },
      });
      return;
    }

    res.status(401).json({ success: false, error: 'Invalid admin credentials.' });
  } catch (error: any) {
    console.error('[Admin Login Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
});

// GET /api/admin/me - Verify current admin token & profile
adminRouter.get('/me', verifyAdminToken, async (req: AuthenticatedRequest, res: Response) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});

// GET /api/admin/stats - Live metrics for Admin Dashboard
adminRouter.get('/stats', verifyAdminToken, async (_req: AuthenticatedRequest, res: Response) => {
  try {
    await connectDB();
    if (isDbConnected()) {
      const [
        totalOrders,
        pendingOrders,
        confirmedOrders,
        deliveredOrders,
        cancelledOrders,
        totalProducts,
        lowStockProducts,
        revenueAgg,
      ] = await Promise.all([
        Order.countDocuments(),
        Order.countDocuments({ orderStatus: 'Pending' }),
        Order.countDocuments({ orderStatus: 'Confirmed' }),
        Order.countDocuments({ orderStatus: 'Delivered' }),
        Order.countDocuments({ orderStatus: 'Cancelled' }),
        Product.countDocuments(),
        Product.countDocuments({ stock: { $lte: 3 } }),
        Order.aggregate([
          { $match: { orderStatus: { $ne: 'Cancelled' } } },
          { $group: { _id: null, total: { $sum: '$grandTotal' } } },
        ]),
      ]);

      const totalRevenue = revenueAgg.length > 0 ? revenueAgg[0].total : 0;

      res.json({
        success: true,
        stats: {
          totalRevenue,
          totalOrders,
          pendingOrders,
          confirmedOrders,
          deliveredOrders,
          cancelledOrders,
          totalProducts,
          lowStockProducts,
          isDbConnected: true,
        },
      });
      return;
    }

    // Default stats if DB not connected
    res.json({
      success: true,
      stats: {
        totalRevenue: 14850000,
        totalOrders: 14,
        pendingOrders: 3,
        confirmedOrders: 5,
        deliveredOrders: 6,
        cancelledOrders: 0,
        totalProducts: 164,
        lowStockProducts: 12,
        isDbConnected: false,
      },
    });
  } catch (error: any) {
    console.error('[Admin Stats Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to fetch admin stats' });
  }
});
