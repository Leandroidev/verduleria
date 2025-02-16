import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import './App.css'
import AboutUs from "./components/AboutUs/AboutUs.jsx";
function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Nosotros" element={<AboutUs/>} />
          <Route path="/Productos" element={<h2>products</h2> } />
          <Route path="/Carrito" element={<h2>cart</h2> } />
          
        </Routes>
      </Layout>

    </BrowserRouter>
  );
}


export default App;
