import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../Components/List/List'

import "./Products.scss"
function Products() {

  const catId = parseInt(useParams().id)

  const [maxPrice,setMaxPrice]=useState(1000)
  const [sort,setSort]=useState(null)
  
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" name="" id="" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
                <input type="radio" name="price" id="asc" value="asc" onChange={(e)=>setMaxPrice("asc")}/>
                <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
                <input type="radio" name="price" id="desc" value="desc" onChange={(e)=>setSort("desc")}/>
                <label htmlFor="desc">Price (Highest first)</label>
            </div>

        </div>
            
      </div>
      <div className="right">
        <img className='catImg' src="/images/categories.jpeg" alt="" />



        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products