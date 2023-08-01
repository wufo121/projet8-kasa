import '../../style/Home.scss'
import Cards from '../../components/cards'
import '../../components/logements/logements.json'



import React from 'react';
import '../../style/Home.scss';


function Home() {
    return (
        <div>
            <div className='Banner'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <section className='logement'>
                <div className='logement-cards'>
                    <Cards />
                </div>
            </section>
        </div>
    );
}

export default Home