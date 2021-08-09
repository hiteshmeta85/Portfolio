import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  FormLabel,
  Stack, Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { HomeButton } from './components/homeButton';

export const Contact = () => {
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
          Contact Me
        </Text>
      </Box>
      <Box width={{ base: '80%', lg: '40%' }}
           mx={{ base: 'auto', lg: '10%' }}
           mt='1.5rem'
           marginBottom='1rem'>
        <Box textAlign='left' fontFamily='Heebo'>
          <form action='https://formspree.io/f/mpzkljvq' method='POST'>
            <Stack spacing='0.6rem'>
              <FormControl>
                <FormLabel for='firstName'>First Name</FormLabel>
                <Input type='text' id='firstName' name='firstName' placeholder='' autocomplete='off' />
              </FormControl>
              <FormControl>
                <FormLabel for='lastName'>Last Name</FormLabel>
                <Input type='text' placeholder='' autocomplete='off' id='lastName' name='lastName' />
              </FormControl>
              <FormControl>
                <FormLabel for='email'>Email</FormLabel>
                <Input type='email' autocomplete='off' id='email' name='email' />
              </FormControl>
              <FormControl>
                <FormLabel for='message'>How May I Help You?</FormLabel>
                <Textarea autocomplete='off' height='6rem' pd='' fontSize='1rem' paddingTop='1rem' id='message'
                          name='message' />
              </FormControl>
            </Stack>
            <Button mt='1.5rem' width='full' type='submit' bgColor='#ffe8dc'>
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
