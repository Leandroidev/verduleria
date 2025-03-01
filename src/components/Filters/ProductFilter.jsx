import { useFilters } from "../../hooks/useFilters";
import React from "react";
import "./ProductFilter.css";
function ProductFilter() {
  const { filters, setFilters } = useFilters();
  const categories = ["todos", "verduras", "frutas", "mayorista", "envasados"];

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
    <div className="filterContainer">
      <div className="categoryNavbar">
        {categories.map((category) => (
          <a
            className={`tab ${filters.category === category ? "active" : ""}`}
            key={category}
            onClick={() => handleChangeCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        ))}
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar un producto..."
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}
export default ProductFilter;
