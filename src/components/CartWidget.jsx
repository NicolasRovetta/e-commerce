import './CartWidget.css'
import cart from '../assets/cartWidget.png'
import { useState } from 'react'

function CartWidget() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddItem = () => {
    setCartItems(cartItems + 1);
  };

  const handleRemoveItem = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };

  return (
    <>
      <img src={cart} alt="logoCart" className='logoCart' onClick={handleAddItem} />
      <div onClick={handleRemoveItem}>Carrito ({cartItems})</div>
    </>
  );
}

export default CartWidget;