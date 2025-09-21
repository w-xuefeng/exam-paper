import { STYLE_TYPE, type StyledContentWrapper } from "@exam-paper/structure";
import {
  handleCSSToStyleElement,
  h,
  type HTMLOrSVGElementProperties,
} from "../shared/dom";
import { defineRenderer } from "../shared";
import {
  ELEMENTS,
  type BuiltInElementNameUnionTypes,
} from "../consts/elements";

class ExamPaperStyledContent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function styledContentRenderer(
  styledContent: StyledContentWrapper<any>,
  elementName: BuiltInElementNameUnionTypes = ELEMENTS.STYLED,
  properties?: HTMLOrSVGElementProperties
) {
  defineRenderer(ELEMENTS.STYLED, ExamPaperStyledContent);
  const { type, value } = styledContent.style;

  const inlineStyle = type === STYLE_TYPE.INLINE ? value : void 0;

  const styleElement =
    type === STYLE_TYPE.CSS ? handleCSSToStyleElement(value) : null;

  if (styleElement) {
    const el = h<HTMLElement>(elementName, properties);
    const shadowRoot = el.attachShadow({ mode: "open" });
    shadowRoot.append(
      styleElement,
      h<HTMLElement>("main", { innerHTML: styledContent.value })
    );
    return el;
  }

  return h<HTMLElement>(elementName, {
    ...properties,
    innerHTML: styledContent.value,
    style: inlineStyle,
  });
}
