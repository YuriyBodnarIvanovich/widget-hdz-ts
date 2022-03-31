import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   questions: [],
   questionPage: 0,

};

export const answersSlice = createSlice({
    name: 'mainOption',
    initialState,
    reducers:{
        setQuestions:(state, action) => {
            state.questions = state.questions.length !== 0 ? [...state.questions, action.payload] : action.payload;
        },
        setQuestionPage:(state, action) => {
            state.questionPage = action.payload
        },
    }
});

export const { setQuestions, setQuestionPage } = answersSlice.actions;