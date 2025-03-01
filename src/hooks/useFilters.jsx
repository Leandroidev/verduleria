import { useContext } from "react";
import { FiltersContext } from "../context/filters";
export function useFilters() {
  const { filters, setFilters, filteredProducts } = useContext(FiltersContext);

  if (filters === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  return { filters, setFilters, filteredProducts };
}
