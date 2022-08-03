import { all } from "@redux-saga/core/effects";
import { searchSaga } from "./searchSagas";
import { actions } from "./searchSlice";
export { Searchbar } from "./searchbar/Searchbar";
export { searchReducer } from "./searchSlice";

export const {
  fetchSearchContentStart,
  fetchSearchContentSuccess,
  fetchSearchContentFailure,
  reset,
} = actions;

export function* searchSagas() {
  yield all([searchSaga()]);
}
