import type { AnswerWrapper } from "../answer";
import type { StructuralType } from "../consts/shared";
import type {
  BlankWrapper,
  DescriptionWrapper,
  FooterWrapper,
  HeaderWrapper,
  PageWrapper,
  TitleWrapper,
} from "../content/type";

import type { BuiltInPaperNameUnionTypes, PaperOption } from "../papers";
import type { QuestionWrapper } from "../questions";
import type { StyleWrapper } from "../styles";

export type ExamWidget =
  | HeaderWrapper
  | TitleWrapper
  | DescriptionWrapper
  | BlankWrapper
  | QuestionWrapper
  | AnswerWrapper
  | FooterWrapper;

export interface ExamPaperWrapper<
  Paper extends string = BuiltInPaperNameUnionTypes
> {
  type: StructuralType.PAPER;
  option: PaperOption<Paper>;
  style?: StyleWrapper;
  header?: HeaderWrapper["value"];
  footer?: FooterWrapper["value"];
  pages: PageWrapper<ExamWidget[]>[];
}
