import React, { useState } from 'react';

function CartWidget({ allProducts, total, countProducts, setTotal, setCountProducts, setAllProducts }) {
  const [active, setActive] = useState(false);

  const onCleanCart = () => {
    // Lógica para limpiar el carrito (borrar todos los productos).
    // Actualiza 'allProducts', 'total', y 'countProducts' según sea necesario.
  };

  return (
    <div className='container-icon'>
      <div
        className='container-cart-icon'
        onClick={() => setActive(!active)}
      >
        {/* Ícono del carrito */}
        {/* Aquí puedes personalizar el ícono del carrito según tus necesidades */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='icon-cart'
        >
          {/* Contenido del ícono del carrito */}
        </svg>
        <div className='count-products'>
          {/* Contador de productos en el carrito */}
          <span id='contador-productos'>{countProducts}</span>
        </div>
      </div>

      <div
        className={`container-cart-products ${active ? '' : 'hidden-cart'}`}
      >
        {allProducts.length ? (
          <>
            <div className='row-product'>
              {/* Listado de productos en el carrito */}
              {allProducts.map((product) => (
                <div className='cart-product' key={product.id}>
                  <div className='info-cart-product'>
                    {/* Información del producto en el carrito */}
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
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='icon-close'
                    onClick={() => onDeleteProduct(product)}
                  >
                    {/* Ícono para eliminar productos del carrito */}
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className='cart-total'>
              {/* Resumen del carrito */}
              <h3>Total:</h3>
              <span className='total-pagar'>${total}</span>
            </div>

            <button className='btn-clear-all' onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <p className='cart-empty'>El carrito está vacío</p>
        )}
      </div>
    </div>
  );
}

export default CartWidget;
