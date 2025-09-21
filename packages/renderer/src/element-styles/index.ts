import { CSSNestedObjectProperties } from "@exam-paper/structure";
import { ELEMENTS } from "../consts/elements";
import { addStyleElement, handleCSSToStyleElement } from "../shared/dom";

export function elementDefaultStyles(): CSSNestedObjectProperties {
  return {
    [ELEMENTS.PAPER]: {
      display: "block",
    },
    [ELEMENTS.QUESTION]: {
      display: "block",
    },
    [ELEMENTS.ANSWER]: {
      display: "block",
    },
    [ELEMENTS.TITLE]: {
      display: "block",
    },
    [ELEMENTS.DESCRIPTION]: {
      display: "block",
    },
    [ELEMENTS.BLANK]: {
      display: "block",
    },
    [ELEMENTS.HEADER]: {
      display: "block",
    },
    [ELEMENTS.FOOTER]: {
      display: "block",
    },
    [ELEMENTS.STYLED]: {
      display: "block",
    },
    [ELEMENTS.QUESTION_ORDER_NUMBER]: {
      display: "block",
    },
    [ELEMENTS.QUESTION_SCORE]: {
      display: "block",
    },
  };
}

export function applyElementDefaultStyles() {
  const id = "exam-paper-element-agent-style-sheet";
  if (document.getElementById(id)) return;
  const styleElement = handleCSSToStyleElement(elementDefaultStyles());
  if (!styleElement) return;
  styleElement.id = id;
  addStyleElement(styleElement);
}
