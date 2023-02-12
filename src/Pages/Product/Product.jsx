import React, { useState } from 'react'
import "./Product.scss"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

function Product() {
  const [selectedImg,setSelectedImg]=useState(0)
  const [quantity,setQuantitu]=useState(1)
  const images = ["/images/gallery-1.jpg","/images/product-4.jpg","/images/product-6.jpg"];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
          <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus a ea, itaque odit voluptates repellat, numquam assumenda dolore, nemo natus sint blanditiis doloribus pariatur ratione. Dolore odit adipisci illum et!</p>
        <div className="quantity">
          <button onClick={()=>setQuantitu(prev=>prev===1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantitu(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART 
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor:polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Tag</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product

