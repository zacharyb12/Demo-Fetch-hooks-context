import { Link } from "react-router-dom";
import { useAuth } from "../hooks/hooks-useAuth";

function Navbar(){
    const {user ,logout} = useAuth();
    return(
        <>
        <nav>
            <ul>
                {user ? 
                <li>Bienvenue {user.username}</li>
                : null }
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="login">Login</Link></li>
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