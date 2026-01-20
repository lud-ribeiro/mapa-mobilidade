import pool from '../connect/db.js'; // Supondo que seu db.js exporta a conexão

const buscarTodasAsLinhas = async () => {
    // Exemplo para PostgreSQL/MySQL (ajuste a query conforme sua tabela)
    const sql = "SELECT * FROM linhas"; 
    const resultado = await pool.query(sql); 
    return resultado.rows; // ou apenas 'resultado' dependendo do seu banco
};

export default { buscarTodasAsLinhas };