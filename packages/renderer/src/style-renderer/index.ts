import {
  STYLE_TYPE,
  type StyleCSSWrapper,
  type StyleInlineWrapper,
  type StyledContentWrapper,
  type CSSNestedObjectProperties,
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
import { matchRender } from "../shared/renderer";

class ExamPaperStyledContent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

function handleInlineWrapper<T = HTMLElement>(
  style: StyleInlineWrapper["value"],
  elementName: keyof HTMLElementTagNameMap | BuiltInElementNameUnionTypes,
  properties?: HTMLOrSVGElementProperties<T>,
  children?: (HTMLElement | Node | string)[] | string | HTMLElement | Node
) {
  return h<HTMLElement>(
    elementName,
    {
      ...properties,
      style,
    },
    children
  ) as T;
}

function handleCSSWrapper<T = HTMLElement>(
  style: StyleCSSWrapper["value"],
  elementName: keyof HTMLElementTagNameMap | BuiltInElementNameUnionTypes,
  properties?: HTMLOrSVGElementProperties<T>,
  children?:
    | (HTMLElement | Element | Node | string)[]
    | string
    | Element
    | HTMLElement
    | Node
) {
  const uniqueIdentifier = `${elementName}-${crypto.randomUUID()}`;
  const styleElement = handleCSSToStyleElement({
    [`.${uniqueIdentifier}`]: style,
  } as CSSNestedObjectProperties);
  const el = h<HTMLElement>(elementName, properties);
  addClass(el, uniqueIdentifier);
  if (styleElement) {
    el.insertBefore(styleElement, el.firstChild);
  }
  if (children) {
    el.append(...(Array.isArray(children) ? children : [children]));
  }
  return el as T;
}

function handleValue(value: any) {
  if (typeof value === "string") {
    return value;
  }
  const _handleValue = (widget: any) => {
    if (
      typeof widget === "object" &&
      widget !== null &&
      "type" in widget &&
      "value" in widget
    ) {
      return matchRender(widget);
    }
    const richText = String(widget ?? "");
    return richText ? h<HTMLElement>("span", { innerHTML: richText }) : null;
  };
  return Array.isArray(value)
    ? value.map((item) => _handleValue(item)).filter(Boolean)
    : _handleValue(value);
}

export function styledContentRenderer<T = HTMLElement>(
  styledContent?: StyledContentWrapper<any>,
  elementName:
    | keyof HTMLElementTagNameMap
    | BuiltInElementNameUnionTypes = ELEMENTS.STYLED,
  properties?: HTMLOrSVGElementProperties<T>,
  children?: (HTMLElement | Node | string)[] | string | HTMLElement | Node
) {
  defineRenderer(ELEMENTS.STYLED, ExamPaperStyledContent);

  const _properties: HTMLOrSVGElementProperties<HTMLElement> = {
    ...properties,
  };

  let _children: (string | HTMLElement | Node | undefined | null)[] = [
    ...(Array.isArray(children) ? children : [children]),
  ];

  const { value, style } = styledContent || {};
  const contentValue = handleValue(value);

  if (typeof contentValue === "string") {
    _properties.innerHTML = contentValue;
  } else if (Array.isArray(contentValue)) {
    _children = [...contentValue, ..._children];
  }

  const _childNodes = _children.filter(Boolean) as (
    | HTMLElement
    | Node
    | string
  )[];

  if (!style) {
    return h<HTMLElement>(elementName, _properties, _childNodes) as T;
  }

  const { type, value: styleValue } = style;

  switch (type) {
    case STYLE_TYPE.INLINE:
      return handleInlineWrapper<T>(
        styleValue,
        elementName,
        _properties as HTMLOrSVGElementProperties<T>,
        _childNodes
      );
    case STYLE_TYPE.CSS:
      return handleCSSWrapper<T>(
        styleValue,
        elementName,
        _properties as HTMLOrSVGElementProperties<T>,
        _childNodes
      );
    default:
      return h<HTMLElement>(elementName, _properties, _childNodes) as T;
  }
}
