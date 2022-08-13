import { createSlice } from "@reduxjs/toolkit";
import { IGenre } from "./types";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    isLoading: false,
  } as { genres: IGenre[]; isLoading: boolean },
  reducers: {
    fetchMovieGenresStart: (state) => {
      state.isLoading = true;
    },
    fetchMovieGenresSuccess: (state, action) => {
      state.genres = action.payload;
      state.isLoading = false;
    },
    fetchMovieGenresFailure: (state, action) => {
      state.isLoading = false;
      console.error("Loading Genres Failure", action.payload);
    },
  },
});

export const { actions } = genresSlice;
export const genresReducer = genresSlice.reducer;
