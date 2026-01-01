import { useEffect, useState, useRef } from "react";
import { fetchRandomCards } from "../api/pokemonApi";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [recent, setRecent] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    fetchRandomCards().then((res) => setPokemons(res.data));
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecent(saved);
  }, []);

  const suggestions = recent
    .filter((r) => r.toLowerCase().includes(search.toLowerCase().trim()))
    .slice(0, 8);

  const saveAndNavigate = (name) => {
    const cleanName = name.toLowerCase().trim();
    const updated = [cleanName, ...recent.filter((r) => r !== cleanName)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
    navigate(`/pokemon/${cleanName}`);
    setSearch("");
    setHighlightedIndex(-1);
  };

  const removeFromRecent = (nameToRemove, e) => {
    e.stopPropagation(); 
    const updated = recent.filter((r) => r !== nameToRemove);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const handleSearch = () => {
    if (!search.trim()) return;
    saveAndNavigate(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
        saveAndNavigate(suggestions[highlightedIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Escape") {
      setHighlightedIndex(-1);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Pokédex Search Engine</h1>
        <p className="subtitle">Discover your favorite Pokémon!</p>

        
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              ref={inputRef}
              className="search-input"
              placeholder="Search Pokémon by name or ID..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setHighlightedIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

         
          {search.trim() && suggestions.length > 0 && (
            <div ref={suggestionsRef} className="suggestions-dropdown">
              {suggestions.map((s, index) => (
                <div
                  key={s}
                  className={`suggestion-item ${
                    index === highlightedIndex ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => saveAndNavigate(s)}
                >
                  <span className="suggestion-name">
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Searches */}
        <section className="section">
          <h3 className="section-title">Recent Searches</h3>
          {recent.length === 0 ? (
            <p className="placeholder-text">No recent searches yet...</p>
          ) : (
            <div className="recent-chips">
              {recent.map((r) => (
                <div key={r} className="chip-wrapper">
                  <button
                    className="chip"
                    onClick={() => saveAndNavigate(r)}
                  >
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                  <button
                    className="remove-chip"
                    onClick={(e) => removeFromRecent(r, e)}
                    aria-label={`Remove ${r} from recent`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        
        <section className="section">
          <h2 className="section-title">Random Pokémon</h2>
          <div className="pokemon-grid">
            {pokemons.map((p) => (
              <div
                key={p.name}
                className="pokemon-card"
                onClick={() => navigate(`/pokemon/${p.name}`)}
              >
                <img src={p.imageUrl} alt={p.name} className="pokemon-image" />
                <p className="pokemon-name">
                  {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;