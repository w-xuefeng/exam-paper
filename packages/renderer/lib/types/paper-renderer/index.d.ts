import type { BuiltInPaperNameUnionTypes, ExamPaperWrapper, FooterWrapper, HeaderWrapper, PaperDirection, PaperOption } from "@exam-paper/structure";
declare class ExamPaperPage extends HTMLElement {
    /**
     * the paper size type
     * [BuiltInPaperNameUnionTypes](../../../structure/models/papers/type.ts)
     */
    paper?: BuiltInPaperNameUnionTypes;
    /**
     * the paper direction
     * [PaperDirection](../../../structure/models/papers/type.ts)
     */
    direction?: PaperDirection;
    /**
     * the paper pagination
     * [PaperOption](../../../structure/models/papers/type.ts)
     */
    pagination?: PaperOption["pagination"];
    /**
     * the header
     */
    header?: HeaderWrapper["value"];
    /**
     * the footer
     */
    footer?: FooterWrapper["value"];
    /**
     * if header and footer are enabled, use table layout
     */
    table: HTMLTableElement | null;
    /**
     * the main container of table layout   */
    tableMainContainer: HTMLTableColElement | null;
    /**
     * the layout of paper
     */
    layout: HTMLElement[];
    constructor();
    connectedCallback(): void;
}
export declare function paperRenderer(examPaper: ExamPaperWrapper): ExamPaperPage;
export {};
