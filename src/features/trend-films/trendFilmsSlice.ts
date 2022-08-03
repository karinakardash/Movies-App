import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../types";
import { GetTrendsFilmsPayload, IMovie } from "./types";

const trendFilmsSlice = createSlice({
  name: "trendFilms",
  initialState: {
    trendFilms: [],
    fetchStatus: null,
  } as { trendFilms: IMovie[]; fetchStatus: FetchStatus | null },
  reducers: {
    fetchTrendMoviesStart: (
      state,
      action: { payload: GetTrendsFilmsPayload }
    ) => {
      state.fetchStatus = FetchStatus.PENDING;
    },
    fetchTrendMoviesSuccess: (
      state,
      action: { payload: { movies: IMovie[] } }
    ) => {
      state.trendFilms = [...state.trendFilms, ...action.payload.movies];
      state.fetchStatus = FetchStatus.SUCCESS;
    },
    fetchTrendMoviesFailure: (state, action) => {
      state.fetchStatus = FetchStatus.FAILURE;
      console.error("Loading Trends Failure", action.payload);
    },
    clearTrendMoviesState: (state) => {
      state.trendFilms = [];
    },
  },
});

export const { actions } = trendFilmsSlice;
export const trendFilmsReducer = trendFilmsSlice.reducer;
