import '../../style/logements.scss';


function EquipmentsList({ equipments }) {
    return (
      <ul className="equipments-list">
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    );
  }

  export default EquipmentsList