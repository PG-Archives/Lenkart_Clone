import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './assets/footer/Footer';
import Navbar from './assets/navbar/Navbar';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';
import ListingPage from './components/listing page/ListingPage';
import Login from './User/Login';
import Register from './User/Register';
import Cart from './components/cart/Cart';
import Productspecpg from './components/productspecific/Productspecpg';
import store from './store';
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import Profile from './User/Profile';
import ConfirmOrder from './components/cart/confirmOrder';
import Payment from './components/cart/Payment';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './components/Route/ProtectedRoute';
import Dashboard from './components/Admin/Dashboard';
import ProductList from './components/Admin/ProductList';
import NewProduct from './components/Admin/NewProduct';
import OrderList from './components/Admin/OrderList';
import ProcessOrder from './components/Admin/ProcessOrder';
import MyOrders from './components/Order/MyOrder';
import OrderDetails from './components/Order/OrderDetails';
import Search from './components/listing page/Search';

function App() {

  const {user, isAuthenticated} = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const {data} = await axios.get('/api/v1/stripeapikey');
    
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/products' element={<ListingPage/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/product/:id" element={<Productspecpg/>} />
            <Route path="/account" element={<Profile/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order/confirm' element={<ConfirmOrder/>}/>
            <Route path="/process/payment" element={<Payment/>} /> 
            <Route path="/orders" element={<MyOrders/>} /> 
            <Route path="/search" element={<Search/>} />
            <Route path="/products/:keyword" element={<ListingPage/>} />
            <Route path="/order/:id" element={<OrderDetails/>} />  


            {/* Admin Routes */}
            <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard/>} />    
            <Route isAdmin={true} path="/admin/products" element={<ProductList/>} /> 
            <Route isAdmin={true} path="/admin/product" element={<NewProduct/>} />    
            <Route isAdmin={true} path="/admin/orders" element={<OrderList/>} />    
            <Route isAdmin={true} path="/admin/order/:id" element={<ProcessOrder/>} /> 

        </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
