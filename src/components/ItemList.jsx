import Item from "./Item";
import { useState } from "react";
import filterIcon from "../assets/filter.png"; 
import "./ItemList.css";

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
    <div style={{ textAlign: "center", marginTop: "1em", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "end", marginBottom: "1em" }}>
        {!showFilters && (
          <button className="filterIconButton" onClick={() => setShowFilters(!showFilters)} aria-label="Mostrar filtros"><img src={filterIcon} className="filterIcon" alt="Filter" /></button>
        )}
      </div>
      {showFilters && (
        <div className="sideFilterOverlay" onClick={() => setShowFilters(false)}>
          <div className="sideFilterPanel" onClick={e => e.stopPropagation()}>
            <button
              className="closeFilterButton"
              onClick={() => setShowFilters(false)}
              aria-label="Cerrar panel de filtros"
            >
              &#10005;
            </button>
            <button
              className="buttonFilter buttonFilter--secondary"
              onClick={() => setSelectedCategory("MacBook")}
              aria-label="Filtrar por MacBook"
            >
              MacBook
            </button>
            <button
              className="buttonFilter buttonFilter--secondary"
              onClick={() => setSelectedCategory("iPhone")}
              aria-label="Filtrar por iPhone"
            >
              iPhone
            </button>
            <button
              className="buttonFilter buttonFilter--secondary"
              onClick={() => setSelectedCategory("Accesorio")}
              aria-label="Filtrar por Accesorio"
            >
              Accesorio
            </button>
            <button className="clear-filter-button buttonFilter--secondary" onClick={handleClearFilter} aria-label="Quitar filtro">
              Quitar filtro
            </button>
          </div>
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
