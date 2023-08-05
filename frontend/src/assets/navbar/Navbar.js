import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = () => {
  return (
    <>
        <div className='navbarmain'>
            <div className='navbarcontainer'>
                <div className='navbarleftpc'>
                    <div className='navbarleft'>
                        <Link to={'/products'}>
                            <button>
                                <span>New Drops</span>
                                <span>
                                    <img className='navbarflameimg' src="https://toppng.com/uploads/preview/free-fire-png-logo-11569068081ezy973wyyo.png" alt="" />
                                </span>
                            </button>
                        </Link>
                        <Link to={'/products'}>
                            <button>
                                <span>Products</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='navbarleftmobile'>
                    <button>
                        <img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" className='navbarleftmobileimage' alt="" />
                    </button>
                </div>

                <div className='navbarmiddle'>
                    <h2><Link to={'/'}>Kickstart</Link></h2>
                </div>

                <div className='navbarright'>
                    <Link to={'/search'}>
                        <button className='navbarpcsearch'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </Link>
                    
                    <button className='navbarrightbuttons'>
                        <Link to={'/login'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        </svg>
                        </Link>
                    </button>

                    <button className='navbarrightbuttons'>
                        <Link to={'/cart'}>
                            <ShoppingCartIcon/>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
