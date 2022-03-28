import { combineReducers } from "@reduxjs/toolkit";
import { mainOptionSlice } from "./slice/mainOptionSlice";
import { pagesSlice } from "./slice/pagesSlice";

export const appReducers = combineReducers({
    mainToolsReducer: mainOptionSlice.reducer,
    pagesReducer: pagesSlice.reducer
});
