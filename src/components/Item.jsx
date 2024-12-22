import { Link } from "react-router-dom";

function Item({  categoria, modelo, precio, descripcion, id }) {
  return (
    <Link to={`/productos/${id}`} className="card">
      <div>{categoria}</div>
      <div><h3>{modelo}</h3></div>

      {/* futuro llamado a la imagen del producto */}
      
      <div><strong>Precio: ${precio}</strong></div>
    </Link>
  );
}

export default Item;
