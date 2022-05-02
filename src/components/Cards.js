import React from 'react';
/* import { Link } from 'react-router-dom'; */
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" >
            <CardItem
            src="images/DiamondCut.jpg"
            text="How can the cut effect a diamond?"
            label="cut"
            path="/cut"/>
            <CardItem
            src="images/DiamondColor.jpg"
            text="Color, and what it means in a diamond!"
            label="color"
            path="/color"/>
            </ul>
            <ul className="cards__items">
            <CardItem
            src="images/DiamondClarity.jpg"
            text="Diamond clarity and why it matters"
            label="clarity"
            path="/clarity"/>
            <CardItem
            src="images/form.png"
            text="Fill out a questionnaire to find your ring!"
            label="questionnaire"
            path="/questionnaire"/>
            <CardItem
            src="images/Questionnaire.jpg"
            text="Once you're an expert, pick out a ring!"
            label="shop"
            path="/shop"/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
