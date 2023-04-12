import React from 'react'
import './style.css'
import Cards from './Card'


function CardList({list}) {
  return (
    <div className='cardsFlex'>
        {list.map((card,i)=>(
            <Cards card={card} key={i}/>
        ))}      
    </div>
  )
}

export default CardList
