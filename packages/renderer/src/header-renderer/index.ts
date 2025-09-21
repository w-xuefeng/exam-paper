import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";
import type { HeaderWrapper } from "@exam-paper/structure";

class ExamPaperHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function headerRenderer(
  headerWrapper: HeaderWrapper | HeaderWrapper["value"]
) {
  defineRenderer(ELEMENTS.HEADER, ExamPaperHeader);
  const header = unTypeWrapper(headerWrapper);
  return styledContentRenderer(header, ELEMENTS.HEADER);
}
