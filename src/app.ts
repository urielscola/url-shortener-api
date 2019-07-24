import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { dbConnect } from './config';

class App {
  public express = express.application;

  public constructor() {
    dotenv.config();
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private async database(): Promise<void> {
    dbConnect();
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
