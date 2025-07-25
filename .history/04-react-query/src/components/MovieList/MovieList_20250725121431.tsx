import React from "react";
import css from "./MovieList.module.css";
import { Movie } from "../../types/movie";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className={css.poster}
          />
          <h3>{movie.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
