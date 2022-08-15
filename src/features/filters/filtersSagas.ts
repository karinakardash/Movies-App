import { call, put, takeLatest } from "typed-redux-saga";
import { FiltersApi } from "./api";
import { actions } from "./filtersSlice";

export function* filtersSaga() {
  yield* takeLatest(actions.fetchFilteredContentStart, function* (action) {
    try {
      const result = yield* call(FiltersApi.filter, action.payload);
      yield* put(actions.fetchFilteredContentSuccess({ movies: result }));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.fetchFilteredContentFailure(e.message));
      }
    }
  });
}
