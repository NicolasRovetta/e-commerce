import Item from "./Item";
import { useState } from "react";

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
    ? items.filter((item) => item.categoria === selectedCategory)
    : items;
  const handleClearFilter = () => {
    setSelectedCategory("");
  };
  return (
    <div>
      <div>
        <button
          className="buttonFilter"
          onClick={() => setSelectedCategory("MacBook")}
        >
          MacBook
        </button>
        <button
          className="buttonFilter"
          onClick={() => setSelectedCategory("iPhone")}
        >
          iPhone
        </button>
        <button
          className="buttonFilter"
          onClick={() => setSelectedCategory("Accesorio")}
        >
          Accesorio
        </button>
        <button className="clear-filter-button" onClick={handleClearFilter}>
          Quitar filtro
        </button>
      </div>
      {filteredItems.map((item) => (
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
  );
}

export default ItemList;
