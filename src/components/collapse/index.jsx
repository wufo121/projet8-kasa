import React from 'react';
import '../../style/collapse.scss';
import ArrowUp from '../../assets/ArrowUp.png';

const Collapse = ({ buttonName, description }) => {
  return (
    <div>
      <div className='information'>
        <h2>{buttonName}</h2>
        <button className='Arrow'>
          <img src={ArrowUp} alt="flèche" />
        </button>
        <p className="unroll">{description}</p>
      </div>
    </div>
  );
};

export default Collapse;