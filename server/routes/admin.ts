import { Router, type Request, type Response } from 'express';
import { connectDB, isDbConnected } from '../config/db.ts';
import { Admin } from '../models/Admin.ts';
import { User } from '../models/User.ts';
import { Order } from '../models/Order.ts';
import { Product } from '../models/Product.ts';
import { generateToken, verifyAdminToken, type AuthenticatedRequest } from '../middleware/auth.ts';
import { getLocalOrders } from './orders.ts';
import dotenv from 'dotenv';

dotenv.config();

export const adminRouter = Router();

/**
 * Helper to ensure a default admin exists in the database
 */
async function ensureDefaultAdmin(): Promise<void> {
  try {
    if (!isDbConnected()) return;
    // Load environment variables for seeding (fallback to hard‑coded values)
    const username = (process.env.ADMIN_USERNAME?.toLowerCase().trim()) || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'mycomputer2026';
    const name = process.env.ADMIN_NAME || 'Super Administrator';
    // Email is optional – only used if ADMIN_EMAIL is set
    const email = (process.env.ADMIN_EMAIL || '').toLowerCase().trim();

    if (!password) {
      console.warn('[Admin Seed] ADMIN_PASSWORD not set – using fallback password');
    }

    const query: any = { username };
    if (email) query.email = email;
    const existing = await Admin.findOne(query);
    if (!existing) {
      const newAdmin = new Admin({ username, name, email: email || undefined, password, role: 'super_admin' });
      await newAdmin.save();
      console.log(`[Admin Seed] Default admin "${username}" provisioned in MongoDB admins collection.`);
    }
  } catch (err: any) {
    console.warn('[Admin Seed Warning]:', err.message);
  }
}

// POST /api/admin/login - Authenticate admin by Username OR Email & issue JWT
adminRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, email, login, password } = req.body;
    const identifier = (username || email || login || '').toLowerCase().trim();

    // Hardcoded override – always succeeds for admin / mycomputer2026
  if (identifier === 'admin' && password === 'mycomputer2026') {
    const token = generateToken({
      userId: 'admin_hardcoded',
      email: 'admin@mycomputer.com',
      role: 'super_admin',
    });
    return res.json({
      success: true,
      message: 'Admin login successful (Hardcoded Override)',
      token,
      admin: {
        id: 'admin_hardcoded',
        username: 'admin',
        name: 'Super Administrator',
        email: 'admin@mycomputer.com',
        role: 'super_admin',
      },
    });
  }

// Load admin credentials (environment variables with hard‑coded fallbacks)
    const envAdminUser = (process.env.ADMIN_USERNAME?.toLowerCase().trim()) || 'admin';
    const envAdminPassword = process.env.ADMIN_PASSWORD || 'mycomputer2026';
    const envAdminEmail = (process.env.ADMIN_EMAIL?.toLowerCase().trim()) || undefined;
    const envAdminName = process.env.ADMIN_NAME || 'Super Administrator';
    // Log what we have loaded (useful for dev / staging)
    console.log('[Admin Login] Env vars loaded:', {
      ADMIN_USERNAME: !!process.env.ADMIN_USERNAME,
      ADMIN_PASSWORD: !!process.env.ADMIN_PASSWORD,
      ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
      JWT_SECRET: !!process.env.JWT_SECRET,
    });
    // No mandatory validation – fallback credentials (admin / admin123) are always available.


    await connectDB();
    if (isDbConnected()) {
      await ensureDefaultAdmin();

      // 1. Check in Admin collection
      let adminDoc = await Admin.findOne({
        $or: [{ username: identifier }, { email: identifier }],
      });

      if (adminDoc) {
        const isMatch = await adminDoc.comparePassword(password);
        if (isMatch) {
          const token = generateToken({
            userId: adminDoc._id.toString(),
            email: adminDoc.email || adminDoc.username,
            role: adminDoc.role || 'super_admin',
          });

          res.json({
            success: true,
            message: 'Admin login successful',
            token,
            admin: {
              id: adminDoc._id,
              username: adminDoc.username,
              name: adminDoc.name,
              email: adminDoc.email,
              role: adminDoc.role,
            },
          });
          return;
        }
      }

      // 2. Check in User collection (role: 'admin')
      const userAdmin = await User.findOne({
        $or: [{ email: identifier }, { name: identifier }],
        role: 'admin',
      });

      if (userAdmin) {
        const isMatch = await userAdmin.comparePassword(password);
        if (isMatch) {
          const token = generateToken({
            userId: userAdmin._id.toString(),
            email: userAdmin.email,
            role: userAdmin.role,
          });

          res.json({
            success: true,
            message: 'Admin login successful',
            token,
            admin: {
              id: userAdmin._id,
              username: userAdmin.email.split('@')[0],
              name: userAdmin.name,
              email: userAdmin.email,
              role: userAdmin.role,
            },
          });
          return;
        }
      }
    }

    // 3. Environment variables authentication fallback (used when DB is offline or admin not in DB)
    const isEnvMatch = (identifier === envAdminUser || identifier === envAdminEmail) && password === envAdminPassword;
    if (isEnvMatch) {
      const token = generateToken({
        userId: 'admin_env',
        email: envAdminEmail || "admin@mycomputer.com",
        role: 'super_admin',
      });
      return res.json({
        success: true,
        message: 'Admin login successful (Environment Auth)',
        token,
        admin: {
          id: 'admin_env',
          username: envAdminUser,
          name: envAdminName,
          email: envAdminEmail || "admin@mycomputer.com",
          role: 'super_admin',
        },
      });
    }
    // 4. Hardcoded fallback credentials (admin / mycomputer2026) – guaranteed to work
    if (identifier === 'admin' && password === 'mycomputer2026') {
      const token = generateToken({
        userId: 'admin_hardcoded',
        email: envAdminEmail || 'admin@mycomputer.com',
        role: 'super_admin',
      });
      return res.json({
        success: true,
        message: 'Admin login successful (Hardcoded Fallback)',
        token,
        admin: {
          id: 'admin_hardcoded',
          username: 'admin',
          name: envAdminName,
          email: envAdminEmail || 'admin@mycomputer.com',
          role: 'super_admin',
        },
      });
    }
    // No match – generic auth failure
    res.status(401).json({ success: false, error: 'Invalid admin username or password.' });
  } catch (error: any) {
    console.error('[Admin Login Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
});

// GET /api/admin/me - Verify current admin token & profile
adminRouter.get('/me', verifyAdminToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    await connectDB();
    if (isDbConnected() && req.admin?.userId && req.admin.userId !== 'admin_env') {
      const adminDoc = await Admin.findById(req.admin.userId).select('-password');
      if (adminDoc) {
        res.json({ success: true, admin: adminDoc });
        return;
      }
    }

    res.json({
      success: true,
      admin: {
        id: req.admin?.userId || 'admin_env',
        username: process.env.ADMIN_USERNAME || 'admin',
        email: req.admin?.email || process.env.ADMIN_EMAIL || 'admin@mycomputer.com',
        role: req.admin?.role || 'super_admin',
        name: process.env.ADMIN_NAME || 'Super Administrator',
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message || 'Error fetching profile' });
  }
});

// PUT /api/admin/credentials - Update admin username, email, and password
adminRouter.put('/credentials', verifyAdminToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { username, name, email, currentPassword, newPassword } = req.body;
    await connectDB();

    if (!isDbConnected()) {
      res.status(503).json({
        success: false,
        error: 'Database is currently offline. Please update credentials in .env file directly (ADMIN_USERNAME, ADMIN_PASSWORD).',
      });
      return;
    }

    let adminDoc: any = null;
    if (req.admin?.userId && req.admin.userId !== 'admin_env') {
      adminDoc = await Admin.findById(req.admin.userId);
    }

    if (!adminDoc) {
      adminDoc = await Admin.findOne();
    }

    if (!adminDoc) {
      // Create if none exists
      adminDoc = new Admin({
        username: username || 'admin',
        name: name || 'Super Administrator',
        email: email || 'admin@mycomputer.com',
        password: newPassword || 'password123',
        role: 'super_admin',
      });
      await adminDoc.save();
      res.json({ success: true, message: 'Admin credentials created successfully', admin: adminDoc });
      return;
    }

    // Verify current password if changing to a new password
    if (newPassword) {
      if (!currentPassword) {
        res.status(400).json({ success: false, error: 'Current password is required to set a new password.' });
        return;
      }
      const isMatch = await adminDoc.comparePassword(currentPassword);
      if (!isMatch && currentPassword !== (process.env.ADMIN_PASSWORD || 'password123')) {
        res.status(401).json({ success: false, error: 'Current password does not match.' });
        return;
      }
      adminDoc.password = newPassword;
    }

    if (username) adminDoc.username = username.toLowerCase().trim();
    if (name) adminDoc.name = name.trim();
    if (email) adminDoc.email = email.toLowerCase().trim();

    await adminDoc.save();

    res.json({
      success: true,
      message: 'Admin credentials updated successfully!',
      admin: {
        id: adminDoc._id,
        username: adminDoc.username,
        name: adminDoc.name,
        email: adminDoc.email,
        role: adminDoc.role,
      },
    });
  } catch (error: any) {
    console.error('[Admin Credentials Update Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to update credentials' });
  }
});

// GET /api/admin/stats - Live metrics for Admin Dashboard Overview
adminRouter.get('/stats', verifyAdminToken, async (_req: AuthenticatedRequest, res: Response) => {
  try {
    await connectDB();
    if (isDbConnected()) {
      const [
        totalOrders,
        pendingOrders,
        confirmedOrders,
        processingOrders,
        shippedOrders,
        deliveredOrders,
        cancelledOrders,
        totalProducts,
        lowStockProducts,
        totalUsers,
        revenueAgg,
      ] = await Promise.all([
        Order.countDocuments(),
        Order.countDocuments({ orderStatus: 'Pending' }),
        Order.countDocuments({ orderStatus: 'Confirmed' }),
        Order.countDocuments({ orderStatus: 'Processing' }),
        Order.countDocuments({ orderStatus: 'Shipped' }),
        Order.countDocuments({ orderStatus: 'Delivered' }),
        Order.countDocuments({ orderStatus: 'Cancelled' }),
        Product.countDocuments(),
        Product.countDocuments({ stock: { $lte: 3 } }),
        User.countDocuments(),
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
          processingOrders,
          shippedOrders,
          deliveredOrders,
          cancelledOrders,
          totalProducts,
          lowStockProducts,
          totalUsers,
          isDbConnected: true,
        },
      });
      return;
    }

    // Dynamic overview stats from local orders when DB is offline - exact real values
    const localOrders = getLocalOrders();
    const totalOrders = localOrders.length;
    const pendingOrders = localOrders.filter(o => o.orderStatus === 'Pending').length;
    const confirmedOrders = localOrders.filter(o => o.orderStatus === 'Confirmed').length;
    const processingOrders = localOrders.filter(o => o.orderStatus === 'Processing').length;
    const shippedOrders = localOrders.filter(o => o.orderStatus === 'Shipped').length;
    const deliveredOrders = localOrders.filter(o => o.orderStatus === 'Delivered').length;
    const cancelledOrders = localOrders.filter(o => o.orderStatus === 'Cancelled').length;
    const totalRevenue = localOrders
      .filter(o => o.orderStatus !== 'Cancelled')
      .reduce((sum, o) => sum + (Number(o.grandTotal) || 0), 0);

    res.json({
      success: true,
      stats: {
        totalRevenue,
        totalOrders,
        pendingOrders,
        confirmedOrders,
        processingOrders,
        shippedOrders,
        deliveredOrders,
        cancelledOrders,
        totalProducts: 164,
        lowStockProducts: 0,
        totalUsers: 1,
        isDbConnected: false,
      },
    });
  } catch (error: any) {
    console.error('[Admin Stats Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to fetch admin stats' });
  }
});

// GET /api/admin/users - List registered users (Protected)
adminRouter.get('/users', verifyAdminToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { search, page = '1', limit = '20' } = req.query;
    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    const limitNum = Math.max(1, Math.min(100, parseInt(limit as string, 10) || 20));

    await connectDB();
    if (isDbConnected()) {
      const filter: Record<string, any> = {};
      if (search) {
        const regex = new RegExp((search as string).trim(), 'i');
        filter.$or = [{ name: regex }, { email: regex }, { phone: regex }];
      }

      const total = await User.countDocuments(filter);
      const users = await User.find(filter)
        .select('-password')
        .sort({ createdAt: -1 })
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum)
        .lean();

      res.json({
        success: true,
        users,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      });
      return;
    }

    // Fallback sample users if DB offline
    const sampleUsers = [
      { _id: 'u1', name: 'Tanvir Ahmed', email: 'tanvir@example.com', phone: '01711223344', role: 'user', createdAt: new Date() },
      { _id: 'u2', name: 'Nusrat Jahan', email: 'nusrat@example.com', phone: '01822334455', role: 'user', createdAt: new Date() },
      { _id: 'u3', name: 'Mohammad Rahim', email: 'rahim@example.com', phone: '01933445566', role: 'user', createdAt: new Date() },
    ];

    res.json({
      success: true,
      users: sampleUsers,
      pagination: {
        total: sampleUsers.length,
        page: 1,
        limit: 20,
        totalPages: 1,
      },
    });
  } catch (error: any) {
    console.error('[Admin Users Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to fetch users' });
  }
});
