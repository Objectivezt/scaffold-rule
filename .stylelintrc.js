/*
 * @Author: objectivezt
 * @Date: 2021-02-17 10:35:39
 * @Last Modified by: objectivezt
 * @Last Modified time: 2021-02-17 14:52:20
 */
module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    './node_modules/prettier-stylelint/config.js'
  ],
  plugins: [
    'stylelint-selector-bem-pattern',
    'stylelint-order'
  ],
  rules: {
    'plugin/selector-bem-pattern': {
      // 选择Preset Patterns，支持suit和bem两种，默认suit规范；
      // 不管哪种都需要手动指定，因为该插件未给源插件默认指定
      'preset': 'bem',
      /**
       * 自定义模式规则
       * 指定组合的选择器检查规则，其实就是指定class名称规则
       * 支持正则字符串、返回正则的函数、包含2个选项参数的对象等写法
       */
      componentSelectors: {
        // 只初始的选择器规则（可以理解为外层的class规则）
        initial: '^\\.{componentName}(?:__[-a-z]+)?(?:--[a-z]+)?$',
        // 可以理解为外层以内的选择器的规则，
        // 如果不指定，则跟initial同样的规则，
        // 注意这里配置的时候比上面少一个问号，
        // 是希望内层就不应该只有componentName作为选择器了
        combined: '^\\.{componentName}(?:__[-a-z]+)(?:--[a-z]+)?$'
      },
      "utilitySelectors": "^\\.u-[a-z]+$",
      ignoreSelectors: ['^\\.el-', '/deep/', '>>>', '^\\.icon-'],
      ignoreCustomProperties: [],
    },
    'order/properties-order': [{
      // Must be first.
      properties: ['all'],
    },
    {
      // Position.
      properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index', ],
    },
    {
      // Display mode.
      properties: ['box-sizing', 'display', ],
    },
    {
      // Flexible boxes.
      properties: ['flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', ],
    },
    {
      // Grid layout.
      properties: ['grid', 'grid-area', 'grid-template', 'grid-template-areas', 'grid-template-rows', 'grid-template-columns', 'grid-row', 'grid-row-start', 'grid-row-end', 'grid-column', 'grid-column-start', 'grid-column-end', 'grid-auto-rows', 'grid-auto-columns', 'grid-auto-flow', 'grid-gap', 'grid-row-gap', 'grid-column-gap', ],
    },
    {
      // Align.
      properties: ['align-content', 'align-items', 'align-self'],
    },
    {
      // Justify.
      properties: ['justify-content', 'justify-items', 'justify-self', ],
    },
    {
      // Order.
      properties: ['order'],
    },
    {
      // Box model.
      properties: ['float', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'overflow', 'overflow-x', 'overflow-y', '-webkit-overflow-scrolling', '-ms-overflow-x', '-ms-overflow-y', '-ms-overflow-style', 'clip', 'clear', ],
    },
    {
      // Typography.
      properties: ['font', 'font-family', 'font-size', 'font-style', 'font-weight', 'font-variant', 'font-size-adjust', 'font-stretch', 'font-effect', 'font-emphasize', 'font-emphasize-position', 'font-emphasize-style', '-webkit-font-smoothing', '-moz-osx-font-smoothing', 'font-smooth', 'hyphens', 'line-height', 'color', 'text-align', 'text-align-last', 'text-emphasis', 'text-emphasis-color', 'text-emphasis-style', 'text-emphasis-position', 'text-decoration', 'text-indent', 'text-justify', 'text-outline', '-ms-text-overflow', 'text-overflow', 'text-overflow-ellipsis', 'text-overflow-mode', 'text-shadow', 'text-transform', 'text-wrap', '-webkit-text-size-adjust', '-ms-text-size-adjust', 'letter-spacing', 'word-break', 'word-spacing', 'word-wrap', // Legacy name for `overflow-wrap`
      'overflow-wrap', 'tab-size', 'white-space', 'vertical-align', 'list-style', 'list-style-position', 'list-style-type', 'list-style-image', ],
    },
    {
      // Accessibility & Interactions.
      properties: ['pointer-events', '-ms-touch-action', 'touch-action', 'cursor', 'visibility', 'zoom', 'table-layout', 'empty-cells', 'caption-side', 'border-spacing', 'border-collapse', 'content', 'quotes', 'counter-reset', 'counter-increment', 'resize', 'user-select', 'nav-index', 'nav-up', 'nav-right', 'nav-down', 'nav-left', ],
    },
    {
      // Background & Borders.
      properties: ['background', 'background-color', 'background-image', "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient", 'filter:progid:DXImageTransform.Microsoft.gradient', 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader', 'filter', 'background-repeat', 'background-attachment', 'background-position', 'background-position-x', 'background-position-y', 'background-clip', 'background-origin', 'background-size', 'background-blend-mode', 'isolation', 'border', 'border-color', 'border-style', 'border-width', 'border-top', 'border-top-color', 'border-top-style', 'border-top-width', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-bottom', 'border-bottom-color', 'border-bottom-style', 'border-bottom-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius', 'border-image', 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset', 'border-image-repeat', 'outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset', 'box-shadow', 'mix-blend-mode', 'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity', "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha", 'opacity', '-ms-interpolation-mode', ],
    },
    {
      // SVG Presentation Attributes.
      properties: ['alignment-baseline', 'baseline-shift', 'dominant-baseline', 'text-anchor', 'word-spacing', 'writing-mode',

      'fill', 'fill-opacity', 'fill-rule', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width',

      'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'flood-color', 'flood-opacity', 'image-rendering', 'lighting-color', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'shape-rendering', 'stop-color', 'stop-opacity', ],
    },
    {
      // Transitions & Animation.
      properties: ['transition', 'transition-delay', 'transition-timing-function', 'transition-duration', 'transition-property', 'transform', 'transform-origin', 'animation', 'animation-name', 'animation-duration', 'animation-play-state', 'animation-timing-function', 'animation-delay', 'animation-iteration-count', 'animation-direction', ],
    },
    ],
  }
};
