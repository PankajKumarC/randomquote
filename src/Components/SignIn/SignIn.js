import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';



const SignIn = ({changeState}) => {

	
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0 green">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6 green" for="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-white hover-bg-white hover-green w-100" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6 green" for="password">Password</label>
		        <input className="b pa2 input-reset ba bg-white hover-bg-white hover-green w-100" type="password" name="password"  id="password" />
		      </div>
		    </fieldset>
		    <div className="">
		  <p className='center link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white' onClick={changeState}><Link style={{ textDecoration: 'none',color:'#19A974' }} to="/">Sign In</Link></p>
		    </div>
		    <div className="lh-copy mt3">
		      <p className='center link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'><Link style={{ textDecoration: 'none',color:'#19A974' }} to="/SignUp/">Sign Up</Link></p>
		    </div>
		  </form>
		</main>
		</article>
			);
		}

export default SignIn;