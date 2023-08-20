import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../style/logements.scss';


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

  export default StarRating