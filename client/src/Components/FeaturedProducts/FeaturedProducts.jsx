import React from 'react'
import { Card } from '../Card/Card'
import Data from './Data'
import "./FeaturedProducts.scss"
export const FeaturedProducts = ({type}) => {
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas iure fugiat aliquam iste provident 
            fuga quo facilis numquam! Aliquid laborum dolorum minus voluptatibus laudantium dolores! Quas ipsa fuga 
            alias doloribus necessitatibus fugiat, eius dignissimos veniam nesciunt. Veritatis eaque quis quisquam inventore nemo. 
            Ut sed temporibus nam veritatis necessitatibus, voluptate similique!</p>
        </div>
        <div className="bottom">
          {
            Data.map(item => (
                <Card item={item} key={item.id} />
            ))
          }
        </div>
    </div>
  )
}
