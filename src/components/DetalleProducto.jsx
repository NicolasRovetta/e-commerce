import { productos } from '../data/productos';
import { useParams } from 'react-router-dom'
import Error from './Error'

function DetalleProducto(){
    const{id} = useParams();
    const producto = productos.find(prod => prod.id === parseInt(id));
    
    if(!producto){
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
    )
}

export default DetalleProducto