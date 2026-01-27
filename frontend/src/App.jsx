
import { useEffect, useState } from "react";
import {Header} from "../componentes/Header";
import { getLines } from "../services/linesService";
import { LinesList } from "../pages/LinesList";

export default function App() {
  const [linhas, setLinhas] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await getLines();
        console.log("DADOS RECEBIDOS:", dados);
        setLinhas(dados);
      } catch (e) {
        console.error(e);
      }
    }

    carregar();
  }, []);

  return (
    <div>
      <Header />
      <LinesList linhas={linhas} />
    </div>
  );
}
