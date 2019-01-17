import React, {Component} from 'react'
import photo from '../../images/plastic_to_fabric.png'
import './About.css'

class About extends Component{
    render(){
        return(
            <div className='about-main'>
                <h1>It's Simple</h1>
                <img src={photo} alt=''/>
                <h1>Give Back What You Put In!</h1>
            </div>
        )
    }
}

export default About