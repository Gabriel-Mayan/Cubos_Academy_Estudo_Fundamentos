const calcularIMC = (req, res) => {
    const { peso, altura } = req.body;

		const imc = peso / Math.pow(altura, 2);

		return res.status(200).json(`Seu IMC é ${imc}`)
}

module.exports = {calcularIMC}