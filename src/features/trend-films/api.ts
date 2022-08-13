import { API_BASE, API_LANGUAGE, API_KEY } from "../../api/config";
import { IMovie, GetTrendsFilmsPayload } from "./types";

export namespace TrendFilmsApi {
  export async function getTrendFilmsFetch(
    payload: GetTrendsFilmsPayload
  ): Promise<Array<IMovie>> {
    try {
      const data = await fetch(
        `${API_BASE}movie/top_rated?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${payload.page}`
      );
      const { results } = await data.json();
      if (!data.ok) {
        const errorText = await data.text();
        throw new Error(errorText);
      }
      return results;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
