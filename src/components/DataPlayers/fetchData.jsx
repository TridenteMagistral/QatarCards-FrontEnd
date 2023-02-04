import { useState, useEffect } from "react";
import { fetchGet } from "../components/services/FetchGet";

export function useFetchPlayer() {
    
    const [players, setPlayers] = useState([])

    const FetchData = async () => {
        const response = await fetchGet('Asdsd');
        setPlayers(response);
    }
    useEffect(() => {
        FetchData();
    }, []);

    return { players }
}
