import { useFilters } from "../../hooks/useFilters";
import React from "react";

function ProductFilter() {
  const { filters, setFilters } = useFilters();

  const categories = ["Todos", "verduras", "frutas", "mayorista", "envasados"];
  const handleChangeCategory = (category) => {
    console.log(category);
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: category,
    }));
  };

  const handleChangeSearchTerm = (event) => {
    const searchTerm = event.target.value;
    console.log(searchTerm);

    setFilters((prevFilters) => ({
      ...prevFilters,
      searchTerm: searchTerm,
    }));
  };

  return (
    <div className="filter-container">
      <div className="nav-tabs">
        {categories.map((category) => (
          <a key={category} onClick={() => handleChangeCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        ))}
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}
export default ProductFilter;
