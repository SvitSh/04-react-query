import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchSearchMovies } from "../../api/movies";
import ReactPaginate from "react-paginate";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { MovieResponse } from "../../types/types";

function App() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useQuery<MovieResponse>({
    queryKey: ["movies", page, searchQuery],
    queryFn: () =>
      searchQuery.trim()
        ? fetchSearchMovies(searchQuery, page)
        : fetchMovies(page),
    keepPreviousData: true,
  });

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className={styles.movieList}>
            {data?.results.map((movie: Movie) => (
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

          {data && data.total_pages > 1 && (
            <ReactPaginate
              pageCount={Math.min(data.total_pages, 500)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination}
              activeClassName={styles.active}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
