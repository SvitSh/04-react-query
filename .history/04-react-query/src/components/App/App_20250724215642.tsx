import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { fetchMovies } from "../../api/movies";
import type { Movie, MovieResponse } from "../../types/movie";

import styles from "./App.module.css";

export default function App() {
  const [page, setPage] = useState(1);

  queryKey: ["movies", page] as const,


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {data?.results.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      {data?.total_pages > 1 && (
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
