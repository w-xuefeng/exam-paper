# @exam-paper/structure

This package defines the core data structures for the entire exam paper application. It uses TypeScript to create robust and type-safe models for papers, questions, answers, and more.

此包为整个试卷应用定义了核心数据结构。它使用 TypeScript 创建了健壮且类型安全的模型，用于描述试卷、问题、答案等。

---

## Data Models

The data models are organized into the following directories:

数据模型按以下目录组织：

| Directory | English Description | 中文描述 |
| :--- | :--- | :--- |
| `answer` | Defines the data structure for answers to questions. | 定义了问题答案的数据结构。 |
| `consts` | Contains constant values and enums used throughout the data models. | 包含整个数据模型中使用的常量和枚举。 |
| `content` | Describes the structure of content blocks, such as text, images, or formulas, that can be used in questions and descriptions. | 描述了内容块的结构，例如可以在问题和描述中使用的文本、图片或公式。 |
| `exams` | Defines the top-level structure for an entire exam, which may contain multiple papers. | 定义了整个考试的顶层结构，其中可能包含多份试卷。 |
| `papers` | Contains the data models for the exam paper itself, including its header, footer, and sections. | 包含试卷本身的数据模型，包括其页眉、页脚和各个部分。 |
| `questions` | Defines the structure for different types of questions (e.g., multiple choice, fill-in-the-blank). | 定义了不同类型问题（如选择题、填空题）的结构。 |
| `shared` | Includes common TypeScript types and interfaces that are shared across different data models. | 包含在不同数据模型之间共享的通用 TypeScript 类型和接口。 |
| `styles` | Defines the data structures for styling information, allowing for customizable rendering of the exam paper. | 定义了用于样式信息的数据结构，允许对试卷进行可定制的渲染。 |

---

## API Reference

### ExamPaperWrapper

`ExamPaperWrapper` 是试卷结构的核心类型，它包装了整个试卷的所有内容。

```ts
interface ExamPaperWrapper<Paper extends string = BuiltInPaperNameUnionTypes> {
  /**
   * 结构类型
   */
  type: StructuralType.PAPER;
  /**
   * 选项配置
   */
  option: PaperOption<Paper>;
  /**
   * 全局样式
   */
  style?: StyleWrapper;
  /**
   * 全局页眉
   */
  header?: HeaderWrapper["value"];
  /**
   * 全局页脚
   */
  footer?: FooterWrapper["value"];
  /**
   * 页面
   */
  pages: PageWrapper<ExamWidget[]>[];
}
```

### 试卷结构示例

#### 示例：

```json5
{
  /**
   * 结构类型
   */
  "type": "paper",
  /**
   * 选项配置
   */
  "option": {
    /**
     * 纸张大小
     */
    "paper": "A4",
    /**
     * 纸张方向
     */
    "direction": "portrait",
    /**
     * 分页设置
     */
    "pagination": {
      /**
       * 分页类型
       */
      "type": "inner",
      /**
      * 分页样式
      */
      "style": {
        "color": "grap",
        "fontSize": "12px"
      },
      /**
       * 分页格式
       */
      "formatter": "'第' %current '页 / 共' %total '页'",
      /**
       * 分页位置
       */
      "position": "bottom-center"
    }
  },
  /**
   * 全局样式
   */
  "style": {
    "type": "css",
    "value": {
      ".className": {
        "color": "black"
      },
      "#idName": {
        "backgroundColor": "white"
      },
      "tagName": {
        "border": "1px solid red"
      },
    }
  }, 
  /**
   * 全局页眉
   */
  "header": {
    "style": {
      "type": "inline",
      "value": {
        "color": "#000000",
        "fontSize": "12px",
      }
    },
    "value": "<rich-text>"
  },
  /**
   * 全局页脚
   */
  "footer": {
    "style": {
      "type": "inline",
      "value": {
        "color": "#000000",
        "fontSize": "12px",
      }
    },
    "value": "<rich-text>"
  },
  /**
   * 页面
   */
  "pages": [
    {
      "type": "page",
      "style": {
        "type": "css",
        "value": {
          ".className": {
            "color": "black"
          },
          "#idName": {
            "backgroundColor": "white"
          },
          "tagName": {
            "border": "1px solid red"
          },
        }
      },
      "layout": [
        {
          "type": "title",
          "value": {
            "style": {
              "type": "inline",
              "value": {
                "color": "#000000",
                "fontSize": "12px",
              }
            },
            "value": "<rich-text>"
          }
        }
        // header 页眉
        // title  标题
        // description 描述
        // answer 答案
        // question 问题
        // blank 空白
        // ...
        // footer 页脚
      ]
    }
  ]

}
```

#### 渲染示例

- 1.[preview.pdf](../renderer/assets/preview.pdf)
- 2.[example.pdf](../renderer/assets/example.pdf)

