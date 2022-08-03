import { createSlice } from "@reduxjs/toolkit";
import { GetSelectedFilmPayload, IMovieDetails } from "./types";

const selectedFilmSlice = createSlice({
  name: "selectedFilm",
  initialState: {
    selectedFilm: {},
    isLoading: false,
  } as { selectedFilm: IMovieDetails; isLoading: boolean },
  reducers: {
    fetchSelectedFilmStart: (
      state,
      action: { payload: GetSelectedFilmPayload }
    ) => {
      state.isLoading = true;
    },
    fetchSelectedFilmSuccess: (
      state,
      action: { payload: { movie: IMovieDetails } }
    ) => {
      state.selectedFilm = action.payload.movie;
      state.isLoading = false;
    },
    fetchSelectedFilmFailure: (state, action) => {
      state.isLoading = false;
      console.error("Loading Film Failure", action.payload);
    },
  },
});

export const { actions } = selectedFilmSlice;
export const selectedFilmReducer = selectedFilmSlice.reducer;
