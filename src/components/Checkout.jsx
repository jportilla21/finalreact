import React from 'react';

function Checkout({ allProducts, total, onCleanCart, onDeleteProduct }) {
  return (
    <div>
      <div className='row-product'>
        {allProducts.map((product) => (
          <div className='cart-product' key={product.id}>
            <div className='info-cart-product'>
              <span className='cantidad-producto-carrito'>
                {product.quantity}
              </span>
              <p className='titulo-producto-carrito'>
                {product.nameProduct}
              </p>
              <span className='precio-producto-carrito'>
                ${product.price}
              </span>
            </div>
            <button onClick={() => onDeleteProduct(product)}>
              Eliminar del carrito
            </button>
          </div>
        ))}
      </div>

      <div className='cart-total'>
        <h3>Total:</h3>
        <span className='total-pagar'>${total}</span>
      </div>

      <button className='btn-clear-all' onClick={onCleanCart}>
        Vaciar Carrito
      </button>
    </div>
  );
}

export default Checkout;
