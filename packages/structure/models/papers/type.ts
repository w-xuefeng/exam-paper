import { BUILTIN_PAPER_NAME } from "../consts/paper";

export type BuiltInPaperNameUnionTypes = (typeof BUILTIN_PAPER_NAME)[number];

export interface PaperStyle {
  width: string;
  height: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  boxShadow?: string;
  border?: string;
  boxSizing?: string;
  printStyle?: PrintStyle;
}

export interface PrintStyle {
  size: string;
  margin: string;
  breakBefore?: string;
  breakAfter?: string;
  breakInside?: string;
  headingBreakAfter?: string;
  forceBreakBefore?: string;
  forceBreakAfter?: string;
  marks?: string;
  bleed?: string;
  orphans?: string;
  widows?: string;
}

export interface PaperSize<T extends string = BuiltInPaperNameUnionTypes> {
  name: T;
  alias?: string;
  width_mm: number;
  height_mm: number;
  direction: "portrait" | "landscape";
  style: PaperStyle;
}
