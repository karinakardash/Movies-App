import { API_BASE, API_KEY, API_LANGUAGE } from "../../api/config";
import { IMovie } from "../all-films/types";
import { FiltersPayload } from "./types";

export namespace FiltersApi {
  export async function filter(payload: FiltersPayload): Promise<Array<IMovie>> {
    try {
      const data = await fetch(    
        `${API_BASE}discover/movie?api_key=${API_KEY}>&language=${API_LANGUAGE}&sort_by=${payload.sort_by}.desc&page=${payload.page}&release_date.gte=${payload.release_date_gte}&release_date.lte=${payload.release_date_lte}&vote_average.gte=${payload.vote_average_gte}&vote_average.lte=${payload.vote_average_lte}&with_genres=${payload.with_genres}`
      );
      const { results } = await data.json();
      if (!data.ok) {
        throw new Error();
      }
      return results;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
