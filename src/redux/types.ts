import { number } from "yup";

interface IAnswerItemResponses {
    answerId: string;
    number: number;
    text: string;
}

export interface IQuestionArr {
    answerItemResponses: IAnswerItemResponses[],
    clientId: string;
    questionId: string;
    questionType: number;
    text: string;
}

