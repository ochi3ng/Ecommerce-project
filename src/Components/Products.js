import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products({item}) {
  const navigate=useNavigate()
const ProductsDetails=()=>{
  navigate(`/details/${item.id}`)
}
return(
    <div onClick={ProductsDetails} className="product-title">
    <div className="title">{item.title}</div>
    </div>
)
}
export default Products