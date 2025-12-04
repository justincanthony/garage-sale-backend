import dotenv from 'dotenv';
import { requireEnv } from './utils/validateEnv';

dotenv.config();

export const config = {
  port: requireEnv('PORT'),
  mongo: {
    uri: requireEnv('MONGODB_URI'),
    dbName: requireEnv('DB_NAME'),
  },
  aws: {
    accessKeyId: requireEnv('AWS_ACCESS_KEY_ID'),
    secretAccessKey: requireEnv('AWS_SECRET_ACCESS_KEY'),
    region: requireEnv('AWS_REGION'),
    bucketName: requireEnv('S3_BUCKET_NAME'),
  },
  stripe: {
    secretKey: requireEnv('STRIPE_SECRET_KEY'),
    webhookSecret: requireEnv('STRIPE_WEBHOOK_SECRET'),
    successUrl: requireEnv('STRIPE_SUCCESS_URL'),
    cancelUrl: requireEnv('STRIPE_CANCEL_URL'),
  },
};
