import React from 'react'
import './home.css'
import NewDrops from './NewDrops'
import Poy from './Poy'
import Reviews from './Reviews'
import {getProduct} from "../../actions/productAction"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import Loader from "../Layout/Loader/Loader"
import {useAlert} from 'react-alert';

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const {loading, error, products} = useSelector(state => state.products);

    useEffect(() => {
        if(error){
            return alert.error(error);
        }
        dispatch(getProduct());
    }, [dispatch, alert, error]);

    return (
      <>
        {loading ? (
            <Loader/>
        ) : (
            <>
                <div className='homecontainer'>
                    <div className='homeheading'>
                        <span className='homedoit'>do it</span>
                        <span className='homeheadingrigt'> right</span>
                    </div>
                    <Poy/>
                    <NewDrops products={products.slice(0,4)}/>
                    {/* <Reviews/> */}
                </div>
            </>
        )}
      </>
    )
}

export default Home
