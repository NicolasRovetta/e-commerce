import { Link } from "react-router-dom";
import { sendCart } from "./DetalleProducto";
import React, { useState, useContext } from "react";
import ThemeContext from "./themeContext";
import Swal from "sweetalert2";
import Contador from "./Contador"; 

function Item({ categoria, modelo, precio, id, image }) {
  const producto = { categoria, modelo, precio, id, image };
  const { theme } = useContext(ThemeContext);
  const [cantidad, setCantidad] = useState(0); // Definimos el estado cantidad

  const handleAddToCart = () => {
    if (cantidad === 0) {
      Swal.fire({
        title: "Cantidad inválida",
        text: "Debe agregar al menos un producto al carrito",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    sendCart(producto, cantidad);
    setCantidad(0);
  };

  return (
    <div className={`card ${theme}`}>
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
      <Contador cantidad={cantidad} setCantidad={setCantidad} />
      <button onClick={handleAddToCart} className="buttonAdd">Agregar al carrito</button>
    </div>
  );
}

export default Item;
