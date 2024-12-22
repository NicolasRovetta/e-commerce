import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { productos } from '../data/productos'
import './ItemListContainer.css'

function ItemListContainer() {
     const [items,setItems]=useState([])

     useEffect(()=>{
        const fetchProductos = new Promise((resolve)=> {    
          setTimeout(() => {
                resolve(productos)
          }, 2000)  // retraso en mseg, de simulacion de peticion a API
        })

        fetchProductos.then((data) => {
           setItems(data)
        })
     }, []) // array de dependencias vacío para que se ejecute solo una vez

  return (
    <div className='container'>     
        <ItemList items={items}/>    
    </div>
  )
}

export default ItemListContainer