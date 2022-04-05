import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageNumber: 2
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