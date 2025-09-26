import {
  PAGINATION_TYPE,
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
  paperName: string,
  pageName: string
): Record<string, CSSNestedObjectProperties> {
  return Object.keys(paperSizeMap)
    .map((size) => ({
      [`${paperName}[paper="${size}"][direction="portrait"] ${pageName}`]: {
        width: `${
          paperSizeMap[size as BuiltInPaperNameUnionTypes].height_mm
        }mm`,
        height: `${
          paperSizeMap[size as BuiltInPaperNameUnionTypes].width_mm
        }mm`,
      },
      [`${paperName}[paper="${size}"][direction="landscape"] ${pageName}`]: {
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
  const paginationPrintConfig =
    pagination?.type === PAGINATION_TYPE.OUTER && pagination?.position
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
    },
    [ELEMENTS.PAGE]: {
      position: "relative",
      display: "block",
      boxSizing: "border-box",
      background: "#ffffff",
      padding: "20px",
      margin: "auto",
      transform: "translateZ(0)",
    },
    [`${[ELEMENTS.PAGE]} + ${[ELEMENTS.PAGE]}`]: {
      marginBlockStart: "20px",
    },
    ...getPaperSizeStyle(ELEMENTS.PAPER, ELEMENTS.PAGE),
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
      minHeight: "1em",
    },
    [ELEMENTS.HEADER]: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      boxSizing: "border-box",
      borderBlockEnd: "1px solid #ccc",
      paddingBlock: "10px 5px",
      paddingInline: "20px",
    },
    [ELEMENTS.FOOTER]: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      boxSizing: "border-box",
      borderBlockStart: "1px solid #ccc",
      paddingBlock: "5px 10px",
      paddingInline: "20px",
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
    "@media print": {
      "@page": {
        size,
        boxSizing: "border-box",
        ...paginationPrintConfig,
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
      [`${[ELEMENTS.PAGE]} + ${[ELEMENTS.PAGE]}`]: {
        marginBlockStart: "0!important",
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
