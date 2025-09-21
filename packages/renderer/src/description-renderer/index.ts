import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";
import type { DescriptionWrapper } from "@exam-paper/structure";

class ExamPaperDescription extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function descriptionRenderer(
  descriptionWrapper: DescriptionWrapper | DescriptionWrapper["value"]
) {
  defineRenderer(ELEMENTS.DESCRIPTION, ExamPaperDescription);
  const description = unTypeWrapper(descriptionWrapper);
  return styledContentRenderer(description, ELEMENTS.DESCRIPTION);
}
