export const STYLE_TYPE = {
  /**
   * Inline style
   */
  INLINE: "inline",
  /**
   * Cascading Style Sheets
   */
  CSS: "css",
} as const;

/**
 * Style types
 *  - `inline`: Inline style
 *  - `css`: Cascading Style Sheets
 */
export type StyleTypeUnionTypes = (typeof STYLE_TYPE)[keyof typeof STYLE_TYPE];

export namespace StyleType {
  /**
   * Inline style
   */
  export type INLINE = typeof STYLE_TYPE.INLINE;
  /**
   * Cascading Style Sheets
   */
  export type CSS = typeof STYLE_TYPE.CSS;
}

export const STYLE_LOCALES = {
  zh_CN: {
    styleType: "样式类型",
    [STYLE_TYPE.INLINE]: "内联样式",
    [STYLE_TYPE.CSS]: "CSS样式",
  },
  en_US: {
    styleType: "Style Type",
    [STYLE_TYPE.INLINE]: "Inline Style",
    [STYLE_TYPE.CSS]: "CSS Style",
  },
};
