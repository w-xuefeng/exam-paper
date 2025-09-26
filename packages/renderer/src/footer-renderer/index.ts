import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";
import { h } from "../shared/dom";
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
  return h<HTMLElement>("footer", null, [
    styledContentRenderer<ExamPaperFooter>(footer, ELEMENTS.FOOTER),
  ]);
}

export function footersRenderer(
  footerWrapper: (FooterWrapper | FooterWrapper["value"])[]
) {
  if (!footerWrapper.length) return null;
  defineRenderer(ELEMENTS.FOOTER, ExamPaperFooter);
  return h<ExamPaperFooter>(
    ELEMENTS.FOOTER,
    null,
    footerWrapper.map((e) => {
      return styledContentRenderer<ExamPaperFooter>(unTypeWrapper(e), "footer");
    })
  );
}
