import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/PlatformSelector'


function App() {
    
    const [selectedGenre, setSelectedGenre]  = useState<Genre | null>(null)

  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}>
        <GridItem area='nav' bg=''>
            <Navbar />
        </GridItem>
        
        <Show above='lg'>
            <GridItem area='aside' paddingX={5}>
                <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
            </GridItem>
        </Show>

        
        <GridItem area='main'>
                <PlatformSelector   />
                 <GameGrid selectedGenre={selectedGenre} />
        </GridItem>

    </Grid>
  )
}

export default App
