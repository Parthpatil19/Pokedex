import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const recent = JSON.parse(localStorage.getItem("recentSearches")) || [];

  const handleSearch = (name) => {
    if (!name) return;

    const updated = [name, ...recent.filter(r => r !== name)].slice(0, 5);
    localStorage.setItem("recentSearches", JSON.stringify(updated));

    navigate(`/pokemon/${name.toLowerCase()}`);
  };

  return (
    <div className="search-box">
      <input
        placeholder="Search Pokémon..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSearch(query)}
      />

      {recent.length > 0 && (
        <div className="recent-box">
          {recent.map(name => (
            <div
              key={name}
              className="recent-item"
              onClick={() => handleSearch(name)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;