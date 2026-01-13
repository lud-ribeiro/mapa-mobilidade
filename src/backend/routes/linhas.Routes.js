
const linhasController = require("../controllers/linhasController");

module.exports = (app) => {
  app.get("/linhas", linhasController.listarLinhas);
};


