import React, { Component } from 'react';
import './Home.css';
import image from '../../images/plastic_ocean.jpg'
import {Link} from 'react-router-dom'
import mens from '../../images/mens_white.png'
import hoodie from '../../images/black_hoodie.png'
import womens from '../../images/womens_whites.png'

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
            <Link to='/about'>New Releases</Link>
          </div>
        
        <div className='home-body'>
          <img src={image} alt=''/>
        </div>

        <div className='featured-product'>
          <h3>Featured Products</h3>

          <div className='featured-images'>
            <div className='white-shirt'>
              <h3>White Shirt</h3>
              <img src={mens} alt=''/>
              {/* <p>Descriptions</p>
              <p>Descriptions</p>
              <p>Descriptions</p>
              <p>Descriptions</p> */}
            </div>

            <div className='white-shirt'>
              <h3>Black Hoodie</h3>
              <img src={hoodie} alt=''/>
              {/* <p>Descriptions</p>
              <p>Descriptions</p>
              <p>Descriptions</p>
              <p>Descriptions</p> */}
            </div>

            <div className='white-shirt'>
              <h3>Womens Shirt</h3>
              <img src={womens} alt=''/>
              {/* <p>Descriptions</p>
              <p>Descriptions</p>
              <p>Descriptions</p>
              <p>Descriptions</p> */}
            </div>

          </div>
        </div>

        {/* <div className='product-description'>

        </div> */}

      </div>
    );
  }
}

export default Home;
