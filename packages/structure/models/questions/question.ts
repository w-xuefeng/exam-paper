import type { QuestionTypeUnionTypes } from "../consts/question";
import type { StyledContentWrapper } from "../content/type";
import type { AnswerWrapper } from "../answer";
import type { FormatterWrapper } from "../shared/type";

export interface Question {
  /**
   * the type of question, the detialed types can be found in [`QUESTION_TYPE`](../consts/question.ts)
   */
  type: QuestionTypeUnionTypes;
  /**
   * the order number of question, like 1, 2, 3, "1.2", "一"... (optional
   */
  orderNumber?: string;
  /**
   * the stylized title of question
   */
  title: StyledContentWrapper<string>;
  /**
   * the description title of question
   */
  description?: StyledContentWrapper<string>;
  /**
   * the options of question, if the question type is choice question (single or multiple)
   */
  options?: StyledContentWrapper<string>[];
  /**
   * the score of question
   */
  score?: FormatterWrapper<number>;
  /**
   * the answer of question, if you want to show the answer in the exam paper, you can set it
   */
  answer?: AnswerWrapper;
}
