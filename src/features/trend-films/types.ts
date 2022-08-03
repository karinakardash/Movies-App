export type GetTrendsFilmsPayload = {
  page: number;
};

export interface ISearch<T> {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: Date;
    minimum: Date;
  };
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number | string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
