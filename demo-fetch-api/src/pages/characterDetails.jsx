import axios from "axios";
import { useEffect,useState } from "react";
// recuperation du parametre d'url
import { useParams } from "react-router-dom";


function CharacterDetailsPage(){
    // recuperation de l'id dans l'url
const {id} = useParams();

    const [character , setCharacter] = useState(null);
    const [error , setError] = useState(null);

useEffect(() => {

    // on fourni l'id de la route pour l'appel api 
    axios.get(`https://api.sampleapis.com/futurama/characters/${id}`)
    .then((response) => {
        console.log(response);
        
        setCharacter(response.data);
    })
    .catch((error) => {
        setError(error);
    })

return () => {
    setCharacter(null);
    setError (null);

}
// sans params executer au montage uniquement
// avec params executer aussi a chaque changement de params
},[id])

    return (
        <>
        <h1>Character</h1>
        <p>{id}</p>

        {error ? <p>Une erreur est survenue: {error.message}</p> : null}

        {/* {JSON.stringify(character)} */}
        {character ?
            <div>
                <h2>{character.name.first} {character.name.middle} {character.name.last}</h2>
                <p>Age : {character.age}</p>
                <p>Species : {character.species}</p>
                <img src={character.images.main} alt="" />
            </div> 
        : <p>Loading...</p>}

        </>
    )
}

export default CharacterDetailsPage;