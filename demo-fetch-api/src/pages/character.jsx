import axios from "axios";
import { useEffect,useState } from "react";
// redirection de l'utilisateur
import { useNavigate } from "react-router-dom";
import CharacterDetailsPage from "./characterDetails";


function CharacterPage(){
// instance pour la navigation
    const navigate = useNavigate();

    const goToDetails = (id) => {
        navigate(`/characterDetails/${id}`);
    }


    const [data , setData] = useState([]);
    const [error , setError] = useState(null);
    const [getData , setGetData] = useState(false); 

useEffect(() => {
if(getData){
    axios.get("https://api.sampleapis.com/futurama/characters")
    .then((response) => {
        console.log(response);
        
        setData(response.data);
    })
    .catch((error) => {
        setError(error);
    })
}
return () => {
    setData([]);
    setError (null);
    setGetData (false);
}

},[getData])

    return (
        <>
        <h1>Character</h1>
        <button onClick={()=> {setGetData(!getData)}}>getData</button>

        {error ? <p>Une erreur est survenue: {error.message}</p> : null}

        {data.length > 0 ? 

            data.map((character) => 
            <div>
                <h1>{character.id}</h1>
                <h2>{character.name.first} {character.name.middle} {character.name.last}</h2>
                <p>Age : {character.age}</p>
                <p>Species : {character.species}</p>
                <img src={character.images.main} alt="" />
                <button onClick={() => {goToDetails(character.id)}}>Details</button>
            </div>
            )

         : null}

        </>
    )
}

export default CharacterPage;