import React, {Component} from 'react'
import './Shop.css'
import shirt from '../../images/recykle_brand.png'
import anchor from '../../images/recykle_anchor.png'
import wave from '../../images/recykle_wave.png'
import Wsurf from '../../images/recykle_womens_surf.png'
import Wrockhand from '../../images/recykle_rockhand.png'
import Wtank from '../../images/recykle_blacktank.png'
import Wsweater from '../../images/recykle_Wsweater.png'
import Mcamo from '../../images/recykle_camo.png'
import Mbeanie from '../../images/recykle_beanie.png'
import {connect} from 'react-redux'
import {addRecykleBrand} from '../../Redux/reducer'


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
                    {/* <button
                    onClick={()=>this.props.addRecykleBrand(12.99)}
                    >Add to cart</button>
                    {this.props.cartTotal} */}
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
                    <img src={Wtank} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>

                <div className='shop-products'>
                    <img src={Wsweater} alt=''/>
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

                <div className='shop-products'>
                    <img src={Mcamo} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>

                <div className='shop-products'>
                    <img src={Mbeanie} alt=''/>
                    <p>New Release</p>
                    <p>100% cotton</p>
                    <p>Pricing coming soon</p>
                </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        total: state.cartTotal,
    }
}

export default connect(mapStateToProps,{addRecykleBrand})(Shop)