import { HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

export default function ListItemSkeletonLoader() {
    return (
        <HStack
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
    );
}
