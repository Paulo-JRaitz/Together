import express, { json, Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import { router } from './routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  } else {
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
