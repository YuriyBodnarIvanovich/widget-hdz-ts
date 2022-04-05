import { createSlice } from '@reduxjs/toolkit';
import { IQuestionArr } from '../types';

interface IAnswer {
    answerData: string[];
    comment: string;
}

const initialState:{questions: IQuestionArr[], questionPage: number, answers: Array<IAnswer>, clientId: string} = {
   questions: [
       {
        answerItemResponses: [     
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-1",
                number: 0,
                text: "question 1"
            },
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-2",
                number: 1,
                text: "question 2"
            },
            {
                answerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6-3",
                number: 3,
                text: "question 3"
            }
        ],
        clientId: '',
        questionId: '',
        questionType: 0,
        text: 'Hello fisrt Question',
       }
   ],
   questionPage: 0,
   answers: [],
   clientId: '',

};

export const answersSlice = createSlice({
    name: 'mainOption',
    initialState,
    reducers:{
        setQuestions:(state, action) => {
            state.questions = [...state.questions, action.payload];
            if(Object.keys(state.questions[0]).length === 0){
                state.questions.shift();
            }
        },
        setQuestionPage:(state, action) => {
            state.questionPage = action.payload
        },
        setAnswers:(state, action) => {
            state.answers = action.payload;
        },
        setClientId: (state, action) => {
            state.clientId = action.payload;
        }
    }
});

export const { setQuestions, setQuestionPage, setAnswers, setClientId } = answersSlice.actions;