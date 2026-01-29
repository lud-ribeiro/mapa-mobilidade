
import { useEffect, useState } from "react";
import { Header } from "../componentes/Header";
import { getLines } from "../services/linesService";
import { LinesList } from "../pages/LinesList";
import BusMap from "../componentes/BusMap";

export default function App() {
  const [linhas, setLinhas] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);
  const [selectedStop, setSelectedStop] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await getLines();
        setLinhas(dados);
      } catch (e) {
        console.error(e);
      }
    }
    carregar();
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <div style={{ flex: 1, display: "flex" }}>
        
        <div style={{ width: "350px", overflowY: "auto", borderRight: "1px solid #ddd", padding: "10px" }}>
          <LinesList
            linhas={linhas}
            selecionarLinha={setSelectedLine}
            selecionarParada={setSelectedStop}
          />
        </div>

        <div style={{ flex: 1 }}>
          <BusMap
            selectedLine={selectedLine}
            selectedStop={selectedStop}
          />
        </div>

      </div>
    </div>
  );
}
