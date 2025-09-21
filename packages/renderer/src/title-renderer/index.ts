import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";
import type { TitleWrapper } from "@exam-paper/structure";

class ExamPaperTitle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function titleRenderer(
  titleWrapper: TitleWrapper | TitleWrapper["value"]
) {
  defineRenderer(ELEMENTS.TITLE, ExamPaperTitle);
  const title = unTypeWrapper(titleWrapper);
  return styledContentRenderer(title, ELEMENTS.TITLE);
}
