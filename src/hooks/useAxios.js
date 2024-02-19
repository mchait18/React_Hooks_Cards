import { useState, useEffect } from "react";

import axios from "axios";

const useAxios = (keyInLS, base_url) => {
    const [results, setResults] = useLocalStorage(keyInLS);
    const addRes = async (formatter = data => data, endpoint = "") => {
        const response = await axios.get(`${base_url}${endpoint}`);
        setResults(results => [...results, formatter(response.data)]);
    };

    const resetAll = () => {
        setResults([])
    }
    return [results, addRes, resetAll]
};

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStorage;

export { useAxios, useLocalStorage };