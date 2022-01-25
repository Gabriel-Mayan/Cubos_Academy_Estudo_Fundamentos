const calcularIMC = (req, res) => {
    const { peso, altura } = req.body;

		const imc = peso / Math.pow(altura, 2);

		return res.status(200).json(`Seu IMC é ${imc}`)
}

const conversorFaherenheitParaCelsius = (req, res) => {
	const { celsius, faherenheit } = req.body;

	const celsius = (faherenheit-32)*(5/9);

	return res.status(200).json(`${faherenheit}º faherenheit é equivalente a ${celsius}º celsius`)
}

const aplicarRegraDeTres = (req, res) => {
	const { termo01, termo02, termo03 } = req.body;

	const termo04 = (termo02*termo03)/(termo01);

	return res.status(200).json(`De acordo com a regra de 3, o valor do quarto termo é: ${termo04}`)
}

const calcularJurosCompostos = (req, res) => {
	const { capital, taxaFixa, tempoMeses } = req.body;

	const montante = capital*(Math.pow((1+taxaFixa),tempoMeses))

	return res.status(200).json(`No final de ${tempoMeses} meses, o montante total será de ${montante}`)
}

module.exports = {
	calcularIMC,
	conversorFaherenheitParaCelsius,
	aplicarRegraDeTres,
	calcularJurosCompostos
}