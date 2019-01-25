import React, {Component} from 'react'
import './Shop.css'
import shirt from '../../images/recykle.png'


class Shop extends Component{
    render(){
        return(
            <div className='shop-body'>
                <img src={shirt} alt=''/>
                <p>New Release</p>
                <p>100% cotton</p>
                <p>Pricing coming soon</p>
            </div>
        )
    }
}

export default Shop