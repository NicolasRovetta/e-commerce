import { Link } from "react-router-dom";
import { sendCart, counter } from "./DetalleProducto";
import { useState } from "react";

function Item({ categoria, modelo, precio, id }) {
  const producto = { categoria, modelo, precio, id };
  const [cantidad, setCantidad] = useState(0);
  const { increment, decrement, getCount } = counter(cantidad);

  const handleIncrement = () => {
    increment();
    setCantidad(getCount());
  };

  const handleDecrement = () => {
    decrement();
    setCantidad(getCount());
  };

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
      <div>
      <button onClick={handleDecrement}>-</button>
      <span>{cantidad}</span>
      <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => sendCart(producto, cantidad)} className="buttonAdd">Agregar al carrito</button>
    </div>
  );
}

export default Item;
