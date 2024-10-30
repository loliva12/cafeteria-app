import React from 'react';

const products = [
  { id: 1, name: 'Criollo', price: 600, image: 'https://acdn.mitiendanube.com/stores/002/255/209/products/01-criolllos-independencia1-55ddd590e6b5db01c216863144788050-640-0.jpg' },
  { id: 2, name: 'Medialuna', price: 600, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiZt87kwMlaIHKCJ0eay7BnoEfq8XaB51dg&s' },
  { id: 3, name: 'Dona', price: 1200, image: 'https://www.exquisita.com.ar/wp-content/uploads/2018/06/dona.jpg.webp' },
  { id: 4, name: 'Café grande', price: 3200, image: 'https://s1.elespanol.com/2022/05/06/ciencia/nutricion/670443708_224112564_1706x960.jpg' },
  { id: 5, name: 'Café chico', price: 2300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0-wFCRDztLqtScZ0KKQjXlqHfK-Z2zzAcjfgRJ9EgcWUYiIG4o9Vg7UOO5Z9K7A24fs&usqp=CAU' },
  { id: 6, name: 'Capuchino', price: 2800, image: 'https://www.cocinatis.com/archivos/202401/receta-capuchino-1280x720x80xX.jpg' },
  { id: 7, name: 'Combo 1: Café grande + Medialuna', price: 3600, image: 'https://contexto-web.com/wp-content/uploads/2022/06/Foto-para-web-1110-%C3%97-694-px-16.jpg' },
  { id: 8, name: 'Combo 2: Café chico + Dona', price: 3000, image: 'https://i.pinimg.com/736x/32/18/07/321807288e05a8b79c4978dafede5bd4.jpg' },
  { id: 9, name: 'Sandwich de Jamón y Queso', price: 1500, image: 'https://s1.elespanol.com/2020/04/23/ciencia/nutricion/alimentacion-dieta-obesidad_484713861_150852066_1706x960.jpg' },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
