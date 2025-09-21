import {
  paperSizeMap,
  type BuiltInPaperNameUnionTypes,
  type PrintStyle,
} from "@exam-paper/structure";

export const getPrintStyles = (
  pageSizeName: BuiltInPaperNameUnionTypes
): string => {
  const paper = paperSizeMap[pageSizeName];
  if (!paper) {
    return `
      @media print {
        @page {
          size: A4;
          margin: 0;
        }
        body {
          width: 210mm;
          height: 297mm;
          margin: 0;
          padding: 0;
        }
        .no-print {
          display: none !important;
        }
        h1, h2, h3 {
          break-after: avoid;
        }
        table, figure, pre, .avoid-break-inside {
          break-inside: avoid;
        }
        .force-break-before {
          break-before: page;
        }
        .force-break-after {
          break-after: page;
        }
      }
    `;
  }

  const { style } = paper;
  const printStyle = style.printStyle || ({} as PrintStyle);
  const isLandscape = paper.direction === "landscape";

  return `
    @media print {
      @page {
        size: ${
          printStyle.size || paper.width_mm + "mm " + paper.height_mm + "mm"
        }${isLandscape ? " landscape" : ""};
        margin: ${printStyle.margin || "0"};
        marks: ${printStyle.marks || "none"};
        bleed: ${printStyle.bleed || "0"};
      }

      body {
        width: ${style.width};
        height: ${style.height};
        margin: ${style.margin || "0"};
        padding: ${style.padding || "0"};
        background-color: ${style.backgroundColor || "#fff"};
        box-sizing: ${style.boxSizing || "border-box"};
      }

      /* 隐藏不打印的元素 */
      .no-print {
        display: none !important;
      }

      /* 链接样式优化 */
      a {
        color: #000 !important;
        text-decoration: underline !important;
      }

      a[href]:after {
        content: " (" attr(href) ")";
        font-size: 0.9em;
        font-weight: normal;
      }

      /* 分页控制 - 标题 */
      h1, h2, h3, h4, h5, h6 {
        break-after: ${printStyle.headingBreakAfter || "avoid"};
        break-inside: avoid;
      }

      /* 分页控制 - 内容块 */
      p, ul, ol, table, figure, img, pre, .avoid-break-inside {
        break-inside: ${printStyle.breakInside || "avoid"};
      }

      /* 特定元素分页控制 */
      .force-break-before {
        break-before: ${printStyle.forceBreakBefore || "page"};
      }

      .force-break-after {
        break-after: ${printStyle.forceBreakAfter || "page"};
      }

      .avoid-break-before {
        break-before: avoid;
      }

      .avoid-break-after {
        break-after: avoid;
      }

      /* 表格打印优化 */
      table {
        break-inside: auto;
        break-after: auto;
        width: 100%;
      }

      tr {
        break-inside: avoid;
        break-after: auto;
      }

      /* 列表打印优化 */
      ul, ol {
        break-inside: avoid;
        break-before: auto;
      }

      li {
        break-inside: avoid;
      }

      /* 图片打印优化 */
      img {
        max-width: 100% !important;
        height: auto !important;
        break-inside: avoid;
      }

      /* 页眉页脚控制 */
      .page-header {
        position: running(pageHeader);
      }

      .page-footer {
        position: running(pageFooter);
      }

      @page {
        @top-center {
          content: element(pageHeader);
        }
        @bottom-center {
          content: element(pageFooter);
        }
      }

      /*  orphans 和 widows 控制 */
      p {
        orphans: ${printStyle.orphans || "3"};
        widows: ${printStyle.widows || "3"};
      }

      /* 打印颜色调整 */
      * {
        color: #000 !important;
        background-color: transparent !important;
        box-shadow: none !important;
        text-shadow: none !important;
      }
    }
  `;
};
