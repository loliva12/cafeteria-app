import React from 'react';

function Payment({ cart, confirmOrder }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const handleConfirm = (paymentMethod) => {
    const orderNumber = Math.floor(Math.random() * 10000);
    const estimatedTime = Math.floor(Math.random() * 20) + 10;
    confirmOrder(orderNumber, estimatedTime);
    alert(`Pago confirmado con ${paymentMethod}`);
  };

  return (
    <div className="payment">
      <h2>Total a pagar: ${total}</h2>
      <h3>Elige una forma de pago:</h3>
      <button onClick={() => handleConfirm('Tarjeta de Crédito')}>Pagar con Tarjeta de Crédito</button>
      <button onClick={() => handleConfirm('Mercado Pago')}>Pagar con Mercado Pago</button>
    </div>
  );
}

export default Payment;
