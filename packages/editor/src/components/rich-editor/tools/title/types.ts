import type { API } from "@editorjs/editorjs";

export type IData = {
  text: string;
  color: string;
  alignText: string;
  titleType: string;
};

export type ISetting = {
  name: string;
  icon: string;
  type: string;
};

export type Params = {
  data?: IData;
  readOnly?: boolean;
  api?: API;
  config?: undefined;
};
