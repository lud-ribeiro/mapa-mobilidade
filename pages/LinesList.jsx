import { useEffect, useState } from "react";
import { getLines } from "../services/linesService";
import LineItem from "../componentes/LineItem";
import LineForm from "../componentes/LineForm";
import BusMap from "../componentes/BusMap";

export default function LinesList() {
  const [lines, setLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);

  useEffect(() => {
    getLines().then(setLines);
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ width: "250px" }}>
        <LineForm onAdd={(line) => setLines([...lines, line])} />
        <ul>
          {lines.map((line) => (
            <LineItem
              key={line.id}
              line={line}
              onClick={() => setSelectedLine(line)}
            />
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        {selectedLine && (
          <>
            <h3>{selectedLine.name}</h3>
            <ul>
              {selectedLine.stops.map((stop, i) => (
                <li key={i}>{stop.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div style={{ flex: 2 }}>
        <BusMap selectedLine={selectedLine} />
      </div>
    </div>
  );
} 
