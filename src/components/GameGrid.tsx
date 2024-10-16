import { SimpleGrid, Text } from "@chakra-ui/react";  
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";



const GameGrid = () => {
        const {data, error, isLoading} = useGames()
        const skeletons = [1,2,3,4,5,6];

  return (
    
    <div>
        {error && <Text>{error}</Text>}
        
        <SimpleGrid columns={{sm:1 , md:2, lg:3}} padding={5} spacing={5}>
            
            {isLoading && skeletons.map(skeleton => <GameCardSkelton key={skeleton} />)}
            {data.map((game) =>(
                <GameCard key={game.id} game={game}  />
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid