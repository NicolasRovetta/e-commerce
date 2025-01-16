import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'
import './Cart.css'

function Cart() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`cart app ${theme}`}>futuro carrito</div>
  )
}

export default Cart