import type { StyleWrapper } from "../styles";
import type { StructuralType } from "../consts/shared";
import type { TypeWrapper } from "../shared/type";

/**
 * styled content
 */
export type StyledContentWrapper<T = string> = {
  value?: T;
  style?: StyleWrapper;
};

/**
 * layout
 */
export type LayoutWrapper<T> = {
  style?: StyleWrapper;
  layout: T;
};

/**
 * the page of the exam paper
 */
export type PageWrapper<T> = LayoutWrapper<T> & {
  type: StructuralType.PAGE;
};

/**
 * the BLANK of the exam paper
 */
export type BlankWrapper = {
  type: StructuralType.BLANK;
  style: StyleWrapper;
};

/**
 * the HEADER of the exam paper
 */
export type HeaderWrapper = TypeWrapper<
  StructuralType.HEADER,
  StyledContentWrapper<string>
>;

/**
 * the title of the exam or the questions
 */
export type TitleWrapper = TypeWrapper<
  StructuralType.TITLE,
  StyledContentWrapper<string>
>;

/**
 * the description of the exam or the question
 */
export type DescriptionWrapper = TypeWrapper<
  StructuralType.DESCRIPTION,
  StyledContentWrapper<string>
>;

/**
 * the FOOTER of the exam paper
 */
export type FooterWrapper = TypeWrapper<
  StructuralType.FOOTER,
  StyledContentWrapper<string>
>;
