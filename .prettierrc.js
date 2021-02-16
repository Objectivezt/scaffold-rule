/*
 * @Author: objectivezt
 * @Date: 2021-02-16 17:13:30
 * @Last Modified by: objectivezt
 * @Last Modified time: 2021-02-16 20:10:11
 */

module.exports = {
  /**
   * @english Use single quotes instead of double quotes in JSX.
   * @chinese 在JSX中使用单引号而不是双引号
   */
  singleQuote: true,
  /**
   * @english Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
   * @chinese 将多行JSX元素的>放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）
   */
  jsxBracketSameLine: true,
  /**
   * @english endOfLine: "<lf|crlf|cr|auto>
   * @chinese
   */
  endOfLine: 'auto',

  printWidth: 100,
  /**
   * @english By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer, e.g. GitHub comment and BitBucket. In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out with "never".
   * @chinese
   */
  proseWarp: 'never',
};
