export declare const ELEMENTS_PREFIX = "exam-paper-";
export declare const ELEMENTS: {
    /**
     * paper
     * 纸张
     */
    readonly PAPER: "exam-paper-container";
    /**
     * question
     * 题目
     */
    readonly QUESTION: "exam-paper-question";
    /**
     * answer
     * 答案
     * */
    readonly ANSWER: "exam-paper-answer";
    /**
     * title
     * 标题
     */
    readonly TITLE: "exam-paper-title";
    /**
     * description
     * 描述
     */
    readonly DESCRIPTION: "exam-paper-description";
    /**
     * blank
     * 空白
     */
    readonly BLANK: "exam-paper-blank";
    /**
     * header
     * 页眉
     */
    readonly HEADER: "exam-paper-header";
    /**
     * footer
     * 页脚
     */
    readonly FOOTER: "exam-paper-footer";
    /**
     * styled content
     * 样式化内容
     */
    readonly STYLED: "exam-paper-styled-content";
    /**
     * question-order-number
     * 试题题号
     */
    readonly QUESTION_ORDER_NUMBER: "exam-paper-question-order-number";
    /**
     * question-score
     * 试题分值
     */
    readonly QUESTION_SCORE: "exam-paper-question-score";
};
export type BuiltInElementNameUnionTypes = (typeof ELEMENTS)[keyof typeof ELEMENTS];
