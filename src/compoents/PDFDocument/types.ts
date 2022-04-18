interface IAnswers {
    answer: string,
    comment: string,
    question: string,
    recommendation: string,
}

export interface IPdfResult {
    clientName?: string,
    completionDate?: string,
    description?: string;
    email?: string, 
    name?: string,
    phone?: string,
    subject?: string,
    answers?: IAnswers[]
}