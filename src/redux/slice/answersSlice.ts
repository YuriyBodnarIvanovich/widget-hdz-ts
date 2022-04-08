import { createSlice } from '@reduxjs/toolkit';
import { IQuestionArr } from '../types';

interface IAnswer {
    answerData: string[];
    comment: string;
}

const initialState:{questions: IQuestionArr[], questionPage: number, answers: Array<IAnswer>, clientId: string} = {
   questions: [
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