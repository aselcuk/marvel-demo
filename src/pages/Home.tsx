import { Box, Center, Grid, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CharacterListItem, ListItemSkeletonLoader } from 'src/components';
import { Character } from 'src/models/Character';
import useBottom from 'src/hooks/useBottom';
import marvelService from 'src/service/marvel-service';
import { CharacterList } from 'src/models/CharacterList';

export default function Home() {

    const [characterList, setCharacterList] = useState<CharacterList>({ total: 0, characters: [] });
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isError, setIsError] = useState<boolean>(false);
    const [showLoadMoreSpinner, setShowLoadMoreSpinner] = useState<boolean>(false);
    const { isBottom, setIsBottom } = useBottom();

    useEffect(() => {
        getCharacters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    useEffect(() => {
        if (isBottom && characterList.total !== characterList.characters.length) {
            setShowLoadMoreSpinner(true);
            setCurrentPage(prevState => prevState + 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isBottom]);

    const getCharacters = () => {

        marvelService.getCharacters(currentPage).then((response: CharacterList) => {

            const characters = [...characterList.characters, ...response.characters];
            const characterListItem = new CharacterList({
                total: response.total,
                characters: characters
            });

            setCharacterList(characterListItem);
            setIsBottom(false);
            setShowLoadMoreSpinner(false);

        }).catch(() => {
            setIsError(true);
            setShowLoadMoreSpinner(false);
        });
    };

    return (
        <Box
            p='30px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >

            {
                isError ?
                    <Center m='4' p='4' boxShadow='md' bg='white'>
                        <Text fontSize='md'>There is no item to show</Text>
                    </Center> :
                    <Grid templateColumns={['100%', 'repeat(2, 1fr)']} gap={8}>
                        {
                            characterList.characters.length > 0 ? characterList.characters.map((character: Character) => (
                                <CharacterListItem key={character.id} character={character} />
                            )) :

                                Array(16).fill(null, 0, 16).map((v, i) => (
                                    <ListItemSkeletonLoader key={i} />
                                ))
                        }
                    </Grid>

            }

            {
                showLoadMoreSpinner && characterList.characters.length > 0 && <Spinner color='red.500' my='2' />
            }
        </Box>
    );
}
