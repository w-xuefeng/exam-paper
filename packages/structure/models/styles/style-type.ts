import type { StyleType } from "../consts/style";
import type { TypeWrapper } from "../shared/type";
import type { CSSProperties, CSSNestedObjectProperties } from "./css-type";

/**
 * Style wrapper
 * The style of rich text content, specifically specifying which method to use to apply `value` through `type`
 */
export type StyleInlineWrapper = TypeWrapper<StyleType.INLINE, CSSProperties>;
export type StyleCSSWrapper = TypeWrapper<
  StyleType.CSS,
  CSSNestedObjectProperties
>;

export type StyleWrapper = StyleInlineWrapper | StyleCSSWrapper;
