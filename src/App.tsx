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
      <Box>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/detail'>
            <Detail />
          </Route>
        </Switch>
        
      </Box>
    </Router>
  );
}

export default App;
