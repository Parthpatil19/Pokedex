const StatBar = ({ label, value }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ fontSize: "13px", textTransform: "capitalize" }}>
        {label} <strong>{value}</strong>
      </div>

      <div style={{
        background: "#e5e7eb",
        height: "8px",
        borderRadius: "6px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${(value / 150) * 100}%`,
          height: "100%",
          background: "#ff6b6b"
        }} />
      </div>
    </div>
  );
};

export default StatBar;