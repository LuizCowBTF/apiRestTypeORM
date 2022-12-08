import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from "./database";

createConnection();

// CONFIGURAÇÃO DA APLICAÇÃO
const server = express();

// CONFIGURAÇÃO DE ROTAS
server.use(express.json());
server.use(router);


// CONFIGURAÇÃO E INICIALIZAÇÃO DO SERVIDOR
server.listen(5000, () => {
   console.log('SERVER on port 5000');
});
