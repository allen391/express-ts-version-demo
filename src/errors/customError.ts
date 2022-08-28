/*
 * @Author: Allen Chen
 * @Date: 2022-08-18 23:25:38
 * @LastEditTime: 2022-08-27 16:19:59
 * @LastEditors: Allen Chen
 * @Description: custom error class
 */

type ErrorData = { [key: string]: any };

export class CustomError extends Error {
  constructor(
    public message: string,
    public code: string | number = 'INTERNAL_SERVER_ERROR',
    public status: number = 500,
    public data: ErrorData = {},
  ) {
    super();
  }
}

export class RouteNotFound extends CustomError {
  constructor(Url: string) {
    super(`Route ${Url} not found`, 'ROUTE_NOT_FOUND', 404);
  }
}

export class InvalidTokenError extends CustomError {
  constructor(message = 'Authentication token is invalid') {
    super(message, 'INVALID_TOKEN', 401);
  }
}

export class EntityNotFoundError extends CustomError {
  constructor(entityName: string) {
    super(`${entityName} not found`, 'ENTITY_NOT_FOUND', 404);
  }
}
