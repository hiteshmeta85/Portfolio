import React from 'react';
//pages
import { Home } from './home';
import { About } from './about';
import { Education } from './education';
import { Error } from './error';
import { Projects } from './projects';
import { Portfolio } from './portfolio';
import { Contact } from './contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/education'>
            <Education />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
