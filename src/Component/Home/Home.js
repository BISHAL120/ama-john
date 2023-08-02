import React from 'react';
import images from '../../images/austin-wade-AoYT0ArTTmg-unsplash 1.png'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container-component'>
            <div className='intro'>
                <div className='discount'>
                    <p><small>Sale up to 70% off</small></p>
                </div>
                <div className='main-info'>
                    <h2 className='collection'>New Collection For Fall</h2>
                    <p className='discover'>Discover all the new arrivals of ready-to-wear collection.</p>
                </div>
                <div>
                    <Link to="/shop"><button className='button'>SHOP NOW</button></Link>
                </div>
            </div>
            <div className='images'>
                <img src={images} alt="" />
            </div>
        </div>
    );
};

export default Home;