import { useState,useEffect, useContext } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { CartContext } from "../Context/Context"


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
    const GlobalState=useContext(CartContext);
    const dispatch=GlobalState.dispatch;
    console.log(GlobalState)
    if(product){
        return(
            <div>
                Hello
              <div onClick={HomePage} className="pro">
              <div className="title">{product.title}</div>
                <img className="Images" src={product.image}/>
                <div className="price">Ksh.{product.price}</div>
              </div>
                {/* <button onClick={() => dispatch({type:'ADD', payload: product})}>Add To Cart</button> */}
            </div>
        )
    }
  return (
    <div>
    
    </div>
  )
}

export default ProductsDetails