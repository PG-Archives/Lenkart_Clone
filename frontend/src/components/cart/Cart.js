import React, { Fragment } from 'react'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction'
import {useNavigate, Link} from 'react-router-dom'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import CartItemCard from "./CartItemCard.js";
import "./Cart2.css";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector(state => state.cart);
    const { isAuthenticated } = useSelector(state => state.user)

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity){
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    }

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity){
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    }

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    }

    const checkoutHandler = () => {
        if(isAuthenticated){
            navigate('/checkout');
        }
        else{
            navigate('/login');
        }
    }

    return (
        <Fragment>
            {cartItems.length === 0 ? (
                <div className="emptyCart">
                    <RemoveShoppingCartIcon />
                    <h2>No product in your cart</h2>
                    <Link to="/products">View Products</Link>
                </div>
            )  
            : (
            <Fragment>
                <div className="cartPage">
                    <div className="cartHeader">
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    
                    {cartItems && cartItems.map(item => (
                        <div className="cartContainer" key={item.product}>
                        <CartItemCard item={item} deleteCartItems = {deleteCartItems}/>
                        <div className="cartInput">
                            <button onClick={() => {
                                decreaseQuantity(item.product, item.quantity);
                            }}>-</button>
                            <input type="number" value={item.quantity} readOnly/>
                            <button onClick={() => {
                                increaseQuantity(item.product, item.quantity, item.stock);
                            }}>+</button>
                        </div>
                        <p className="cartSubtotal">{`Rs ${item.price * item.quantity}`}</p>
                    </div>
                    ))}
                    
                    <div className="cartGrossProfit">
                        <div></div>
                        <div className="cartGrossProfitBox">
                            <p>Gross Total</p>
                            <p>{`Rs ${cartItems.reduce(
                                (acc,item) => acc + item.quantity * item.price, 0
                            )}`}</p>
                        </div>
                        <div></div>
                        <div className="checkOutBtn">
                            <button onClick={checkoutHandler}>Check Out</button>
                        </div>
                    </div>
                </div>
            </Fragment>
            )}
        </Fragment>
    )
}

export default Cart;

// export default class Cart extends Component {
    
//     render() {
//         return (
// <div className='empty'>
//     <div className='cartsaving'>
//         <h2 className='cartsavingheading'>Saving to celebrate</h2>
//         <p className='cartsavingtext'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</p>
//     </div>
//     <div className='bag cartsaving'>
//         <div className='item'>
//             <div className='itemtitle'>
//                 <h2 className='itemheading'>Your Bag</h2>
//                 <p className='itemheadingtext'>Items in your bag not reserved- check out now to make them yours.</p></div>
//             <div className='content'>
//                 <img src='https://i02.appmifile.com/417_operator_in/17/08/2022/0d6e11e0b3d93f29d2877c77b28d9102!800x800!85.jpg' alt='youritemimage' className='itemimage' />
//                 <div className='contenttext'>
//                     <h3>DROPSET TRAINER SHOES</h3> 
//                     <p className='shoeinfo'>Men’s Road Running Shoes </p>
//                     <p className='shoeinfo'>Enamel Blue/ University White</p>
//                     <p className='shoeinfo'>Size: 10</p>
//                     <p className='shoeinfo'>Quantity:1</p>
//                     </div>
//                     <h2 className='price'>$130.00</h2>
//             </div>
//         </div>
//         <div className='order'>
//             <h2 className='orderheading'>Order Summary</h2>
//             <div className='ordercontentgrid'>
//                 <p>1 Item</p>
//                 <p>$130.00</p>
//                 <p>Delivery</p>
//                 <p>$6.9</p>
//                 <p>Tax</p>
//                 <p>$13.00</p>
//             </div>
//             <button className='checkoutbutton' type="button">Checkout</button>
//         </div>
//     </div>
// </div>
//         )
//     }
// }