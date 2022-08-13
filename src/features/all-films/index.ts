import { all } from "redux-saga/effects";
import { allFilmsSaga } from "./allFilmsSaga";
import { actions } from "./allFilmsSlice";
export { allFilmsReducer } from "./allFilmsSlice";
export const {
  fetchAllMoviesStart,
  fetchAllMoviesSuccess,
  fetchAllMoviesFailure,
} = actions;

export function* allFilmsSagas() {
  yield all([allFilmsSaga()]);
}
