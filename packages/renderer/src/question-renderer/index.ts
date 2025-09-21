import { QUESTION_TYPE, type QuestionWrapper } from "@exam-paper/structure";
import { baseQuestionRenderer } from "./base";

export function questionRenderer(question: QuestionWrapper) {
  const { value } = question;
  const { type } = value;

  switch (type) {
    case QUESTION_TYPE.SINGLE_CHOICE:
      return baseQuestionRenderer(value);

    default:
      return baseQuestionRenderer(value);
  }
}
