import React from 'react'
import './poy.css'
import { Link } from 'react-router-dom'

const Poy = () => {

    const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVuMX4GVECSFJp6kcQ1LHLzf1Tzt0sFTsOw&usqp=CAU'
    
  return (
    <>
        <div className='poycontainer'>
            <div className='poyimagecontainer'>
                <img src={img} alt="" className='poymainimg'/>
                
                <div className='poylefttextarea'> 
                    <div>
                        <span className='poylefttextheading'>
                            Nike air max
                        </span>
                        <div className='paylefttexttxt'>
                            Nike introducing the new air max 1 for everyone's comfort
                        </div>
                    </div> 
                    
                    <div>
                        <Link to={'/products'}>
                        <button className='poyleftbutton'>
                            shop now
                        </button>
                        </Link>
                    </div>
                </div>

                

                <div className='poyrightimagebox'>
                    <div className='poyrightimgtop'>
                        <img src="https://images.meesho.com/images/products/44009963/kxwus_512.jpg" alt="" className='poyrightimg' />
                    </div>
                    
                    <img src="https://images.meesho.com/images/products/44009963/kxwus_512.jpg" alt=""  className='poyrightimg'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Poy
