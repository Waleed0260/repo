import React, { useEffect, useState } from 'react'
import Product from './Product/Product';
import { Link } from 'react-router-dom';
import "./Shop.css"
import Button from './Button/Button';


const Shop = () => {
    const[products, setProducts] = useState([]);
    const[item, setItem] = useState(0)
    const[get, setGet] = useState(0)
    const[Detail, setDetail] = useState(false);



    const getProducts = async()=>{
          const url= `https://api.spoonacular.com/food/products/search?apiKey=e2d392617b924963a2edb8e0e7a61b59&query=rice&vegetables&number=20`
          const response = await fetch(url);
          const resJson = await response.json();
          setProducts(resJson.products);
    }

    useEffect(()=>{
        getProducts();
    }, [])


    const handleState = (index)=>{
      setGet(index + 1)
      setItem(item + 10.00)
    }

    const handleDetail = ()=>{
      setDetail(true);
    }



  return (
    <>
    <div className='shop'>
      {products.map((items, index)=>{
        return(
            <div className="shop-items" key={items.id}>
            <img src={items.image} alt="" onClick={handleDetail}/>
            <b>10.00$</b>
            <b>{items.title.slice(0, 20)}</b>
            <div>
              <span>{get}</span>
              <span onClick={()=> handleState(index)}>+</span>
            </div>
        </div>
        )
      })}
    </div>
    <Product items={item} get={get}/>
    </>
  )
}

export default Shop
