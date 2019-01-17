import React, { Component } from 'react';
import './App.css';
import image from './images/plastic_ocean.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="header">
          <div className='title'>
            <h1>Recykle.</h1>
          </div>
        </div>

          <div className='nav-links'>
            <p>Home</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>About</p>
          </div>
        
        <div className='home-body'>
          <img src={image} alt=''/>
        </div>

      </div>
    );
  }
}

export default App;
