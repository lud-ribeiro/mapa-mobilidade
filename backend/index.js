import express from "express";
import cors from "cors";
import "dotenv";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Importe a conexão do banco e as rotas
import "./connect/db.js"; 
import linhasRoutes from "./routes/linhas.Routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(join(__dirname, 'public')));

// Use as rotas que você criou
app.use("/linhas", linhasRoutes);

app.get("/api", (req, res) => {
  res.json({ mensagem: "🚀 Backend rodando com sucesso!" });
});

// Servir o index.html para todas as outras rotas (SPA)
app.use((req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Aplicação rodando em http://localhost:${PORT}`);
});