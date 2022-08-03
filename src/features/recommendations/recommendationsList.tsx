import { CardList } from "../../ui/card-list/CardList";
import { Carousel } from "../../ui/carousel/Carousel";
import { IMovie } from "../all-films/types";
import { IGenre } from "../genres/types";

type RecommendationsListProps = {
  recommendations: IMovie[];
  onClick?: (id: string | number) => void;
  genres: IGenre[];
};
export const RecommendationsList: React.FC<RecommendationsListProps> = ({
  recommendations,
  genres,
  onClick,
}) => {
  const items = recommendations || [];

  return (
    <>
      <Carousel
        title="Recommendations"
        items={recommendations ?? []}
        genres={genres}
      />
    </>
  );
};
