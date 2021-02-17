/*
 * @Author: objectivezt
 * @Date: 2021-02-17 13:48:43
 * @Last Modified by: objectivezt
 * @Last Modified time: 2021-02-17 14:37:03
 */

module.exports = {
  // lint-staged最大的区别就是只针对当前改动的文件进行操作，而不是全部
  './src/*.{ts,tsx,js,jsx}': ['eslint --fix', 'git add'],
  './src/**/*.{vue,css,less}': ['stylelint --fix', 'git add']
};
