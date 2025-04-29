import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const baseURL = 'http://localhost:3000/';
    const [data, setData] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${baseURL}${url}`);
                setData(response.data);
            } catch (error) {
                console.log('An error occurred:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [url]);

    return { data, error, loading }
}

export default useFetch;