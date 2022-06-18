import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [cerita, setCerita] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('Data tidak ditemukan');
                }
                return res.json();
            })
            .then(data => {
                setCerita(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })

    }, [url]);

    return { cerita, isLoading, error }
}

export default useFetch;