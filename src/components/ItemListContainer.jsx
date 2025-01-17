import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './ItemListContainer.css'
import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'

function ItemListContainer() {
     const [items,setItems]=useState([])

     const {theme} = useContext(ThemeContext) // consumo el contexto!!

     useEffect(()=> {
        const fetchProductos = async () => {
            const db = getFirestore();
            const productosCollection = collection(db, 'productos');
            const productosSnapshot = await getDocs(productosCollection);
            const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(productosList);
        };

        fetchProductos();
     }, []) // array de dependencias vacío para que se ejecute solo una vez

  return (
    <div className={`container app ${theme}`}>     
        <ItemList items={items}/>    
    </div>
  )
}

export default ItemListContainer