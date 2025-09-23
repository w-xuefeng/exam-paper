import {
  STYLE_TYPE,
  type StyleCSSWrapper,
  type StyleInlineWrapper,
  type StyledContentWrapper,
} from "@exam-paper/structure";
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

function handleInlineWrapper<T = HTMLElement>(
  styledContent: {
    value: string;
    style: StyleInlineWrapper["value"];
  },
  elementName: BuiltInElementNameUnionTypes,
  properties?: HTMLOrSVGElementProperties<T>
) {
  return h<HTMLElement>(elementName, {
    ...properties,
    innerHTML: styledContent.value,
    style: styledContent.style,
  }) as T;
}

function handleCSSWrapper<T = HTMLElement>(
  styledContent: {
    value: string;
    style: StyleCSSWrapper["value"];
  },
  elementName: BuiltInElementNameUnionTypes,
  properties?: HTMLOrSVGElementProperties<T>
) {
  const uniqueIdentifier = `${elementName}-${crypto.randomUUID()}`;
  const styleElement = handleCSSToStyleElement({
    [`.${uniqueIdentifier}`]: styledContent.style,
  });
  const el = h<HTMLElement>(elementName, properties);
  addClass(el, uniqueIdentifier);
  if (styleElement) {
    el.append(styleElement);
  }
  if (styledContent.value) {
    el.append(
      h<HTMLElement>("main", {
        innerHTML: styledContent.value,
      })
    );
  }
  return el as T;
}

export function styledContentRenderer<T = HTMLElement>(
  styledContent?: StyledContentWrapper<any>,
  elementName: BuiltInElementNameUnionTypes = ELEMENTS.STYLED,
  properties?: HTMLOrSVGElementProperties<T>
) {
  defineRenderer(ELEMENTS.STYLED, ExamPaperStyledContent);

  const { value, style } = styledContent || {};

  const contentValue = String(value ?? "");

  if (!style) {
    return h<HTMLElement>(elementName, {
      ...properties,
      innerHTML: contentValue,
    }) as T;
  }

  const { type, value: styleValue } = style;

  switch (type) {
    case STYLE_TYPE.INLINE:
      return handleInlineWrapper<T>(
        {
          value: contentValue,
          style: styleValue,
        },
        elementName,
        properties
      );
    case STYLE_TYPE.CSS:
      return handleCSSWrapper<T>(
        {
          value: contentValue,
          style: styleValue,
        },
        elementName,
        properties
      );
    default:
      return h<HTMLElement>(elementName, {
        ...properties,
        innerHTML: contentValue,
      }) as T;
  }
}
