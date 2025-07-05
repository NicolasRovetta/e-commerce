import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './ItemListContainer.css'
import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'

function ItemListContainer() {
     const [items, setItems] = useState([])
     const [loading, setLoading] = useState(true)
     const [currentPage, setCurrentPage] = useState(1)
     const itemsPerPage = 10 // Puedes ajustar la cantidad por página

     const {theme} = useContext(ThemeContext) // consumo el contexto!!

     useEffect(()=> {
        const fetchProductos = async () => {
            setLoading(true)
            const db = getFirestore();
            const productosCollection = collection(db, 'productos');
            const productosSnapshot = await getDocs(productosCollection);
            const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(productosList);
            setLoading(false)
        };

        fetchProductos();
     }, []) // Corregido: array de dependencias vacío

  // Calcular los productos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className={`container app ${theme}`}>     
        {loading 
          ? <div style={{textAlign: 'center', marginTop: '2em'}}>Cargando productos...</div> 
          : <>
              <ItemList items={currentItems}/>
              <div style={{display:'flex', justifyContent:'center', gap:'1em', marginTop:'1em'}}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
              </div>
            </>
        }    
    </div>
  )
}

export default ItemListContainer