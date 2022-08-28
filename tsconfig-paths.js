/*
 * @Author: Allen Chen
 * @Date: 2022-08-18 21:46:56
 * @LastEditTime: 2022-08-18 21:48:01
 * @LastEditors: Allen Chen
 * @Description:absolute path for production
 */

const tsConfigPath = require('tsconfig-paths');
const tsConfig = require('./tsconfig.json');

// Typescript compiler doesn't rewrite absolute paths back to relative
// when compiling production code to /build. Instead we have to use
// tsconfig-paths to do that job when we run our production start script.
tsConfigPath.register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths,
});
