import React, { useEffect, useState } from "react"
import axios from "axios"
import Products from "./Products"
import AboutUs from "./AboutUs"

function DataFetching(){
  const  Url="https://fakestoreapi.com/products/"
const[product,setProduct]=useState(null)
useEffect(()=>{
    axios.get(Url)
    .then(Response=>{
        setProduct(Response.data)
    })
}, [Url])
if(product){
    return(
        <div className="header">
     {product.map((item)=><h1><Products item={item}/></h1>)}
    
        </div>
    )
}



return(
    <div>
    </div>
)
}
export default DataFetching
