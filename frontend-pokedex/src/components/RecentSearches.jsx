function RecentSearches() {
  return (
    <div
      style={{
        width: "220px",
        background: "rgba(255,255,255,0.15)",
        padding: "18px",
        borderRadius: "12px",
        height: "fit-content",
      }}
    >
      <h3 style={{ fontSize: "14px", marginBottom: "12px" }}>
        Recent Searches
      </h3>

      <div style={{ fontSize: "13px", opacity: "0.9" }}>
        <p>• Charmander</p>
        <p style={{ marginTop: "10px" }}>• Charizard</p>
      </div>
    </div>
  );
}

export default RecentSearches;