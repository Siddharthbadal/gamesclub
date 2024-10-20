import { Image, List, ListItem, HStack, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-urls";


interface Props{
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const {data, isLoading, error} = useGenres();

    if(isLoading) return <Spinner   />
    if(error) return null;


  return (
        <List>
            {data.map(genre => 
                <ListItem key={genre.id} padding ={'5px'}>
                    <HStack>
                        <Image boxSize={'32px'}
                        borderRadius={8}
                         src={getCroppedImageUrl(genre.image_background)}/>

                        <Button 
                                className="text-lg" variant="Link"
                                onClick={()=>onSelectGenre(genre)}    
                            >
                                {genre.name}
                            </Button>
                    </HStack>
                </ListItem>
            )}
        </List>
  )
}

export default GenreList