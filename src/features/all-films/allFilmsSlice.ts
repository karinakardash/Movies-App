import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../types";
import { GetAllFilmsPayload, IMovie } from "./types";

const allFilmsSlice = createSlice({
  name: "allFilms",
  initialState: {
    allFilms: [],
    fetchStatus: null,
  } as {
    allFilms: IMovie[];
    fetchStatus: FetchStatus | null;
  },
  reducers: {
    fetchAllMoviesStart: (state, action: { payload: GetAllFilmsPayload }) => {
      state.fetchStatus = FetchStatus.PENDING;
    },
    fetchAllMoviesSuccess: (
      state,
      action: { payload: { movies: IMovie[] } }
    ) => {
      state.allFilms = [...state.allFilms, ...action.payload.movies];
      state.fetchStatus = FetchStatus.SUCCESS;
    },
    fetchAllMoviesFailure: (state, action) => {
      state.fetchStatus = FetchStatus.FAILURE;
      console.error("Loading Failure", action.payload);
    },
    clearMoviesState: (state) => {
      state.allFilms = [];
    },
  },
});

export const { actions } = allFilmsSlice;
export const allFilmsReducer = allFilmsSlice.reducer;
