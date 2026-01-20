import linhasService from '../services/linhasService.js';

const listarLinhas = async (req, res) => {
    try {
        // Chama a função do service que busca no banco
        const linhas = await linhasService.buscarTodasAsLinhas();
        
        // Retorna os dados encontrados para o navegador/frontend
        res.status(200).json(linhas);
    } catch (error) {
        console.error("Erro no Controller:", error);
        res.status(500).json({ mensagem: "Erro ao buscar linhas" });
    }
};

export default { listarLinhas };