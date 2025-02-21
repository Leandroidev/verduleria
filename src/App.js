import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import products from "./components/data.json";
import ProductList from "./components/ProductList/ProductList.jsx";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/Nosotros"
            element={<ProductList products={products} />}
          />
          <Route path="/Productos" element={<h2>products</h2>} />
          <Route path="/Carrito" element={<h2>cart</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
