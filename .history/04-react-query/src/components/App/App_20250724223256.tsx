import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

import { fetchMovies } from "../../api/movies";
import type { Movie, MovieResponse } from "../../types/movie";

import SearchBar from "./SearchBar";
import styles from "./App.module.css";

export default function App() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError } = useQuery<MovieResponse, Error>({
    queryKey: ["movies", page, searchQuery],
    queryFn: () => fetchMovies(page, searchQuery),
    keepPreviousData: true,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1); // сброс на первую страницу
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading movies</div>;

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />

      <h1 className={styles.title}>Popular Movies</h1>

      <ul className={styles.movieList}>
        {data.results.map((movie: Movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className={styles.poster}
            />
            <p className={styles.titleText}>{movie.title}</p>
          </li>
        ))}
      </ul>

      {data.total_pages > 1 && (
        <ReactPaginate
          pageCount={Math.min(data.total_pages, 500)} // ограничение TMDB
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
    </div>
  );
}
