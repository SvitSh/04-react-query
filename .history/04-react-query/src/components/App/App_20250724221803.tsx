import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { fetchMovies, fetchSearchMovies } from "../../api/movies";
import { Movie, MovieResponse } from "../../types/movie";

import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError } = useQuery<MovieResponse, Error>({
    queryKey: ["movies", searchQuery, page],
    queryFn: () =>
      searchQuery ? fetchSearchMovies(searchQuery, page) : fetchMovies(page),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1); // При поиске всегда возвращаемся на первую страницу
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;
  if (!data) return null;
