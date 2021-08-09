import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const HomeButton = () => {
  return (
    <Box textAlign='right' paddingRight={{base:'5%',lg:'10%'}} bgColor='#ffe8dc' >
      <Button
        display='inline'
        fontFamily='Overpass Mono'
        fontWeight='500'
        letterSpacing='1px'
      >
        <Link to='/'>Home</Link>
      </Button>
    </Box>
  )
}