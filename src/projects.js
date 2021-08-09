import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HomeButton } from './components/homeButton';

export const Projects = () => {

  const list_of_projects = [
    {
      name: 'TWITTER LOGIN PAGE',
      link: 'https://hiteshmeta85.github.io/responive-twitter-login-page/',
      skills: 'HTML & CSS',
      info: 'This was created on 6th May 2021',
    },
    {
      name: 'RESPONSIVE NAVBAR',
      link: 'https://updated-2-css.netlify.app',
      skills: 'HTML CSS REACT CHAKRA UI',
      info: 'This was created on 28th June 2021',
    }];

  const Lists = () => {
    return (
      <Box>
        {list_of_projects.map((projects) => {
          return <List list={projects} />;
        })}
      </Box>
    );
  };

  const List = (props) => {
    const { name, link, skills, info } = props.list;
    return (
      <Box
        marginBottom='1rem'
        bgColor='#F9F3F3'
        padding='1rem 0 1rem 1rem'
        letterSpacing='1px'
        mx='auto'
      >
        <Text><Button padding='0.5rem' letterSpacing='5px' backgroundColor='#BBBBBB' marginBottom='0.8rem'
                      fontFamily='Poppins'><a href={link}>{name}</a></Button></Text>
        <Text display='inline' backgroundColor='#ffffff' padding='0 0.5rem' borderRadius='0.375rem'>{skills}</Text>
        <Text padding='0 0.5rem' marginTop='0.5rem'>{info}</Text>
      </Box>
    );
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      fontFamily='Heebo'
      letterSpacing='1px'

    >
      {/*Home button added from component*/}
      <HomeButton />

      <Box
        bgColor='#ffe8dc'
        height={{ base: '20%', lg: '30%' }}
        marginBottom='1rem'
        paddingLeft='auto'
      >

        <Text
          width={{ base: '90%', lg: '80%' }}
          mx='auto'
          marginTop={{ base: '1rem', lg: '3rem' }}
          fontSize='3rem'
          fontFamily='Overpass Mono'
          color='#AA9D94'
        >
          Projects
        </Text>

      </Box>

      <Box width={{ base: '90%', lg: '80%' }} mx='auto'>
        <Lists />
      </Box>
      <Box>
        <Text width={{ base: '90%', lg: '80%' }}
              mx='auto'
              marginTop={{ base: '1rem', lg: '3rem' }}
              fontSize='1rem'
              fontFamily='Overpass Mono'
              color='#AA9D94'>
          Adding new projects soon!
        </Text>
      </Box>
    </Box>
  );
};
