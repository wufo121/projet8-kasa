import React, { useState } from 'react';
import logementsData from '../../components/logements/logements.json';
import { useParams } from 'react-router-dom';
import '../../style/logements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Logements() {
  const { id } = useParams();

  
  const logement = logementsData.find(item => item.id === id);
  

  if (!logement) {
    return <div>Logement non trouvé.</div>;
  }

 
  const { title, pictures, tags,location,host,rating } = logement;
  const [firstName, lastName] = host.name.split(' ');
  return (
    <div>
      <LogementCarousel title={title} pictures={pictures} />
      <div className='presentation'>
            <div className='presentation-left-part'>
            <h2>{title}</h2>
            <p className='place'>{location}</p>
            <TagsList tags={tags}  />
        </div>
        <div className='presentation-right-part'>
            <div className='host'>
                <p className='name-host'>{firstName}<br />{lastName}</p> 
                <img className="image-host" src={host.picture} alt={host.name} />
            </div>
            <StarRating rating={rating} />
        </div>
      </div>
      <div className='collapse'></div>
    </div>
  );
}

function LogementCarousel({ title, pictures }) {

  const [CurrentImage, setCurrentImage] = useState(0)
  const PreviewImage = () => {

    setCurrentImage((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const NextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className='carousel'>
        <button className='Arrow-left' onClick={PreviewImage}>&lt;</button>
        <button className='Arrow-right' onClick={NextImage}>&gt;</button>
        <img src={pictures[CurrentImage]} alt={title} />
        <p className='counterSlides'>{CurrentImage + 1}/{pictures.length}</p>
      </div>
    </div>
  );
}

function TagsList({ tags }) {
    return (
      <ul className="Tags" >
        {tags.map((tag, index) => (
          <li className='Tags-style' key={index}>{tag}</li>
        ))}
      </ul>
    );
  }

  function StarRating({ rating }) {
    const totalStars = 5;
    const StarRating = parseInt(rating, 10);
  
    return (
      <ul className="rating-list">
        {Array.from({ length: totalStars }).map((_, index) => (
          <li key={index}>
            <FontAwesomeIcon
              icon={faStar}
              className={index < StarRating ? 'faStarPink' : 'faStar'}
            />
          </li>
        ))}
      </ul>
    );
  }

export default Logements;
