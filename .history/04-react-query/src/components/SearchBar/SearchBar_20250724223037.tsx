import { useState } from "react";
import type { FormEvent } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />
      <button type="submit" style={{ padding: "8px 16px", fontSize: "16px" }}>
        Search
      </button>
    </form>
  );
}
