import React from 'react';
import ProductList from './ProductList';

function ItemListContainer({ allProducts, setAllProducts, total, countProducts, setTotal, setCountProducts }) {
  // Puedes agregar lógica adicional aquí para obtener la lista de productos

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setTotal={setTotal}
        setCountProducts={setCountProducts}
      />
    </div>
  );
}

export default ItemListContainer;
