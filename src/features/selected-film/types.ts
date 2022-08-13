import { IMovie } from "../all-films/types";
import { IGenre } from "../genres/types";

export type GetSelectedFilmPayload = {
  id: number | string;
};

export interface IMovieDetails extends IMovie {
  budget: number;
  genres: IGenre[];
  production_companies: Array<{
    name: string;
    id: number | string;
    logo_path: string | null;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  status: string;
  tagline: string;
}
