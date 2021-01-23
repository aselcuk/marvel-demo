import { Box, Text, Center, Stack, Skeleton, SkeletonCircle, SkeletonText, HStack, VStack, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetailItem from 'src/components/detail-item/CharacterDetailItem';
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
                <Box display='flex' alignItems='center' justifyContent='center' p='4'>
                    <Box padding='6' boxShadow='md' bg='white' maxW='500px' w='100%'>
                        <VStack>
                            <SkeletonCircle size='14' />
                            <Skeleton h='20px' w='200px' />
                        </VStack>
                        <SkeletonText mt='4' noOfLines={1} spacing='4' />
                        <Divider my='4' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' />
                    </Box>
                </Box>
    );
}
