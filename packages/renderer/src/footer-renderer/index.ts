import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";
import type { FooterWrapper } from "@exam-paper/structure";

class ExamPaperFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function footerRenderer(
  footerWrapper: FooterWrapper | FooterWrapper["value"]
) {
  defineRenderer(ELEMENTS.FOOTER, ExamPaperFooter);
  const footer = unTypeWrapper(footerWrapper);
  return styledContentRenderer(footer, ELEMENTS.FOOTER);
}
