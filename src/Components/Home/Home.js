import React, { Component } from 'react';
import './Home.css';
import image from '../../images/plastic_ocean.jpg'
import {Link} from 'react-router-dom'
import mens from '../../images/recykle_plain.png'
import hoodie from '../../images/recykle_blackhoodie.png'
import womens from '../../images/recykle_women_plain.png'

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        
        <div className="header">
            <h1>Recykle.</h1>
            {/* <div>Cart</div> */}
        </div>

          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/blog'>About</Link>
            <Link to='/about'>Contact</Link>
          </div>
        
          <div className='home-body'>
           <img src={image} alt=''/>
          </div>

          <div className='featured-header'>
            <h3>Featured Products</h3>
          </div>

          <div className='home-product-body'>

            <div className='home-product'>
              <h3>White Shirt</h3>
              <img src={mens} alt=''/>
              <p>Made in the USA!</p>
              <p>50/50 cotton polyester</p>
              <p>Adult</p>
              <p>Product coming soon</p>
            </div>

            <div className='home-product'>
              <h3>Black Hoodie</h3>
              <img src={hoodie} alt=''/>
              <p>Made in the USA</p>
              <p>50/50 blend cotton / polyester</p>
              <p>Adult</p>
              <p>Product coming soon</p>
            </div>

            <div className='home-product'>
              <h3>Womens Shirt</h3>
              <img src={womens} alt=''/>
              <p>Made in the USA</p>
              <p>50 / 50 blend cotton/polyester</p>
              <p>Adult</p>
              <p>Products coming soon</p>
            </div>

        </div>

      </div>
    );
  }
}

export default Home;
