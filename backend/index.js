import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Mantenha apenas UM import de rotas (o correto conforme sua pasta)
import linhasRoutes from './routes/linhas.Routes.js';

// Mova a inicialização do app para cá (antes de usá-lo)
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Importe a conexão do banco
import "./connect/db.js";

app.use(cors());
app.use(express.json());

// Agora o app.use vai funcionar porque o 'app' já foi definido acima
app.use('/api', linhasRoutes);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, 'public')));

// Não esqueça de garantir que o servidor tenha um listen no final
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

