import { Link } from "react-router-dom";
import { sendCart } from "./DetalleProducto";
import { useState } from "react";

function counter(initialCount) {
  let count = initialCount;

  const increment = () => {
    if (count < 5) {
      count += 1;
    }
  };

  const decrement = () => {
    if (count > 0) {
      count -= 1;
    }
  };

  const getCount = () => count;

  return { increment, decrement, getCount };
}

function Item({ categoria, modelo, precio, id, image }) {
  const producto = { categoria, modelo, precio, id, image };
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

  const handleAddToCart = () => {
    if (cantidad === 0) {
      sendCart(producto, 1);
    } else {
      sendCart(producto, getCount());
    }
    setCantidad(0); 
  };

  return (
    <div className="card">
      <Link to={`/productos/${id}`}>
        <div>{categoria}</div>
        <div>
          <h3>{modelo}</h3>
        </div>
        <img className="imgProduct" src={image} alt="imagen del producto" />
        <div>
          <strong>Precio: ${precio}</strong>
        </div>
      </Link>
      <div>
        <button className="botonIncDec" onClick={handleDecrement}>-</button>
        <span>{cantidad}</span>
        <button className="botonIncDec" onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart} className="buttonAdd">Agregar al carrito</button>
    </div>
  );
}

export default Item;
