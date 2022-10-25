import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products({item,onClickButton}) {
  const navigate=useNavigate()
const ProductsDetails=()=>{
  navigate(`/details/${item.id}`)
}
return(
    <div>
   <div  className="product-title">
   <div className="title">{item.title}</div>
    <img className="Images" src={item.image}/>
   </div>
   <button onClick={()=>onClickButton(item)}>Add To Cart 54</button>
    </div>
)
}
export default Products