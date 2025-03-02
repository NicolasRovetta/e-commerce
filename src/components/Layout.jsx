import "./Layout.css";
import LogoW from "../assets/logoEcommerce.png";
import CartWidget from "./CartWidget";
import { Link, Outlet } from "react-router-dom";
import React from 'react';
import logoWp from "../assets/logoWp.png";
import './themeContext.css';
import { FaSun, FaMoon } from "react-icons/fa";
import AuthForm from "./AuthForm";

function Layout({ toggleTheme, theme, isAuthenticated, handleLogin }) {

  return (
    <>
      <button className="buttonTheme" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      {!isAuthenticated && (
        <>
          <div className="blur-background"></div>
          <AuthForm onLogin={handleLogin} />
        </>
      )}
      <nav className={`app layout ${theme}`}>
        <ul>
          <li>
            <div className="logo">                           
                <img src={LogoW} alt="Logo" className="white-logo" />              
            </div>
          </li>
          <li>
          <pixel-canvas></pixel-canvas>
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