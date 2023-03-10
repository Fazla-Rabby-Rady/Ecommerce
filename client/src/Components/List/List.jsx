import React from 'react'
import "./List.scss"
import Data from "../FeaturedProducts/Data"
import {Card} from "../Card/Card"
function List() {
  return (
    <div className="list">
    {
        Data.map(item =>(
            <Card item={item} key={item.id}/>
        ))
    }

    </div>
  )
}

export default List