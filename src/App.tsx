import { Home, Detail } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Box
        bg='gray.50'
        minH='100vh'
      >
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
        </Switch>

      </Box>
    </Router>
  );
}

export default App;
