import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a8a6fa2f944128e9712135bc3ca000b1';
export const getMovies = createAsyncThunk('movies/getMovies', async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  });

  // Redux slice
const MoviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getMovies.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });

  export default MoviesSlice.reducer