import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { appReducers } from "./reducers";

const store = configureStore({
	reducer: appReducers,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	undefined,
	Action<string>
>;

export default store;
