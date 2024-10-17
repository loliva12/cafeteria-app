import React from 'react';

function Cart({ cart, proceedToPayment }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Tu Pedido</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <span>{product.name} - ${product.price}</span>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={proceedToPayment}>Pagar</button>
    </div>
  );
}

export default Cart;
