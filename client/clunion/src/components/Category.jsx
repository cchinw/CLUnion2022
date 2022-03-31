import React from 'react'
import Item from './Item'

const Category = ({ itemCategory }) => {
  
  return (
    <div className='ClassGrid'>
      <h3>{itemCategory.name}</h3>
      {props.items.map((item) => {
        return <Item title={item.title} items={item.items}/>
      })}
    </div>
    )
}

export default Category