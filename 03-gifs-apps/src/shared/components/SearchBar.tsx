import { useEffect, useState } from "react";

interface Props {
  placeHolderInput?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeHolderInput = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Don't call onQuery for empty queries
    if (query.trim() === "") return;

    // Debounce custom
    const timeoutId = setTimeout(() => {
      onQuery(query);
      setQuery("");
    }, 700);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    if (query.trim() === "") return;
    onQuery(query);
    setQuery("");
  };

  const handleValidateKeyPressed = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeHolderInput}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleValidateKeyPressed}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
