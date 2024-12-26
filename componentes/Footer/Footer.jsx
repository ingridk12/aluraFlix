
import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/pieDePagina.png)" }}>
        <div className='redes'>
            <a href='https://github.com/ingridk12'>
                <img src="/img/github3.png" alt='Github' />
            </a>
            <a href='https://www.linkedin.com/in/ingridkatherinevegaordóñez/'>
                <img src="/img/linkedin2.png" alt='linkedin' />
            </a>
           
        </div>
        <strong>Ingrid Katherine Vega Ordoñez</strong>
    </footer>
}

export default Footer
