import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

class App extends Component {
  state = {
    loggedIn: false
  }
  onClickSignIn = (data) => {
    if(data === 'success') {
      this.setState({loggedIn: true})
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation onClickSignIn={this.onClickSignIn} />
          <Route path="/" exact strict component={Home}/>
          <Route path="/SignIn/" exact strict component={SignIn}/>
          <Route path="/SignUp/" exact strict component={SignUp}/>
          </div>
      </Router>
    );
  }
}

export default App;
