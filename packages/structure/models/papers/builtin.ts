import type { BuiltInPaperNameUnionTypes, PaperSize } from "./type";
import type { BuiltInPaperName } from "../consts/paper";

export const builtinPaperA1: PaperSize<BuiltInPaperName.A1> = {
  name: "A1",
  alias: "大对开",
  width_mm: 597,
  height_mm: 840,
};

export const builtinPaperA2: PaperSize<BuiltInPaperName.A2> = {
  name: "A2",
  alias: "大4k",
  width_mm: 420,
  height_mm: 597,
};

export const builtinPaperA3: PaperSize<BuiltInPaperName.A3> = {
  name: "A3",
  alias: "大8k",
  width_mm: 420,
  height_mm: 297,
};

export const builtinPaperA4: PaperSize<BuiltInPaperName.A4> = {
  name: "A4",
  alias: "大16k",
  width_mm: 297,
  height_mm: 210,
};

export const builtinPaperA5: PaperSize<BuiltInPaperName.A5> = {
  name: "A5",
  alias: "大32k",
  width_mm: 210,
  height_mm: 148,
};

export const builtinPaperA6: PaperSize<BuiltInPaperName.A6> = {
  name: "A6",
  alias: "大64k",
  width_mm: 144,
  height_mm: 105,
};

export const builtinPaperB1: PaperSize<BuiltInPaperName.B1> = {
  name: "B1",
  alias: "正对开",
  width_mm: 520,
  height_mm: 740,
};

export const builtinPaperB2: PaperSize<BuiltInPaperName.B2> = {
  name: "B2",
  alias: "正4k",
  width_mm: 370,
  height_mm: 520,
};

export const builtinPaperB3: PaperSize<BuiltInPaperName.B3> = {
  name: "B3",
  alias: "正8k",
  width_mm: 260,
  height_mm: 370,
};

export const builtinPaperB4: PaperSize<BuiltInPaperName.B4> = {
  name: "B4",
  alias: "正16k",
  width_mm: 185,
  height_mm: 260,
};

export const builtinPaperB5: PaperSize<BuiltInPaperName.B5> = {
  name: "B5",
  alias: "正32k",
  width_mm: 130,
  height_mm: 185,
};

export const paperSizeMap: Record<BuiltInPaperNameUnionTypes, PaperSize> = {
  A1: builtinPaperA1,
  A2: builtinPaperA2,
  A3: builtinPaperA3,
  A4: builtinPaperA4,
  A5: builtinPaperA5,
  A6: builtinPaperA6,
  B1: builtinPaperB1,
  B2: builtinPaperB2,
  B3: builtinPaperB3,
  B4: builtinPaperB4,
  B5: builtinPaperB5,
};
