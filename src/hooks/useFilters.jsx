import { useContext } from "react";
import { FiltersContext } from "../context/filters";
export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

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

  return { filters, setFilters, filteredProducts };
}
