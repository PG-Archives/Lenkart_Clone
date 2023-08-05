import React from 'react'
import './checkout.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const navigate = useNavigate();

    const shippingSubmit = () => {
        navigate("/order/confirm");
      };

  return (
    <>
        <div className='checkout'>
            <div className='checkoutcontainer'>
                <div className='checkoutleft'>
                    <form
                        className="shippingForm"
                        encType="multipart/form-data"
                        onSubmit={shippingSubmit}
                    >

                        <h4 className='registersmallheadings'>Contact Details</h4>

                        <div className='checkoutinputbox'>
                            <input required type="email" className='checkoutinput' id='email' placeholder="Email" />
                        </div>

                        <h4 className='registersmallheadings'>Shipping Address</h4>

                        <div className='checkoutform'>
                            <div className='checkoutinputbox'>
                                <input required type="text" className='checkoutinput' id='firstName' placeholder="First Name" />
                            </div>

                            <div className='checkoutinputbox'>
                                <input required type="text" className='checkoutinput' id='lastName' placeholder="Last Name" />
                            </div>

                            <div className='checkoutinputbox2'>
                                <input required type="text" className='checkoutinpu2' id='address' placeholder="Find Delivery Address" />
                            </div>

                            <div className='checkoutinputbox'>
                                <input required type="text" className='checkoutinput' id='number' placeholder="Phone Number" />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Continue"
                            className="shippingBtn"
                        />
                    </form>
                </div>

            </div>
        </div>
    </>
  )
}

export default Checkout
