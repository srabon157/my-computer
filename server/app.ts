import express, { type Request, type Response, type NextFunction } from 'express';
import cors from 'cors';
import { ordersRouter } from './routes/orders.ts';
import { productsRouter } from './routes/products.ts';
import { adminRouter } from './routes/admin.ts';
import { authRouter } from './routes/auth.ts';
import { seedRouter } from './routes/seed.ts';
import { isDbConnected } from './config/db.ts';

export const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check & Database Status
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'My Computer E-Commerce Backend API',
    databaseConnected: isDbConnected(),
    timestamp: new Date().toISOString(),
  });
});

// Mount Routes
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);
app.use('/api', seedRouter);

// Global Error Handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[API Error]:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

export default app;
