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
  headerWrapper: HeaderWrapper | HeaderWrapper["value"]
) {
  defineRenderer(ELEMENTS.HEADER, ExamPaperHeader);
  const header = unTypeWrapper(headerWrapper);
  return h<HTMLElement>("header", null, [
    styledContentRenderer<ExamPaperHeader>(header, ELEMENTS.HEADER),
  ]);
}

export function headersRenderer(
  headerWrapper: (HeaderWrapper | HeaderWrapper["value"])[]
) {
  if (!headerWrapper.length) return null;
  defineRenderer(ELEMENTS.HEADER, ExamPaperHeader);
  return h<ExamPaperHeader>(
    ELEMENTS.HEADER,
    null,
    headerWrapper.map((e) => {
      return styledContentRenderer<ExamPaperHeader>(unTypeWrapper(e), "header");
    })
  );
}
