
import express from 'express';
import linhasController from '../controler/linhasController.js'; // Verifique se o caminho e a extensão .js estão corretos

const router = express.Router();

// Defina a rota. Quando você acessar /linhas, ele chamará o controller
router.get("/", linhasController.listarLinhas);

export default router;

