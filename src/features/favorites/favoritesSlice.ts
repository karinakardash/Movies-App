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

// const favoritesSlice = createSlice({
//   name: "favoriteMovies",
//   initialState: { favoriteMovies: [] } as { favoriteMovies: IMovie[] },
//   reducers: {
//     saveFavoriteMovie: (state, action: { payload: IMovie }) => {
//       state.favoriteMovies = [...state.favoriteMovies, action.payload];
//     },

//     deleteFavoriteMovie: (state, action: { payload: number }) => {
//       const newFavoriteMovies = [...state.favoriteMovies];
//       const movieIndex = newFavoriteMovies.findIndex(
//         (movie) => movie.id === action.payload
//       );
//       newFavoriteMovies.splice(movieIndex, 1);
//       state.favoriteMovies = newFavoriteMovies;
//     },
//   },
// });

export const { actions } = favoritesSlice;
export const favoritesReducer = favoritesSlice.reducer;
