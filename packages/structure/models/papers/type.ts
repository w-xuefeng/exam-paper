import { BUILTIN_PAPER_NAME } from "../consts/paper";
import { CSSProperties } from "../styles";

export type BuiltInPaperNameUnionTypes = (typeof BUILTIN_PAPER_NAME)[number];

export type PaperDirection = "portrait" | "landscape";

export interface PaperSize<T extends string = BuiltInPaperNameUnionTypes> {
  name: T;
  alias?: string;
  width_mm: number;
  height_mm: number;
}

export interface PaperOption<T extends string = BuiltInPaperNameUnionTypes> {
  paper: T;
  direction?: PaperDirection;
  pagination?: {
    style?: CSSProperties;
    /**
     * the formatter of the pagination
     * @example `'第' %current '页 / 共' %total '页'`
     */
    formatter?: string;
    position?:
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right"
      | "top-center"
      | "bottom-center";
  };
}
