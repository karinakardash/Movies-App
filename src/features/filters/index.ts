import { all } from "@redux-saga/core/effects";
import { filtersSaga } from "./filtersSagas";
import { actions } from "./filtersSlice";
export { filtersReducer } from "./filtersSlice";

export const {
  fetchFilteredContentStart,
  fetchFilteredContentSuccess,
  fetchFilteredContentFailure,
  resetFilters,
} = actions;

export function* filtersSagas() {
  yield all([filtersSaga()]);
}
