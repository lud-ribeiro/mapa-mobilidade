const pool = require("../database/db");

async function buscarLinhas() {
  const result = await pool.query("SELECT * FROM linhas");
  return result.rows;
}

module.exports = { buscarLinhas };
