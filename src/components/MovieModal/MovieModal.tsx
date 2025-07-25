import React from "react";
import type { Movie } from "../../types/movie";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const tmdbLink = `https://www.themoviedb.org/movie/${movie.id}`;

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2 className={css.title}>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.poster}
        />
        <p className={css.overview}>{movie.overview || "No description."}</p>
        <p>
          <strong>⭐ Rating:</strong> {movie.vote_average}/10
        </p>
        <a
          href={tmdbLink}
          target="_blank"
          rel="noopener noreferrer"
          className={css.tmdbLink}
        >
          View on TMDB →
        </a>
      </div>
    </div>
  );
};

export default MovieModal;
