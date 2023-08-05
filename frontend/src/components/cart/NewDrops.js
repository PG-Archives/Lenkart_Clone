import React from 'react'
import { Link } from 'react-router-dom'
import './newDrops.css'

const NewDrops = ({products}) => {

    const displayproducts = products.map(product=>{
        return(
            <>  
                <Link to={`/product/${product._id}`}>
                    <div className='newdropsproductmainbox'>
                        <div className='newdorpsproductsbox'>
                            <div>
                                <img src={product.images[0].url} alt="" className='newdropsproductimage' />
                            </div>
                        </div>
                        <div>
                            <span className='newdorpsproductname'>{product.name}</span>
                        </div>
                        <button className='newdropsproductbutton'>
                            <span>View Product - </span>
                            <span className='newdropsproductpricetag'> ${product.price}</span>
                        </button>
                    </div>
                </Link>
                
            </>
        )
    })
    
    
  return (
    <> 
        <div className='newdropscontainer'>
            <div className='newdropsheadingbox'>
                <div className='newdropsheadingcontainer'>
                    <span className='newdropsheading'>don't miss out new drops</span>
                </div>
                
                <div>
                    <button className='newdropsbutton'>
                        shop new drops
                    </button>
                </div>
            </div>

            <div className='newdropsproductscontainer'>
                {displayproducts}
            </div>
        </div>
    </>
  )
}

export default NewDrops
