
import { Router } from "express"
import linhasService from "../services/linhasService.js"

const router = Router()


router.get("/linhas", async (req, res) => {
  try {
    const linhas = await linhasService.buscarLinhas()
   res.json(linhas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ erro: "Erro ao buscar linhas" })
  }
})
 
router.get('/teste', (req, res) => {
    res.json({ 
        status: "Sucesso!", 
        mensagem: "O backend está funcionando e pronto para receber dados." 
    });
});

export default router;




