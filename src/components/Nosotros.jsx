import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'
import './Nosotros.css'

function Nosotros() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`nosotros app ${theme}`}>
    <div className="contentContainer">
      <h2>Nosotros: Más que una tienda, una experiencia Apple</h2><br />
      <p className="textNosotros">
      <strong>Bienvenido a iStore, tu ecosistema Apple</strong>  
  <br />
  ✅ <strong>Asesoramiento experto:</strong> Encuentra el dispositivo ideal con la guía de nuestros expertos.
  <br />
  ✅ <strong>Productos originales:</strong> Garantía oficial en iPhones, Macs, iPads, Apple Watches y más.
  <br />
  ✅ <strong>Experiencia inmersiva:</strong> Prueba la tecnología y descubre su potencial.
  <br />
  ✅ <strong>Soporte postventa integral:</strong> Maximiza el rendimiento de tus dispositivos.
  <br />
  ✅ <strong>Comunidad Apple:</strong> Talleres y eventos para conectar con otros entusiastas.
  <br />
  <br />
  🔹 <strong>Misión:</strong> Ser el referente en productos Apple con un servicio excepcional.
  <br />
  🔹 <strong>Visión:</strong> Construir una comunidad Apple innovadora y conectada.
  <br />
  🔹 <strong>Valores:</strong> Pasión, excelencia, innovación y transparencia.
  <br />
  <br />
  <strong>Descubre el futuro con iStore. 🚀</strong>
      </p>
    </div>
    </div>
  );
}

export default Nosotros;
