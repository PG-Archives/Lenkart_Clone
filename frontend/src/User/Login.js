import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../actions/userAction'
import { useAlert } from 'react-alert';
import Loader from '../components/Layout/Loader/Loader'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, loading, isAuthenticated} = useSelector((state) => state.user);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate('/account');
        }
    }, [dispatch, alert, error, isAuthenticated, navigate]);

  return (
        <>
            {loading ? (
                <Loader />
            ) : (
            <>
                <div className='login'>
                    <div className='loginmain'>
                        <div className='loginleft'>

                            <h4 className='loginheading'>Login</h4>
                            <form className="loginForm" onSubmit={loginSubmit}>
                            <div className='logininputbox'>
                                    <input 
                                    className='logininputemail'
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                        />

                            </div>

                            <div className='logininputbox'>
                                <input 
                                className='logininputpassword'
                                type="password"
                                placeholder="Password"
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                            </div>

                            <button className='loginbutton'>
                                <input type="submit" value="Login" className="loginBtn"/>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                </span>
                            </button>

                            <div className='logintypesbox'>
                                <button className='logintypebutton'>
                                    <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="" className='logintypeimg' />
                                </button>

                                <button className='logintypebutton'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="" className='logintypeimg' />
                                </button>

                                <button className='logintypebutton'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" className='logintypeimg' />
                                </button>
                            </div>
                            </form>
                            
                            <p>Don't have an account?</p>
                            <div className='loginforgotpassword'>
                                <Link to='/register' className='loginforgotpasswordlink'>
                                <span>Sign up now!</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </>
            )}
        </>
  )
}

export default Login
