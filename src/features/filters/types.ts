export type FiltersPayload = {
  sort_by: string | undefined;
  release_date_gte: string | undefined;
  release_date_lte: string | undefined;
  vote_average_gte: string | undefined;
  vote_average_lte: string | undefined;
  with_genres: string | undefined;
  page:number;
};
