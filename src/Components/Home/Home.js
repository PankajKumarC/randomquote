import React from 'react';
import './Quote.css';

const Home = () => {
	return (
		<div>
			<h1 style={{display: 'flex', justifyContent: 'center'}}>Random Quote Generator</h1>
			<h3 className="Quote">Quote Of The Day :</h3>
		</div>
	);
}

export default Home;