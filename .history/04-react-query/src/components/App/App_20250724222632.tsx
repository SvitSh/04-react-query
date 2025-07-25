import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

import { fetchMovies } from "../../api/movies";
import type { Movie, MovieResponse } from "../../types/movie";

import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";

export default function App() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery<MovieResponse, Error>({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
  });

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Здесь позже можно подключить fetchSearchMovies
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;
  if (!data) return null;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <h1>Popular Movies</h1>
      <ul className={styles.movieList}>
        {data?.results.map((movie: Movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className={styles.poster}
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>

      {data.total_pages > 1 && (
        <ReactPaginate
          pageCount={data.total_pages}
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
