import Item from "./Item"

function ItemList({items}) {
  return (
    <div>
      {items.map((item) => (
         <Item
             key={item.id} // lo usa react para renderizar en el VDOM solamente lo necesario y ser mas eficiente
             nombre={item.nombre}
             categoria={item.categoria}
             modelo={item.modelo}
             precio={item.precio}
             descripcion={item.descripcion}
             
         />
      ))}
    </div>
  )
}

export default ItemList
