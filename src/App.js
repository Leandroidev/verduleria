import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import OwnerPage from "./pages/OwnerPage.jsx";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductsPage />} />

          <Route path="/Nosotros" element={<Home />} />
          <Route path="/Productos" element={<ProductsPage />} />
          <Route path="/Carrito" element={<CartPage />} />
          <Route path="/LogIn" element={<LogInPage />} />
          <Route path="/admin/LogIn" element={<LogInPage />} />
          <Route path="/admin/home" element={<OwnerPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
