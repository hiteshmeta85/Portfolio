import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box
      fontFamily='Heebo'
      fontWeight='500'
      fontSize='1rem'
      display='flex'
      flexDirection={{ base: 'column', lg: 'row' }}
      mx='auto'
      my='1rem'
      color='#8E9775'
      letterSpacing='2px'

    >
      <Text margin='0 0.6rem'><Link to='/about'>ABOUT</Link></Text>
      <Text margin='0 0.6rem'><Link to='/projects'>PROJECTS</Link></Text>
      <Text margin='0 0.6rem'><Link to='/contact'>CONTACT</Link></Text>

    </Box>
  );
};
