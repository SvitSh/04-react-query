import React, { useState } from "react";
import css from "./MovieList.module.css";
import type { Movie } from "../../types/movie";
import MovieModal from "../MovieModal/MovieModal";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleOpen = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className={css.item}
            onClick={() => handleOpen(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className={css.poster}
            />
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleClose} />
      )}
    </>
  );
};

export default MovieList;
