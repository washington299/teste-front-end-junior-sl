import { createSlice } from "@reduxjs/toolkit";

import farmsData from "../assets/properties.json";

const initialState = {
	farmsData,
};

export const farmsSlice = createSlice({
	name: "farms",
	initialState,
	reducers: {},
});

export default farmsSlice.reducer;
