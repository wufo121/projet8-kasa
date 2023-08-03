import '../../style/Home.scss'
import Cards from '../../components/cards'
import '../../components/logements/logements.json'



function Home() {
    return (
        <div className='section-home'>
            <div className='Banner'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='logement'>
                <Cards />
            </div>
        </div>
    );
}

export default Home