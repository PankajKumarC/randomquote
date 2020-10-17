import React from 'react';
import './Quote.css';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from './1.jpeg';


const Home = () => {
	return (
		<div>
			<h1 className="white" style={{display: 'flex', justifyContent: 'center'}}>Random Quote Generator</h1>
			<h3 className="Quote white">Quote Of The Day :</h3>
		    <Carousel emulateTouch={true} swipeable={true} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true} >
                <div>
                    <img width="315" height="315" src={image} />
                </div>
                <div>
                    <img width="315" height="315" src={image} />
                    <h1 className="white"> </h1>                    
                </div>
                </Carousel>
		</div>
	);
}

export default Home;