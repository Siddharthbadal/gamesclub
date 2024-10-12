import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./gameCardSkelton";


const GameGrid = () => {
        const {games, error, isLoading} = useGames()
        const skeletons = [1,2,3,4,5,6];

  return (
    
    <div>
        {error && <Text>{error}</Text>}
        
        <SimpleGrid columns={{sm:1 , md:2, lg:3}} padding={10} spacing={10}>
            
            {isLoading && skeletons.map(skeleton => <GameCardSkelton key={skeleton} />)}
            {games.map((game) =>(
                <GameCard key={game.id} game={game}  />
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid