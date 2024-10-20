import { SimpleGrid, Text } from "@chakra-ui/react";  
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import { Genre } from "../hooks/useGenre";

interface Props{
  selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre}: Props ) => {
        const {data, error, isLoading} = useGames(selectedGenre)
        const skeletons = [1,2,3,4,5,6];

  return (
    
    <div>
        {error && <Text>{error}</Text>}
        
        <SimpleGrid columns={{sm:1 , md:2, lg:3}} padding={1} spacing={7}>
            
            {isLoading && skeletons.map(skeleton => <GameCardSkelton key={skeleton} />)}
            {data.map((game) =>(
                <GameCard key={game.id} game={game}  />
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid