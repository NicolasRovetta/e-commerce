import './CartWidget.css'
import cart from '../assets/cartWidget.png'

function CartWidget() {
  return (
    <img src={cart} alt="logoCart" className='logoCart'/>
  )
}

export default CartWidget