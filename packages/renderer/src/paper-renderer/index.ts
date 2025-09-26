import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer } from "../shared";
import { parseAttribute } from "../shared/dom";
import { applyElementDefaultStyles } from "../element-styles";
import type {
  BuiltInPaperNameUnionTypes,
  ExamPaperWrapper,
  FooterWrapper,
  HeaderWrapper,
  PaperDirection,
  PaperOption,
} from "@exam-paper/structure";
import { ExamPaperPage } from "../page-render";

class ExamPaperContainer extends HTMLElement {
  /**
   * the paper size type
   * [BuiltInPaperNameUnionTypes](../../../structure/models/papers/type.ts)
   */
  paper?: BuiltInPaperNameUnionTypes;

  /**
   * the paper direction
   * [PaperDirection](../../../structure/models/papers/type.ts)
   */
  direction?: PaperDirection;

  /**
   * the paper pagination
   * [PaperOption](../../../structure/models/papers/type.ts)
   */
  pagination?: PaperOption["pagination"];

  /**
   * the header
   */
  header?: HeaderWrapper["value"];

  /**
   * the footer
   */
  footer?: FooterWrapper["value"];

  /**
   * the pages of paper
   */
  pages: ExamPaperPage[] = [];

  constructor() {
    super();
  }
  connectedCallback() {
    const attrs = Object.fromEntries(
      Array.from(this.attributes).map((e) => [e.name, parseAttribute(e.value)])
    );
    if (typeof attrs.type === "string" && attrs.type) {
      this.paper = attrs.type as BuiltInPaperNameUnionTypes;
    }
    if (typeof attrs.direction === "string" && attrs.direction) {
      this.direction = attrs.direction as PaperDirection;
    }
    const paperOption = {
      paper: this.paper || "A4",
      direction: this.direction || "portrait",
      pagination: this.pagination,
    };
    applyElementDefaultStyles(paperOption, this);
    this.append(...this.pages);
  }
}

export function paperRenderer(examPaper: ExamPaperWrapper) {
  defineRenderer(ELEMENTS.PAPER, ExamPaperContainer);
  const {
    option: { paper: paperType, direction = "portrait", pagination },
    style,
    header,
    footer,
  } = examPaper;

  const paper = styledContentRenderer<ExamPaperContainer>(
    { style },
    ELEMENTS.PAPER,
    {
      header,
      footer,
      pagination,
      attrs: {
        paper: paperType,
        direction,
      },
    }
  );

  return paper;
}
