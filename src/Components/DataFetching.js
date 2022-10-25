import React, { useEffect, useState } from "react"
import axios from "axios"
import Products from "./Products"
import AboutUs from "./AboutUs"

function DataFetching(){
  const  Url="https://fakestoreapi.com/products/"
const[product,setProduct]=useState([])
const production=[]
const onClickButton=(item)=>{
    console.log(production, "hello") 
    production.push(item);
    
}
useEffect(()=>{
    axios.get(Url)
    .then(Response=>{
        setProduct(Response.data)
    })
}, [Url])
if(product){
    return(
        <div className="header">
     {product.map((item)=><div><Products item={item} onClickButton={onClickButton}/></div>)}
    
        </div>
    )
}



return(
    <div>
    </div>
)
}
export default DataFetching
