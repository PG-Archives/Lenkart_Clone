import React, { useState, useEffect } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../actions/userAction'
import { useAlert } from 'react-alert';

const Register = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated} = useSelector((state) => state.user);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const {name, email, password} = user;
    
    const [gender ,setGender] = useState('')

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password",password)
        dispatch(register(myForm));
    };

    const registerDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

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
        <div className='login'>
            <div className='loginmain'>
                <div className='loginleft'>
                    <h4 className='loginheading'>Register</h4>
                    <div className='registertext'>
                        <span>Sign up with</span>
                    </div>

                    <div className='registertypesbox'>
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

                    <div className='registertext'>
                        <span>OR</span>
                    </div>


                    <form 
                    className="signUpForm"
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}>
                    
                        <h4 className='registersmallheadings'>Your Name</h4>
                        <div className='logininputbox'>
                            <input 
                            type="text"
                            className='logininputemail'
                            placeholder="Name"
                            required
                            name="name"
                            value={name}
                            onChange={registerDataChange} />
                        </div>

                        <h4 className='registersmallheadings'>Gender</h4>

                        <div className='registergender'>
                            <div className='registergenderbox' >
                                <div className='registeroptionbox' onClick={()=>setGender('male')}>
                                    <div className='registeroptionselectbox' style={{backgroundColor: gender === 'male' ? 'rgba(74, 105, 226, 1)':'transparent'}}>
                                    </div>
                                </div>
                                <span className='registergendertxt'> Male </span>
                            </div>

                            <div className='registergenderbox'>
                                <div className='registeroptionbox' onClick={()=>setGender('female')}>
                                    <div className='registeroptionselectbox' style={{backgroundColor: gender === 'female' ? 'rgba(74, 105, 226, 1)':'transparent'}}>
                                    </div>
                                </div>
                                <span className='registergendertxt'> Female </span>
                            </div>


                            <div className='registergenderbox'>
                                <div className='registeroptionbox' onClick={()=>setGender('other')}>
                                    <div className='registeroptionselectbox' style={{backgroundColor: gender === 'other' ? 'rgba(74, 105, 226, 1)':'transparent'}}>
                                    </div>
                                </div>
                                <span className='registergendertxt'> Other </span>
                            </div>
                        </div>

                        <h4 className='registersmallheadings'>Login Details</h4>
                        
                        <div className='logininputbox'>
                            <input 
                            type="email"
                            className='logininputemail'
                            placeholder="Email"
                            required
                            name="email"
                            value={email}
                            onChange={registerDataChange} />
                        </div>

                        <div className='logininputbox'>
                            <input 
                            type="password"
                            className='logininputemail'
                            placeholder="Password"
                            required
                            name="password"
                            value={password}
                            onChange={registerDataChange} />
                        </div>
                        <button className='loginbutton'>
                            <input type="submit" value="Register" className="signUpBtn" />
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register
