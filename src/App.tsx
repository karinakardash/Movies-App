import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { FavoritesPage } from "./pages/favorites-page/FavoritesPage";
import { HomePage } from "./pages/home-page/HomePage";
import { SelectedFilmPage } from "./pages/selected-film-page/SelectedFilmPage";
import { TrendPage } from "./pages/trend-page/TrendPage";
import { AppPages } from "./types";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={AppPages.HOME} element={<HomePage></HomePage>}></Route>
        <Route path={AppPages.TRENDS} element={<TrendPage></TrendPage>}></Route>
        <Route
          path={`${AppPages.FILM_PAGE}/:id`}
          element={<SelectedFilmPage />}
        ></Route>
        <Route path={AppPages.FAVORITES} element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
