import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <NavBar>
      <Route path="/">Home Page</Route><br></br>
      <Route path="/movies">Movies</Route><br></br>
      <Route path="/directors">Directors</Route><br></br>
      <Route path="/actors">Actors</Route><br></br>
      </NavBar>
    </Router>
  );
};

export default App
