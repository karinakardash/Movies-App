import { IMovie } from "../all-films/types";

export type SearchPayload = {
  query: string;
  page: number;
};
