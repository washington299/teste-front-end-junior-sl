import { configureStore } from "@reduxjs/toolkit";

import farmsReducer from "./farms";

export const store = configureStore({
	reducer: {
		farms: farmsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
