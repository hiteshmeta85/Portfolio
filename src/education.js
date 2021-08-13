import { Box, List, ListItem, Text } from '@chakra-ui/react';
import { HomeButton } from './components/homeButton';

export const Education = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      height='100vh'
      fontFamily='Heebo'
      letterSpacing='1px'
    >
      {/*Home button added from component*/}
      <HomeButton />

      <Box
        bgColor='#ffe8dc'
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
          Education
        </Text>
      </Box>

      <Box width={{ base: '90%', lg: '80%' }}
           mx='auto'
      >
        <Box
          marginBottom='1rem'
        >
          <Text fontSize='1.3rem' fontFamily='Poppins' fontWeight='600' color='#7D5A50' marginBottom='1rem'>Primary and
            Secondary
            Education</Text>
          <Text fontSize='1rem'> Gregorian Public School , Raigad , MH-India</Text>
          <List padding='0.5rem 0 0.5rem 1.5rem' backgroundColor='#ffe8dc' fontWeight='400' fontFamily='Heebo'>
            <ListItem>- Secured 92% in X th grade (2nd in Class)</ListItem>
            <ListItem>- Secured 82% in IX th grade (3rd in Class)</ListItem>
            <ListItem>- Student of the year 2017-18</ListItem>
            <ListItem>- Peer Group Leader in Mathematics and Science</ListItem>
          </List>
        </Box>

        <Box

          marginBottom='1rem'>
          <Text fontSize='1.3rem' fontFamily='Poppins' fontWeight='600' color='#7D5A50' marginBottom='1rem'>Higher
            Secondary
            Education</Text>
          <Text fontSize='1rem'> MNR School Of Excellence , Navi Mumbai , MH-India</Text>
          <List padding='0.5rem 0 0.5rem 1.5rem' backgroundColor='#ffe8dc' fontWeight='400' fontFamily='Heebo'>
            <ListItem>- Secured 74.4% in XII th grade</ListItem>
            <ListItem>- Secured 80% in XI th grade (5th in Class)</ListItem>
          </List>
        </Box>

        <Box

          marginBottom='1rem'>
          <Text fontSize='1.3rem' fontFamily='Poppins' fontWeight='600' color='#7D5A50' marginBottom='1rem'>Tertiary
            Education /
            Under-Graduate</Text>
          <Text fontSize='1rem'> Pillai College Of Engineering , Navi Mumbai , MH-India</Text>
          <List padding='0.5rem 0 0.5rem 1.5rem' backgroundColor='#ffe8dc' fontWeight='400' fontFamily='Heebo'>
            <ListItem>- Currently pursuing Computer Engineering (First Year)</ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};