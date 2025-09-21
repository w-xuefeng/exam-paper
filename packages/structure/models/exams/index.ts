import type { AnswerWrapper } from "../answer";
import type { StructuralType } from "../consts/shared";
import type {
  StyledContentWrapper,
  BlankWrapper,
  DescriptionWrapper,
  FooterWrapper,
  HeaderWrapper,
  TitleWrapper,
} from "../content/type";

import type { BuiltInPaperNameUnionTypes, PaperSize } from "../papers";
import type { QuestionWrapper } from "../questions";

import type { NormalExam } from "./normal-exam";
export type { NormalExam } from "./normal-exam";

export type ExamWidget =
  | HeaderWrapper
  | TitleWrapper
  | DescriptionWrapper
  | BlankWrapper
  | QuestionWrapper
  | AnswerWrapper
  | FooterWrapper;

export type ExamPaperWrapper<PS extends string = BuiltInPaperNameUnionTypes> = {
  type: StructuralType.PAPER;
  paperSize: PaperSize<PS>;
  value: StyledContentWrapper<ExamWidget[] | NormalExam>;
};
