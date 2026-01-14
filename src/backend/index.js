const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Registrar rotas
try {
  require("./routes/linhas.Routes")(app);
} catch (err) {
  console.warn("Aviso: não foi possível registrar todas as rotas:", err.message);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
