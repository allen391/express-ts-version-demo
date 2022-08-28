/*
 * @Author: Allen Chen
 * @Date: 2022-08-28 21:51:21
 * @LastEditTime: 2022-08-28 21:52:19
 * @LastEditors: Allen Chen
 * @Description: reset database
 */
import { getConnection } from 'typeorm';

const resetDatabase = async () => {
  const connection = getConnection();
  await connection.dropDatabase();
  await connection.synchronize();
};

export default resetDatabase;
