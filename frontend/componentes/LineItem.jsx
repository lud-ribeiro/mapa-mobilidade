export default function LineItem({ line, onClickLine, onSelectStop }) {
  if (!line) return null;

  return (
    <div style={{ marginBottom: "10px" }}>
      
      {/* Clique da linha */}
      <div
        style={{ fontWeight: "bold", cursor: "pointer" }}
        onClick={() => onClickLine && onClickLine(line)}
      >
        🚌 {line.name}
      </div>

      {/* Paradas */}
      <ul style={{ listStyle: "none", paddingLeft: "10px" }}>
        {line.stops?.map((stop, i) => {
          const lat = Number(stop.lat ?? stop.latitude);
          const lng = Number(stop.lng ?? stop.longitude);

          // Só permite clique se tiver coordenadas válidas
          const podeClicar = !isNaN(lat) && !isNaN(lng);

          return (
            <li
              key={i}
              style={{
                cursor: podeClicar ? "pointer" : "not-allowed",
                fontSize: "14px",
                opacity: podeClicar ? 1 : 0.5
              }}
              onClick={() => {
                if (podeClicar && onSelectStop) {
                  onSelectStop({
                    ...stop,
                    lat,
                    lng
                  });
                }
              }}
            >
              📍 {stop.name || stop.nome || "Parada"}
            </li>
          );
        })}
      </ul>

    </div>
  );
}



