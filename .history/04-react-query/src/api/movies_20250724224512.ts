import axios from "axios";
import type { MovieResponse } from "../types/movie";

const API_KEY = "your_api_key";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (page: number): Promise<MovieResponse> => {
  const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page },
  });
  return data;
};

export const fetchSearchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query, page },
  });
  return data;
};
