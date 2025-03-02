import Item from "./Item";
import { useState } from "react";
import filterIcon from "../assets/filter.png"; 

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
          className="buttonFilter buttonFilter--primary"
          onClick={() => setShowFilters(!showFilters)}><img src={filterIcon} className="filterIcon" alt="Filter" /></button>
      </div>
      {showFilters && (
        <div>
          <button
            className="buttonFilter buttonFilter--secondary"
            onClick={() => setSelectedCategory("MacBook")}
          >
            MacBook
          </button>
          <button
            className="buttonFilter buttonFilter--secondary"
            onClick={() => setSelectedCategory("iPhone")}
          >
            iPhone
          </button>
          <button
            className="buttonFilter buttonFilter--secondary"
            onClick={() => setSelectedCategory("Accesorio")}
          >
            Accesorio
          </button>
          <button className="clear-filter-button buttonFilter--secondary" onClick={handleClearFilter}>
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
