
export default (req, res) => {
  const financialData = {
    valorTotalVendido: 2177.51,
    valorTotalPago: 2520.06,
    valorRecebido: 1750.25,
    valorBruto: 2177.51,
    valorLiquido: 1750.25,
  };

  res.status(200).json(financialData);
};
