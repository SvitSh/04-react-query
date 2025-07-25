import axios from "axios";
import { MovieResponse } from "../types";

const API_KEY = "your_api_key_here"; // замени на свой ключ

export const fetchMovies = async (page: number): Promise<MovieResponse> => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: { api_key: API_KEY, page },
    }
  );
  return response.data;
};

export const fetchSearchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { api_key: API_KEY, query, page },
    }
  );
  return response.data;
};
