import styles from "./Card.module.css";

type CardProps = {
  vote_average: number;
  id: number | string;
  image: string;
  title: string;
  type: (string | undefined)[];
  onClick?: (id: string | number) => void;
  Bookmarker?: React.ComponentType<{ id: string | number }>;
};

export const Card: React.FC<CardProps> = ({ image, title, type, vote_average}) => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.votes}>{vote_average.toFixed(1)}</p>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.genresList}>
        {type.map((genre, index) => (
          <li
            className={styles.genreItem}
            children={genre}
            key={`${genre}${index}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
