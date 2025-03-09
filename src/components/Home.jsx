import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'
import './Home.css'

function Home() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`home app ${theme}`}>
      <div className="contentContainerHome">
        <h2>iStore</h2>
        <p className="textHome">
        <strong>Bienvenido a iStore, el destino definitivo para los amantes de Apple.</strong>
  <br />
  <br />
  Sumérgete en un ecosistema donde la innovación y la tecnología se fusionan para ofrecerte la mejor experiencia.  
  Descubre una selección exclusiva de <strong>iPhones, Macs, iPads, Apple Watches y accesorios originales</strong>,  
  diseñados para elevar tu creatividad, maximizar tu productividad y mantenerte siempre conectado.  
  <br />
  <br />
  🌟 <strong>Experiencia inmersiva:</strong> Prueba nuestros dispositivos y descubre todo su potencial en acción.  
  <br />
  🎯 <strong>Asesoramiento experto:</strong> Nuestro equipo de especialistas te guiará en cada elección.  
  <br />
  ✅ <strong>Productos 100% originales:</strong> Garantía oficial y calidad certificada en cada compra.  
  <br />
  🔧 <strong>Soporte postventa premium:</strong> Te acompañamos en cada paso para que saques el máximo provecho.  
  <br />
  🤝 <strong>Comunidad Apple:</strong> Únete a eventos exclusivos y talleres donde la innovación cobra vida.  
  <br />
  <br />
  Explora nuestro catálogo y encuentra la tecnología que se adapta a tu estilo de vida.  
  <br />
  <strong>Vive la experiencia Apple con iStore. 🚀</strong>
        </p>
      </div>
    </div>
  );
}

export default Home;
