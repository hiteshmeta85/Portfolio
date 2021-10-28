import React from 'react';
import { Home } from './Routes/Home';
import { About } from './Routes/About';
import { Error } from './components/Error';
import { Projects } from './Routes/Projects';
import { Portfolio } from './Routes/Portfolio';
import { Contact } from './Routes/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

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
