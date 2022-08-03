import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../all-films/types";
import { GetRecommendationsPayload } from "./types";

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState: {
    recommendations: [],
    isLoading: false,
  } as { recommendations: IMovie[]; isLoading: boolean },
  reducers: {
    fetchRecommendationsStart: (
      state,
      action: { payload: GetRecommendationsPayload }
    ) => {
      state.isLoading = true;
    },
    fetchRecommendationsSuccess: (
      state,
      action: { payload: { movies: IMovie[] } }
    ) => {
      state.recommendations = action.payload.movies;
      state.isLoading = false;
    },
    fetchRecommendationsFailure(state, action) {
      state.isLoading = false;
      console.error("Loading Film Failure", action.payload);
    },
  },
});

export const { actions } = recommendationsSlice;
export const recommendationsReducer = recommendationsSlice.reducer;
