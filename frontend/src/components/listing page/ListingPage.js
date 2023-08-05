import React, {useState} from 'react'
import './listingPage.css'
import {getProduct, clearErrors} from "../../actions/productAction"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import {useAlert} from 'react-alert';
import { Link, useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import Loader from '../Layout/Loader/Loader'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const categories = [
    "one",
    "two",
    "three",
    "four",
];


const ListingPage = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 350000]);
    const [category, setCategory] = useState("");

    const {error, products, loading, resultPerPage, productsCount, filteredProductsCount} = useSelector(state => state.products);

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }

    const keyword = useParams().keyword;

    const priceHandler = (event, newValue) => {
        setPrice(newValue);
    }

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword, currentPage, price, category));
    }, [dispatch, keyword, currentPage, price, category, alert, error]);

    let count = filteredProductsCount;

    const displayproducts = products.map(product=>{
        return(
            <>
                <div className='newdropsproductmainbox'>
                    <Link to={`/product/${product._id}`}>
                        <div className='listingpageproductbox'>
                            <div>
                                <img src={product.images[0].url} alt="" className='listingpageproductboximg' />
                            </div>
                        </div>
                        <div>
                            <span className='listingpageproductname'>{product.name}</span>
                        </div>
                        <div className='listingpageproductbutton'>
                            <span>View Product - </span>
                            <span className='listingpageproductpricetag'> ${product.price}</span>
                        </div>
                    </Link>
                </div>
                
            </>
        )
    })

  return (
    <>
        {loading ? <Loader/> : (
            <div className='listingpage'>

            <div className='listingpageoffercontainer'>
                <div className='listingofferbox'>
                    <img src="https://drive.google.com/u/0/uc?id=19bJNpV5lLNQ9A4NutaTj8rZyJ9kxHB-G&export=download" alt=""  className='listingofferimg'/>
                </div>
            </div>

            <div className='listingpagestartcontainer'>
                <div>
                    <h3 className='listingpageleftheading'>
                        Timeless Classics
                    </h3>
                    <span className='listingpageitemscount'>
                        {productsCount} items
                    </span>
                </div>

                {/* <div>
                    <select name="" id="" className='listingpageoption'>
                        <option disabled selected className='listingpageopt'>Select an option</option>
                        <option value="option1" className='listingpageopt'>Trending</option>
                        <option value="option2" className='listingpageopt'>Price (high to low)</option>
                        <option value="option3" className='listingpageopt'>Price (low to high)</option>
                    </select>
                </div> */}
            </div>

            <div className='lsitingpagemain'>
                <div className='listingpagemainleft'>
                    <h6 className='listingpagemainleftheading'>Filters</h6>
                    <div className="filterBox">
                        <Typography>Price</Typography>
                        <Slider 
                            value = {price}
                            onChange = {priceHandler}
                            valueLabelDisplay = "auto"
                            aria-labelledby = "range-slider"
                            min = {0}
                            max = {2500}
                        />
                        <Typography>Categories</Typography>
                        <ul className="categoryBox">
                            {categories.map((category) => (
                            <li
                                className="category-link"
                                key={category}
                                onClick={() => setCategory(category)}
                            >
                                {category}
                            </li>
                            ))}
                        </ul> 
                        </div>
                </div>


                <div className='listingpagemainright'>
                    {displayproducts}
                </div>
            </div>
                <div className="paginationBox">
                    <Pagination
                        activePage = {currentPage} 
                        itemsCountPerPage = {resultPerPage}
                        totalItemsCount = {productsCount}
                        onChange = {setCurrentPageNo}
                        nextPageText = "Next"
                        prevPageText = "Prev"
                        firstPageText = "First"
                        lastPageText = "Last"
                        itemClass = "page-item"
                        linkClass = "page-link"
                        activeClass = "pageItemActive"
                        activeLinkClass = "pageLinkActive"
                    />
                </div>
        </div>
        )}
    </>
  )
}

export default ListingPage
