import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import './src/database';
import homeRouters from './src/routes/homeRoutes';
import photoRouters from './src/routes/photoRoutes';
import studentRouters from './src/routes/studentRoutes';
import tokenRouters from './src/routes/tokenRoutes';
import userRouters from './src/routes/userRoutes';

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
    this.app.use(express.static(resolve(__dirname));
  }

  routes() {
    this.app.use('/', homeRouters);
    this.app.use('/users/', userRouters);
    this.app.use('/tokens/', tokenRouters);
    this.app.use('/students/', studentRouters);
    this.app.use('/photos/', photoRouters);
  }
}

export default new App().app;
