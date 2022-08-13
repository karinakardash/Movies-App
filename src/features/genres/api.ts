import { API_BASE, API_LANGUAGE, API_KEY } from "../../api/config";
import { IGenre } from "./types";

export namespace GenresApi {
  export async function getGenresFetch(): Promise<Array<IGenre>> {
    try {
      const data = await fetch(
        `${API_BASE}genre/movie/list?api_key=${API_KEY}&language=${API_LANGUAGE}`
      );
      const { genres } = await data.json();
      if (!data.ok) {
        const errorText = await data.text();
        throw new Error(errorText);
      }
      return genres;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
