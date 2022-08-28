/*
 * @Author: Allen Chen
 * @Date: 2022-08-19 21:49:23
 * @LastEditTime: 2022-08-28 21:49:28
 * @LastEditors: Allen Chen
 * @Description: db connection function
 */

import { createConnection, Connection } from 'typeorm';
import * as entities from '../entities';

const createDatabaseConnection = (): Promise<Connection> => {
  console.log(entities);
  return createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: Object.values(entities),
    synchronize: true,
  });
};

export default createDatabaseConnection;
