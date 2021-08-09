import { Box, Text } from '@chakra-ui/react';

export const Portfolio = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      fontFamily='Heebo'
      letterSpacing='1px'
    >
      <Box
        bgColor='#ffe8dc'
        height={{ base: '20%', lg: '30%' }}
        marginBottom='1rem'
      >
        <Text
          width={{ base: '90%', lg: '80%' }}
          mx='auto'
          marginTop={{ base: '1rem', lg: '3rem' }}
          fontSize='3rem'
          fontFamily='Overpass Mono'
          color='#AA9D94'
        >
          Working on it! &#128516;
        </Text>
      </Box>
    </Box>
  );
};