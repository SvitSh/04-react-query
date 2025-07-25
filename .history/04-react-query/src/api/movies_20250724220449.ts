import axios from "axios";
import { MovieResponse } from "../types/movie";

const API_KEY = "8a4fa793bbba52c4154e9045e8596138";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (page = 1): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response.data;
};
