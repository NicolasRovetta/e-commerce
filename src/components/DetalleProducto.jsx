import { useParams } from "react-router-dom";
import Error from "./Error";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import ThemeContext from './themeContext';
import Swal from 'sweetalert2';

export const addProductCart = [];

export const sendCart = (producto, cantidad) => {
  addProductCart.push(...Array(cantidad).fill(producto));
  console.log('Productos en el carrito:', addProductCart);
  Swal.fire({
    title: 'Producto agregado',
    text: 'El producto ha sido agregado al carrito',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
};

export const counter = (initialValue = 0) => {
  let count = initialValue;
  return {
    increment: () => count < 5 && count++,
    decrement: () => count > 0 && count--,
    getCount: () => count
  };
};

function DetalleProducto() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const productoDoc = doc(db, "productos", id);
      const productoSnapshot = await getDoc(productoDoc);
      setProducto(productoSnapshot.exists() ? { id: productoSnapshot.id, ...productoSnapshot.data() } : null);
      setLoading(false);
    };
    fetchProducto();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!producto) return <div className="errorFullScreen"><Error /></div>;

  return (
    <div className={`backgroundDetalleProducto app ${theme}`}>
      <div className="detalleProducto">
        <h2>{producto.modelo}</h2>
        <p>{producto.descripcion}</p>
        <h3><strong>Precio: ${producto.precio}</strong></h3>
        <img src={producto.image} alt="imagen producto" />
        <div className="counter">
        <button onClick={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}>-</button>
        <span>{cantidad}</span>
        <button onClick={() => setCantidad(cantidad < 5 ? cantidad + 1 : 5)}>+</button>
        </div>
        <button onClick={() => sendCart(producto, cantidad)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default DetalleProducto;
