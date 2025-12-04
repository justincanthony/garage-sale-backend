import mongoose from 'mongoose';
import { config } from '../config';

let isConnected = false; // Track the connection state globally

export async function connectToDatabase() {
  if (isConnected) {
    return mongoose.connection;
  }

  try {
    const connection = await mongoose.connect(config.mongo.uri, {
      dbName: config.mongo.dbName,
    });

    isConnected = connection.connections[0].readyState === 1;
    console.log('MongoDB connected:', isConnected);

    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
