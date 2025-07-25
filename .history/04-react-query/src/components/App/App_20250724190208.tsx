import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../api/movies";

export default function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", 1],
    queryFn: () => fetchMovies(1),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {data?.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
