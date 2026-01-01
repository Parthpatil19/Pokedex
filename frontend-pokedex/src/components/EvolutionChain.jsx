export default function EvolutionChain({ evolutions }) {
  return (
    <div className="evolution-row">
      {evolutions.map((evo, i) => (
        <div key={i} className="evo-card">
          <img src={evo.imageUrl} alt={evo.name} />
          <p>{evo.name}</p>
        </div>
      ))}
    </div>
  );
}