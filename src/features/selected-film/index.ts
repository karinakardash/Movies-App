import { all } from "redux-saga/effects";
import { selectedFilmSaga } from "./selectedFilmSaga";
import { actions } from "./selectedFilmSlice";
export { selectedFilmReducer } from "./selectedFilmSlice";
export const {
  fetchSelectedFilmStart,
  fetchSelectedFilmSuccess,
  fetchSelectedFilmFailure,
} = actions;

export function* selectedFilmSagas() {
  yield all([selectedFilmSaga()]);
}
