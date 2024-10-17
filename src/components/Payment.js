import React, { useState, useEffect } from 'react';

function Payment({ cart, confirmOrder }) {
  const [qrCode, setQrCode] = useState('QR_GENERATED_CODE');
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQrCode(`QR_${Date.now()}`);  // Simulate regenerating QR code
    }, 60000); // Regenerate every 1 minute
    return () => clearInterval(interval);
  }, []);

  const handleConfirm = () => {
    const orderNumber = Math.floor(Math.random() * 10000);
    const estimatedTime = Math.floor(Math.random() * 20) + 10;
    confirmOrder(orderNumber, estimatedTime);
  };

  return (
    <div className="payment">
      <h2>Total a pagar: ${total}</h2>
      <h3>Escanea el código QR para pagar:</h3>
      <div className="qr-code">{qrCode}</div>
      <button onClick={handleConfirm}>Confirmar Pago</button>
    </div>
  );
}

export default Payment;
