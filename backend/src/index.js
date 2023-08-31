const express = require("express");
const mongoose = require("mongoose");
const personRoutes = require("./routes/personRoutes");
const cors = require("cors");
require("dotenv").config(); // Carrega as variáveis de ambiente do .env

const app = express();

// Middlewares
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/person", personRoutes);

mongoose
  .connect(process.env.MONGO_URI) // Usando a variável de ambiente
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });
