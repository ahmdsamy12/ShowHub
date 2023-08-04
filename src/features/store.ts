import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import MoviesSlice from "./slices/MoviesSlice";
import PopMoviesSlice from "./slices/PopMoviesSlice";


export const store =  configureStore({
    reducer: {
        movies: MoviesSlice,
        pop: PopMoviesSlice,
        up: PopMoviesSlice
    }
})

 type RootState = ReturnType<typeof store.getState>;
 type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;