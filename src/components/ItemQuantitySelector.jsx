import React, { useState } from 'react';

function ItemQuantitySelector({ product, onAddProduct }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    // Validar y actualizar la cantidad seleccionada
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Llama a la función para agregar el producto al carrito con la cantidad seleccionada
    onAddProduct(product, quantity);
  };

  return (
    <div>
      <label htmlFor='quantity'>Cantidad:</label>
      <input
        type='number'
        id='quantity'
        value={quantity}
        onChange={handleQuantityChange}
        min={1}
      />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemQuantitySelector;
