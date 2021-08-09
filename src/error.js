import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (

    <Box
      textAlign='center'
      fontSize='3rem'
      paddingTop='2rem'
    >
      <Text>Error Page Not Found</Text>
      <Link to='/'><Button>Back Home</Button></Link>
    </Box>
  );
};