export const EDITOR_VISUAL_TYPE = {
  paper: {
    name: "页面视图",
    enum: "paper",
  },
  web: {
    name: "web视图",
    enum: "web",
  },
};

export type EditorVisualType = keyof typeof EDITOR_VISUAL_TYPE;
