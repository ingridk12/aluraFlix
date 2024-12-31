import "./Header.css"
import { Link } from "react-router-dom";
function Header (){
    return (
        
    <header className="encabezado">
         <h1>ALURAFILX</h1>
        <div className="boton">
        <Link to="/NuevoVideo">
        <button className="btn-new-video">Nuevo Video</button>
        </Link>
        <Link to="/">
        <button className="btn-new-video">HOME</button>
        </Link>
        </div>
             </header>
   
)
}
export default Header