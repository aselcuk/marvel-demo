import { Box, Center, Grid, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CharacterListItem, ListItemSkeletonLoader } from 'src/components';
import { Character } from 'src/models/Character';
import useBottom from 'src/hooks/useBottom';
import marvelService from 'src/service/marvel-service';

export default function Home() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { isBottom, setIsBottom } = useBottom();

    useEffect(() => {
        getCharacters();
    }, [currentPage]);

    useEffect(() => {
        if (isBottom) {
            setCurrentPage(prevState => prevState + 1);
        }
    }, [isBottom]);

    const getCharacters = () => {

        setIsLoading(true);

        marvelService.getCharacters(currentPage).then((response) => {

            setCharacters([...characters, ...response]);
            setIsBottom(false);
            setIsLoading(false);

        }).catch(() => {
            setIsError(true);
            setIsLoading(false);
        });
    };

    return (
        <Box
            p='30px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            mb='2'
        >

            {
                isError &&
                <Center m='4' p='4' boxShadow='md' bg='white'>
                    <Text fontSize='md'>There is no item to show</Text>
                </Center>
            }

            <Grid templateColumns={['100%', 'repeat(2, 1fr)']} gap={8}>
                {
                    characters.length > 0 ? characters.map((character) => (
                        <CharacterListItem key={character.id} character={character} />
                    )) :

                        Array(16).fill(null, 0, 16).map((v, i) => (
                            <ListItemSkeletonLoader key={i} />
                        ))
                }
            </Grid>

            {
                isLoading && characters.length > 0 && <Spinner color='red.500' mt='2' />
            }
        </Box>
    );
}
