import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList"; // <-- исправлено
import { searchMovies } from "../../api/movies";
import type { MovieResponse } from "../../types/movie";
import ReactPaginate from "react-paginate";
import css from "./App.module.css";

export default function App() {
  const [params] = useSearchParams();
  const query = params.get("query") ?? "";
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery<MovieResponse>({
    queryKey: ["movies", query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.total_pages ?? 0;

  return (
    <div className={css.wrapper}>
      <SearchBar defaultQuery={query} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>{(error as Error).message}</p>}
      {data && <MovieList movies={data.results} />}
      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
    </div>
  );
}
