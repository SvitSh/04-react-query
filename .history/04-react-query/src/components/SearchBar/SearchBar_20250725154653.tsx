import React, { useState } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query.trim());
  };

  return (
    <form className={css.searchBarWrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        className={css.searchInput}
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
