import { API_BASE, API_KEY, API_LANGUAGE } from "../../api/config";
import { IMovie } from "../all-films/types";
import { SearchPayload } from "./types";

export namespace SearchApi {
  export async function search(payload: SearchPayload): Promise<Array<IMovie>> {
    try {
      const data = await fetch(
        `${API_BASE}search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${payload.query}&page=${payload.page}&include_adult=false`
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
