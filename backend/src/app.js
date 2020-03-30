const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app;

/** 
 * Metodos HTTP:
 * 
 * GET: Buscar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parametros
 * 
 * Query: Parametros nomeados enviados na rota apos "?" (filtros, paginacao)
 * Route: Parametros utilizados para identificar recursos /1
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */


