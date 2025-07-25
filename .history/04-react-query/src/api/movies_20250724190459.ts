import axios from "axios";
import type { MovieResponse } from "../types/movie";

const API_KEY = "<<8a4fa793bbba52c4154e9045e8596138>>";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (page: number): Promise<MovieResponse> => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return response.data;
};
