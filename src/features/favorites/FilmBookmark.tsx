import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch, useAuth } from "../../hooks";
import { AppPages } from "../../types";
import { Bookmark } from "../../ui/bookmark/Bookmark";
import { actions } from "./favoritesSlice";

type FilmBookmarkProps = {
  id: string | number;
};

export const FilmBookmark: React.FC<FilmBookmarkProps> = ({ id }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const { state } = useAppSelector(
    (state) => state.favoritesFilm[id] ?? { state: "false" }
  );
  const dispatch = useAppDispatch();
  const onBookmarkClick = () => {

    if(!isAuth){
      navigate(AppPages.LOGIN)
    } else {
      if (state !== true) {
        dispatch(actions.setFavoriteMark({ id, state: true }));
      } else {
        dispatch(actions.setFavoriteMark({ id, state: false }));
      }
    };
    }

  return (
    <Bookmark
      onBookmarkClick={() => onBookmarkClick()}
      currentState={state}
    ></Bookmark>
  );
};
