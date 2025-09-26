export const STRUCTURAL_TYPE = {
  /**
   * paper
   * 纸张
   */
  PAPER: "paper",
  /**
   * page
   * 页面
   */
  PAGE: "page",
  /**
   * question
   * 题目
   */
  QUESTION: "question",
  /**
   * answer
   * 答案
   * */
  ANSWER: "answer",
  /**
   * title
   * 标题
   */
  TITLE: "title",
  /**
   * description
   * 描述
   */
  DESCRIPTION: "description",
  /**
   * blank
   * 空白
   */
  BLANK: "blank",
  /**
   * header
   * 页眉
   */
  HEADER: "header",
  /**
   * footer
   * 页脚
   */
  FOOTER: "footer",
} as const;

export namespace StructuralType {
  /**
   * paper
   * 纸张
   */
  export type PAPER = typeof STRUCTURAL_TYPE.PAPER;
  /**
   * page
   * 页面
   */
  export type PAGE = typeof STRUCTURAL_TYPE.PAGE;
  /**
   * question
   * 题目
   */
  export type QUESTION = typeof STRUCTURAL_TYPE.QUESTION;
  /**
   * answer
   * 答案
   * */
  export type ANSWER = typeof STRUCTURAL_TYPE.ANSWER;
  /**
   * title
   * 标题
   */
  export type TITLE = typeof STRUCTURAL_TYPE.TITLE;
  /**
   * description
   * 描述
   */
  export type DESCRIPTION = typeof STRUCTURAL_TYPE.DESCRIPTION;
  /**
   * blank
   * 空白
   */
  export type BLANK = typeof STRUCTURAL_TYPE.BLANK;
  /**
   * header
   * 页眉
   */
  export type HEADER = typeof STRUCTURAL_TYPE.HEADER;
  /**
   * footer
   * 页脚
   */
  export type FOOTER = typeof STRUCTURAL_TYPE.FOOTER;
}
