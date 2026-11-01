import { Router, type Request, type Response } from 'express';
import { connectDB, isDbConnected } from '../config/db.ts';
import { User } from '../models/User.ts';
import { generateToken, verifyAdminToken, type AuthenticatedRequest } from '../middleware/auth.ts';

export const authRouter = Router();

// In-memory user store if database is offline/unconfigured
const inMemoryUsers: any[] = [];

// POST /api/auth/register - Register new customer account
authRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      res.status(400).json({ success: false, error: 'Name is required (at least 2 characters).' });
      return;
    }

    if (!email || !email.includes('@')) {
      res.status(400).json({ success: false, error: 'A valid email address is required.' });
      return;
    }

    if (!password || password.length < 6) {
      res.status(400).json({ success: false, error: 'Password must be at least 6 characters long.' });
      return;
    }

    const cleanEmail = email.toLowerCase().trim();
    await connectDB();

    if (isDbConnected()) {
      const existing = await User.findOne({ email: cleanEmail });
      if (existing) {
        res.status(400).json({ success: false, error: 'An account with this email already exists.' });
        return;
      }

      const newUser = new User({
        name: name.trim(),
        email: cleanEmail,
        phone: phone ? phone.trim() : '',
        password,
        role: 'user',
      });

      await newUser.save();

      const token = generateToken({
        userId: newUser._id.toString(),
        email: newUser.email,
        role: newUser.role,
      });

      res.status(201).json({
        success: true,
        message: 'Account created successfully!',
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          role: newUser.role,
        },
      });
      return;
    }

    // Fallback if DB not connected
    const memExisting = inMemoryUsers.find(u => u.email === cleanEmail);
    if (memExisting) {
      res.status(400).json({ success: false, error: 'An account with this email already exists.' });
      return;
    }

    const memUser = {
      _id: 'mem_' + Date.now(),
      name: name.trim(),
      email: cleanEmail,
      phone: phone ? phone.trim() : '',
      role: 'user',
    };
    inMemoryUsers.push({ ...memUser, password });

    const token = generateToken({
      userId: memUser._id,
      email: memUser.email,
      role: memUser.role,
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully (local session)!',
      token,
      user: memUser,
    });
  } catch (error: any) {
    console.error('[Register Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Registration failed' });
  }
});

// POST /api/auth/login - Login customer account
authRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ success: false, error: 'Email and password are required.' });
      return;
    }

    const cleanEmail = email.toLowerCase().trim();
    await connectDB();

    if (isDbConnected()) {
      const user = await User.findOne({ email: cleanEmail });
      if (!user) {
        res.status(401).json({ success: false, error: 'Invalid email or password.' });
        return;
      }

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
        message: 'Login successful!',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
        },
      });
      return;
    }

    // Memory fallback check
    const memUser = inMemoryUsers.find(u => u.email === cleanEmail && u.password === password);
    if (memUser) {
      const token = generateToken({
        userId: memUser._id,
        email: memUser.email,
        role: memUser.role,
      });

      res.json({
        success: true,
        message: 'Login successful!',
        token,
        user: {
          id: memUser._id,
          name: memUser.name,
          email: memUser.email,
          phone: memUser.phone,
          role: memUser.role,
        },
      });
      return;
    }

    res.status(401).json({ success: false, error: 'Invalid email or password.' });
  } catch (error: any) {
    console.error('[Login Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Login failed' });
  }
});

// GET /api/auth/me - Get current user profile
authRouter.get('/me', verifyAdminToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    res.json({ success: true, user: req.admin });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

