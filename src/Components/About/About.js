import React, {Component} from 'react'
import photo from '../../images/plastic_to_fabric.png'
import './About.css'

class About extends Component{
    render(){
        return(
            <div className='about-main'>
                <h1>It's Simple</h1>

                <form action="https://formspree.io/iamaaronkim@gmail.com" method="POST" className='form'>
                    <h1>Join Our Mailing List!</h1>
                    <h3>Name</h3>
                    <input type="text" name="name" className='comment'/>
                    <h1>Email</h1>
                    <input type="email" name="_replyto" className='email-form'/>
                    <input type="submit" value="Send"/>
                </form>

            </div>
        )
    }
}

export default About