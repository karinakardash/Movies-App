import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../all-films/types";
import { SearchPayload } from "./types";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchList: [],
    searchQuery: "",
    searchPage: 1,
    isLoading: false,
  } as {
    searchList: IMovie[];
    searchQuery: string;
    searchPage: number;
    isLoading: boolean;
  },
  reducers: {
    fetchSearchContentStart(state, action: { payload: SearchPayload }) {
      state.isLoading = true;
    },
    fetchSearchContentSuccess(
      state,
      action: { payload: { movies: IMovie[] } }
    ) {
      state.searchList = action.payload.movies;
      state.isLoading = false;
    },
    fetchSearchContentFailure(state, action: { payload: string }) {
      console.error("searchFailure", action.payload);
      state.isLoading = false;
    },
    reset(state) {
      state.searchList = [];
    },
  },
});

export const { actions } = searchSlice;
export const searchReducer = searchSlice.reducer;
