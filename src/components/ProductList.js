import React from 'react';

const products = [
  { id: 1, name: 'Criollo', price: 600 },
  { id: 2, name: 'Medialuna', price: 600 },
  { id: 3, name: 'Dona', price: 1200 },
  { id: 4, name: 'Café grande', price: 3200 },
  { id: 5, name: 'Café chico', price: 2300 },
  { id: 6, name: 'Café mediano', price: 2800 },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2>Menú Cafetería</h2>
      {products.map((product) => (
        <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => addToCart(product)}>Agregar</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
