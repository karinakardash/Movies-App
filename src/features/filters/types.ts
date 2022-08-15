export type FiltersPayload = {
  sort_by: string;
  release_date_gte: string;
  release_date_lte: string;
  vote_average_gte: number;
  vote_average_lte: number;
  with_genres: string;
  page:number;
};
