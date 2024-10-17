import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';

function App() {
  const [cart, setCart] = useState([]);
  const [isPayment, setIsPayment] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleConfirmOrder = (orderNum, time) => {
    setOrderNumber(orderNum);
    setEstimatedTime(time);
    setOrderConfirmed(true);
  };

  return (
    <div className="container">
      {!isPayment && !orderConfirmed && (
        <>
          <ProductList addToCart={handleAddToCart} />
          <Cart cart={cart} proceedToPayment={() => setIsPayment(true)} />
        </>
      )}
      {isPayment && !orderConfirmed && (
        <Payment cart={cart} confirmOrder={handleConfirmOrder} />
      )}
      {orderConfirmed && (
        <Confirmation orderNumber={orderNumber} estimatedTime={estimatedTime} />
      )}
    </div>
  );
}

export default App;
