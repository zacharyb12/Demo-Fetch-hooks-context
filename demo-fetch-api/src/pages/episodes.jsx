import { useState,useEffect } from 'react'
import axios from 'axios';


function EpisodesPage(){
    const [episodes, setEpisodes] = useState([])
    const [error, setError] = useState (null)
    const [getEpisodes, setGetEpisodes] = useState(false)


useEffect(()=> {
    if(getEpisodes){
        axios.get("https://api.sampleapis.com/futurama/episodes")
        .then((response) => {
            setEpisodes (response.data)
            console.log(response.data);
            

        })
        .catch((error) => {
            setError (error)
        })
    }

    return () => {
        // nettoyage si nécessaire
        setEpisodes([])
        setError(null)
        setGetEpisodes(false)
    }
},[getEpisodes])


    return (
        <>
        <h1>Episodes</h1>

        <button onClick={()=> {setGetEpisodes(!getEpisodes)}}>Get Episodes</button>


        <div>
            {error ? <p>Une erreur est survenue: {error.message}</p> : null}

            {episodes.length > 0 ? 
                episodes.map((episode) =>
                <div key={episode.id}>
                    <h2>{episode.title} : {episode.number}</h2>
                    <p>{episode.description}</p>
                    <p>Date de sortie : {episode.originalAirDate}</p>
                </div>
                )
            : null}
        </div>
        </>
    )
}

export default EpisodesPage;