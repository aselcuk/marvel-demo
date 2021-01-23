import { Avatar, Box, Divider, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from 'src/models/Character';
import marvelService from 'src/service/marvel-service';

export default function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState<Character>();

    useEffect(() => {
        getComicsByCharacterId(id);
    }, [id]);

    const getComicsByCharacterId = async (characterId) => {
        const response = await marvelService.getCharacterById(characterId);

        setCharacter(response);
    };

    return (
        character ?
            <Box
                p='30px'
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >

                <Box
                    boxShadow='md'
                    py='2'
                    px='4'
                    bg='white'
                    rounded='md'
                    maxW='800px'
                >
                    <Box
                        display='flex'
                        alignItems='flex-start'
                    >
                        <Avatar size='lg' name={character.name} src={character.thumbnail} />

                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            ml='4'
                        >
                            <Text fontSize='xl' color='red.500'>{character.name}</Text>
                            <Text fontSize='md'>{character.description}</Text>
                        </Box>
                    </Box>

                    <Divider my='4' />

                    <Text
                        fontSize='xl'
                        textAlign='center'
                        mb='4'
                        color='red.500'
                    >
                        COMICS
                    </Text>
                    <UnorderedList>
                        {
                            character.comics.map((comicBook) => (
                                <ListItem key={comicBook.id}>{comicBook.title}</ListItem>
                            ))
                        }
                    </UnorderedList>
                </Box>

            </Box> :
            <Box />
    );
}
