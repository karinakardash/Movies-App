import { API_BASE, API_LANGUAGE, API_KEY } from "../../api/config";
import { IMovie, GetAllFilmsPayload } from "./types";

export namespace FilmsApi {
  export async function getAllFilmsFetch(
    payload: GetAllFilmsPayload
  ): Promise<Array<IMovie>> {
    try {
      const data = await fetch(
        `${API_BASE}movie/now_playing?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${payload.page}`
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
