import { Link } from "react-router-dom";
import { sendCart } from "./DetalleProducto";
import React, { useState } from "react"; 

function Item({ categoria, modelo, precio, id, image }) {
  const producto = { categoria, modelo, precio, id, image };
  const [cantidad, setCantidad] = useState(0); // Definimos el estado cantidad
  
  const handleIncrement = () => {
    setCantidad((prevCantidad) => (prevCantidad < 5 ? prevCantidad + 1 : prevCantidad));
  };
  
  const handleDecrement = () => {
    setCantidad((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : prevCantidad));
  };
  
  const handleAddToCart = () => {
    if (cantidad === 0) {
      sendCart(producto, 1);
    } else {
      sendCart(producto, cantidad);
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
