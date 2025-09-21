import { StructuralType } from "../consts/shared";
import { StyledContentWrapper } from "../content/type";

export type Answer = string | StyledContentWrapper<string>;

export type AnswerWrapper = {
  type: StructuralType.ANSWER;
  value: Answer;
};
