import logoFooter from '../../assets/logo-footer.png'
import '../../style/footer.scss'

function footer (){
    return (
        <div className='footer'>
            <div className="logo">
                <img src={logoFooter} alt="Logo" />
            </div>
            <div className='paragraph'>
                <p>© 2020 Kasa. All</p>
                <p>rights reserved</p>
            </div>
        </div>
    )
}

export default footer 