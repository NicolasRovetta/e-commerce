import "./Layout.css";
import LogoW from "../assets/logoEcommerce.png";
import CartWidget from "./CartWidget";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <div className="logo">
              <Link to="/"> 
                <img src={LogoW} alt="Logo" /> 
              </Link>
            </div>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="productos">Productos</Link> 
          </li>
          <li>
            <Link to="smartphones">Smartphones</Link> 
          </li>
          <li>
            <Link to="notebooks">Notebooks</Link> 
          </li>
          <li>
            <Link to="accesorios">Accesorios</Link> 
          </li>
          <li>
            <Link to="cart"> 
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;