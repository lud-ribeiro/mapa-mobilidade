import dotenv from "./dotenv";
import express from "express";
import cors from "cors"


dotenv.config();


const porta =Number(process.env.PORT);
console.log(porta);

const app = express();

app.use(cors());
app.use(express.json());

app.listen( porta || 3000, () => {
  console.log(`Servidor rodando na ${porta}`);
});
