import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  constructor() {
    super();
  this.state = {
    
    loggedIn: false

  }}

  onClickSignIn = (data) => {
    if(data === 'success') {
      this.setState({loggedIn: true})
    }

  }
  onSignOut = () => {
    this.setState({loggedIn:false})
  }
    
  render() {
 

    return (
      <Router>
        <div className="App">

          <Navigation onClickSignIn={this.onClickSignIn} />


          <Route path="/" exact strict component={Home}/>
          <Route path="/SignIn/" exact strict render={() => <SignIn changeState={this.changeState}/>}/>
          <Route path="/SignUp/" exact strict render={() => <SignUp changeState={this.changeState}/>}/>
          </div>
      </Router>
    );
  }
}

export default App;
