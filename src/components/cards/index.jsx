import React from 'react';
import logementsData from '../logements/logements.json';
import '../../style/cards.scss';

function Card({ title, cover }) { 
  const cardStyle = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="card" style={cardStyle}>
      <h2>{title}</h2>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards">
      {logementsData.map((logement) => (
        <Card key={logement.id} title={logement.title} cover={logement.cover} /> 
      ))}
    </div>
  );
}

export default Cards;