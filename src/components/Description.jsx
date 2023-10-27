import React from 'react';

function Description({ product }) {
  return (
    <div>
      <h2>{product.nameProduct}</h2>
      <p className='product-description'>{product.description}</p>
      <p className='price'>Precio: ${product.price}</p>
    </div>
  );
}

export default Description;
