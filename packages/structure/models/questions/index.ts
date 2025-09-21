import type { StructuralType } from "../consts/shared";
import type { TypeWrapper } from "../shared/type";
import type { Question } from "./question";

export * from "./question";
export type QuestionWrapper = TypeWrapper<StructuralType.QUESTION, Question>;
