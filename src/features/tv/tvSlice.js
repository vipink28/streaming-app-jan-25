import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from "../../helper/api-requests";
import axios from '../../helper/axios';
const initialState = {
    netflixOriginals: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchNetflixOriginals = createAsyncThunk(
    "tv/fetchNetflixOriginals",
    async () => {
        const response = await axios.get(apiRequests.getNetflixOriginals);
        return response.data;
    }
)




export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNetflixOriginals.pending, (state) => {
                state.netflixOriginals.status = "loading";
            })
            .addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
                state.netflixOriginals.status = "success";
                state.netflixOriginals.data = action.payload;
            })
            .addCase(fetchNetflixOriginals.rejected, (state, action) => {
                state.netflixOriginals.status = "failed";
                state.netflixOriginals.error = action.error;
            })
    }
});

export const selectNetflixOriginals = (state) => state.tv.netflixOriginals;


export default tvSlice.reducer