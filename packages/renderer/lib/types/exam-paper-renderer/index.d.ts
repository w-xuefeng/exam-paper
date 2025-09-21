import { type ExamPaperWrapper, type ExamWidget } from "@exam-paper/structure";
export declare function matchRender(examWidget: ExamWidget): HTMLElement;
export declare function examPaperRenderer(examPaper: ExamPaperWrapper): {
    paper: HTMLElement;
    mounted: (parent?: HTMLElement | Document | ShadowRoot | string) => void;
};
