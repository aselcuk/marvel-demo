import {
    Box,
    Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box
            bg='white'
            h='40px'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Link
                to='/'
            >
                <Image
                    boxSize='60px'
                    objectFit='contain'
                    src='/assets/img/logo.jpg'
                    alt='Marvel Logo'
                />
            </Link>
        </Box>
    );
}
