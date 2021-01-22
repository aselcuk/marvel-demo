import {
    HStack,
    Box,
    Image
} from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box>
            <Box
                bg='gray.50'
                h='40px'
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <Box mr='4'>
                    <Link
                        to='/'
                        exact
                    >
                        <Image
                            boxSize='60px'
                            objectFit='contain'
                            src='/assets/img/logo.jpg'
                            alt='Marvel Logo'
                        />
                    </Link>

                </Box>
                <HStack spacing='12px' fontSize='l' as='b'>
                    <NavLink
                        activeStyle={{
                            color: '#EC1D25'
                        }}
                        to='/'
                        exact
                    >
                        Home
                    </NavLink>
                    <NavLink
                        activeStyle={{
                            color: '#EC1D25'
                        }}
                        to='/detail'
                        exact
                    >
                        Detail
                    </NavLink>
                </HStack>
            </Box>
        </Box>
    );
}
