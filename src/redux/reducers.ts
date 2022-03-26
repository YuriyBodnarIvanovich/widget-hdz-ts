import { combineReducers } from "@reduxjs/toolkit";
import { mainOptionSlice } from "./slice/mainOptionSlice";

export const appReducers = combineReducers({
    mainToolsReducer: mainOptionSlice.reducer
});
