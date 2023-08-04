import '../../style/APropos.scss'
import React from 'react';
import Collapse from '../../components/collapse';



function APropos () {
    return (
        <div className='Section-APropos'>
            <div className='Banner-APropos'></div>
            <div className='Collapse'>
            <Collapse titleCollapse="Fiabilité" descriptionCollapse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
            <Collapse titleCollapse="Respect" descriptionCollapse="La bienveillance fait partie des valuers fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" />
            <Collapse titleCollapse="Service" descriptionCollapse="La bienveillance fait partie des valuers fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" />
            <Collapse titleCollapse="Sécurité" descriptionCollapse="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que nous les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </div>
  );
}

export default APropos