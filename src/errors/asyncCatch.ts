/*
 * @Author: Allen Chen
 * @Date: 2022-08-18 23:52:39
 * @LastEditTime: 2022-08-27 16:20:45
 * @LastEditors: Allen Chen
 * @Description: encapsulate the error handling logic
 */
import { RequestHandler, Request, Response, NextFunction } from 'express';

export const catchErrors = (requestHandler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      requestHandler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
