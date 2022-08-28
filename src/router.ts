/*
 * @Author: Allen Chen
 * @Date: 2022-08-23 23:50:25
 * @LastEditTime: 2022-08-27 20:02:45
 * @LastEditors: Allen Chen
 * @Description: router entry file: private and public
 */
import { Request, Response } from 'express';

export const attachPublicRoutes = (app: any): void => {
  if (process.env.NODE_ENV === 'test') {
    console.log('test');
  }
  app.get('/index', (_req: Request, res: Response) => {
    console.log('index page');
    res.send('index page');
  });
};

export const attachPrivateRoutes = (app: any): void => {
  console.log(app);
};
