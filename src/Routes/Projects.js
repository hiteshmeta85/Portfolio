import { Box, Button, Text } from '@chakra-ui/react';
import { HomeButton } from '../components/HomeButton';

export const Projects = () => {

  const ProjectList = [
    {
      name: 'Twitter Login Page',
      link: 'https://hiteshmeta85.github.io/responive-twitter-login-page/',
      skills: 'HTML & CSS',
      info: 'This was created on 6th May 2021',
    },
    {
      name: 'To-do List App',
      link:'https://afternoon-woodland-37937.herokuapp.com/',
      skills: 'NODE EXPRESS MONGODB',
      info: 'This was created on 17th August 2021'
    },
    {
      name: 'Daily Journal',
      link: 'https://ancient-cove-61432.herokuapp.com/',
      skills: 'NODE EXPRESS AND EJS',
      info: 'This was created on 10th August 2021',
    },
    {
      name: 'Newsletter Signup',
      link: 'https://rocky-mesa-16580.herokuapp.com/',
      skills: 'NODE EXPRESS AND MailChimp-API',
      info: 'This was created on 8th August 2021',
    }
  ];

  const Lists = () => {
    return (
      <Box>
        {ProjectList.map((projects) => {
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
          marginTop='1rem'
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
              marginTop='0.5rem'
              marginBottom='1rem'
              fontSize='1rem'
              fontFamily='Overpass Mono'
              color='#AA9D94'>
          Adding new projects soon!
        </Text>
      </Box>
    </Box>
  );
};
