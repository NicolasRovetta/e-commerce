import React, { useContext } from 'react';
import './Footer.css';
import ThemeContext from './themeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer app ${theme}`}>
      <p>© DNR 2025 E-Commerce. Todos los derechos reservados</p>
      <div className="payment-logos">
        <img src="https://getlogovector.com/wp-content/uploads/2023/12/mercado-pago-logo-vector-2023.png" alt="Mercado Pago" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
        <img src="https://www.cabal.coop/sites/www.cabal.coop/files/cabal_credito.png" alt="Cabal" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/512px-BBVA_2019.svg.png" alt="BBVA" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Santander_Argentina_Logo.png" alt="Santander Río" />
      </div>
    </footer>
  );
}

export default Footer;
