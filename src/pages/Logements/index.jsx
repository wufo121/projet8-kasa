import logementsData from '../../components/logements/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import '../../style/logements.scss';
import Collapse from '../../components/collapse';
import LogementCarrousel from '../../components/Carrousel';
import TagsList from '../../components/TagsList';
import StarRating from '../../components/StarRating';
import EquipmentsList from '../../components/EquipementsList';



function Logements() {
  const { id } = useParams();

  
  const logement = logementsData.find(item => item.id === id);
  

  if (!logement) {
    return <Navigate to="/error" />;
  }
 
  const { title, pictures, tags,location,host,rating,description,equipments } = logement;
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div>
      <LogementCarrousel title={title} pictures={pictures} />
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
      <div className='collapse-logement'>
        <div className='collapse-description'>
          <Collapse  titleCollapse="Description" descriptionCollapse={description} />
        </div>
        <div className='collapse-equipement'>
          <Collapse  titleCollapse="Equipements" descriptionCollapse={<EquipmentsList equipments={equipments} />} />
        </div>
      </div>
    </div>
  );
}


  



export default Logements;
