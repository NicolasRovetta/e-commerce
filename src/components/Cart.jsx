import { useContext, useEffect } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'
import './Cart.css'
import addProductCart from './DetalleProducto'
import { useState } from 'react'

function Cart() {
  const [cart, setCart] = useState(Array.isArray(addProductCart) ? addProductCart : [])
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    setCart(Array.isArray(addProductCart) ? addProductCart : [])
  }, [addProductCart])

  return (
    <div className={`cart app ${theme}`}>
      <h2>Carrito</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart