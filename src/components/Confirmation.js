import React from 'react';

function Confirmation({ orderNumber, estimatedTime }) {
  return (
    <div className="confirmation">
      <h2>¡Pedido Confirmado!</h2>
      <p>Tu número de pedido es: <strong>{orderNumber}</strong></p>
      <p>Tiempo estimado: <strong>{estimatedTime} minutos</strong></p>
    </div>
  );
}

export default Confirmation;
