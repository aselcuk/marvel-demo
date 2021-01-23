import { Box, Grid, HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CharacterListItem from 'src/components/list-item/CharacterListItem';
import { Character } from 'src/models/Character';
import marvelService from 'src/service/marvel-service';

export default function Home() {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const response = await marvelService.getCharacters();

        setCharacters(response);
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
                    characters.length > 0 ? characters.map((character) => (
                        <CharacterListItem key={character.id} character={character} />
                    )) :

                        Array(16).fill(null, 0, 16).map((v, i) => (
                            <HStack
                                key={i}
                                boxShadow='md'
                                py='2'
                                px='4'
                                bg='white'
                                rounded='md'
                                spacing='12px'
                                maxW='351px'
                            >
                                <SkeletonCircle size='14' />
                                <Skeleton h='20px' w='200px' ml='4' />
                            </HStack>
                        ))
                }
            </Grid>
        </Box>
    );
}
