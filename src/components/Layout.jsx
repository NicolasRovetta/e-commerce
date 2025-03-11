import "./Layout.css";
import LogoW from "../assets/logoEcommerce.png";
import CartWidget from "./CartWidget";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from 'react';
import logoWp from "../assets/logoWp.png";
import './themeContext.css';
import { FaSun, FaMoon } from "react-icons/fa";
import AuthForm from "./AuthForm";

function Layout({ toggleTheme, theme, isAuthenticated, handleLogin }) {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <button className="buttonTheme" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <FaMoon aria-label="Switch to dark mode" /> : <FaSun aria-label="Switch to light mode" />}
      </button>
      {!isAuthenticated && (
        <>
          <div className="blur-background"></div>
          <AuthForm onLogin={handleLogin} />
        </>
      )}
      <nav className={`layout app ${theme}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={menuActive ? 'active' : ''}>
          <li>
            <div className="logo">                           
                <img src={LogoW} alt="Logo" className="white-logo" />              
            </div>
          </li>
          <li>
          <pixel-canvas></pixel-canvas>
            <Link to="/" aria-label="Home">Inicio</Link>
          </li>
          <li>
            <Link to="productos" aria-label="Products">Productos</Link> 
          </li>
          <li>
            <Link to="nosotros" aria-label="About us">Nosotros</Link> 
          </li>          
          <li>
            <Link to="cart" aria-label="Cart"> 
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <a href="https://wa.me/2323613016" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
        <img src={logoWp} alt="WhatsApp" className="wp-logo" />
      </a>
    </>
  );
}

export default Layout;