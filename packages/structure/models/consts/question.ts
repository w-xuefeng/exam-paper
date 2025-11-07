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

export const QUESTION_LOCALES = {
  zh_CN: {
    questionType: "题目类型",
    [QUESTION_TYPE.SINGLE_CHOICE]: "单选题",
    [QUESTION_TYPE.MULTIPLE_CHOICE]: "多选题",
    [QUESTION_TYPE.TRUE_FALSE]: "判断题",
    [QUESTION_TYPE.FILL_IN_THE_BLANK]: "填空题",
    [QUESTION_TYPE.SHORT_ANSWER]: "简答题",
    [QUESTION_TYPE.CALCULATION]: "计算题",
    [QUESTION_TYPE.MATCHING]: "匹配题",
    [QUESTION_TYPE.ORDERING]: "排序题",
    [QUESTION_TYPE.CLOZE_TEST]: "完形填空",
    [QUESTION_TYPE.COMPREHENSION]: "阅读理解",
    [QUESTION_TYPE.ESSAY]: "写作",
    [QUESTION_TYPE.ANCIENT_POETRY_APPRECIATION]: "古诗词鉴赏",
    [QUESTION_TYPE.CLASSICAL_CHINESE_READING]: "文言文阅读",
    [QUESTION_TYPE.MODERN_TEXT_READING]: "现代文阅读",
    [QUESTION_TYPE.SENTENCE_MENDING]: "病句修改",
    [QUESTION_TYPE.LANGUAGE_EXPRESSION]: "语言表达与运用",
    [QUESTION_TYPE.FAMOUS_QUOTES_RECITATION]: "名句默写",
    [QUESTION_TYPE.PROOF]: "证明题",
    [QUESTION_TYPE.APPLICATION]: "实际应用题",
    [QUESTION_TYPE.INQUIRY]: "探究题",
    [QUESTION_TYPE.LISTENING_COMPREHENSION]: "听力理解",
    [QUESTION_TYPE.GRAMMAR_FILL_IN]: "语法填空",
    [QUESTION_TYPE.ERROR_CORRECTION]: "短文改错",
    [QUESTION_TYPE.TRANSLATION]: "翻译题",
    [QUESTION_TYPE.SITUATIONAL_DIALOGUE]: "情景对话",
    [QUESTION_TYPE.EXPERIMENTAL_DESIGN]: "实验设计题",
    [QUESTION_TYPE.EXPERIMENTAL_OPERATION]: "实验操作题",
    [QUESTION_TYPE.CIRCUIT_DESIGN]: "电路设计题",
    [QUESTION_TYPE.CHEMICAL_EQUATION]: "化学方程式书写",
    [QUESTION_TYPE.SUBSTANCE_INFERENCE]: "物质推断题",
    [QUESTION_TYPE.GENETIC_DIAGRAM]: "遗传图解题",
    [QUESTION_TYPE.CHART_READING]: "识图填图题",
    [QUESTION_TYPE.MATERIAL_ANALYSIS]: "材料分析题",
    [QUESTION_TYPE.CASE_ANALYSIS]: "案例分析题",
    [QUESTION_TYPE.DISCRIMINATION]: "辨析题",
    [QUESTION_TYPE.COMMENTARY]: "评论题",
    [QUESTION_TYPE.MAP_READING]: "读图分析题",
    [QUESTION_TYPE.REGIONAL_ANALYSIS]: "区域综合分析题",
    [QUESTION_TYPE.OTHER]: "其他题型",
  },
  en_US: {
    questionType: "Question Type",
    [QUESTION_TYPE.SINGLE_CHOICE]: "Single Choice",
    [QUESTION_TYPE.MULTIPLE_CHOICE]: "Multiple Choice",
    [QUESTION_TYPE.TRUE_FALSE]: "True/False",
    [QUESTION_TYPE.FILL_IN_THE_BLANK]: "Fill in the Blank",
    [QUESTION_TYPE.SHORT_ANSWER]: "Short Answer",
    [QUESTION_TYPE.CALCULATION]: "Calculation",
    [QUESTION_TYPE.MATCHING]: "Matching",
    [QUESTION_TYPE.ORDERING]: "Ordering",
    [QUESTION_TYPE.CLOZE_TEST]: "Cloze Test",
    [QUESTION_TYPE.COMPREHENSION]: "Comprehension",
    [QUESTION_TYPE.ESSAY]: "Essay",
    [QUESTION_TYPE.ANCIENT_POETRY_APPRECIATION]: "Ancient Poetry Appreciation",
    [QUESTION_TYPE.CLASSICAL_CHINESE_READING]: "Classical Chinese Reading",
    [QUESTION_TYPE.MODERN_TEXT_READING]: "Modern Text Reading",
    [QUESTION_TYPE.SENTENCE_MENDING]: "Sentence Mending",
    [QUESTION_TYPE.LANGUAGE_EXPRESSION]: "Language Expression",
    [QUESTION_TYPE.FAMOUS_QUOTES_RECITATION]: "Famous Quotes Recitation",
    [QUESTION_TYPE.PROOF]: "Proof",
    [QUESTION_TYPE.APPLICATION]: "Application",
    [QUESTION_TYPE.INQUIRY]: "Inquiry",
    [QUESTION_TYPE.LISTENING_COMPREHENSION]: "Listening Comprehension",
    [QUESTION_TYPE.GRAMMAR_FILL_IN]: "Grammar Fill-in",
    [QUESTION_TYPE.ERROR_CORRECTION]: "Error Correction",
    [QUESTION_TYPE.TRANSLATION]: "Translation",
    [QUESTION_TYPE.SITUATIONAL_DIALOGUE]: "Situational Dialogue",
    [QUESTION_TYPE.EXPERIMENTAL_DESIGN]: "Experimental Design",
    [QUESTION_TYPE.EXPERIMENTAL_OPERATION]: "Experimental Operation",
    [QUESTION_TYPE.CIRCUIT_DESIGN]: "Circuit Design",
    [QUESTION_TYPE.CHEMICAL_EQUATION]: "Chemical Equation",
    [QUESTION_TYPE.SUBSTANCE_INFERENCE]: "Substance Inference",
    [QUESTION_TYPE.GENETIC_DIAGRAM]: "Genetic Diagram",
    [QUESTION_TYPE.CHART_READING]: "Chart Reading",
    [QUESTION_TYPE.MATERIAL_ANALYSIS]: "Material Analysis",
    [QUESTION_TYPE.CASE_ANALYSIS]: "Case Analysis",
    [QUESTION_TYPE.DISCRIMINATION]: "Discrimination",
    [QUESTION_TYPE.COMMENTARY]: "Commentary",
    [QUESTION_TYPE.MAP_READING]: "Map Reading",
    [QUESTION_TYPE.REGIONAL_ANALYSIS]: "Regional Analysis",
    [QUESTION_TYPE.OTHER]: "Other Question Type",
  },
};
