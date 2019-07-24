import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './app/routes';
import { dbConnect, i18n } from './config';
import { globalErrorHandler } from './app/middlewares';

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
    this.express.use(i18n.init);
  }

  private async database(): Promise<void> {
    dbConnect();
  }

  private routes(): void {
    this.express.use(routes);
    this.express.use(globalErrorHandler);
  }
}

export default new App().express;
