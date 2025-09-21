import type { BuiltInPaperNameUnionTypes, PaperSize } from "./type";
import type { BuiltInPaperName } from "../consts/paper";

export const builtinPaperA1: PaperSize<BuiltInPaperName.A1> = {
  name: "A1",
  alias: "大对开",
  width_mm: 597,
  height_mm: 840,
  direction: "portrait",
  style: {
    width: "597mm",
    height: "840mm",
    margin: "10mm",
    padding: "15mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "A1",
      margin: "10mm",
      breakBefore: "always",
      breakAfter: "always",
    },
  },
};

export const builtinPaperA2: PaperSize<BuiltInPaperName.A2> = {
  name: "A2",
  alias: "大4k",
  width_mm: 420,
  height_mm: 597,
  direction: "portrait",
  style: {
    width: "420mm",
    height: "597mm",
    margin: "10mm",
    padding: "12mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "A2",
      margin: "10mm",
      breakBefore: "auto",
      breakInside: "avoid",
    },
  },
};

export const builtinPaperA3: PaperSize<BuiltInPaperName.A3> = {
  name: "A3",
  alias: "大8k",
  width_mm: 420,
  height_mm: 297,
  direction: "landscape",
  style: {
    width: "420mm",
    height: "297mm",
    margin: "8mm",
    padding: "10mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "A3 landscape",
      margin: "8mm",
      breakAfter: "avoid",
    },
  },
};

export const builtinPaperA4: PaperSize<BuiltInPaperName.A4> = {
  name: "A4",
  alias: "大16k",
  width_mm: 297,
  height_mm: 210,
  direction: "landscape",
  style: {
    width: "297mm",
    height: "210mm",
    margin: "5mm",
    padding: "10mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    border: "1px solid #eeeeee",
    boxSizing: "border-box",
    printStyle: {
      size: "A4",
      margin: "15mm",
      breakInside: "avoid",
    },
  },
};

export const builtinPaperA5: PaperSize<BuiltInPaperName.A5> = {
  name: "A5",
  alias: "大32k",
  width_mm: 210,
  height_mm: 148,
  direction: "landscape",
  style: {
    width: "210mm",
    height: "148mm",
    margin: "5mm",
    padding: "8mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 4px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "A5",
      margin: "8mm",
      breakBefore: "avoid",
    },
  },
};

export const builtinPaperA6: PaperSize<BuiltInPaperName.A6> = {
  name: "A6",
  alias: "大64k",
  width_mm: 144,
  height_mm: 105,
  direction: "landscape",
  style: {
    width: "144mm",
    height: "105mm",
    margin: "4mm",
    padding: "6mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 3px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "A6",
      margin: "5mm",
      breakInside: "avoid",
    },
  },
};

export const builtinPaperB1: PaperSize<BuiltInPaperName.B1> = {
  name: "B1",
  alias: "正对开",
  width_mm: 520,
  height_mm: 740,
  direction: "portrait",
  style: {
    width: "520mm",
    height: "740mm",
    margin: "10mm",
    padding: "15mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "B1",
      margin: "10mm",
      breakBefore: "always",
    },
  },
};

export const builtinPaperB2: PaperSize<BuiltInPaperName.B2> = {
  name: "B2",
  alias: "正4k",
  width_mm: 370,
  height_mm: 520,
  direction: "portrait",
  style: {
    width: "370mm",
    height: "520mm",
    margin: "8mm",
    padding: "12mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "B2",
      margin: "10mm",
      breakAfter: "avoid",
    },
  },
};

export const builtinPaperB3: PaperSize<BuiltInPaperName.B3> = {
  name: "B3",
  alias: "正8k",
  width_mm: 260,
  height_mm: 370,
  direction: "portrait",
  style: {
    width: "260mm",
    height: "370mm",
    margin: "8mm",
    padding: "10mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "B3",
      margin: "8mm",
      breakInside: "avoid",
    },
  },
};

export const builtinPaperB4: PaperSize<BuiltInPaperName.B4> = {
  name: "B4",
  alias: "正16k",
  width_mm: 185,
  height_mm: 260,
  direction: "portrait",
  style: {
    width: "185mm",
    height: "260mm",
    margin: "6mm",
    padding: "8mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "B4",
      margin: "10mm",
      breakBefore: "auto",
    },
  },
};

export const builtinPaperB5: PaperSize<BuiltInPaperName.B5> = {
  name: "B5",
  alias: "正32k",
  width_mm: 130,
  height_mm: 185,
  direction: "portrait",
  style: {
    width: "130mm",
    height: "185mm",
    margin: "5mm",
    padding: "8mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 4px rgba(0,0,0,0.1)",
    border: "1px solid #cccccc",
    boxSizing: "border-box",
    printStyle: {
      size: "B5",
      margin: "8mm",
      breakInside: "avoid",
    },
  },
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
