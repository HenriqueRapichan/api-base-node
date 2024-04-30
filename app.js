import express from "express";
import router from "./src/routes.js";
import dotenv from 'dotenv';
import cors from "cors";
import manipuladorDeErros from "./src/middleware/manipuladorDeErros.js";

dotenv.config();

const serve = express();
serve.use(express.json({ limit: "10mb" }));
serve.use(cors());
serve.use(manipuladorDeErros);
serve.use(router);
const PORT = process.env.PORT_APP || 3000;

serve.listen(PORT, () => {
  console.log(`Conectado ${PORT}`);
});