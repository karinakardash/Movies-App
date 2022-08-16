import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { allFilmsReducer } from "./features/all-films";
import { favoritesReducer } from "./features/favorites";
import { filtersReducer } from "./features/filters";
import { genresReducer } from "./features/genres";
import { recommendationsReducer } from "./features/recommendations";
import { searchReducer } from "./features/search";
import { selectedFilmReducer } from "./features/selected-film/selectedFilmSlice";
import { trendFilmsReducer } from "./features/trend-films";
import { userReducer } from "./features/user";
import { rootSaga } from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const allReducers = combineReducers({
  allFilms: allFilmsReducer,
  genres: genresReducer,
  search: searchReducer,
  trendFilms: trendFilmsReducer,
  selectedFilm: selectedFilmReducer,
  recommendations: recommendationsReducer,
  favoritesFilm: favoritesReducer,
  user: userReducer,
  filteredList: filtersReducer,
});
export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
