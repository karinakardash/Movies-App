import { useAppSelector, useAppDispatch } from "../../hooks";
import { Bookmark } from "../../ui/bookmark/Bookmark";
import { actions } from "./favoritesSlice";

type FilmBookmarkProps = {
  id: string | number;
};

export const FilmBookmark: React.FC<FilmBookmarkProps> = ({ id }) => {
  const { state } = useAppSelector(
    (state) => state.favoritesFilm[id] ?? { state: "false" }
  );
  const dispatch = useAppDispatch();
  const onBookmarkClick = () => {
    if (state !== true) {
      dispatch(actions.setFavoriteMark({ id, state: true }));
    } else {
      dispatch(actions.setFavoriteMark({ id, state: false }));
    }
  };

  return (
    <Bookmark
      onBookmarkClick={() => onBookmarkClick()}
      currentState={state}
    ></Bookmark>
  );
};
