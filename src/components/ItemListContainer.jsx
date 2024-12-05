import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { productos } from '../data/productos'
import './ItemListContainer.css'

function ItemListContainer() {
     const [items,setItems]=useState([])

     useEffect(()=>{
        const fetchProductos = new Promise((resolve)=> {    // se genera una promesa para simular peticion a API ,reject no hay porque la peticion es a nuestra propia db
          setTimeout(() => {
                resolve(productos)
          },2000)  // se ejecuta despues de 2seg
        })

        fetchProductos.then((data) => {
           setItems(data)
        })
     },[]) // array vacio para que se ejecute una vez,solo para traerme el [ptos]

  return (
    <div className='container'>     
        <ItemList items={items}/>    
    </div>
  )
}

export default ItemListContainer