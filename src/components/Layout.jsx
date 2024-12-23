import "./Layout.css";
import LogoW from "../assets/logoEcommerce.png";
import CartWidget from "./CartWidget";
import { Link, Outlet } from "react-router-dom";
import React from 'react';
import logoWp from "../assets/logoWp.png";

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
            <Link to="nosotros">Nosotros</Link> 
          </li>          
          <li>
            <Link to="cart"> 
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <a href="https://wa.me/2323613016" target="_blank" rel="noopener noreferrer">
        <img src={logoWp} alt="WhatsApp" className="wp-logo" />
      </a>
    </>
  );
}

export default Layout;