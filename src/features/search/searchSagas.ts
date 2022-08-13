import { call, put, takeLatest } from "typed-redux-saga";
import { SearchApi } from "./api";
import { actions } from "./searchSlice";

export function* searchSaga() {
  yield* takeLatest(actions.fetchSearchContentStart, function* (action) {
    try {
      const result = yield* call(SearchApi.search, action.payload);
      yield* put(actions.fetchSearchContentSuccess({ movies: result }));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.fetchSearchContentFailure(e.message));
      }
    }
  });
}
