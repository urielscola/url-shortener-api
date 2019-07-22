import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

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

  private database(): void {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true
    });
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
