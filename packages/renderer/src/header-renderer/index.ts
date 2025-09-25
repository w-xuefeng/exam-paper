import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";
import { h } from "../shared/dom";
import type { HeaderWrapper } from "@exam-paper/structure";

class ExamPaperHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function headerRenderer(
  headerWrapper: HeaderWrapper | HeaderWrapper["value"],
  isPlaceholder = false
) {
  defineRenderer(ELEMENTS.HEADER, ExamPaperHeader);
  const header = unTypeWrapper(headerWrapper);

  if (isPlaceholder) {
    return styledContentRenderer<ExamPaperHeader>(
      {
        style: header.style,
      },
      ELEMENTS.HEADER,
      {
        className: "header-placeholder",
      }
    );
  }

  return h<HTMLElement>("header", null, [
    styledContentRenderer<ExamPaperHeader>(header, ELEMENTS.HEADER),
    styledContentRenderer<ExamPaperHeader>(header, ELEMENTS.HEADER, {
      className: "print-header",
    }),
  ]);
}
