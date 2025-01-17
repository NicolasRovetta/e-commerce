import { useParams } from 'react-router-dom'
import Error from './Error'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function DetalleProducto() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            const db = getFirestore();
            const productoDoc = doc(db, 'productos', id);
            const productoSnapshot = await getDoc(productoDoc);
            if (productoSnapshot.exists()) {
                setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() });
            } else {
                setProducto(null);
            }
        };

        fetchProducto();
    }, [id]);

    if (!producto) {
        return (
            <div className='errorFullScreen'>
                <Error />
            </div>
        );
    }

    return (
        <div className='detalleProducto'>
            <h2>{producto.modelo}</h2>
            <p>{producto.descripcion}</p>
            <h3><strong>Precio: ${producto.precio}</strong></h3>
        </div>
    );
}

export default DetalleProducto;