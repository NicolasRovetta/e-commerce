import cart from '../assets/cartWidget.png';
import { useState, useEffect } from 'react';
import { addProductCart } from './DetalleProducto';

function CartWidget() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCartCount(addProductCart.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="cartPosition">
        <img src={cart} alt="logoCart" className='logoCart'/>
        <div>Carrito ({cartCount})</div>
      </div>
    </>
  );
}

export default CartWidget;