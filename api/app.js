require("dotenv").config();

const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");
const db = require("./config/db");



// Inicializacion del server
const app = express();

app.use(cors());

const { Router } = require("express");
const router = Router();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const program = require("./routes/program.js");
app.use("/", program);

// Importación de rutas
const authRoutes = require("./routes/auth");


// Definición de rutas
app.use(authRoutes);



// Activación de la app en modo escucha
app.listen(process.env.APP_PORT, function () {
  console.log(`Escuchando el puerto ${process.env.APP_PORT}!`);
});
