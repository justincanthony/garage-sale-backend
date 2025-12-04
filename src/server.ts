import express, { Request, Response } from 'express';
import cors from 'cors';

import { config } from './config';

const app = express();
const port = config.port;

import { connectToDatabase } from './db/connect';

app.use(cors());
app.use(express.json());

// Connect to Database
connectToDatabase().catch(err => {
  console.error('Failed to connect to database on startup:', err);
});


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/health', (req: Request, res: Response) => {
  res.send({ "success": true, "message": "Backend running" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
