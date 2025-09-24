import type { TypeWrapper } from "@exam-paper/structure";

export function unTypeWrapper<T, V>(wrapper: TypeWrapper<T, V> | V) {
  const { value } =
    "type" in (wrapper as TypeWrapper<T, V>) &&
    "value" in (wrapper as TypeWrapper<T, V>)
      ? (wrapper as TypeWrapper<T, V>)
      : { value: wrapper as V };
  return value;
}

export function defineRenderer(
  name: string,
  constructor: CustomElementConstructor,
  options?: ElementDefinitionOptions
) {
  if (customElements.get(name)) {
    return;
  }
  customElements.define(name, constructor, options);
}
