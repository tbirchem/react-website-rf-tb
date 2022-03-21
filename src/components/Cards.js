import React from 'react'
import { Link } from 'react-router-dom'


function Cards() {
  return (
    <div className="cards">
      <h1 Check out these EPIC Destinations! />
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items" >
          <CardItem />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
