import { useParams } from "react-router-dom";
import Error from "./Error";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useContext } from 'react'
import ThemeContext from './themeContext'

export const sendCart = (producto) => {
  console.log('Producto a agregar:', producto); // Agregar este log para depuración
  const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtener el carrito actual del localStorage    
  cart.push(producto);  // Agregar el producto actual al carrito    
  localStorage.setItem('cart', JSON.stringify(cart));// Guardar el carrito actualizado en el localStorage
  alert('Producto agregado al carrito');
};

function DetalleProducto() {
  const {theme} = useContext(ThemeContext)
  const { id } = useParams();
  const [producto, setProducto] = useState(null); // Definición del estado producto
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const productoDoc = doc(db, "productos", id);
      const productoSnapshot = await getDoc(productoDoc);
      if (productoSnapshot.exists()) {
        setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() }); // Actualización del estado producto
      } else {
        setProducto(null);
      }
      setLoading(false);
    };

    fetchProducto();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!producto) {
    return (
      <div className="errorFullScreen">
        <Error />
      </div>
    );
  }

  return (
    <div className={`backgroundDetalleProducto app ${theme}`}>
      <div className="detalleProducto">
        <h2>{producto.modelo}</h2>
        <p>{producto.descripcion}</p>
        <h3>
          <strong>Precio: ${producto.precio}</strong>
        </h3>
        {/*<img src={producto.imagen} alt={producto.modelo} />*/}
        <button onClick={() => sendCart(producto)}>Agregar al carrito</button>      
      </div>
    </div>
  );
}

export default DetalleProducto;
