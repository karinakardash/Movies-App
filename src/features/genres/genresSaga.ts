import { takeLatest } from "@redux-saga/core/effects";
import { put, call } from "typed-redux-saga";
import { GenresApi } from "./api";
import { actions } from "./genresSlice";

export function* genresSaga() {
  yield takeLatest(actions.fetchMovieGenresStart, function* () {
    try {
      const result = yield* call(GenresApi.getGenresFetch);
      yield* put(actions.fetchMovieGenresSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.fetchMovieGenresFailure(e.message));
      }
    }
  });
}
