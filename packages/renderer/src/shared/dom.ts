import type {
  CSSProperties,
  CSSNestedObjectProperties,
} from "@exam-paper/structure";

export const noop = () => {};
export const svgNamespace = "http://www.w3.org/2000/svg" as const;

export function $<E extends Element = Element>(
  selector: string,
  container: HTMLElement | Document | ShadowRoot = document
) {
  return container.querySelector<E>(selector);
}

export function $$<E extends Element = Element>(
  selector: string,
  container: HTMLElement | Document | ShadowRoot = document
) {
  return Array.from(container.querySelectorAll<E>(selector));
}

export function $el<E extends Element = Element>(
  selector?: string | HTMLElement | Document | ShadowRoot,
  container: HTMLElement | Document = document
) {
  return typeof selector === "string"
    ? container.querySelector<E>(selector)
    : selector;
}

export function $item<E extends Element = Element>(
  [selector, i]: [q: string, i: number],
  container: HTMLElement | Document | ShadowRoot = document
) {
  return Array.from($<E>(selector, container)?.children || []).at(i);
}

export function $option<E extends Element = Element>(
  [selector, key, value]: [selector: string, key: keyof E, value: string],
  container: HTMLElement | Document | ShadowRoot = document
) {
  return $$<E>(selector, container).find((e) => e[key] === value);
}

export function $optionIncludes<E extends Element = Element>(
  [selector, key, value]: [selector: string, key: keyof E, value: string],
  container: HTMLElement | Document | ShadowRoot = document
) {
  return $$<E>(selector, container).find(
    (e) => `${e[key]}`.includes(value) || value.includes(e[key] as string)
  );
}

export function $dispatch(
  [selector, event]: [
    selector: string | HTMLElement,
    event: Event | CustomEvent
  ],
  container: HTMLElement | Document | ShadowRoot = document
) {
  return (
    typeof selector === "string" ? $(selector, container) : selector
  )?.dispatchEvent(event);
}

export function $dispatchEvent<K extends keyof WindowEventMap>(
  [selector, event]: [selector: string | HTMLElement, event: WindowEventMap[K]],
  container: HTMLElement | Document | ShadowRoot = document
) {
  return (
    typeof selector === "string" ? $(selector, container) : selector
  )?.dispatchEvent(event);
}

export function $children(
  parent: Element,
  filter: (element: Element, index: number, array: Element[]) => boolean = (
    e
  ) => !!e
) {
  const children = parent?.children;
  if (children) {
    return Array.from(children).filter(filter);
  }
  return [];
}

export function addStyleElement(
  styleElement: HTMLStyleElement,
  styleId: string = `global-custome-style-${Date.now()}`,
  parent: ShadowRoot | Element | Document = document
) {
  styleElement.id = styleElement.id || styleId;
  if (parent === document) {
    parent.head.appendChild(styleElement);
  } else {
    parent.insertBefore(styleElement, parent.firstChild);
  }
  return styleElement;
}

export function addCSS(
  cssText: string,
  styleId: string = `global-custome-css-${Date.now()}`,
  parent: ShadowRoot | Element | Document = document
) {
  const styleTag = document.createElement("style");
  styleTag.id = styleId;
  const content = document.createTextNode(cssText);
  styleTag.appendChild(content);
  if (parent === document) {
    parent.head.appendChild(styleTag);
  } else {
    parent.insertBefore(styleTag, parent.firstChild);
  }
  return styleTag;
}

export function removeCSS(
  styleIdOrDom: string | HTMLStyleElement,
  parent: ShadowRoot | Element | Document = document
) {
  if (typeof styleIdOrDom === "string") {
    const style = (parent === document ? parent.head : parent).querySelector(
      `#${styleIdOrDom}`
    );
    style?.remove();
  } else {
    styleIdOrDom?.remove?.();
  }
}

export function addClass(
  dom: string | HTMLElement,
  className: string | string[]
) {
  const classNames = Array.isArray(className) ? className : [className];
  const target = (
    typeof dom === "string" ? document.querySelector(dom) : dom
  ) as HTMLElement | null;
  if (!target) return;
  classNames.forEach((e) => {
    if (!target?.classList?.contains?.(e)) {
      target?.classList?.add?.(e);
    }
  });
}

export function removeClass(
  dom: string | HTMLElement,
  className: string | string[]
) {
  const classNames = Array.isArray(className) ? className : [className];
  const target = (
    typeof dom === "string" ? document.querySelector(dom) : dom
  ) as HTMLElement | null;
  if (!target) return;
  classNames.forEach((e) => {
    if (target?.classList?.contains?.(e)) {
      target.classList.remove(e);
    }
  });
}

export function toggleClass(
  dom: string | HTMLElement,
  className: string | string[]
) {
  const classNames = Array.isArray(className) ? className : [className];
  const target = (
    typeof dom === "string" ? document.querySelector(dom) : dom
  ) as HTMLElement | null;
  if (!target) return;
  classNames.forEach((e) => {
    if (target?.classList?.contains?.(e)) {
      target.classList.remove(e);
    } else {
      target?.classList?.add?.(e);
    }
  });
}

export function setCssVar(
  property: string,
  value: string | null,
  dom:
    | string
    | HTMLElement
    | (string | HTMLElement | undefined)[] = document.documentElement,
  priority?: string
) {
  if (!dom) {
    console.log(
      `[setCssVar ${property}: ${value} error] dom may not exist`,
      dom
    );
  }
  return (Array.isArray(dom) ? dom : [dom]).forEach((e) => {
    if (typeof e === "string") {
      document
        .querySelector<HTMLElement>(e)
        ?.style.setProperty(property, value, priority);
    } else {
      e?.style.setProperty(property, value, priority);
    }
  });
}

export function camelToKebab(str: string): string {
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}

export function kebabToCamel(str: string): string {
  return str
    .split("-")
    .filter((word) => word)
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}

export function parseAttribute(attr: string) {
  if (attr === "null") return null;
  if (attr === "'null'" || attr === '"null"') return "null";
  if (attr === "undefined") return undefined;
  if (attr === "'undefined'" || attr === '"undefined"') return "undefined";
  if (attr === "true") return true;
  if (attr === "'true'" || attr === '"true"') return "true";
  if (attr === "false") return false;
  if (attr === "'false'" || attr === '"false"') return "false";
  if (/^\d+$/.test(attr)) {
    return Number(attr);
  }
  return attr;
}

export function rt(props: { html: string }) {
  const template = document.createElement("template");
  template.innerHTML = props.html;
  const dom = document.importNode(template.content, true);
  return dom.firstElementChild as HTMLElement;
}

export function c(data?: string | number | undefined) {
  if (typeof data === "undefined") {
    data = "";
  }
  if (typeof data === "number") {
    data = String(data);
  }
  const comment = document.createComment(data);
  return comment;
}

export function txt(data?: string | number | undefined) {
  if (typeof data === "undefined") {
    data = "";
  }
  if (typeof data === "number") {
    data = String(data);
  }
  const text = document.createTextNode(data);
  return text;
}

export function cssObjectToText(
  css?: string | CSSProperties
): string | undefined {
  if (typeof css === "string" || !css) {
    return css as string | undefined;
  }
  return Object.entries(css)
    .map(([sk, sv]) => `${camelToKebab(sk)}:${sv}`)
    .join(";");
}

export function internalCreateElement<P>(
  creatorElement: (() => SVGElement) | (() => HTMLElement),
  properties?: P,
  children?:
    | (HTMLElement | Element | Node | string)[]
    | string
    | Element
    | HTMLElement
    | Node
) {
  const container = creatorElement();
  if (properties) {
    Object.entries(properties).forEach(([k, v]) => {
      if (k === "attrs" && typeof v === "object" && v !== null) {
        Object.entries(v as Record<string, string>).forEach(([ak, av]) => {
          container.setAttribute(ak, av);
        });
      } else if (k === "on" && typeof v === "object" && v !== null) {
        Object.entries(
          v as Record<
            string | keyof HTMLElementEventMap,
            | EventListenerOrEventListenerObject
            | {
                event: EventListenerOrEventListenerObject;
                option?: boolean | AddEventListenerOptions;
              }
          >
        ).forEach(([ek, ev]) => {
          const func =
            typeof ev === "function"
              ? ev.bind(container)
              : typeof ev === "object" &&
                ev !== null &&
                "event" in ev &&
                typeof ev.event === "function"
              ? ev.event.bind(container)
              : typeof ev === "object" &&
                ev !== null &&
                "handleEvent" in ev &&
                typeof ev.handleEvent === "function"
              ? ev.handleEvent.bind(container)
              : () => {};
          const option =
            typeof ev === "object" && ev !== null && "option" in ev
              ? ev.option
              : void 0;
          container.addEventListener(ek, func, option);
        });
      } else if (k === "style") {
        if (typeof v === "object" && v !== null) {
          const cssText = cssObjectToText(v as CSSProperties);
          Reflect.set(container.style, "cssText", cssText);
        } else if (typeof v === "string") {
          Reflect.set(container.style, "cssText", v);
        }
      } else if (k === "className") {
        setDOMClassNames(
          container as HTMLElement,
          container.tagName,
          v as string
        );
      } else if (k !== "attrs" && k !== "on" && k !== "style") {
        Reflect.set(container, k, v);
      }
    });
  }
  if (children) {
    container.append(...(Array.isArray(children) ? children : [children]));
  }
  return container;
}

export function isSvgTag(tagName: string) {
  if (typeof tagName !== "string") {
    return false;
  }
  return tagName === "svg" || tagName.startsWith("SVG:");
}

export function isSvgDOM(dom: HTMLElement | SVGAElement) {
  return dom?.dataset?.domType === "svg" || dom?.tagName === "svg";
}

export function setDOMClassNames(
  dom: HTMLElement | SVGAElement,
  tag: string,
  classNames: string
) {
  if (isSvgTag(tag) || isSvgDOM(dom)) {
    Reflect.set(dom.className, "baseVal", classNames);
  } else {
    Reflect.set(dom, "className", classNames);
  }
}

export type HTMLOrSVGElementProperties<T = HTMLElement | SVGElement> = Partial<
  Omit<T, "style"> & {
    style: CSSProperties;
    attrs?: Record<string, string>;
    on?: Record<
      string | keyof HTMLElementEventMap,
      | EventListenerOrEventListenerObject
      | {
          event: EventListenerOrEventListenerObject;
          option?: boolean | AddEventListenerOptions;
        }
    >;
  }
> | null;

export function h<T = HTMLElement | SVGElement>(
  tagName: string,
  properties?: HTMLOrSVGElementProperties<T>,
  children?: (HTMLElement | Node | string)[] | string | HTMLElement | Node
) {
  const creator = isSvgTag(tagName)
    ? () => {
        const svgDOM = document.createElementNS(
          svgNamespace,
          tagName.replace(/^SVG:/, "")
        );
        svgDOM.setAttribute("data-dom-type", "svg");
        return svgDOM;
      }
    : () => document.createElement(tagName);
  return internalCreateElement(creator, properties, children) as T;
}

export function handleCSSToStyleElement(
  css?:
    | string
    | CSSNestedObjectProperties
    | Record<string, CSSNestedObjectProperties>
): HTMLStyleElement | null {
  if (!css) {
    return null;
  }

  if (typeof css === "string") {
    return h("style", null, txt(css));
  }

  const selectors = Object.keys(css);
  if (!selectors.length) {
    return null;
  }

  function objectToCSS(
    properties:
      | string
      | number
      | CSSNestedObjectProperties
      | Record<string, CSSNestedObjectProperties>
      | undefined
  ) {
    let cssString = "";

    if (
      typeof properties === "string" ||
      typeof properties === "number" ||
      !properties
    ) {
      return cssString;
    }

    for (const [prop, value] of Object.entries(properties)) {
      if (typeof value === "string" || typeof value === "number") {
        const cssProperty = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
        cssString += `${cssProperty}: ${value};`;
      }
      if (typeof value === "object") {
        cssString += `${prop} {${objectToCSS(value)}}`;
      }
    }
    return cssString.trim();
  }

  function jsonToCSS(
    cssRecord:
      | CSSNestedObjectProperties
      | Record<string, CSSNestedObjectProperties>
  ): string {
    let cssString = "";
    for (const [selector, properties] of Object.entries(cssRecord)) {
      cssString += `${selector} {${objectToCSS(properties)}}`;
    }
    return cssString.trim();
  }

  return h("style", null, txt(jsonToCSS(css)));
}

export function domMountToParent(
  dom: HTMLElement | Node | null,
  parent: HTMLElement | Document | ShadowRoot | string = document.body
) {
  if (!dom) {
    return noop;
  }
  const container = $el(parent);
  if (!container) {
    return noop;
  }
  container.append(dom);
}

export function removeDOM(dom: HTMLElement | Node | ShadowRoot) {
  if ("remove" in dom && typeof dom.remove === "function") {
    dom.remove();
    return;
  }
  if (dom && dom.parentNode) {
    dom.parentNode.removeChild(dom);
    return;
  }
  if ("outerHTML" in dom) {
    dom.outerHTML = "";
    return;
  }
  if (dom.nodeName === "#document-fragment") {
    dom.childNodes.forEach((e) => removeDOM(e));
    return;
  }
  throw new Error("removeDOM is not supported in this environment");
}

export function replaceDOM(
  original: HTMLElement | Node | ShadowRoot | null,
  dom: HTMLElement | Node | ShadowRoot | null
) {
  if (!original) {
    return dom;
  }
  if (!dom) {
    removeDOM(original);
    return dom;
  }
  if ("replaceWith" in original && typeof original.replaceWith === "function") {
    original.replaceWith(dom);
    return dom;
  }
  if (original && original.parentNode) {
    original.parentNode.replaceChild(dom, original);
    return dom;
  }
  if ("outerHTML" in original && "outerHTML" in dom) {
    original.outerHTML = dom.outerHTML;
    return dom;
  }
  throw new Error("replaceDOM is not supported in this environment");
}
