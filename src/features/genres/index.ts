import { all } from "redux-saga/effects";
import { genresSaga } from "./genresSaga";
import { actions } from "./genresSlice";
export { genresReducer } from "./genresSlice";

export const {
  fetchMovieGenresStart,
  fetchMovieGenresSuccess,
  fetchMovieGenresFailure,
} = actions;

export function* genresSagas() {
  yield all([genresSaga()]);
}
