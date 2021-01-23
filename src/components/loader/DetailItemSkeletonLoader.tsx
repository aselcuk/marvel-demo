import { Box, Divider, Skeleton, SkeletonCircle, SkeletonText, VStack } from '@chakra-ui/react';

export default function DetailItemSkeletonLoader() {
    return (
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
