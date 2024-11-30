import './NavBar.css'
import LogoW from '../assets/logoEcommerce.png'
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <div className='navbar'>
    <div><button><LogoW/></button></div>
    <div><button>Inicio</button></div>
    <div><button>Smartphones</button></div>
    <div><button>Notebooks</button></div>
    <div><button>Accesorios</button></div>
    <div><button><CartWidget/></button></div>
    </div>
  )
}
export default NavBar