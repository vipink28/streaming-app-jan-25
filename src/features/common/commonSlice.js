import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from "../../helper/api-requests";
import axios from '../../helper/axios';
const initialState = {
    headerDetails: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderDetails = createAsyncThunk(
    "common/fetchHeaderDetails",
    async (param) => {
        const response = await axios.get(apiRequests.getDetails(param.platform, param.id));
        return response.data;
    }
)


export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderDetails.pending, (state) => {
                state.headerDetails.status = "loading";
            })
            .addCase(fetchHeaderDetails.fulfilled, (state, action) => {
                state.headerDetails.status = "success";
                state.headerDetails.data = action.payload;
            })
            .addCase(fetchHeaderDetails.rejected, (state, action) => {
                state.headerDetails.status = "failed";
                state.headerDetails.error = action.error;
            })
    }
});

export const selectHeaderDetails = (state) => state.common.headerDetails;


export default commonSlice.reducer