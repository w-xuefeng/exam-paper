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
  footerWrapper: FooterWrapper | FooterWrapper["value"],
  isPlaceholder = false
) {
  defineRenderer(ELEMENTS.FOOTER, ExamPaperFooter);
  const footer = unTypeWrapper(footerWrapper);

  if (isPlaceholder) {
    return styledContentRenderer<ExamPaperFooter>(
      {
        style: footer.style,
      },
      ELEMENTS.FOOTER,
      {
        className: "footer-placeholder",
      }
    );
  }

  return h<HTMLElement>("footer", null, [
    styledContentRenderer<ExamPaperFooter>(footer, ELEMENTS.FOOTER),
    styledContentRenderer<ExamPaperFooter>(footer, ELEMENTS.FOOTER, {
      className: "print-footer",
    }),
  ]);
}
