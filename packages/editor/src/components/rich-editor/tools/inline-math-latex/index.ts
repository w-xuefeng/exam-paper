import type {
  API,
  InlineTool,
  InlineToolConstructorOptions,
} from "@editorjs/editorjs";

interface TemplateInlineToolConfig {}

interface TemplateInlineToolConstructorOptions
  extends InlineToolConstructorOptions {
  config?: TemplateInlineToolConfig;
}

const buttonIcon = `<svg t="1758691724370" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9739" width="200" height="200"><path d="M960 916.8H64c-6.4 0-12.8-3.2-17.6-9.6-4.8-6.4-4.8-12.8-3.2-19.2L174.4 512 43.2 136c-1.6-6.4 0-14.4 3.2-19.2 4.8-6.4 11.2-9.6 17.6-9.6h523.2c11.2 0 20.8 9.6 20.8 20.8s-9.6 20.8-20.8 20.8H92.8l123.2 355.2c1.6 4.8 1.6 9.6 0 12.8L94.4 873.6H960c11.2 0 20.8 9.6 20.8 20.8s-9.6 22.4-20.8 22.4z" fill="#2c2c2c" p-id="9740"></path><path d="M966.4 593.6c-8 0-28.8 0-32-4.8-8-8-16-19.2-24-30.4s-17.6-27.2-27.2-41.6c-9.6-16-20.8-33.6-33.6-51.2 24-32 33.6-51.2 40-60.8 3.2-4.8 4.8-8 6.4-9.6 17.6-22.4 24-24 54.4-28.8h3.2v-17.6h-99.2V368h4.8c8 0 12.8 1.6 16 3.2 1.6 1.6 3.2 4.8 3.2 8 0 8-12.8 27.2-28.8 48-4.8 6.4-8 11.2-12.8 17.6-17.6-24-28.8-41.6-43.2-65.6-3.2-4.8-3.2-8-3.2-8 1.6-3.2 3.2-4.8 20.8-4.8h3.2v-17.6H704v17.6h4.8c9.6 0 20.8 0 27.2 1.6 6.4 1.6 11.2 9.6 20.8 22.4 1.6 3.2 4.8 6.4 6.4 9.6 4.8 6.4 12.8 17.6 20.8 32 8 14.4 19.2 30.4 30.4 48-27.2 40-41.6 60.8-49.6 72-4.8 8-8 11.2-9.6 14.4-6.4 8-14.4 17.6-20.8 20.8-6.4 3.2-17.6 6.4-33.6 6.4h-3.2v19.2h43.2c0 1.6-1.6 3.2-1.6 6.4-4.8 16-9.6 35.2-24 49.6-11.2 12.8-36.8 14.4-81.6 14.4-33.6 0-36.8 0-36.8-33.6v-75.2h32c32 0 33.6 6.4 35.2 38.4v6.4h17.6v-108.8h-16v11.2c0 20.8-1.6 33.6-35.2 33.6h-32V464v-6.4h70.4c46.4 0 57.6 25.6 60.8 68.8v3.2h19.2v-4.8c0-12.8-3.2-28.8-6.4-44.8-3.2-16-4.8-30.4-4.8-36.8v-3.2H542.4l-8-110.4h-288l-6.4 107.2h16v-3.2c1.6-16 8-59.2 11.2-65.6 4.8-6.4 11.2-11.2 17.6-14.4 4.8-1.6 14.4-3.2 28.8-3.2h46.4c4.8 0 8 3.2 8 8v214.4c0 20.8-1.6 36.8-4.8 40-3.2 4.8-32 9.6-48 9.6h-14.4v20.8h180.8v-20.8h-14.4c-14.4 0-41.6-3.2-46.4-8-1.6-1.6-4.8-17.6-4.8-41.6V356.8c0-3.2 3.2-6.4 6.4-6.4h48c11.2 0 20.8 1.6 27.2 4.8 6.4 3.2 12.8 9.6 16 17.6 1.6 4.8 8 41.6 9.6 60.8h-9.6v17.6h3.2c33.6 0 33.6 1.6 33.6 36.8v160c0 28.8 0 30.4-36.8 30.4H512v19.2h227.2v-3.2c1.6-6.4 4.8-22.4 6.4-40 3.2-16 4.8-35.2 8-44.8h41.6V592h-3.2c-11.2-1.6-16-3.2-17.6-6.4-1.6-1.6-1.6-3.2-1.6-6.4s3.2-6.4 4.8-11.2c1.6-1.6 1.6-3.2 3.2-4.8 11.2-17.6 17.6-27.2 30.4-46.4 4.8-6.4 8-12.8 14.4-20.8 19.2 25.6 35.2 49.6 46.4 67.2l6.4 8c4.8 6.4 6.4 11.2 4.8 14.4l-3.2 3.2c-3.2 3.2-6.4 4.8-19.2 4.8h-3.2v16h112V592h-3.2z" fill="#2c2c2c" p-id="9741"></path></svg>`;

const mathLaTexConfig = {
  template: '<span class="math-tex">\\(%s\\)</span>',
};

export class MathLatexInlineTool implements InlineTool {
  static isSurroundEnabled: boolean = true;

  static get isInline() {
    return true;
  }

  static get title() {
    return "Math LaTex";
  }

  #api: API;
  // #config!: TemplateInlineToolConfig;

  constructor({ api /*config*/ }: TemplateInlineToolConstructorOptions) {
    this.#api = api;

    // Filter undefined and empty object.
    // See also: https://github.com/codex-team/editor.js/issues/1432
    // if (config && "html" in config) {
    //   this.#config = config;
    // }
  }

  get shortcut() {
    return "CMD + SHIFT + M";
  }

  checkState() {
    return false;
  }

  render() {
    const button = document.createElement("button");

    button.classList.add(this.#api.styles.inlineToolButton);
    button.type = "button";

    button.innerHTML = buttonIcon;

    return button;
  }

  surround() {
    if (!MathLatexInlineTool.isSurroundEnabled) {
      return;
    }

    document.execCommand("insertHTML", false, mathLaTexConfig.template);

    MathLatexInlineTool.isSurroundEnabled = false;

    setTimeout(() => (MathLatexInlineTool.isSurroundEnabled = true));
  }
}
