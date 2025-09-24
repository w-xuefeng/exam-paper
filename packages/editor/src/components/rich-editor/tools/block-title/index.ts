import type { API } from "@editorjs/editorjs";
import {
  STYLE_TYPE,
  STRUCTURAL_TYPE,
  type CSSProperties,
  type CSSNestedObjectProperties,
  type TitleWrapper,
  type StyleTypeUnionTypes,
} from "@exam-paper/structure";
import "./style.css";

interface ToolConfig {
  data?: TitleWrapper;
  api?: API;
}

export class TitleTool {
  private api: API;
  private data: TitleWrapper;
  private nodes: {
    wrapper: HTMLDivElement | null;
    title: HTMLDivElement | null;
  } = {
    wrapper: null,
    title: null,
  };

  constructor({ data, api }: ToolConfig) {
    this.api = api!;
    this.data = {
      ...data,
      type: data?.type || STRUCTURAL_TYPE.TITLE,
      value: {
        value: "",
        style: void 0,
        ...data?.value,
      },
    };
  }

  static get toolbox(): { title: string; icon: string } {
    return {
      title: "标题",
      icon: '<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5H16M1 7.5H16M1 13.5H10" stroke="currentColor" stroke-width="2"/></svg>',
    };
  }

  render(): HTMLDivElement {
    this.nodes.wrapper = document.createElement("div");
    this.nodes.wrapper.classList.add("title-block-wrapper");

    this.nodes.title = document.createElement("div");
    this.nodes.title.contentEditable = "true";
    this.nodes.title.classList.add("title-editable");
    this.nodes.title.dataset.placeholder = "请输入标题...";

    if (this.data.value && this.data.value.value) {
      this.nodes.title.innerHTML = this.data.value.value;
    }

    this.applyStyles();

    this.nodes.title.addEventListener("input", () => {
      if (this.data.value) {
        this.data.value.value = this.nodes.title!.innerHTML;
      }
    });

    this.nodes.wrapper.appendChild(this.nodes.title);

    return this.nodes.wrapper;
  }

  private applyStyles(): void {
    if (!this.data.value.style || !this.nodes.title) return;

    const { type, value } = this.data.value.style;

    if (type === STYLE_TYPE.INLINE) {
      const inlineValue = value as CSSProperties;
      console.log("🚀 ~ TitleTool ~ applyStyles ~ inlineValue:", inlineValue);
    } else if (type === STYLE_TYPE.CSS) {
      const cssValue = value as
        | CSSNestedObjectProperties
        | Record<string, CSSNestedObjectProperties>;
      console.log("🚀 ~ TitleTool ~ applyStyles ~ cssValue:", cssValue);
    }
  }

  renderSettings(): HTMLDivElement {
    const wrapper = document.createElement("div");
    wrapper.classList.add("settings-panel");
    wrapper.classList.add("title-settings-panel");

    const typeGroup = document.createElement("div");
    typeGroup.classList.add("form-group");

    const typeLabel = document.createElement("label");
    typeLabel.textContent = "样式类型";
    typeGroup.appendChild(typeLabel);

    const typeSelect = document.createElement("select");
    typeSelect.innerHTML = `
      <option value="">无样式</option>
      <option value="${STYLE_TYPE.INLINE}">行内样式 (Inline)</option>
      <option value="${STYLE_TYPE.CSS}">CSS类样式 (CSS)</option>
    `;

    // 设置当前选中的类型
    if (this.data.value.style) {
      typeSelect.value = this.data.value.style.type;
    }

    typeGroup.appendChild(typeSelect);
    wrapper.appendChild(typeGroup);

    // 样式值输入区域
    const valueGroup = document.createElement("div");
    valueGroup.classList.add("form-group");

    const valueLabel = document.createElement("label");
    valueLabel.textContent = "样式值 (JSON格式)";
    valueGroup.appendChild(valueLabel);

    const valueTextarea = document.createElement("textarea");
    valueTextarea.rows = 6;
    valueTextarea.placeholder = "输入JSON格式的样式对象...";

    // 设置当前值
    if (this.data.value.style && this.data.value.style.value) {
      valueTextarea.value = JSON.stringify(
        this.data.value.style.value,
        null,
        2
      );
    }

    valueGroup.appendChild(valueTextarea);
    wrapper.appendChild(valueGroup);

    // 保存按钮
    const saveButton = document.createElement("button");
    saveButton.textContent = "应用样式";
    saveButton.addEventListener("click", () => {
      try {
        const type = typeSelect.value as StyleTypeUnionTypes;
        let value: CSSProperties | CSSNestedObjectProperties = {};

        if (valueTextarea.value.trim()) {
          value = JSON.parse(valueTextarea.value);
        }
        console.log(
          "🚀 ~ TitleTool ~ renderSettings ~ this.data:",
          this.data,
          value
        );

        if (type === STYLE_TYPE.INLINE) {
          this.data.value.style = {
            type,
            value: value as CSSProperties,
          };
        } else if (type === STYLE_TYPE.CSS) {
          this.data.value.style = {
            type,
            value: value as CSSNestedObjectProperties,
          };
        } else {
          this.data.value.style = void 0;
        }

        // 重新应用样式
        this.applyStyles();

        // 关闭设置面板
        this.api.tooltip.hide();
      } catch (error) {
        alert(`保存失败: ${(error as Error).message}`);
      }
    });

    wrapper.appendChild(saveButton);

    return wrapper;
  }

  save(): TitleWrapper {
    return {
      type: this.data.type,
      value: {
        value: this.nodes.title ? this.nodes.title.innerHTML : "",
        style: this.data.value.style,
      },
    };
  }

  validate(savedData: TitleWrapper): boolean {
    if (
      !savedData.type ||
      savedData.type !== STRUCTURAL_TYPE.TITLE ||
      !savedData.value.value ||
      savedData.value.value.trim() === ""
    ) {
      return false;
    }
    return true;
  }
}
