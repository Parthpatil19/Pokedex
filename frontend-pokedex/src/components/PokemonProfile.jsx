import BaseStats from "./BaseStats";
import EvolutionChain from "./EvolutionChain";

function PokemonProfile() {
  return (
    <div
      style={{
        background: "#fff",
        color: "#000",
        borderRadius: "16px",
        padding: "25px",
        width: "720px",
      }}
    >
      {/* TOP SECTION */}
      <div style={{ display: "flex", gap: "25px" }}>
        {/* IMAGE */}
        <div
          style={{
            background: "#f3f1ff",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            alt="charmander"
            width="140"
          />
        </div>

        {/* DETAILS */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "#ff7a00" }}>Charmander</h2>
          <p style={{ fontSize: "13px", color: "#666" }}>#0004</p>
          <p style={{ fontSize: "13px", marginTop: "8px" }}>
            Lizard Pokémon
          </p>

          <button
            style={{
              marginTop: "12px",
              padding: "6px 14px",
              background: "#ff7a00",
              border: "none",
              borderRadius: "20px",
              color: "#fff",
              fontSize: "12px",
            }}
          >
            FIRE
          </button>
        </div>

        {/* DESCRIPTION */}
        <div style={{ width: "280px" }}>
          <h4>Description</h4>
          <p style={{ fontSize: "13px", marginTop: "6px" }}>
            Obviously prefers hot places. When it rains, steam
            is said to spout from the tip of its tail.
          </p>
        </div>
      </div>

      {/* STATS */}
      <BaseStats />

      {/* EVOLUTION */}
      <EvolutionChain />
    </div>
  );
}

export default PokemonProfile;