/*
 * @Author: Allen Chen
 * @Date: 2022-08-23 23:58:46
 * @LastEditTime: 2022-08-28 19:01:18
 * @LastEditors: Allen Chen
 * @Description: middleware for error handling
 */

import { ErrorRequestHandler } from 'express';
import { pick } from 'lodash';
import { CustomError } from '../errors';

export const handleError: ErrorRequestHandler = (error, _req, res, _next) => {
  console.log(error);

  const isErrorSafeForClient = error instanceof CustomError;
  console.log(isErrorSafeForClient);
  const clientError = isErrorSafeForClient
    ? pick(error, ['message', 'code', 'status', 'data'])
    : {
        message: 'Something went wrong, please contact our support team',
        code: 'INTERNAL_SERVER_ERROR',
        status: 500,
        data: {},
      };

  res.status(clientError.status).json({ error: clientError });
};
