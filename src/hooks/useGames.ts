import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Game {
    id : number;
    name: string;
    background_image : string;
}

interface FetchGamesResponse {
    count : number;
    results : Game[]

}
const useGames = () => {
    const controller = new AbortController();

    const [games, setGames] =  useState<Game[]>([]);
    const [error, setError] =  useState('');

    useEffect(() => {
            apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))   
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })
        
            // clean up func for useeffect
        return () => controller.abort()
        // dedepdent array 
    },[])
  return { games, error};
}

export default useGames;