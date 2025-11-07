export const BUILTIN_PAPER_NAME = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
] as const;

export const PAPER_DIRECTION = {
  PORTRAIT: "portrait",
  LANDSCAPE: "landscape",
} as const;

export const PAGINATION_TYPE = {
  INNER: "inner",
  OUTER: "outer",
} as const;

export namespace BuiltInPaperName {
  export type A1 = (typeof BUILTIN_PAPER_NAME)[0];
  export type A2 = (typeof BUILTIN_PAPER_NAME)[1];
  export type A3 = (typeof BUILTIN_PAPER_NAME)[2];
  export type A4 = (typeof BUILTIN_PAPER_NAME)[3];
  export type A5 = (typeof BUILTIN_PAPER_NAME)[4];
  export type A6 = (typeof BUILTIN_PAPER_NAME)[5];
  export type B1 = (typeof BUILTIN_PAPER_NAME)[6];
  export type B2 = (typeof BUILTIN_PAPER_NAME)[7];
  export type B3 = (typeof BUILTIN_PAPER_NAME)[8];
  export type B4 = (typeof BUILTIN_PAPER_NAME)[9];
  export type B5 = (typeof BUILTIN_PAPER_NAME)[10];
}

export const PAPER_LOCALES = {
  zh_CN: {
    paperDirection: "试卷方向",
    [PAPER_DIRECTION.PORTRAIT]: "纵向",
    [PAPER_DIRECTION.LANDSCAPE]: "横向",
    paginationType: "页码类型",
    [PAGINATION_TYPE.INNER]: "内页码",
    [PAGINATION_TYPE.OUTER]: "外页码",
  },
  en_US: {
    paperDirection: "Paper Direction",
    [PAPER_DIRECTION.PORTRAIT]: "Portrait",
    [PAPER_DIRECTION.LANDSCAPE]: "Landscape",
    paginationType: "Pagination Type",
    [PAGINATION_TYPE.INNER]: "Inner",
    [PAGINATION_TYPE.OUTER]: "Outer",
  },
};
