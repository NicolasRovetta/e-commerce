import { Link } from "react-router-dom";
import { sendCart } from "./DetalleProducto";

function Item({ categoria, modelo, precio, id }) {
  const producto = { categoria, modelo, precio, id };

  return (
    <div className="card">
      <Link to={`/productos/${id}`}>
        <div>{categoria}</div>
        <div>
          <h3>{modelo}</h3>
        </div>
        {/*<img src={producto.imagen} alt={producto.modelo} />*/}
        <div>
          <strong>Precio: ${precio}</strong>
        </div>
      </Link>
      <button onClick={() => sendCart(producto)} className="buttonAdd">Agregar al carrito</button>    
    </div>
  );
}

export default Item;
