import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer, unTypeWrapper } from "../shared";
import { h, parseAttribute } from "../shared/dom";
import { applyElementDefaultStyles } from "../element-styles";
import type {
  BuiltInPaperNameUnionTypes,
  ExamPaperWrapper,
  FooterWrapper,
  HeaderWrapper,
  PaperDirection,
  PaperOption,
} from "@exam-paper/structure";
import { headerRenderer } from "../header-renderer";
import { footerRenderer } from "../footer-renderer";

class ExamPaperPage extends HTMLElement {
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
   * if header and footer are enabled, use table layout
   */
  table: HTMLTableElement | null = null;

  /**
   * the main container of table layout   */
  tableMainContainer: HTMLTableColElement | null = null;

  /**
   * the layout of paper
   */
  layout: HTMLElement[] = [];

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

    if (this.header || this.footer) {
      this.tableMainContainer = h<HTMLTableColElement>("td", null, this.layout);
      this.table = h<HTMLTableElement>(
        "table",
        {
          className: "exam-paper-table-layout",
        },
        [
          this.header
            ? h("thead", null, [
                h("tr", null, [
                  h("td", null, headerRenderer(this.header, true)),
                ]),
              ])
            : null,
          h("tbody", null, [h("tr", null, this.tableMainContainer)]),
          this.footer
            ? h("tfoot", null, [
                h("tr", null, [
                  h("td", null, footerRenderer(this.footer, true)),
                ]),
              ])
            : null,
        ].filter(Boolean) as HTMLElement[]
      );
      this.appendChild(this.table);
    } else {
      this.append(...this.layout);
    }
  }
}

export function paperRenderer(examPaper: ExamPaperWrapper) {
  defineRenderer(ELEMENTS.PAPER, ExamPaperPage);
  const {
    paper: paperType,
    direction = "portrait",
    // pagination = {
    //   style: {
    //     fontSize: "12px",
    //   },
    //   formatter: "第 %current 页 / 共 %total 页",
    //   position: "bottom-center",
    // },
    pagination,
    value: {
      style,
      layout: { header, footer },
    },
  } = examPaper;

  const paper = styledContentRenderer<ExamPaperPage>(
    { style },
    ELEMENTS.PAPER,
    {
      header: unTypeWrapper(header),
      footer: unTypeWrapper(footer),
      pagination,
      attrs: {
        paper: paperType,
        direction,
      },
    }
  );

  return paper;
}
