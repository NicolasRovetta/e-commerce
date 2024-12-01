import './CartWidget.css'
import cart from '../assets/cartWidget.png'
import { useState } from 'react'

function CartWidget() {
  return (
    <>
    <img src={cart} alt="logoCart" className='logoCart'/>
    <div>carrito</div>
    </>
  )
}

export default CartWidget