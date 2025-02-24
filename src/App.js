import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import CartList from "./components/CartList/CartList.jsx";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Nosotros" element={<Home />} />
          <Route path="/Productos" element={<Products />} />
          <Route path="/Carrito" element={<CartList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
