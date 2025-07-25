import axios from "axios";
import type { MovieResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "ТВОЙ_API_КЛЮЧ_ЗДЕСЬ"; // ← замени на свой реальный ключ

export const fetchMovies = async (page: number): Promise<MovieResponse> => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return response.data;
};
