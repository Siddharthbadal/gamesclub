// import { useEffect, useState } from "react"
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id : number;
    name: string;
    background_image : string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;

}

const useGames = (selectedGenre: Genre | null ) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

// interface FetchGamesResponse {
//     count : number;
//     results : Game[]

// }

// const useGames = () => {    
//     const [games, setGames] =  useState<Game[]>([]);
//     const [error, setError] =  useState('');
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController();
//             setLoading(true);

//             apiClient.get<FetchGamesResponse>('/games')
//             .then(res => {
//                 setGames(res.data.results);
//                 setLoading(false);
//             })   
//             .catch(err => {
//                 if (err instanceof CanceledError) return;
//                 setError(err.message)
//                 setLoading(false);
//             })
        
//             // clean up func for useeffect
//         return () => controller.abort()
        
//         // dedepdent array 
//     },[])
//   return { games, error, isLoading};
// }

export default useGames;