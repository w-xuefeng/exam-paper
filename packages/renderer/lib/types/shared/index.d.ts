import type { TypeWrapper } from "@exam-paper/structure";
export declare function unTypeWrapper<T, V>(wrapper: TypeWrapper<T, V> | V): V;
export declare function defineRenderer(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions): void;
