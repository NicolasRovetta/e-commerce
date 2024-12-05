
function Item({nombre,categoria,modelo,precio,descripcion}) {
  return (
    <div className='card'>
      <h2>{categoria}</h2>
      <h2>{nombre}</h2>
      <h3>{modelo}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </div>
  )
}

export default Item