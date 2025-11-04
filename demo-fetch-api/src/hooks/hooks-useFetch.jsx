import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url){
    const [data , setData] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(false);

    useEffect(()=> {
        setLoading (true);

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                
            } catch (error) {

                setError(error);

            }finally{

                setLoading (false);
            }
        }

            fetchData();

    },[url])

    return {data, error, loading};
}

export default useFetch;