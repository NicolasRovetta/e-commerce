import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <>
    <img src="./assets/logoEcommerce.png" alt="logo" className="imgLogo"/>
    <div>Inicio</div>
    <div>Smartphones</div>
    <div>Notebooks</div>
    <div>Accesorios</div>
    <div>{CartWidget}</div>
    </>
  )
}

export default NavBar