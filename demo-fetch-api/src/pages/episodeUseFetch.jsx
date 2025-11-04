
import useFetch from '../hooks/hooks-useFetch';


function EpisodeUseFetch(){

    const {data , loading , error} = useFetch("https://api.sampleapis.com/futurama/episodes")

    return (
        <>
        <h1>Episodes</h1>
        <div>
            {error ? <p>Une erreur est survenue: {error.message}</p> : null}

            {loading ? <p>Loading...</p> : null}

            {data.length > 0 ? 
                data.map((episode) =>
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

export default EpisodeUseFetch;