import Item from "./Item";
import { useState } from "react";

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = selectedCategory
    ? items.filter((item) => item.categoria === selectedCategory)
    : items;
  const handleClearFilter = () => {
    setSelectedCategory("");
  };
  return (
    <div style={{ textAlign: "center", marginTop: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1em" }}>
        <button
          className="buttonFilter"
          onClick={() => setShowFilters(!showFilters)}>Filtrar</button>
      </div>
      {showFilters && (
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
      )}
      {filteredItems.map((item) => (
        <Item          
          key={item.id}
          id={item.id} 
          nombre={item.nombre}
          categoria={item.categoria}
          modelo={item.modelo}
          precio={item.precio}
          descripcion={item.descripcion}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
