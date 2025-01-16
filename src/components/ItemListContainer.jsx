import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { productos } from '../data/productos'
import './ItemListContainer.css'
import { useContext } from 'react'
import ThemeContext from './themeContext'
import './themeContext.css'

function ItemListContainer() {
     const [items,setItems]=useState([])

     const {theme} = useContext(ThemeContext) // consumo el contexto!!

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
    <div className={`container app ${theme}`}>     
        <ItemList items={items}/>    
    </div>
  )
}

export default ItemListContainer