import { combineReducers } from "@reduxjs/toolkit";
import { answersSlice } from "./slice/answersSlice";
import { mainOptionSlice } from "./slice/mainOptionSlice";
import { pagesSlice } from "./slice/pagesSlice";

export const appReducers = combineReducers({
    mainToolsReducer: mainOptionSlice.reducer,
    pagesReducer: pagesSlice.reducer,
    answersReducer: answersSlice.reducer
});
