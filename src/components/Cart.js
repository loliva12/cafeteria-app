import React from 'react';

function Cart({ cart, proceedToPayment }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Tu Pedido</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd' }}>
            <span>{product.name} - ${product.price}</span>
          </div>
        ))
      )}
      <h3 className="total">Total: ${total}</h3>
      <button onClick={proceedToPayment}>Pagar</button>
    </div>
  );
}

export default Cart;
