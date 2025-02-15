import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'
function App() {
  
  return (
    <BrowserRouter>
    <NavBar/>
    {/* Aca iria un div con la  */}
    <Footer/>

    </BrowserRouter>
  );
}


export default App;
