import {
  paperSizeMap,
  type BuiltInPaperNameUnionTypes,
  type CSSNestedObjectProperties,
  type PaperOption,
} from "@exam-paper/structure";
import { ELEMENTS } from "../consts/elements";
import {
  addStyleElement,
  handleCSSToStyleElement,
  removeDOM,
} from "../shared/dom";

export function getPaperSizeStyle(
  tagName: string
): Record<string, CSSNestedObjectProperties> {
  return Object.keys(paperSizeMap)
    .map((size) => ({
      [`${tagName}[paper="${size}"][direction="portrait"]`]: {
        width: `${
          paperSizeMap[size as BuiltInPaperNameUnionTypes].height_mm
        }mm`,
        height: `${
          paperSizeMap[size as BuiltInPaperNameUnionTypes].width_mm
        }mm`,
      },
      [`${tagName}[paper="${size}"][direction="landscape"]`]: {
        width: `${paperSizeMap[size as BuiltInPaperNameUnionTypes].width_mm}mm`,
        height: `${
          paperSizeMap[size as BuiltInPaperNameUnionTypes].height_mm
        }mm`,
      },
    }))
    .reduce(
      (t, cv) => Object.assign(t, cv),
      {} as Record<string, CSSNestedObjectProperties>
    );
}

export function elementDefaultStyles<Paper extends string>({
  paper,
  direction,
  pagination,
}: PaperOption<Paper>): CSSNestedObjectProperties {
  const size = `${paper} ${direction}`;
  const paginationPrintConfig = pagination?.position
    ? {
        [`@${pagination.position}`]: {
          content: pagination.formatter
            ?.replace("%current", "counter(page)")
            .replace("%total", "counter(pages)"),
          ...(pagination.style ? pagination.style : {}),
        },
      }
    : {};

  return {
    [ELEMENTS.PAPER]: {
      display: "block",
      boxSizing: "border-box",
      background: "#ffffff",
      padding: "20px",
      margin: "auto",
    },
    ...getPaperSizeStyle(ELEMENTS.PAPER),
    [ELEMENTS.QUESTION]: {
      display: "block",
    },
    [ELEMENTS.ANSWER]: {
      display: "block",
    },
    [ELEMENTS.TITLE]: {
      display: "block",
    },
    [ELEMENTS.DESCRIPTION]: {
      display: "block",
    },
    [ELEMENTS.BLANK]: {
      display: "block",
    },
    [ELEMENTS.HEADER]: {
      display: "block",
    },
    [ELEMENTS.FOOTER]: {
      display: "block",
    },
    [ELEMENTS.STYLED]: {
      display: "block",
    },
    [ELEMENTS.QUESTION_ORDER_NUMBER]: {
      display: "block",
    },
    [ELEMENTS.QUESTION_SCORE]: {
      display: "block",
    },
    ".exam-paper-table-layout": {
      width: "100%",
    },
    ".print-header, .print-footer": {
      display: "none",
    },
    ".header-placeholder,.footer-placeholder": {
      display: "none",
    },
    "@media print": {
      "@page": {
        size,
        boxSizing: "border-box",
        ...paginationPrintConfig,
      },
      [`${ELEMENTS.FOOTER}, ${ELEMENTS.HEADER}`]: {
        display: "none",
      },
      [`${ELEMENTS.HEADER}.print-header, ${ELEMENTS.FOOTER}.print-footer`]: {
        display: "block",
        position: "fixed",
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
      },
      [`${ELEMENTS.HEADER}.print-header`]: {
        top: 0,
        borderBlockEnd: "1px solid #ccc",
        paddingBlockEnd: "5px",
      },
      [`${ELEMENTS.FOOTER}.print-footer`]: {
        bottom: 0,
        borderBlockStart: "1px solid #ccc",
        paddingBlockStart: "5px",
      },
      ".header-placeholder,.footer-placeholder": {
        display: "block",
      },
      [ELEMENTS.QUESTION]: {
        breakInside: "avoid",
      },
      [ELEMENTS.TITLE]: {
        breakInside: "avoid",
      },
      [`body, ${ELEMENTS.PAPER}`]: {
        padding: "0!important",
        margin: "0!important",
      },
    },
  };
}

export function applyElementDefaultStyles<Paper extends string>(
  paperOption: PaperOption<Paper>,
  container: HTMLElement | ShadowRoot | Document = document
) {
  const id = "exam-paper-element-agent-style-sheet";
  const previous =
    document.getElementById(id) || container.querySelector(`#${id}`);
  if (previous) {
    removeDOM(previous);
  }
  const styleElement = handleCSSToStyleElement(
    elementDefaultStyles(paperOption)
  );
  if (!styleElement) return;
  addStyleElement(styleElement, id, container);
}
