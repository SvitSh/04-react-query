import React from "react";
import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => (
  <div className={css.grid}>
    {movies.map((movie) => (
      <div key={movie.id} className={css.card}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className={css.poster}
        />
        <h3>{movie.title}</h3>
      </div>
    ))}
  </div>
);

export default MovieGrid;
