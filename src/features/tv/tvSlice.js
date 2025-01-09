import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    netflixOriginals: {
        status: "idle",
        data: null,
        error: null
    }
}
export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export default tvSlice.reducer