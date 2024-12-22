import { productos } from '../data/productos';
import { useParams } from 'react-router-dom'

function DetalleProducto(){
    const{id} = useParams();
    const producto = productos.find(prod => prod.id === parseInt(id));
    
    if(!producto){
        return <h2>El producto no existe</h2>
    }
    return (
        <div className='detalleProducto'>
            <h2>Detalle del producto</h2>
            <h2>{producto.modelo}</h2>
            <p>{producto.descripcion}</p>
            <h3>{producto.precio}</h3>
        </div>
    )
}

export default DetalleProducto