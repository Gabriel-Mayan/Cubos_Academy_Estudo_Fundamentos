const { Router } = require('express');

const { 	
	calcularIMC,
	aplicarRegraDeTres,
	calcularJurosCompostos,
	conversorFaherenheitParaCelsius,
} = require('./controllers/operadoresMatematicos');

const routes = Router();

routes.post('/imc', calcularIMC);

module.exports = routes;
