import { useParams } from "react-router-dom";
import Error from "./Error";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useContext } from 'react'
import ThemeContext from './themeContext'
import Swal from 'sweetalert2';

const addProductCart = []; //array vacío para exportar los productos al carrito

export const sendCart = (producto) => {
  addProductCart.push(producto);  
  console.log('Productos en el carrito:', addProductCart); // log para depuración
  Swal.fire({
    title: 'Producto agregado',
    text: 'El producto ha sido agregado al carrito',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
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
