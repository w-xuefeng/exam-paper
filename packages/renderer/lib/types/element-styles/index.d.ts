import type { CSSNestedObjectProperties, PaperOption } from "@exam-paper/structure";
export declare function elementDefaultStyles<Paper extends string>({ paper, direction, pagination, }: PaperOption<Paper>): CSSNestedObjectProperties;
export declare function applyElementDefaultStyles<Paper extends string>(paperOption: PaperOption<Paper>, container?: HTMLElement | ShadowRoot | Document): void;
