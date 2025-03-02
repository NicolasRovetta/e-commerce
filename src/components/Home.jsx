import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'
import './Home.css'

function Home() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`home app ${theme}`}>
      <div className="contentContainer">
        <h2>iStore</h2>
        <p className="text">
          "Bienvenido a iStore, tu destino ideal para sumergirte en el ecosistema
          Apple. Descubre una amplia selección de iPhones, Macs y accesorios
          originales, diseñados para potenciar tu creatividad, productividad y
          conectividad. Explora nuestro catálogo y encuentra la tecnología que se
          adapta a tu estilo de vida."
        </p>
      </div>
    </div>
  );
}

export default Home;
