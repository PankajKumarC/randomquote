import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path="/" exact strict component={Home}/>
          <Route path="/SignIn/" exact strict component={SignIn}/>
          <Route path="/SignUp/" exact strict component={SignUp}/>
          </div>
      </Router>
    );
  }
}

export default App;
