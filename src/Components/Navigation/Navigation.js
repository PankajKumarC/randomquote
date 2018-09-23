import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Navi.css';

const Navigation = () => {
	return (
		<nav style={{display:'flex', justifyContent: 'flex-end'}}>
            <p className="Navi"><Link to="/">Home</Link></p>
            <p><Link to="/SignIn/">SignIn</Link></p>
            <p><Link to="/SignUp/">SignUp</Link></p>
         </nav>
	);
}

export default Navigation;