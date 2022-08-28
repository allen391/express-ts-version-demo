/*
 * @Author: Allen Chen
 * @Date: 2022-08-18 21:52:09
 * @LastEditTime: 2022-08-28 19:21:33
 * @LastEditors: Allen Chen
 * @Description: entry point of the application
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { handleError } from './middleware/error';
import { attachPublicRoutes, attachPrivateRoutes } from './router';
import { RouteNotFound } from './errors';

const initializeExpress = (): void => {
  const app = express();

  app.use(cors());

  app.use(express.json());
  
  app.use(express.urlencoded({ extended: true }));

  // public routes like register and login
  attachPublicRoutes(app);

  // add authenticated middleware here

  // private routes after authentication
  attachPrivateRoutes(app);

  // router not found handler
  app.use((req, _res, next) => {
    next(new RouteNotFound(`Route not found: ${req.method} ${req.originalUrl}`));
  });

  // error handling middleware
  app.use(handleError);
  app.listen(process.env.PORT || 3000);
};

const initializeApp = () => {
  initializeExpress();
};

initializeApp();
