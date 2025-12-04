import express, { Request, Response } from 'express';
import cors from 'cors';

import { config } from './config';

const app = express();
const port = config.port;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/health', (req: Request, res: Response) => {
  res.send({ "success": true, "message": "Backend running" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
