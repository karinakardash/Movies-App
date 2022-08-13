import { takeLatest } from "@redux-saga/core/effects";
import { put, call } from "typed-redux-saga";
import { actions } from "./trendFilmsSlice";
import { TrendFilmsApi } from "./api";

export function* trendFilmsSaga() {
  yield takeLatest(actions.fetchTrendMoviesStart, function* (action) {
    try {
      const result = yield* call(
        TrendFilmsApi.getTrendFilmsFetch,
        action.payload
      );
      yield* put(actions.fetchTrendMoviesSuccess({ movies: result }));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.fetchTrendMoviesFailure(e.message));
      }
    }
  });
}
