import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../types";
import { IMovie } from "../all-films/types";
import { SearchPayload } from "./types";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchList: [],
    fetchStatus: null,
  } as {
    searchList: IMovie[];
    fetchStatus: FetchStatus | null;
  },
  reducers: {
    fetchSearchContentStart(state, action: { payload: SearchPayload }) {
      state.fetchStatus = FetchStatus.PENDING;
    },
    fetchSearchContentSuccess(
      state,
      action: { payload: { movies: IMovie[] } }
    ) {
      state.searchList = [...state.searchList, ...action.payload.movies];
      state.fetchStatus = FetchStatus.SUCCESS;
    },
    fetchSearchContentFailure(state, action: { payload: string }) {
      console.error("searchFailure", action.payload);
      state.fetchStatus = FetchStatus.FAILURE;
    },
    reset(state) {
      state.searchList = [];
    },
  },
});

export const { actions } = searchSlice;
export const searchReducer = searchSlice.reducer;
