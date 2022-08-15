import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../types";
import { IMovie } from "../all-films/types";
import { FiltersPayload} from "./types";

export const filtersSlice = createSlice({
  name: "search",
  initialState: {
    filteredList: [],
    fetchStatus: null,
  } as {
    filteredList: IMovie[];
    fetchStatus: FetchStatus | null;
  },
  reducers: {
    fetchFilteredContentStart(state, action: { payload: FiltersPayload }) {
      state.fetchStatus = FetchStatus.PENDING;
    },
    fetchFilteredContentSuccess(
      state,
      action: { payload: { movies: IMovie[] } }
    ) {
      state.filteredList = [...state.filteredList, ...action.payload.movies];
      state.fetchStatus = FetchStatus.SUCCESS;
    },
    fetchFilteredContentFailure(state, action: { payload: string }) {
      console.error("searchFailure", action.payload);
      state.fetchStatus = FetchStatus.FAILURE;
    },
    resetFilters(state) {
      state.filteredList = [];
    },
  },
});

export const { actions } = filtersSlice;
export const filtersReducer = filtersSlice.reducer;
