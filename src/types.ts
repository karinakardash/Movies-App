export enum LinkButtons {
  HOME = "Home",
  TRENDS = "Trends",
  FAVORITES = "Favorites",
  SETTINGS = "Settings",
}

export enum AppPages {
  HOME = "/home",
  TRENDS = "/trends",
  FILM_PAGE = "/home/movie",
  FAVORITES = "/favorites",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  RESET_PASSWORD = "/reset-password",
  NEW_PASSWORD = "/set-new-password",
  SETTINGS = "/settings",
  SEARCH = "/movies/search/:query",
  FILTER = "/movies/filter/sort_by=:sort&page=:page&release_date.gte=:yearsFrom&release_date.lte=:yearsTo&vote_average.gte=:ratingFrom&vote_average.lte=:ratingTo&with_genres=:allgenres",
}

export enum FetchStatus {
  FAILURE = "failure",
  PENDING = "pending",
  SUCCESS = "success",
}
