import { StructuralType } from "../consts/shared";
import { StyledContentWrapper } from "../content/type";
import { TypeWrapper } from "../shared/type";

export type Answer = string | StyledContentWrapper<string>;

export type AnswerWrapper = TypeWrapper<StructuralType.ANSWER, Answer>;
