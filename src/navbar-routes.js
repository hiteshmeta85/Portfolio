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
      height='20%'
      marginBottom='1rem'
      marginTop='1rem'
      color='#8E9775'
      letterSpacing='2px'
    >
      <Text margin='0 0.6rem' ><Link to='/about'>ABOUT</Link></Text>

      <Text margin='0 0.6rem' ><Link to='/education' >EDUCATION</Link></Text>
      <Text margin='0 0.6rem' ><Link to='/projects' >PROJECTS</Link></Text>
      <Text margin='0 0.6rem' ><Link to='/contact' >CONTACT</Link></Text>

    </Box>
  );
};

// _hover={{borderBottom:'1px solid #AA9D94'}}
// <Text margin='0 0.6rem' ><Link to='/portfolio' >PORTFOLIO</Link></Text>