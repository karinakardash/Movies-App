import { API_BASE, API_LANGUAGE, API_KEY } from "../../api/config";
import { GetSelectedFilmPayload, IMovieDetails } from "./types";

export namespace SelectedFilmApi {
  export async function getSelectedFilmFetch(
    payload: GetSelectedFilmPayload
  ): Promise<IMovieDetails> {
    try {
      const data = await fetch(
        `${API_BASE}movie/${payload.id}?api_key=${API_KEY}&language=${API_LANGUAGE}`
      );
      const result = await data.json();
      if (!data.ok) {
        const errorText = await data.text();
        throw new Error(errorText);
      }
      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
