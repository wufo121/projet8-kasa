import { Link } from 'react-router-dom';
import '../../style/cards.scss';


function Card({ id, title, cover }) {
    return (
      <Link to={`/Logements/${id}`} className="card-link" >
        <div className="card">
          <img src={cover} alt={title} />
          <h3>{title}</h3>
        </div>
      </Link>
    );
  }

  export default Card