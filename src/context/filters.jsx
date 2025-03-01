import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "todos",
    searchTerm: "",
  });
  const filteredProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === "todos" &&
          product.name
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase())) ||
        (product.category === filters.category &&
          product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      );
    });
  };
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        filteredProducts,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
