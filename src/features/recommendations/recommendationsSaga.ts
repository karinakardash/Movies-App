import { put, call, takeLatest } from "typed-redux-saga";
import { actions } from "./recommendationsSlice";
import { RecommendationsFilmApi } from "./api";

export function* recommendationsSaga() {
  yield takeLatest(actions.fetchRecommendationsStart, function* (action) {
    try {
      const result = yield* call(
        RecommendationsFilmApi.getRecommendationsFetch,
        action.payload
      );
      yield* put(actions.fetchRecommendationsSuccess({ movies: result }));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.fetchRecommendationsFailure(e.message));
      }
    }
  });
}
