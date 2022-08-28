/*
 * @Author: Allen Chen
 * @Date: 2022-08-28 19:35:20
 * @LastEditTime: 2022-08-28 21:30:52
 * @LastEditors: Allen Chen
 * @Description: utils for validation
 */
type ErrorMessage = string | false;

const is = {
  required:
    () =>
    (value: any): ErrorMessage =>
      isNillOrEmptyString(value) && 'Required',
  minLength:
    (min: number) =>
    (value: any): ErrorMessage =>
      !!value && value.length < min && `Must be at least ${min} characters`,
  maxLength:
    (max: number) =>
    (value: any): ErrorMessage =>
      !!value && value.length > max && `Must be at most ${max} characters`,
  notEmptyArray:
    (arr: any[]) =>
    (value: any): ErrorMessage =>
      !!value && arr.length === 0 && 'Must not be empty, please add at least one item',
};

const isNillOrEmptyString = (value: any): boolean =>
  value === null || value === undefined || value === '';
