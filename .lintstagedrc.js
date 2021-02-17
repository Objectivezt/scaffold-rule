/*
 * @Author: objectivezt
 * @Date: 2021-02-17 13:48:43
 * @Last Modified by: objectivezt
 * @Last Modified time: 2021-02-17 13:49:29
 */


module.exports = {
  // lint-staged最大的区别就是只针对当前改动的文件进行操作，而不是全部
  "./src/*.{js,jsx}": [
    "eslint --fix",
    "git add"
  ]
}
