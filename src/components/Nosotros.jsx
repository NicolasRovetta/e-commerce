import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'

function Nosotros() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`homeNosotros app ${theme}`}>
      <h2>Nosotros: Más que una tienda, una experiencia Apple</h2>
      <p className="text">
          En iStore, te invitamos a sumergirte en el ecosistema Apple. No solo
          vendemos productos; ofrecemos una experiencia que redefine la
          innovación. Desde nuestra fundación, nos dedicamos a ser el destino
          predilecto para los amantes de Apple, ofreciendo iPhones, Macs, iPads,
          Apple Watches y accesorios originales. Nuestra pasión por Apple va más
          allá de la venta. Creemos en el poder transformador de la tecnología
          para potenciar la creatividad, productividad y conectividad. ¿Qué nos
          diferencia? Asesoramiento experto: Expertos en Apple te guiarán en la
          elección del dispositivo perfecto. Productos 100% originales: Solo
          productos Apple con garantía oficial. Experiencia inmersiva:
          Interactúa con los productos y descubre sus posibilidades. Compromiso
          con la comunidad: Talleres y eventos para conectar con otros
          entusiastas. Soporte postventa integral: Asesoramiento y recursos para
          aprovechar al máximo tus dispositivos. Nuestra Misión: Ser el
          referente en la venta de productos Apple, ofreciendo una experiencia
          excepcional. Nuestra Visión: Construir una comunidad Apple sólida y
          vibrante, donde la innovación sea el pilar. Nuestros Valores: Pasión
          por Apple, excelencia en el servicio, compromiso con la calidad,
          innovación constante y transparencia. En iStore, descubre un mundo de
          posibilidades. Explora nuestro catálogo y encuentra la tecnología que
          se adapta a ti. Cambios principales: Se eliminaron frases redundantes
          y explicaciones extensas. Se condensaron las descripciones de los
          diferenciadores. Se simplificaron las declaraciones de misión, visión
          y valores. Se mantuvo el lenguaje conciso y directo.
      </p>
    </div>
  );
}

export default Nosotros;
