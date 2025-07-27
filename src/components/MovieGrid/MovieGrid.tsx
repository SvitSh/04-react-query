// src/components/MovieGrid/MovieGrid.tsx

import type { Movie } from "../../types/movie";
import styles from "./MovieGrid.module.css";

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li
          key={movie.id}
          className={styles.card}
          onClick={() => onSelect(movie)}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : "/placeholder.jpg"
            }
            alt={movie.title}
            className={styles.poster}
          />
          <p className={styles.title}>{movie.title}</p>
        </li>
      ))}
    </ul>
  );
}
