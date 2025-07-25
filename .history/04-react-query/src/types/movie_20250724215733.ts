export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface MovieResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}
