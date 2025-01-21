import { useContext, useState, useEffect } from 'react';
import ThemeContext from './themeContext';
import './themeContext.css';
import './Cart.css';
import { addProductCart } from './DetalleProducto';

function Cart() {
  const { theme } = useContext(ThemeContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemCounts = addProductCart.reduce((acc, item) => {
      acc[item.id] = acc[item.id] ? { ...acc[item.id], count: acc[item.id].count + 1 } : { ...item, count: 1 };
      return acc;
    }, {});
    setCartItems(Object.values(itemCounts));
  }, []);

  return (
    <div className={`cart app ${theme}`}>
      <h2>Carrito</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="card">
            <div>{item.categoria}</div>
            <div>
              <h3>{item.modelo}</h3>
            </div>
            {/*<img src={item.imagen} alt={item.modelo} />*/}
            <div>
              <strong>Precio: ${item.precio}</strong>
            </div>
            <div>
              <strong>Cantidad: {item.count}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;