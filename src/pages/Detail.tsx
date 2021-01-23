import { Box, Text, Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetailItem, DetailItemSkeletonLoader } from 'src/components';
import { Character } from 'src/models/Character';
import marvelService from 'src/service/marvel-service';

export default function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState<Character>();
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        getComicsByCharacterId(id);
    }, [id]);

    const getComicsByCharacterId = (characterId) => {
        marvelService.getCharacterById(characterId).then((response) => {
            setCharacter(response);
        }).catch(() => {
            setIsError(true);
        });
    };

    return (
        isError ?
            <Center m='4' p='4' boxShadow='md' bg='white'>
                <Text fontSize='md'>There is no item to show</Text>
            </Center> :
            character ?
                <Box
                    p='30px'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <CharacterDetailItem character={character} />
                </Box> :
                <DetailItemSkeletonLoader />
    );
}
