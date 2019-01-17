import React, {Component} from 'react'
import './Blog.css'

class Blog extends Component{
    render(){
        return(
            <div>
                <div className='blog-first-post'>
                    <h1>What is PET?</h1>
                    <p>Let’s start by learning what PET is. This is an abbreviation for the much longer (much less fun) term, polyethylene terephthalate; a polymer of ethylene glycol and terephthalic acid. Clearer terms? PET is the most common type of plastic resin. To create virgin PET, producers extract crude oil and natural gas from the Earth, then process and heat it to form a molten liquid. They spin this liquid into fibers to create polyester fabric, or they mold and solidify it into PET plastic containers.
                        As a fiber, polyester can be used to make anything from clothing and blankets to sleeping bags and carpeting. We usually call it polyester in this form, whereas in molded containers, PET is the more common name. In its plastic form, PET is used to hold anything from your favorite peanut butter or salad dressing to cleaning solution, mouthwash, and medication. Those disposable water bottles? PET. Chances are, most plastic containers in your house are made of this common plastic!</p>
                    <h1 className='sustainability'>So…where does sustainability come in
                    </h1>
                    <p>PET is considered a highly recyclable plastic. Used PET containers can be washed and re-melted into plasma, from which new items can be crafted. However, it can be really hard to collect clean, high quality plastics! This means very few PET containers can re-enter the cycle as food-grade containers. Less than half of plastic bottles purchased each year make it to recycling facilities. Only around 7% of those recycled are turned back into usable bottles.

                    Manufacturers may not always be able to turn all salvaged plastic into new containers, but these other plastics may find a new calling as recycled polyester fabric, or rPET. This recycled polyester fabric can be used to make products including backpacks, leggings, t-shirts, and reusable grocery bags!</p>

                </div>
            </div>
        )
    }
}

export default Blog