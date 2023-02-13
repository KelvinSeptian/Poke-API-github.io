import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Pokemon_page from './pages/Pokemon_page';
import Pokemon_details from './pages/Pokemon_details';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Route exact path='/' component = {Pokemon_page}/>
        <Route path='/pokemon/:id' component={Pokemon_details}/>
      </Container>
    </Router>
  );
}

export default App;
