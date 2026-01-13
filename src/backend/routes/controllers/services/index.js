// src/index.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/linhas", (req, res) => {
  res.json([
    { id: 1, nome: "Linha 001" },
    { id: 2, nome: "Linha 002" }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
