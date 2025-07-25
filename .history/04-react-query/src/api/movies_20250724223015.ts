import axios from "axios";
import type { MovieResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "8a4fa793bbba52c4154e9045e8596138";
export const fetchMovies = async (
  page: number,
  query?: string
): Promise<MovieResponse> => {
  const endpoint = query ? "/search/movie" : "/movie/popular";
  const response = await axios.get(`${BASE_URL}${endpoint}`, {
    params: {
      api_key: API_KEY,
      page,
      query,
    },
  });

  return response.data;
};
