import { Image, List, ListItem, HStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-urls";


const GenreList = () => {
    const {data} = useGenres();

  return (
        <List>
            {data.map(genre => 
                <ListItem key={genre.id} padding={'5px'}>
                    <HStack>
                        <Image boxSize={'32px'}
                        borderRadius={8}
                         src={getCroppedImageUrl(genre.image_background)}/>
                        <Text className="text-lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
  )
}

export default GenreList