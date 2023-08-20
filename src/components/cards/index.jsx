import React from 'react';
import logementsData from '../logements/logements.json';
import '../../style/cards.scss';
import Card from '../card'




function Cards() {
  return (
    <div className="cards">
      {logementsData.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
}

export default Cards;
