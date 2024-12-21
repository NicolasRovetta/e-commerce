import cart from '../assets/cartWidget.png'
import { useState } from 'react'

function CartWidget() {
  return (
    <>
    <div className="cartPosition">
    <img src={cart} alt="logoCart" className='logoCart'/>
    <div>carrito</div>
    </div>
    </>
  )
}

export default CartWidget