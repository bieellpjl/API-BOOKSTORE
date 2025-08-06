import express, { response } from "express";
import cors from "cors";

const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
})
);
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({ mensagem: "Olá, mundo!"})
});

export default app;