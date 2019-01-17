import React, { Component } from 'react';
import './Home.css';
import image from '../../images/plastic_ocean.jpg'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="header">
          <div className='title'>
            <h1>Recykle.</h1>
          </div>
        </div>

          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
          </div>
        
        <div className='home-body'>
          <img src={image} alt=''/>
        </div>

        <div className="quote">
          <p>Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett</p>
        </div>

      </div>
    );
  }
}

export default Home;
