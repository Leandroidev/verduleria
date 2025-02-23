import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Nosotros" element={<Home />} />
          <Route path="/Productos" element={<Products />} />
          <Route path="/Carrito" element={<h2>cart</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
