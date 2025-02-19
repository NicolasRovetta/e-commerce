import React, { useContext } from 'react';
import ThemeContext from './themeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer app ${theme}`}>
      <p>© 2023 E-Commerce. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
