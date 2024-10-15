// import { useEffect, useState } from "react"
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "../hooks/useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = ()=> useData<Genre>('/genres')





// interface FetchGenreResponse {
//     count: number;
//     results: Genre[];
// }



// const useGenres = () => {
//     const [genres, setGenres] =  useState<Genre[]>([]);
//     const [error, setError] =  useState('');
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController();
//             setLoading(true);

//             apiClient.get<FetchGenreResponse>('/games')
//             .then(res => {
//                 setGenres(res.data.results);
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
//   return { genres, error, isLoading};
// };

export default useGenres;