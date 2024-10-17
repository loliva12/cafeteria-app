import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Cambia la importación

function Payment({ cart, confirmOrder }) {
  const [qrCodeValue, setQrCodeValue] = useState('QR_GENERATED_CODE');
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQrCodeValue(`QR_${Date.now()}`);  // Simula la regeneración del código QR
    }, 60000); // Regenera cada minuto
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
      <div className="qr-code">
        <QRCodeCanvas value={qrCodeValue} size={128} />  {/* Utiliza QRCodeCanvas */}
      </div>
      <button onClick={handleConfirm}>Confirmar Pago</button>
    </div>
  );
}

export default Payment;
