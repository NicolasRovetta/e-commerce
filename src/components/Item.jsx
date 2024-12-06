
function Item({nombre,categoria,modelo,precio,descripcion}) {
  return (
    <div className='card'>      
      <p>{nombre}</p>
      <p>{categoria}</p>
      <h3>{modelo}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </div>
  )
}

export default Item