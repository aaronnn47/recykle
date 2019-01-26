import React, {Component} from 'react'
import './Shop.css'
import shirt from '../../images/recykle_brand.png'
import anchor from '../../images/recykle_anchor.png'
import wave from '../../images/recykle_wave.png'
import Wsurf from '../../images/recykle_womens_surf.png'
import Wrockhand from '../../images/recykle_rockhand.png'


class Shop extends Component{
    render(){
        return(
            <div className='shop-main'>
            
                <div className='shop-header'>
                <h1>Products</h1>
                </div>

                <div className='shop-body'>
                <div className='shop-products'>
                    <img src={shirt} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>

                <div className='shop-products'>
                    <img src={anchor} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>

                <div className='shop-products'>
                    <img src={wave} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>

                <div className='shop-products'>
                    <img src={Wsurf} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>

                <div className='shop-products'>
                    <img src={Wrockhand} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Shop