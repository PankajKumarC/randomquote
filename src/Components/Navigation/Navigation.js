import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Navi.css';

const Navigation = ({loggedIn, onSignOut}) => {
	if(loggedIn) {
		return (
			<nav style={{display:'flex', justifyContent: 'flex-end'}}>
           		<p className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white' onClick={onSignOut}><Link style={{ textDecoration: 'none', color:'#19A974' }} to="/">Sign Out</Link></p>
         	</nav>
		);
	} else {
		return (
			<nav style={{display:'flex', justifyContent: 'flex-end'}}>
           	<p className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white' ><Link style={{ textDecoration: 'none', color:'#19A974' }} to="/">Home</Link></p>
           	<p className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white' ><Link style={{ textDecoration: 'none',color:'#19A974' }} to="/SignIn/">Sign In</Link></p>
           	<p className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'><Link style={{ textDecoration: 'none',color:'#19A974' }} to="/SignUp/">Sign Up</Link></p>
         	</nav>
        );
	}
}

export default Navigation;

