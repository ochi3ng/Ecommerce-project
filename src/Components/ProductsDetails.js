import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


function ProductsDetails() {
    const  Url="https://fakestoreapi.com/products/"
    const[product,setProduct]=useState(null)
    const {id}=useParams()
    let navigate=useNavigate()
    const HomePage=()=>{
        navigate("/prod")
    }



    useEffect(()=>{
        axios.get(Url)
        .then(Response=>{
            setProduct(Response.data.find(item=> item.id===parseInt(id)))
        })
    }, [Url])
    if(product){
        return(
            <div onClick={HomePage} className="pro">
                Hello
            <div className="title">{product.title}</div>
                <img className="Images" src={product.image}/>
                <div className="price">Ksh.{product.price}</div>
            </div>
        )
    }
  return (
    <div>
    
    </div>
  )
}

export default ProductsDetails