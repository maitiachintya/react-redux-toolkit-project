import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../api/Api_Url";


let api_url = baseUrl;

export const fetchPosts = createAsyncThunk("posts/fetchPosts",
    async () => {
        const res = await axios.get(api_url)
        console.log("Axios response for posts api:", res);
        return res?.data;
    }
)

const initial_value = {
    isLoading: true, postValue: [], error: null

}

export const postSlice = createSlice({
    name: 'posts',
    initialState: initial_value,

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            console.log("Action for fullfilled:", action);
            state.isLoading = true;
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            console.log("Action for fullfilled:", action);
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null;
        })

        builder.addCase(fetchPosts.rejected, (state, action) => {
            console.log("Action for reject:", action);
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;