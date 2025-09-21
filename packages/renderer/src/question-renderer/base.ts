import type { Question, QuestionWrapper } from "@exam-paper/structure";
import { styledContentRenderer } from "../style-renderer";
import { answerRenderer } from "../answer-renderer";
import { h } from "../shared/dom";
import { defineRenderer, unTypeWrapper } from "../shared";
import { ELEMENTS } from "../consts/elements";

class ExamPaperQuestion extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

class ExamPaperQuestionOrderNumber extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

class ExamPaperQuestionScore extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

function defineQuestionRendererElement() {
  defineRenderer(ELEMENTS.QUESTION, ExamPaperQuestion);
  defineRenderer(ELEMENTS.QUESTION_ORDER_NUMBER, ExamPaperQuestionOrderNumber);
  defineRenderer(ELEMENTS.QUESTION_SCORE, ExamPaperQuestionScore);
}

export function baseQuestionRenderer(
  questionWrapper: QuestionWrapper | Question
) {
  defineQuestionRendererElement();
  const question = unTypeWrapper(questionWrapper);

  const { orderNumber, title, description, options, score, answer } = question;

  const questionTitleContent = styledContentRenderer(title);
  const questionOrderNumber = orderNumber
    ? h<HTMLElement>(ELEMENTS.QUESTION_ORDER_NUMBER, {
        textContent: orderNumber,
      })
    : null;
  const questionScore = score
    ? h<HTMLElement>(ELEMENTS.QUESTION_SCORE, {
        textContent: score.formatter
          ? score.formatter.replace("%d", `${score.value}`)
          : `${score.value}`,
      })
    : null;
  const questionDescription = description
    ? styledContentRenderer(description)
    : null;
  const questionOptions = options?.map((op) => styledContentRenderer(op));
  const questionAnswer = answer ? answerRenderer(answer.value) : null;

  const titleChildren = [
    questionOrderNumber,
    questionTitleContent,
    questionScore,
  ].filter(Boolean) as HTMLElement[];

  const questionTitle =
    questionOrderNumber || questionScore
      ? h<HTMLElement>(
          "header",
          {
            style: {
              display: "inline-flex",
              alignItems: "baseline",
              gap: "0.5em",
            },
          },
          titleChildren
        )
      : questionTitleContent;

  const children = [
    questionTitle,
    questionDescription,
    questionOptions,
    questionAnswer,
  ]
    .filter(Boolean)
    .flat() as HTMLElement[];

  return h<HTMLElement>(ELEMENTS.QUESTION, null, children);
}
