import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import './App.css'
function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Nosotros" element={<h2>Home</h2> } />
          <Route path="/Productos" element={<h2>products</h2> } />
          <Route path="/Carrito" element={<h2>cart</h2> } />
          
        </Routes>
      </Layout>

    </BrowserRouter>
  );
}


export default App;
