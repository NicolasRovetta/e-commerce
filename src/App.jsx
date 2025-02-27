import { useState } from "react";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Nosotros from "./components/Nosotros";
import DetalleProducto from "./components/DetalleProducto";
import ThemeContext from "./components/themeContext";
import "./components/themeContext.css";
import { FaSun, FaMoon } from "react-icons/fa"; 
import Footer from './components/Footer';
import AuthForm from "./components/AuthForm";
import ItemList from "./components/ItemList";

function App() {
     const [theme, setTheme] = useState('light'); 
     const [isAuthenticated, setIsAuthenticated] = useState(false);

     const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
     }

     const handleLogin = (email, password) => {
      // Lógica de autenticación aquí
      setIsAuthenticated(true);
     };

     const basename = process.env.NODE_ENV === 'production' ? '/e-commerce' : '/';

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`app ${theme}`}>
      <button className="buttonTheme" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Layout/>}>
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
      {!isAuthenticated && (
        <>
          <div className="blur-background"></div>
          <AuthForm onLogin={handleLogin} />
        </>
      )}
      </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
