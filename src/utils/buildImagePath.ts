import { API_IMAGE_PATH } from "../api/config";
import { IGenre } from "../features/genres/types";

export const buildImagePath = (
  url: string | null | undefined,
  width: string
): string => {
  if (url) {
    return `${API_IMAGE_PATH}${width}${url}`;
  } else {
    return "";
  }
};
