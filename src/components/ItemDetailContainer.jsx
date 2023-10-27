import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { data } from '../data'; // Importa tus datos de productos desde data.js

function ItemDetailContainer({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Obtiene el ID del producto de los parámetros de la URL
    const productId = match.params.id;

    // Busca el producto en los datos importados (en este caso, el array 'data' de data.js)
    const productDetails = data.find((product) => product.id === productId);

    // Establece los detalles del producto en el estado
    setProduct(productDetails);
  }, [match.params.id]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
