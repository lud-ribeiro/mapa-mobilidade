const linhasService = require("../services/linhasService");

async function listarLinhas(req, res) {
  try {
    const linhas = await linhasService.buscarLinhas();
    res.json(linhas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar linhas" });
  }
}

module.exports = { listarLinhas };
