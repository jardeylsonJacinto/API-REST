import express from 'express';
import dotenv from 'dotenv';
import homeRouters from './src/routes/homeRoutes';
import studentRouters from './src/routes/studentRoutes';
import userRouters from './src/routes/userRoutes';
import tokenRouters from './src/routes/tokenRoutes';
import './src/database';

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
    this.app.use('/users/', userRouters);
    this.app.use('/tokens/', tokenRouters);
    this.app.use('/alunos/', studentRouters);
  }
}

export default new App().app;
