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
