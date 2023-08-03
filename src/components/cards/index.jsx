import React from 'react';
import logementsData from '../logements/logements.json';
import '../../style/cards.scss';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  const cardStyle = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
  };

  return (
    <Link to={`/Logements/${id}`} className="card-link">
      <div className="card" style={cardStyle}>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

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
