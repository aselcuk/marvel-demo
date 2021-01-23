import { Avatar, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CharacterListItem({ character }) {
    return (
        <Link
            to={`/detail/${character.id}`}
        >
            <HStack
                boxShadow='md'
                py='2'
                px='4'
                bg='white'
                rounded='md'
                spacing='12px'
                maxW='351px'
            >
                <Avatar size='lg' name={character.name} src={character.thumbnail} />
                <Text fontSize='xl'>{character.name}</Text>
            </HStack>
        </Link>
    );
}
