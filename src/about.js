import { Box, Image, Link, Text } from '@chakra-ui/react';
import { HomeButton } from './components/homeButton';

export const About = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      height='100vh'
    >
      {/*Home button added from component*/}
      <HomeButton />

      <Box
        bgColor='#ffe8dc'
      >
        <Text
          width={{ base: '90%', lg: '80%' }}
          mx='auto'
          marginTop={{base:'1rem',lg:'3rem'}}
          fontSize='3rem'
          fontFamily='Overpass Mono'
          color='#AA9D94'
        >
          About
        </Text>
      </Box>
      <Box

        display='flex'
        height='60%'
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        width={{ base: '100%', lg: '80%' }}
        mx='auto'
        color='#7D5A50'
      >

        <Box
          width={{ base: '90%', lg: '60%' }}
          fontFamily='Overpass Mono'>
          <Text
            mx='auto'
            textAlign='justify'
            marginBottom='1rem'
          >
            Hello! My name is Hitesh Meta, and I'm a Front-End Developer, living in Mumbai,India. I'm a first year
            Computer
            Science Student, pursuing
            my degree from Mumbai University.
          </Text>
          <Text
            mx='auto'
            textAlign='justify'
          >
            I have a diverse set of skills, ranging from design, to HTML + CSS + Javascript. I also have an experience
            in using Front-End Libraries such as React , Bootstrap and Chakra UI.
          </Text>
          <Text
            marginTop='1rem'
            color='#8E9775'
            letterSpacing='1px'
          >
            <Link href='https://twitter.com/MetaHitesh85'>
              @MetaHitesh85
            </Link>
          </Text>
        </Box>
        <Image
          src='/images/hitesh.jpg'
          alt='hitesh-profile-pic'
          maxWidth={{ base: '200px', lg: '250px' }}
          maxHeight={{ base: '200px', lg: '250px' }}
          borderRadius='50%'
          order={{ base: '-99', lg: '99' }}
          padding={'1rem 1rem'}
        />
      </Box>
    </Box>
  );
};
