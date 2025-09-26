export const ELEMENTS_PREFIX = "exam-paper-";

const elName = <T extends string>(name: T) =>
  `${ELEMENTS_PREFIX}${name}` as `${typeof ELEMENTS_PREFIX}${T}`;

export const ELEMENTS = {
  /**
   * paper
   * 纸张
   */
  PAPER: elName("container"),
  /**
   * page
   * 页面
   */
  PAGE: elName("page"),
  /**
   * question
   * 题目
   */
  QUESTION: elName("question"),
  /**
   * answer
   * 答案
   * */
  ANSWER: elName("answer"),
  /**
   * title
   * 标题
   */
  TITLE: elName("title"),
  /**
   * description
   * 描述
   */
  DESCRIPTION: elName("description"),
  /**
   * blank
   * 空白
   */
  BLANK: elName("blank"),
  /**
   * header
   * 页眉
   */
  HEADER: elName("header"),
  /**
   * footer
   * 页脚
   */
  FOOTER: elName("footer"),
  /**
   * styled content
   * 样式化内容
   */
  STYLED: elName("styled-content"),
  /**
   * question-order-number
   * 试题题号
   */
  QUESTION_ORDER_NUMBER: elName("question-order-number"),
  /**
   * question-score
   * 试题分值
   */
  QUESTION_SCORE: elName("question-score"),
} as const;

export type BuiltInElementNameUnionTypes =
  (typeof ELEMENTS)[keyof typeof ELEMENTS];
