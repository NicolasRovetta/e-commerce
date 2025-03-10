import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2"; 
import ThemeContext from "./themeContext";
import "./themeContext.css";
import "./cart.css";
import { addProductCart } from "./DetalleProducto";

function Cart() {
  const { theme } = useContext(ThemeContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemCounts = addProductCart.reduce((acc, item) => {
      acc[item.id] = acc[item.id]
        ? { ...acc[item.id], count: acc[item.id].count + 1 }
        : { ...item, count: 1 };
      return acc;
    }, {});
    setCartItems(Object.values(itemCounts));
  }, []);

  const clearCart = () => {
    addProductCart.length = 0; // Vaciar el array
    setCartItems([]);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const total = cartItems.reduce((acc, item) => acc + item.precio * item.count, 0);
    const purchaseId = Math.floor(Math.random() * 1000000);
    const purchaseDetails = {
      id: purchaseId,
      items: cartItems,
      total: total,
    };

    Swal.fire({
      title: "Confirmar compra",
      text: `El total de su compra es $${total}. ¿Desea continuar?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, comprar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Compra realizada", `Su compra ha sido confirmada con el ID ${purchaseId}`, "success");
        console.log(purchaseDetails); // Aquí puedes manejar el array de compra
        clearCart();
      }
    });
  };

  return (
    <div className={`containerCart app ${theme}`}>
      <div className="cart">
      {cartItems.length === 0 ? <h2>Carrito vacío</h2> : <h2>Carrito</h2>}          
        
        <button type="reset" onClick={clearCart} aria-label="Vaciar carrito">
          Vaciar carrito
        </button>
        <h4>Total de productos: {cartItems.length}</h4>
        <h4>
          Total a pagar: $
          {cartItems.reduce((acc, item) => acc + item.precio * item.count, 0)}
        </h4>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="card">
              <div>{item.categoria}</div>
              <div>
                <h3>{item.modelo}</h3>
              </div>
              <img className="imgProduct" src={item.image} alt="imagen del producto" />
              <div>
                <strong>Precio: ${item.precio}</strong>
              </div>
              <div>
                <strong>Cantidad: {item.count}</strong>
              </div>
              <div>
                <strong>Sub total: ${item.precio * item.count}</strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="formulario">
        <form onSubmit={handlePurchase}>
          <h2>Finalizar Compra</h2>
          <div>
            <label>Nombre y apellido:</label>
            <input type="text" name="nombre y apellido" required />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input type="email" name="correo" required />
          </div>
          <div>
            <label>Teléfono:</label>
            <input type="tel" name="telefono" required />
          </div>
          <div>
            <label>Número de tarjeta:</label>
            <input type="text" name="numero de tarjeta" required />
          </div>
          <div>
            <label>Vencimiento:</label>
            <input type="text" name="vencimiento" required />
          </div>
          <div>
            <label>CVV:</label>
            <input type="text" name="cvv" required />
          </div>
          <button type="submit" className="buy" aria-label="Realizar pago">
            Realizar pago
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
