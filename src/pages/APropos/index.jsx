import '../../style/APropos.scss'
import React from 'react';
import Collapse from '../../components/collapse';



function APropos () {
    return (
        <div className='Section-APropos'>
            <div className='Banner-APropos'></div>
            <Collapse buttonName="Fiabilité" description="Description pour la fiabilité." />
            <Collapse buttonName="Respect" description="Description pour le respect." />
            <Collapse buttonName="Service" description="Description pour le service." />
            <Collapse buttonName="Sécurité" description="Description pour la sécurité." />
        </div>
  );
}

export default APropos