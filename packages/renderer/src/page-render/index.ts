import { ELEMENTS } from "../consts/elements";
import { footersRenderer } from "../footer-renderer";
import { headersRenderer } from "../header-renderer";
import { defineRenderer } from "../shared";
import { matchRender } from "../shared/renderer";
import { styledContentRenderer } from "../style-renderer";

import {
  STYLE_TYPE,
  PAGINATION_TYPE,
  STRUCTURAL_TYPE,
  type PaperOption,
  type ExamWidget,
  type FooterWrapper,
  type HeaderWrapper,
  type PageWrapper,
  type CSSProperties,
} from "@exam-paper/structure";

export class ExamPaperPage extends HTMLElement {
  constructor() {
    super();
  }

  fitHeader() {
    const header = this.querySelector(ELEMENTS.HEADER);
    if (!header) {
      return;
    }
    const { height } = getComputedStyle(header);
    this.style.paddingBlockStart = `${parseFloat(height)}px`;
  }

  fitFooter() {
    const footer = this.querySelector(ELEMENTS.FOOTER);
    if (!footer) {
      return;
    }
    const { height } = getComputedStyle(footer);
    this.style.paddingBlockEnd = `${parseFloat(height)}px`;
  }

  connectedCallback() {
    this.fitHeader();
    this.fitFooter();
  }
}

function handleInnerPagination(
  index: number,
  total: number,
  option?: PaperOption<string>
) {
  if (!option?.pagination) {
    return;
  }
  const {
    style,
    formatter,
    position,
    type = PAGINATION_TYPE.INNER,
  } = option.pagination;

  if (type !== PAGINATION_TYPE.INNER) {
    return;
  }

  const content = formatter
    ?.replace("%current", `${index}`)
    .replace("%total", `${total}`)
    .replace(/['"]/g, "");

  const [align, justify] = position?.split("-") || ["bottom", "center"];

  const paginationStyle: CSSProperties = {
    ...style,
    height: "1em",
    textAlign: justify as "left" | "center" | "right",
  };

  const value = {
    value: content,
    style: {
      type: STYLE_TYPE.INLINE,
      value: paginationStyle,
    },
  };

  return {
    type: align === "top" ? STRUCTURAL_TYPE.HEADER : STRUCTURAL_TYPE.FOOTER,
    value,
  };
}

export function pageRenderer(
  pageWrapper: PageWrapper<ExamWidget[]>,
  pageIndex: number,
  totalPages: number,
  globalWidget?: {
    header?: HeaderWrapper["value"];
    footer?: FooterWrapper["value"];
    option?: PaperOption<string>;
  }
) {
  defineRenderer(ELEMENTS.PAGE, ExamPaperPage);
  const { header, footer, option } = globalWidget || {};

  const innerPagination = handleInnerPagination(
    pageIndex + 1,
    totalPages,
    option
  );

  if (innerPagination?.type === STRUCTURAL_TYPE.HEADER) {
    pageWrapper.layout.unshift(innerPagination);
  }

  if (header) {
    pageWrapper.layout.unshift({
      type: STRUCTURAL_TYPE.HEADER,
      value: header,
    });
  }

  if (footer) {
    pageWrapper.layout.push({
      type: STRUCTURAL_TYPE.FOOTER,
      value: footer,
    });
  }

  if (innerPagination?.type === STRUCTURAL_TYPE.FOOTER) {
    pageWrapper.layout.push(innerPagination);
  }

  const headers: (HeaderWrapper | HeaderWrapper["value"])[] = [];
  const footers: (FooterWrapper | FooterWrapper["value"])[] = [];
  const layout: ExamWidget[] = [];

  for (const widget of pageWrapper.layout) {
    if (widget.type === STRUCTURAL_TYPE.HEADER) {
      headers.push(widget);
    } else if (widget.type === STRUCTURAL_TYPE.FOOTER) {
      footers.push(widget);
    } else {
      layout.push(widget);
    }
  }

  return styledContentRenderer<ExamPaperPage>(
    { style: pageWrapper.style },
    ELEMENTS.PAGE,
    null,
    [
      headersRenderer(headers),
      ...layout.map(matchRender),
      footersRenderer(footers),
    ] as HTMLElement[]
  );
}
