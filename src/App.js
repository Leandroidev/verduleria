import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import OwnerLogInPage from "./pages/OwnerLogInPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductsPage />} />

          <Route path="/Nosotros" element={<Home />} />
          <Route path="/Productos" element={<ProductsPage />} />
          <Route path="/Carrito" element={<CartPage />} />
          <Route path="/LogIn" element={<LogInPage />} />
          <Route path="/admin/LogIn" element={<LogInPage owner={true} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
