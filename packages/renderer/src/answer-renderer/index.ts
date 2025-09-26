import type { AnswerWrapper, Answer } from "@exam-paper/structure";
import { styledContentRenderer } from "../style-renderer";
import { h } from "../shared/dom";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";

class ExamPaperAnswer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function answerRenderer(answerWrapper: Answer | AnswerWrapper) {
  defineRenderer(ELEMENTS.STYLED, ExamPaperAnswer);

  const answer = unTypeWrapper(answerWrapper);

  if (typeof answer === "string") {
    return h<ExamPaperAnswer>(ELEMENTS.ANSWER, { innerHTML: answer });
  }

  return styledContentRenderer<ExamPaperAnswer>(answer, ELEMENTS.ANSWER);
}
