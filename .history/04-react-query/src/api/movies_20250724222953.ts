import axios from "axios";
import type { MovieResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "8a4fa793bbba52c4154e9045e8596138"; // ← твой ключ

// Получить популярные фильмы
export const fetchMovies = async (page: number): Promise<MovieResponse> => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return response.data;
};

// 🔍 Поиск фильмов по ключевому слову
export const searchMovies = async (
  query: string,
  page = 1
): Promise<MovieResponse> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });

  return response.data;
};

const API_KEY = "8a4fa793bbba52c4154e9045e8596138";
