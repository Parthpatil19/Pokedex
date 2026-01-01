import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPokemonDetails } from "../api/pokemonApi";
import "./PokemonDetails.css";

function PokemonDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPokemonDetails(name)
      .then((res) => setPokemon(res.data))
      .catch(() => setPokemon(null))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) return <div className="loading">Loading Pokémon...</div>;
  if (!pokemon) return <div className="loading">Pokémon not found</div>;

  const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-card">
        {/* Header */}
        <div className="detail-header">
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="detail-image"
          />
          <h1 className="detail-name">{capitalizedName}</h1>
          <p className="detail-id">#{String(pokemon.id || "").padStart(4, "0")}</p>

          <div className="detail-types">
            {pokemon.types.map((type) => (
              <span key={type} className={`type-badge-large ${type.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </div>
          
        </div>

        {/* Description */}
        <p className="detail-description">{pokemon.description}</p>

        
        <div className="info-grid-large">
          <div className="info-block">
            <span className="label">Height</span>
            <span className="value">{pokemon.height} m</span>
          </div>
          <div className="info-block">
            <span className="label">Weight</span>
            <span className="value">{pokemon.weight} kg</span>
          </div>
          <div className="info-block">
            <span className="label">Base Experience</span>
            <span className="value">{pokemon.baseExperience}</span>
          </div>
          <div className="info-block">
            <span className="label">Capture Rate</span>
            <span className="value">{pokemon.captureRate}</span>
          </div>
        </div>

        {/* Base Stats */}
        <h2 className="section-title-large">Base Stats</h2>
        <div className="stats-large">
          {pokemon.stats.map((stat, index) => (
            <div key={index} className="stat-row-large">
              <span className="stat-name-large">{stat.statName}</span>
              <div className="stat-bar-container">
                <div
                  className="stat-bar-fill-large"
                  style={{ width: `${(stat.statValue / 255) * 100}%` }}
                />
              </div>
              <span className="stat-value-large">{stat.statValue}</span>
            </div>
          ))}
        </div>

        {/* Evolution Chain */}
        {pokemon.evolutions.length > 0 && (
          <>
            <h2 className="section-title-large">Evolution Chain</h2>
            <div className="evolution-horizontal">
              {pokemon.evolutions.map((evo, index) => (
                <div key={evo.name} className="evo-item">
                  {index > 0 && <span className="evo-arrow">→</span>}
                  <div
                    className="evo-card"
                    onClick={() => navigate(`/pokemon/${evo.name}`)}
                  >
                    <img src={evo.imageUrl} alt={evo.name} className="evo-img" />
                    <p>{evo.name.charAt(0).toUpperCase() + evo.name.slice(1)}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonDetails;