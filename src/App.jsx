import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import CartWidget from "./components/CartWidget";
import Smartphones from "./components/Smartphones";
import Notebooks from "./components/Notebooks";
import Accesorios from "./components/Accesorios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="smartphones" element={<Smartphones />} />
            <Route path="notebooks" element={<Notebooks />} />
            <Route path="accesorios" element={<Accesorios />} />
            <Route path="cart" element={<CartWidget />} />
            <Route path="productos" element={<ItemListContainer />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
