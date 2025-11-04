import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="character">Personnages</Link></li>
                <li> <Link to="episodes">Episodes</Link></li>
                <li> <Link to="characterDetails">Détails Personnage</Link></li>
                <li> <Link to="episodes-fetch">Episodes avec useFetch</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;