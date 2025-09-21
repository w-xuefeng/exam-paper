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
  header?: HeaderWrapper["value"];
  title?: TitleWrapper["value"];
  description?: DescriptionWrapper["value"];
  main: (BlankWrapper | TitleWrapper | DescriptionWrapper | QuestionWrapper)[];
  answer?: AnswerWrapper["value"][];
  footer?: FooterWrapper["value"];
}
