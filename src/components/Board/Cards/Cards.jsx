import React from 'react';
import Card from './Card';

const Cards = ({ cards }) =>
  cards.map((card, index) => <Card key={card.id} card={card} index={index} />);

export default Cards;