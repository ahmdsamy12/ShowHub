import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiPop = "https://api.themoviedb.org/3/movie/popular?api_key=a8a6fa2f944128e9712135bc3ca000b1";

export const getPopMovies = createAsyncThunk("PopMovies/getPopMovies", async () => {
    const res = await axios.get(apiPop);
    const data = await res.data
    console.log(res.data);
    
    return data.results
})

export const PopMoviesSlice = createSlice({
    name: "popMovies",
    initialState: [],
    reducers: {},
    extraReducers(bulider) {
        bulider.addCase(getPopMovies.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default PopMoviesSlice.reducer;