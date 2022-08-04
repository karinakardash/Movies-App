import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../all-films/types";

const favoritesSlice = createSlice({
  name: "favoritesFilm",
  initialState: {} as Record<string, { state: boolean }>,
  reducers: {
    setFavoriteMark(
      state,
      { payload }: { payload: { id: string | number; state: boolean } }
    ) {
      if (payload.state === true) {
        state[payload.id] = { state: true };
      } else if (payload.state === false) {
        state[payload.id] = { state: false };
      }
    },
  },
});

export const { actions } = favoritesSlice;
export const favoritesReducer = favoritesSlice.reducer;
