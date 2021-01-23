import { Avatar, Box, Divider, ListItem, UnorderedList, Text } from '@chakra-ui/react';

export default function CharacterDetailItem({ character }) {
    return (
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
                flexDirection='column'
                alignItems='center'
            >
                <Avatar size='lg' name={character.name} src={character.thumbnail} />
                <Text fontSize='xl' color='red.500' p='2'>{character.name}</Text>

                {
                    character.description &&
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='flex-start'
                    >
                        <Text fontSize='md' p='2'>{character.description}</Text>
                    </Box>
                }
            </Box>

            <Divider my='4' />

            <Text
                fontSize='xl'
                color='red.500'
            >
                COMICS
            </Text>
            {
                character.comics.length > 0 ?
                    <UnorderedList p='2'>
                        {
                            character.comics.map((comicBook) => (
                                <ListItem key={comicBook.id}>{comicBook.title}</ListItem>
                            ))
                        }
                    </UnorderedList> :
                    <Text fontSize='md' mt='2'>There is no item to show</Text>
            }
        </Box>
    );
}
