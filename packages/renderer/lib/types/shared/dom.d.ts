import type { CSSProperties, CSSNestedObjectProperties } from "@exam-paper/structure";
export declare const noop: () => void;
export declare const svgNamespace: "http://www.w3.org/2000/svg";
export declare function $<E extends Element = Element>(selector: string, container?: HTMLElement | Document | ShadowRoot): E;
export declare function $$<E extends Element = Element>(selector: string, container?: HTMLElement | Document | ShadowRoot): E[];
export declare function $el<E extends Element = Element>(selector?: string | HTMLElement | Document | ShadowRoot, container?: HTMLElement | Document): HTMLElement | Document | ShadowRoot | E;
export declare function $item<E extends Element = Element>([selector, i]: [q: string, i: number], container?: HTMLElement | Document | ShadowRoot): Element;
export declare function $option<E extends Element = Element>([selector, key, value]: [selector: string, key: keyof E, value: string], container?: HTMLElement | Document | ShadowRoot): E;
export declare function $optionIncludes<E extends Element = Element>([selector, key, value]: [selector: string, key: keyof E, value: string], container?: HTMLElement | Document | ShadowRoot): E;
export declare function $dispatch([selector, event]: [
    selector: string | HTMLElement,
    event: Event | CustomEvent
], container?: HTMLElement | Document | ShadowRoot): boolean;
export declare function $dispatchEvent<K extends keyof WindowEventMap>([selector, event]: [selector: string | HTMLElement, event: WindowEventMap[K]], container?: HTMLElement | Document | ShadowRoot): boolean;
export declare function $children(parent: Element, filter?: (element: Element, index: number, array: Element[]) => boolean): Element[];
export declare function addStyleElement(styleElement: HTMLStyleElement, styleId?: string, parent?: ShadowRoot | Element | Document): HTMLStyleElement;
export declare function addCSS(cssText: string, styleId?: string, parent?: ShadowRoot | Element | Document): HTMLStyleElement;
export declare function removeCSS(styleIdOrDom: string | HTMLStyleElement, parent?: ShadowRoot | Element | Document): void;
export declare function addClass(dom: string | HTMLElement, className: string | string[]): void;
export declare function removeClass(dom: string | HTMLElement, className: string | string[]): void;
export declare function toggleClass(dom: string | HTMLElement, className: string | string[]): void;
export declare function setCssVar(property: string, value: string | null, dom?: string | HTMLElement | (string | HTMLElement | undefined)[], priority?: string): void;
export declare function camelToKebab(str: string): string;
export declare function kebabToCamel(str: string): string;
export declare function parseAttribute(attr: string): string | number | boolean;
export declare function rt(props: {
    html: string;
}): HTMLElement;
export declare function c(data?: string | number | undefined): Comment;
export declare function txt(data?: string | number | undefined): Text;
export declare function cssObjectToText(css?: string | CSSProperties): string | undefined;
export declare function internalCreateElement<P>(creatorElement: (() => SVGElement) | (() => HTMLElement), properties?: P, children?: (HTMLElement | Element | Node | string)[] | string | Element | HTMLElement | Node): HTMLElement | SVGElement;
export declare function isSvgTag(tagName: string): boolean;
export declare function isSvgDOM(dom: HTMLElement | SVGAElement): boolean;
export declare function setDOMClassNames(dom: HTMLElement | SVGAElement, tag: string, classNames: string): void;
export type HTMLOrSVGElementProperties<T = HTMLElement | SVGElement> = Partial<Omit<T, "style"> & {
    style: CSSProperties;
    attrs?: Record<string, string>;
    on?: Record<string | keyof HTMLElementEventMap, EventListenerOrEventListenerObject | {
        event: EventListenerOrEventListenerObject;
        option?: boolean | AddEventListenerOptions;
    }>;
}> | null;
export declare function h<T = HTMLElement | SVGElement>(tagName: string, properties?: HTMLOrSVGElementProperties<T>, children?: (HTMLElement | Node | string)[] | string | HTMLElement | Node): T;
export declare function handleCSSToStyleElement(css?: string | CSSNestedObjectProperties | Record<string, CSSNestedObjectProperties>): HTMLStyleElement | null;
export declare function domMountToParent(dom: HTMLElement | Node | null, parent?: HTMLElement | Document | ShadowRoot | string): () => void;
export declare function removeDOM(dom: HTMLElement | Node | ShadowRoot): void;
export declare function replaceDOM(original: HTMLElement | Node | ShadowRoot | null, dom: HTMLElement | Node | ShadowRoot | null): Node;
