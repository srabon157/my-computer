import app from '../server/app.ts';
import { connectDB } from '../server/config/db.ts';

// Pre-connect database for serverless invocations
connectDB().catch((err) => {
  console.warn('[Vercel Serverless] DB connection on startup failed:', err.message);
});

export default app;
