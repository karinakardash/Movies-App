import { all } from "redux-saga/effects";
import { recommendationsSaga } from "./recommendationsSaga";
import { actions } from "./recommendationsSlice";
export { recommendationsReducer } from "./recommendationsSlice";
export const {
  fetchRecommendationsStart,
  fetchRecommendationsSuccess,
  fetchRecommendationsFailure,
} = actions;

export function* recommendationsSagas() {
  yield all([recommendationsSaga()]);
}
