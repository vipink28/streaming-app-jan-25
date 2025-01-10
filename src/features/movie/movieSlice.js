import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from "../../helper/api-requests";
import axios from '../../helper/axios';

const initialState = {
    upcomingMovies: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchUpcomingMovies = createAsyncThunk(
    "movie/fetchUpcomingMovies",
    async () => {
        const response = await axios.get(apiRequests.getCollection("movie", "upcoming"));
        return response.data;
    }
);



export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovies.pending, (state, action) => {
                state.upcomingMovies.status = "loading";
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
                state.upcomingMovies.status = "success";
                state.upcomingMovies.data = action.payload;
            })
            .addCase(fetchUpcomingMovies.rejected, (state, action) => {
                state.upcomingMovies.status = "failed";
                state.upcomingMovies.error = action.error;
            })
    }

});

export const selectUpcomingMovies = (state) => state.movie.upcomingMovies;

export default movieSlice.reducer;