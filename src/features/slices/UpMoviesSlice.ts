import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const getUpMovies = createAsyncThunk("UpMovies/getUpMovies",async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=a8a6fa2f944128e9712135bc3ca000b1");
    const data = res.data
    return data.results;
})

const UpMoviesSlice =  createSlice({
    name: "upMovies",
    initialState: [],
    reducers: {},
    extraReducers (builder) {
        builder.addCase(getUpMovies.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default UpMoviesSlice.reducer