import type { AnswerWrapper } from "../answer";
import type { StructuralType } from "../consts/shared";
import type {
  BlankWrapper,
  DescriptionWrapper,
  FooterWrapper,
  HeaderWrapper,
  TitleWrapper,
  LayoutWrapper,
} from "../content/type";

import type { BuiltInPaperNameUnionTypes, PaperOption } from "../papers";
import type { QuestionWrapper } from "../questions";
import type { TypeWrapper } from "../shared/type";

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

export interface ExamPaperWrapper<
  Paper extends string = BuiltInPaperNameUnionTypes
> extends TypeWrapper<StructuralType.PAPER, LayoutWrapper<NormalExam>>,
    PaperOption<Paper> {}
