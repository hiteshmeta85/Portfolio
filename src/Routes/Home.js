import { Box, Text} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import React from 'react';
import { Navbar } from '../components/NavbarRoutes';
export const Home = () => {

 return(

<Box paddingTop={{ base: '0.2rem', lg: '3rem' }}
     display='flex'
     flexDirection='column'
     textAlign='center'
     height='100vh'
     mx='auto'
     justifyContent='space-between'
>

  <Box>

    <Text
      fontFamily='Playfair Display'
      fontSize={{ base: '5rem', lg: '7rem' }}
      lineHeight='1'
      fontWeight='400'
      color='#AA9D94'
      letterSpacing='4px'
      marginTop='3rem'
    >
      HITESH META
    </Text>

    <Text fontFamily='Heebo'
          fontWeight='400'
          marginBottom='1rem'
          color='#A2B29F'
          letterSpacing='2px'
    >
      .humble .curious .adventurous
    </Text>
    <Text fontFamily='Playfair Display'
          fontWeight='400'
          fontSize='1.5rem'
          color='#7D5A50'
          letterSpacing='2px'
    >
      A FULL-STACK WEB DEVELOPER
    </Text>
    <Text fontFamily='Heebo'
          fontWeight='400'
          color='#A2B29F'
          letterSpacing='2px'>
      .html .css .js .react .chakraUI
    </Text>
    <Text fontFamily='Heebo'
          fontWeight='400'
          color='#A2B29F'
          letterSpacing='2px'>
      .nodejs expressjs postgres typeorm
    </Text>

  </Box>

  <Navbar />
  <Box
    mx='auto'
  >
    <Text
      fontFamily='Heebo'
      fontWeight='500'
      fontSize='1rem'
      color='#7D5A50'
      letterSpacing='2px'
    >
      CONNECT WITH ME
    </Text>
    <Box
      display='flex'
      justifyContent='space-between'
      marginTop='0.5rem'
      color='#7D5A50'
      marginBottom='2rem'
    >
      <Text><a href='https://twitter.com/MetaHitesh85'><FaTwitter size='1.5rem' /></a></Text>
      <Text><a href='https://www.linkedin.com/in/hitesh-meta-327279164'><FaLinkedin size='1.5rem' /></a></Text>
      <Text><a href='https://github.com/hiteshmeta85'><FaGithub size='1.5rem' /></a></Text>
      <Text><a href='https://www.instagram.com/meta.hitesh85/'><FaInstagram size='1.5rem' /></a></Text>
    </Box>
  </Box>

</Box>

)}
