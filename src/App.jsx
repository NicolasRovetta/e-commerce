import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Nosotros from "./components/Nosotros";
import DetalleProducto from "./components/DetalleProducto";

function App() {
  return (
    <>
      <BrowserRouter>
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
    </>
  );
}

export default App;
