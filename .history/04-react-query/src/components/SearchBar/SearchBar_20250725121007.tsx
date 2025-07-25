import css from "./SearchBar.module.css";

interface SearchBarProps {
  defaultQuery: string;
}

export default function SearchBar({ defaultQuery }: SearchBarProps) {
  return (
    <form action="/" className={css.form}>
      <input
        name="query"
        type="text"
        defaultValue={defaultQuery}
        placeholder="Search movies..."
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
