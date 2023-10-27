import React from 'react';
import Description from './Description';
import AddItemButton from './AddItemButton';

function ItemDetail({ product, onAddProduct }) {
  return (
    <div>
      <Description product={product} />
      <AddItemButton product={product} onAddProduct={onAddProduct} />
    </div>
  );
}

export default ItemDetail;
