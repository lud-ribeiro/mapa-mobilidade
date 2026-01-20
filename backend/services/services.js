import express from "express";
import cors from "cors"

const porta =3000;
console.log(porta);

const app = express();

app.use(cors());
app.use(express.json());

app.listen( porta , () => {
  console.log(`Servidor rodando na ${porta}`);
});
