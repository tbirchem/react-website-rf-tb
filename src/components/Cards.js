import React from 'react';
/* import { Link } from 'react-router-dom'; */
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1> Explore </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" >
            <CardItem
            src="images/DiamondCut.jpg"
            text="What cut is right for you?"
            label="cut"
            path="/cut"/>
            <CardItem
            src="images/DiamondColor.jpg"
            text="What does color mean when it comes to a diamond?"
            label="color"
            path="/color"/>
          </ul>
          <ul className="cards__items">
            <CardItem
            src="images/DiamondClarity.jpg"
            text="How much does diamond clarity matter?"
            label="clarity"
            path="/clarity"/>
            <CardItem
            src="images/Questionnaire.jpg"
            text="Fill out a questionnaire to see what ring suits you best!"
            label="questionnaire"
            path="/questionnaire"/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
