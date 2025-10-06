import { useState } from "react";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Nosotros from "./components/Nosotros";
import DetalleProducto from "./components/DetalleProducto";
import "./index.css";
import Footer from './components/Footer';

function App() {
     const [isAuthenticated, setIsAuthenticated] = useState(false);

     const handleLogin = (email, password) => {
      // Lógica de autenticación aquí
      setIsAuthenticated(true);
     };

     const basename = process.env.NODE_ENV === 'production' ? '/e-commerce' : '/';

  return (
    <>
      <div className='app'>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/e-commerce/" element={<Layout isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>}>
            <Route index element={<Home/>} />
            <Route path="productos" element={<ItemListContainer/>} />
            <Route path="productos/:id" element={<DetalleProducto/>} />
            <Route path="nosotros" element={<Nosotros/>} />
            <Route path="cart" element={<Cart/>} />        
          </Route>
          <Route path="/" element={<Layout isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>}> 
            <Route index element={<Home/>} />
            <Route path="productos" element={<ItemListContainer/>} />
            <Route path="productos/:id" element={<DetalleProducto/>} />
            <Route path="nosotros" element={<Nosotros/>} />
            <Route path="cart" element={<Cart/>} />        
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>

    </>
  );
}

export default App;
