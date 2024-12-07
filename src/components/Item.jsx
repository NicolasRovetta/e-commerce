function Item({ nombre, categoria, modelo, precio, descripcion }) {
  return (
    <div className="card">
      <div>{categoria}</div>
      <div>{nombre}</div>
      <div><h3>{modelo}</h3></div>
      <div><p>{descripcion}</p></div>
      <div><strong>Precio: ${precio}</strong></div>
    </div>
  );
}

export default Item;
