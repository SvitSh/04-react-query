export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  // можно добавить другие поля
}

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}
