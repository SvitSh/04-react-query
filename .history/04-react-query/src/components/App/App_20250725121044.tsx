import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import { searchMovies } from "../../api/movies";
import type { MovieResponse } from "../../types/movie";
import css from "./App.module.css";

// Якщо ти ініціалізуєш QueryClient тут – прибери з main.tsx.
// Я покажу варіант через main.tsx нижче, цей код тільки для прикладу.
const queryClient = new QueryClient();

function AppInner() {
  const [params] = useSearchParams();
  const initialQuery = params.get("query") ?? "";
  const initialPage = Number(params.get("page") ?? 1);

  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);

  const { data, isLoading, isError, error } = useQuery<MovieResponse>({
    queryKey: ["movies", query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.total_pages ?? 0;

  // якщо потрібна синхронізація URL -> стан, можна додати useEffect з setSearchParams

  return (
    <div className={css.wrapper}>
      {/* SearchBar із action="/" – значення беремо із params */}
      <SearchBar defaultQuery={initialQuery} />

      {!query && <p>Введіть пошуковий запит.</p>}

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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppInner />
    </QueryClientProvider>
  );
}
