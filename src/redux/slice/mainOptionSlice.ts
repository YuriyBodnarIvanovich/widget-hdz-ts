import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    textColor: '',
    backgroundColor: '',
    mainColor: '',
    borderColor:'',    
};

export const mainOptionSlice = createSlice({
    name: 'mainOption',
    initialState,
    reducers:{
        setTextColor:(state, action) => {
            state.textColor = action.payload
        },
        setBackgroundColor:(state, action) => {
            state.backgroundColor = action.payload
        },
        setMainColor:(state, action) => {
            state.mainColor = action.payload
        },
        setBorderColor:(state, action) => {
            state.borderColor = action.payload
        },

    }
});

export const { setTextColor, setBackgroundColor, setMainColor, setBorderColor } = mainOptionSlice.actions;