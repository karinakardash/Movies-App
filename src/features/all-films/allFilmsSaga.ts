import { takeLatest } from "@redux-saga/core/effects";
import { put, call } from "typed-redux-saga";
import { actions } from "./allFilmsSlice";
import { FilmsApi } from "./api";

export function* allFilmsSaga() {
  yield takeLatest(actions.fetchAllMoviesStart, function* (action) {
    try {
      const result = yield* call(FilmsApi.getAllFilmsFetch, action.payload);
      yield* put(actions.fetchAllMoviesSuccess({ movies: result }));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.fetchAllMoviesFailure(e.message));
      }
    }
  });
}
