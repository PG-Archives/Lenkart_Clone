import React, { useEffect, useState } from 'react'
import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import { useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import Loader from '../Layout/Loader/Loader'
import {addItemsToCart} from '../../actions/cartAction' 

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Product = () => {
    const {id} = useParams();
    const alert = useAlert();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch,id]);
    const {loading, product} = useSelector(state => state.productDetails);

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if(quantity >= product.Stock) return;
        const qty = quantity + 1;
        setQuantity(qty);
      }
  
    const decreaseQuantity = () => {
        if(quantity <= 1) return;
        const qty = quantity - 1;
        setQuantity(qty);
    }

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item added to cart");
    }
    
    return (
        <>
        {loading ? (
            <Loader/>
        ) : (
            <div className='product'>
                <div className='productmain'>
                    <div className='productleft'>
                        <div className='productleftimgbox'>
                            <img src="https://static.nike.com/a/images/t_default/68b1d9b7-4b7f-4068-ba8a-7dfd72bfb580/air-max-90-shoes-GsjTTK.png" alt="" className='productleftimg'/>
                        </div>
                    </div>

                    

                    <div className='productright'>
                        <div className='productname'>
                            {product.name}
                        </div>
                        <div className='productprice'>
                            ${product.price}
                        </div>

                        <div className='productspecificquantitybox'>
                            <h3>Quantity</h3>
                            <div className='productspecificbuttonscontainer'>
                                <div className='productspecificquantitychange'>
                                    <button onClick={decreaseQuantity}>-</button>
                                    <input readOnly type="number" value={quantity}/>
                                    <button onClick={increaseQuantity}>+</button>
                                </div>
                            </div>
        
                        </div>
                        
                        
                        <button className='productaddtocart' onClick={addToCartHandler}>
                            Add to Cart
                        </button>
                        
                        <button className='productbuyitnow'>
                            But it now
                        </button>

                        <div className='aboutproduct'>
                            <div className='aboutproductheading'>
                                About this product
                            </div>
                            <span>
                                {product.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )}     
        </>
    )
}

export default Product