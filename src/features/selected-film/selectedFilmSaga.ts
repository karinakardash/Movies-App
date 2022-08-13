import { put, call, takeLatest } from "typed-redux-saga";
import { actions } from "./selectedFilmSlice";
import { SelectedFilmApi } from "./api";

export function* selectedFilmSaga() {
  yield takeLatest(actions.fetchSelectedFilmStart, function* (action) {
    try {
      const result = yield* call(
        SelectedFilmApi.getSelectedFilmFetch,
        action.payload
      );
      yield* put(actions.fetchSelectedFilmSuccess({ movie: result }));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.fetchSelectedFilmFailure(e.message));
      }
    }
  });
}
