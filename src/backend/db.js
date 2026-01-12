import { Pool } from 'pg';
import dotenv from "dotenv";

dotenv.config();
// Configurações de conexão (substitua pelos meus dados)
const pool = new Pool({
  user: process.env.DB_HOST,
  host: 'localhost',
  database: 'seu_banco_de_dados',
  password: 'sua_senha',
  port: 5432,
});

export default pool;
    