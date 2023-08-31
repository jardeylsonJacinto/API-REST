import express from 'express';
import dotenv from 'dotenv';
import homeRouters from './src/routes/homeRoutes';

dotenv.config();
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouters);
  }
}

export default new App().app;
