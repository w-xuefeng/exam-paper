import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer } from "../shared";
import {
  // addCSS,
  parseAttribute,
} from "../shared/dom";
import {
  // type BuiltInPaperNameUnionTypes,
  type ExamPaperWrapper,
} from "@exam-paper/structure";
// import { getPrintStyles } from "./print-style";

// const examPaperPrintStyleId = "exam-paper-print-style";

class ExamPaperPage extends HTMLElement {
  /**
   * the paper size type
   * [BuiltInPaperNameUnionTypes](../../../structure/models/papers/type.ts)
   */
  type?: string;
  constructor() {
    super();
  }
  connectedCallback() {
    const attrs = Object.fromEntries(
      Array.from(this.attributes).map((e) => [e.name, parseAttribute(e.value)])
    );
    if (typeof attrs.type === "string" && attrs.type) {
      this.type = attrs.type;
    }
    // const previous = document.getElementById(examPaperPrintStyleId);
    // if (previous) {
    //   previous.remove();
    // }
    // addCSS(
    //   getPrintStyles(attrs.type as BuiltInPaperNameUnionTypes),
    //   examPaperPrintStyleId
    // );
  }
}

export function paperRenderer(examPaper: ExamPaperWrapper) {
  defineRenderer(ELEMENTS.PAPER, ExamPaperPage);
  const {
    paperSize,
    value: { style },
  } = examPaper;

  const paper = styledContentRenderer(
    {
      value: "",
      style,
    },
    ELEMENTS.PAPER,
    {
      attrs: {
        type: paperSize.name,
      },
    }
  );

  return paper;
}
