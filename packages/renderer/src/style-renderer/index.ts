import { STYLE_TYPE, type StyledContentWrapper } from "@exam-paper/structure";
import {
  handleCSSToStyleElement,
  h,
  type HTMLOrSVGElementProperties,
  addClass,
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

export function styledContentRenderer<T = HTMLElement>(
  styledContent: StyledContentWrapper<any>,
  elementName: BuiltInElementNameUnionTypes = ELEMENTS.STYLED,
  properties?: HTMLOrSVGElementProperties<T>
) {
  defineRenderer(ELEMENTS.STYLED, ExamPaperStyledContent);

  const uniqueIdentifier = `${elementName}-${crypto.randomUUID()}`;

  const { type, value } = styledContent.style;

  const inlineStyle = type === STYLE_TYPE.INLINE ? value : void 0;

  const styleElement =
    type === STYLE_TYPE.CSS
      ? handleCSSToStyleElement({
          [`.${uniqueIdentifier}`]: value,
        })
      : null;

  if (styleElement) {
    const el = h<HTMLElement>(elementName, properties);
    addClass(el, uniqueIdentifier);
    el.append(styleElement);
    if (styledContent.value) {
      el.append(
        h<HTMLElement>("main", {
          innerHTML: styledContent.value,
        })
      );
    }
    return el as T;
  }

  return h<HTMLElement>(elementName, {
    ...properties,
    innerHTML: styledContent.value,
    style: inlineStyle,
  }) as T;
}
