/*
 * @Author: Allen Chen
 * @Date: 2022-08-21 16:16:27
 * @LastEditTime: 2022-08-28 19:00:37
 * @LastEditors: Allen Chen
 * @Description: middleware for authentication
 */
import { Request } from 'express';
import { catchErrors, InvalidTokenError } from '../errors';
import { verifyToken } from '../utils/authToken';

const getAuthToken = (req: Request) => {
  const header = req.get('Authorization') || '';
  const token = header.split(' ')[1];
  return token ? token : null;
};

export const authenticateUser = catchErrors((req, _res, next) => {
  const token = getAuthToken(req);
  if (!token) {
    throw new InvalidTokenError('Authentication token not found');
  }
  const authToken = verifyToken(token);
  const userId = authToken.userId;
  if (!userId) {
    throw new InvalidTokenError('Authentication token is invalid');
  }
  //next step is to fetch the user from the database
  next();
});
