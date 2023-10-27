import React from 'react';

function NavBar({ countProducts }) {
  return (
    <nav>
      <div className='container-logo'>
        <h1>Tienda</h1>
      </div>
      <div className='container-cart-icon'>
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
          <span id='contador-productos'>{countProducts}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
