import { Link } from "react-router-dom";

function Item({  categoria, modelo, precio, descripcion, id }) {
  return (
    <Link to={`/productos/${id}`} className="card">
      <div>{categoria}</div>
      <div><h3>{modelo}</h3></div>
      {/*<img src={producto.imagen} alt={producto.modelo} />*/}      
      <div><strong>Precio: ${precio}</strong></div>
      <button >Agregar al carrito</button>
    </Link>
  );
}

export default Item;
