import { all } from "redux-saga/effects";
import { allFilmsSagas } from "./features/all-films";
import { genresSagas } from "./features/genres";
import { recommendationsSagas } from "./features/recommendations";
import { searchSagas } from "./features/search";
import { selectedFilmSagas } from "./features/selected-film";
import { trendFilmsSagas } from "./features/trend-films";

export function* rootSaga() {
  yield all([
    allFilmsSagas(),
    genresSagas(),
    searchSagas(),
    trendFilmsSagas(),
    selectedFilmSagas(),
    recommendationsSagas(),
  ]);
}
