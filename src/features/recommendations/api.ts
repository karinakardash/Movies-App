import { API_BASE, API_LANGUAGE, API_KEY } from "../../api/config";
import { ISearch, IMovie } from "../all-films/types";
import { GetRecommendationsPayload } from "./types";

export namespace RecommendationsFilmApi {
  export async function getRecommendationsFetch(
    payload: GetRecommendationsPayload
  ): Promise<Array<IMovie>> {
    try {
      const data = await fetch(
        `${API_BASE}movie/${payload.id}/recommendations?api_key=${API_KEY}&language=${API_LANGUAGE}`
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
