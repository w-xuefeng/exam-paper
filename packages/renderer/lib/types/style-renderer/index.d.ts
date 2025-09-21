import { type StyledContentWrapper } from "@exam-paper/structure";
import { type HTMLOrSVGElementProperties } from "../shared/dom";
import { type BuiltInElementNameUnionTypes } from "../consts/elements";
export declare function styledContentRenderer<T = HTMLElement>(styledContent: StyledContentWrapper<any>, elementName?: BuiltInElementNameUnionTypes, properties?: HTMLOrSVGElementProperties<T>): T;
