import {
  BUILTIN_PAPER_NAME,
  PAGINATION_TYPE,
  PAPER_DIRECTION,
} from "../consts/paper";
import { CSSProperties } from "../styles";

export type BuiltInPaperNameUnionTypes = (typeof BUILTIN_PAPER_NAME)[number];

export type PaperDirection =
  (typeof PAPER_DIRECTION)[keyof typeof PAPER_DIRECTION];

export type PaginationType =
  (typeof PAGINATION_TYPE)[keyof typeof PAGINATION_TYPE];

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
    type?: PaginationType;
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
