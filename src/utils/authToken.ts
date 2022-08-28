/*
 * @Author: Allen Chen
 * @Date: 2022-08-21 16:27:07
 * @LastEditTime: 2022-08-28 21:54:00
 * @LastEditors: Allen Chen
 * @Description: jwt utils
 */
import jwt, { SignOptions } from 'jsonwebtoken';
import { InvalidTokenError } from '../errors';
import { isPlainObject } from 'lodash';

export const signToken = (payload: object, options?: SignOptions) => {
  jwt.sign(payload, process.env.JWT_SECRET || '', {
    expiresIn: '7d',
    ...options,
  });
};

export const verifyToken = (token: string): { [key: string]: string } => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || '');

    if (isPlainObject(payload)) {
      return payload as { [key: string]: any };
    }
    throw new Error('Invalid token');
  } catch (error) {
    throw new InvalidTokenError();
  }
};
