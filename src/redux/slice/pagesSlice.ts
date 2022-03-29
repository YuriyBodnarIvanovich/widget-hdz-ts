import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageNumber: 1
}

export const pagesSlice = createSlice({
    name: 'mainOption',
    initialState,
    reducers:{
        setNumber:(state, action) => {
            state.pageNumber = action.payload
        },
    }
});

export const { setNumber } = pagesSlice.actions;