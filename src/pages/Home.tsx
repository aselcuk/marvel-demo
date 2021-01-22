import { Avatar, Box, Grid, HStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import marvelService from 'src/service/marvel-service';

export default function Home() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const response = await marvelService.getCharacters();

        setCharacters(response.data.results);
    };

    return (
        <Box
            p='30px'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >

            <Grid templateColumns={['100%', 'repeat(2, 1fr)']} gap={8}>
                {
                    characters.map((character) => (
                        <Link
                            key={character.id}
                            to={`/detail/${character.id}`}
                        >
                            <HStack
                                boxShadow='md'
                                py='2'
                                px='4'
                                bg='white'
                                rounded='md'
                                spacing='12px'
                            >
                                <Avatar size='lg' name={character.name} src={character.thumbnail.path + '.' + character.thumbnail.extension} />
                                <Text fontSize='xl'>{character.name}</Text>
                            </HStack>
                        </Link>
                    ))
                }
            </Grid>
        </Box>
    );
}
