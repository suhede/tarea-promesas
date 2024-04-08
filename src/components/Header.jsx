
import React from "react";
import { Link } from "react-router-dom";


function Header(){

return(
<>

<header className="header">
        <h1 className="header__h1">LocoApis</h1>
        <nav className="nav">
            <ul className="nav__ul">
            <li className="nav__li"><Link to={'/'} className="link">Inicio</Link></li>
                <li className="nav__li"><Link to={'/tienda'}className="link">Tienda</Link></li>
                <li className="nav__li"><Link to={'/persona'}className="link">Random</Link></li>
                <li className="nav__li"><Link to={'/item'}className="link">Dragones & Mazmorras</Link></li>
                <li className="nav__li"><Link to={'/poke'}className="link">PokéApi</Link></li>
                <li className="nav__li"><Link to={'/alterna'}className="link">ApiAlterna</Link></li>
        
            </ul>
        </nav>
        </header>

</>
);

};
export default Header;