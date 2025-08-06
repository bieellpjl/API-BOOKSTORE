import express, { response } from "express";
import cors from "cors";
import { conn } from "./config/sequelize.js";

// tabelas
import autorModel from "./models/autorModel.js";

//ROTAS
import autorRoutes from "../src/routes/autorRoutes.js"

const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
})
);
app.use(express.json())

conn
    .sync()
    .then(() => {
        console.log("Banco de dados conectado 👌")
    })
app.use("/api/autores", autorRoutes);
app.get("/", (req, res) => {
    res.status(200).json({ mensagem: "Olá, mundo!"})
});

export default app;