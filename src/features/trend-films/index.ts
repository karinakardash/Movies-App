import { all } from "redux-saga/effects";
import { trendFilmsSaga } from "./trendFilmsSaga";
import { actions } from "./trendFilmsSlice";
export { trendFilmsReducer } from "./trendFilmsSlice";
export const {
  fetchTrendMoviesStart,
  fetchTrendMoviesSuccess,
  fetchTrendMoviesFailure,
} = actions;

export function* trendFilmsSagas() {
  yield all([trendFilmsSaga()]);
}
