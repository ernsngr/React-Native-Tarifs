import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {

        try{
            const {data: response} = await axios.get(url);
            setData(response);
            setLoading(false);
        }
        catch(err){
            setError(err.message)
        }
    }
    
    useEffect(() => {
        getData();
    }, []);

    return {data, loading, error};

};

export default useFetch;