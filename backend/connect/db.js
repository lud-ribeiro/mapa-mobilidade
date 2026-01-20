import { Pool } from 'pg';
import "dotenv/config";

// Configurações de conexão (substitua pelos meus dados)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

console.log(pool.options.database);

export default pool;

    