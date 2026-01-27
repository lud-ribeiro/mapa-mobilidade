import pool from "../connect/db.js"

const buscarLinhas = async () => {
  const sql = `
    SELECT 
      l.cd_linha AS id,
      l.tx_linha AS nome
    FROM dados_mobilidade.tab_linha l
    ORDER BY l.cd_linha
  `

  const result = await pool.query(sql)
  return result.rows
}

export default { buscarLinhas }

