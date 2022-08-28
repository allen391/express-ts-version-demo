/*
 * @Author: Allen Chen
 * @Date: 2022-08-28 21:32:01
 * @LastEditTime: 2022-08-28 21:37:29
 * @LastEditors: Allen Chen
 * @Description: user entity
 */
import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar', { length: 2000 })
  avatarUrl: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

export default User;
