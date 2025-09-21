/// MARK: DATA

export const QUESTION_TYPE = {
  /// MARK:基本题型
  /**
   * 单选题
   */
  SINGLE_CHOICE: "single-choice",
  /**
   * 多选题
   */
  MULTIPLE_CHOICE: "multiple-choice",
  /**
   * 判断题
   */
  TRUE_FALSE: "true-false",
  /**
   * 填空题
   */
  FILL_IN_THE_BLANK: "fill-in-the-blank",
  /**
   * 简答题
   */
  SHORT_ANSWER: "short-answer",
  /**
   * 计算题
   */
  CALCULATION: "calculation",
  /**
   * 匹配题
   */
  MATCHING: "matching",
  /**
   * 排序题
   */
  ORDERING: "ordering",
  /**
   * 完形填空
   */
  CLOZE_TEST: "cloze-test",
  /**
   * 阅读理解
   */
  COMPREHENSION: "comprehension",
  /**
   * 写作
   */
  ESSAY: "essay",

  /// MARK:语文特定题型
  /**
   * 古诗词鉴赏
   */
  ANCIENT_POETRY_APPRECIATION: "ancient-poetry-appreciation",
  /**
   * 文言文阅读
   */
  CLASSICAL_CHINESE_READING: "classical-chinese-reading",
  /**
   * 现代文阅读
   */
  MODERN_TEXT_READING: "modern-text-reading",
  /**
   * 病句修改
   */
  SENTENCE_MENDING: "sentence-mending",
  /**
   * 语言表达与运用
   */
  LANGUAGE_EXPRESSION: "language-expression",
  /**
   * 名句默写
   */
  FAMOUS_QUOTES_RECITATION: "quotes-recitation",

  /// MARK:数学特定题型

  /**
   * 证明题
   */
  PROOF: "proof",
  /**
   * 实际应用题
   */
  APPLICATION: "application",
  /**
   * 探究题
   */
  INQUIRY: "inquiry",

  /// MARK:英语特定题型
  /**
   * 听力理解
   */
  LISTENING_COMPREHENSION: "listening-comprehension",
  /**
   * 语法填空
   */
  GRAMMAR_FILL_IN: "grammar-fill-in",
  /**
   * 短文改错
   */
  ERROR_CORRECTION: "error-correction",
  /**
   * 翻译题
   */
  TRANSLATION: "translation",
  /**
   * 情景对话
   */
  SITUATIONAL_DIALOGUE: "situational-dialogue",

  /// MARK:理综（物理、化学、生物）特定题型
  /**
   * 实验设计题   */
  EXPERIMENTAL_DESIGN: "experimental-design",
  /**
   * 实验操作题
   */
  EXPERIMENTAL_OPERATION: "experimental-operation",
  /**
   * 电路设计题（物理）
   */
  CIRCUIT_DESIGN: "circuit-design",
  /**
   * 化学方程式书写
   */
  CHEMICAL_EQUATION: "chemical-equation",
  /**
   * 物质推断题
   */
  SUBSTANCE_INFERENCE: "substance-inference",
  /**
   * 遗传图解题（生物）
   */
  GENETIC_DIAGRAM: "genetic-diagram",
  /**
   * 识图填图题（生物）
   */
  CHART_READING: "chart-reading",

  /// MARK:文综（政治、历史、地理）特定题型
  /**
   * 材料分析题
   */
  MATERIAL_ANALYSIS: "material-analysis", // 材料分析题
  /**
   * 案例分析题
   */
  CASE_ANALYSIS: "case-analysis", // 案例分析题
  /**
   * 辨析题
   */
  DISCRIMINATION: "discrimination", // 辨析题
  /**
   * 评论题
   */
  COMMENTARY: "commentary", // 评述题
  /**
   * 读图分析题（地理）
   */
  MAP_READING: "map-reading", // 读图分析题（地理）
  /**
   * 区域综合分析题（地理）
   */
  REGIONAL_ANALYSIS: "regional-analysis",

  /// MARK:其他题型
  /**
   * 其他题型
   */
  OTHER: "other",
} as const;

/// MARK:TYPE
export type QuestionType = typeof QUESTION_TYPE;
export type QuestionTypeUnionTypes = QuestionType[keyof QuestionType];
