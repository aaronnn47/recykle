import React, {Component} from 'react'
import './Shop.css'
import blackHoodie from '../../images/black_hoodie.png'
import beanie from '../../images/beanie.png'
import mensCamo from '../../images/mens_camo.png'
import womensT from '../../images/womens_whites.png'
import purpleHoodie from '../../images/purple_hoodie.png'

class Shop extends Component{
    render(){
        return(
            <div className='shop-body'>
                {/* <img src={blackHoodie} alt=''/>
                <img src={beanie} alt=''/>
                <img src={mensCamo} alt=''/>
                <img src={womensT} alt=''/>
                <img src={purpleHoodie} alt=''/> */}
                <p>Products coming soon</p>
            </div>
        )
    }
}

export default Shop