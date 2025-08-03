// config/config.js
import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/secondhandstore';

export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const CLIENT_URL =
  process.env.CLIENT_URL || 'https://secondhandstore.vercel.app';
