
import React, { useState, useEffect } from 'react';

function FinancialDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/financial-data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Dashboard Financeiro</h1>
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded bg-white shadow">
            <p className="font-semibold text-blue-500">Valor Total Vendido</p>
            <p className="text-xl font-bold">R$ {data.valorTotalVendido.toFixed(2)}</p>
          </div>
          <div className="p-4 border rounded bg-white shadow">
            <p className="font-semibold text-blue-500">Valor Total Pago</p>
            <p className="text-xl font-bold">R$ {data.valorTotalPago.toFixed(2)}</p>
          </div>
          <div className="p-4 border rounded bg-white shadow">
            <p className="font-semibold text-blue-500">Valor Recebido</p>
            <p className="text-xl font-bold">R$ {data.valorRecebido.toFixed(2)}</p>
          </div>
          <div className="p-4 border rounded bg-white shadow">
            <p className="font-semibold text-blue-500">Valor Bruto</p>
            <p className="text-xl font-bold">R$ {data.valorBruto.toFixed(2)}</p>
          </div>
          <div className="p-4 border rounded bg-white shadow">
            <p className="font-semibold text-blue-500">Valor Líquido</p>
            <p className="text-xl font-bold">R$ {data.valorLiquido.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <p className="text-blue-500">Carregando...</p>
      )}
    </div>
  );
}

export default FinancialDashboard;
