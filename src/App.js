import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import PokemonPage from './pages/PokemonPage';
import PokemonDetails from './pages/PokemonDetails';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Route exact path='/' component = {PokemonPage}/>
        <Route path='/pokemon/:id' component={PokemonDetails}/>
      </Container>
    </Router>
  );
}

export default App;
