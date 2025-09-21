export type TypeWrapper<T, V> = {
  type: T;
  value: V;
};

export type FormatterWrapper<V> = {
  formatter: string;
  value: V;
};
