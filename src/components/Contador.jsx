import React from "react";

function Contador({ cantidad, setCantidad }) {
  return (
    <div className="counter">
      <button className="botonIncDec" onClick={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}>
        -
      </button>
      <span>{cantidad}</span>
      <button className="botonIncDec" onClick={() => setCantidad(cantidad < 5 ? cantidad + 1 : 5)}>
        +
      </button>
    </div>
  );
}

export default Contador;
