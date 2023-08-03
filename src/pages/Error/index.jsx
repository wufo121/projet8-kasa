import '../../style/error.scss'
import { Link } from 'react-router-dom'


function Error () {
    return (
        <div className='Error404'>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to={"/"}>Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error