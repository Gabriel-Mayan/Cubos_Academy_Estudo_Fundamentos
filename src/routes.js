const { Router } = require('express');

const { calcularIMC } = require('./controllers/index');

const routes = Router();

routes.post('/imc', calcularIMC);

module.exports = routes;
