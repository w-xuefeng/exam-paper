import type { AnswerWrapper } from "../answer";
import type { QuestionWrapper } from "../questions";
import type {
  DescriptionWrapper,
  BlankWrapper,
  FooterWrapper,
  HeaderWrapper,
  TitleWrapper,
} from "../content/type";

export interface NormalExam {
  header?: HeaderWrapper | HeaderWrapper["value"];
  title?: TitleWrapper | TitleWrapper["value"];
  description?: DescriptionWrapper | DescriptionWrapper["value"];
  main: (BlankWrapper | TitleWrapper | DescriptionWrapper | QuestionWrapper)[];
  answer?: (AnswerWrapper | AnswerWrapper["value"])[];
  footer?: FooterWrapper | FooterWrapper["value"];
}
