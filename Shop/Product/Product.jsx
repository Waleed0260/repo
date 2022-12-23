import React from 'react'
import { BsFillBagCheckFill } from "react-icons/bs";
import "./Product.css"


const Product = ({items, get}) => {
  return (
    <div className='product'>
        <span><BsFillBagCheckFill/> <b>{get} items</b></span>
        <button><b>${items}</b></button>
    </div>
  )
}

export default Product
