import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Nosotros" element={<Home />} />
          <Route path="/Productos" element={<ProductsPage />} />
          <Route path="/Carrito" element={<CartPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
