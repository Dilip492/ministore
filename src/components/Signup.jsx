import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import google from '../images/google.png'

import disimg from '../images/design.jpg'
import { useNavigate } from 'react-router-dom';
import { Loader } from './Loader';
import { UserProfile } from './UserProfile';


const SignupForm = () => {

    const [loader, setLoader] = useState(false);

    const [userdata, setUserdata] = useState({ name: " ", email: " ", phoneNo: " ", password: " " });

    const navigate = useNavigate();

    const handlechange = (e) => {

        const { name, value } = e.target

        setUserdata({ ...userdata, [name]: value });

        // setUserdata({...userdata,[e.target.name]:e.target.value})

    }


    const handlePhoneChange = (value) => {
        setUserdata((prevState) => ({
            ...prevState,
            phoneNo: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)


        try {

            const response = await fetch("https://backend-nodejs-deploy-1.onrender.com/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials:"include",
                body: JSON.stringify(userdata)
            });

            const data = await response.json();
            setLoader(false)
            if (data.message) {

                alert(data.message)
            }

            if (data.Token) {
                localStorage.setItem('token', data.Token);
                navigate('/popup')



            }
        } catch (error) {

            alert("server not responde")
        }




    }



    const handleGoogleLogin = () => {

        window.open(
            "https://backend-nodejs-deploy-1.onrender.com/auth/google",

        );


    };




    return (
        <div>
            {localStorage.getItem('token') ? <UserProfile /> : loader ? (<Loader />) :
                <div className='signup-container'>
                    <div className="image-section">
                        <img src={disimg} alt="Signup" />
                    </div>
                    <div className='display-container'>


                        <form className='signup-form' onSubmit={handleSubmit}>
                            <h2>Create Account</h2>
                            <h3>Do register your account</h3>
                            <div className='input-container2'>
                                <label>Username</label>
                                <input
                                    type="text"
                                    name='name'
                                    onChange={handlechange}
                                    required
                                />
                            </div>
                            <div className='input-container2'>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    onChange={handlechange}
                                    required
                                />
                            </div>
                            <div className='input-container2'>
                                <label>Phone Number</label>
                                <PhoneInput

                                    country={'in'}
                                    // name='phoneNo'
                                    value={userdata.phoneNo}
                                    onChange={handlePhoneChange}
                                    inputStyle={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        margin: '0.5rem 0',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box',
                                    }}
                                    buttonStyle={{
                                        border: '1px solid #ccc',
                                        borderRadius: '4px 0 0 4px',
                                    }}
                                    containerStyle={{
                                        marginBottom: '1rem',
                                    }}
                                />

                            </div>
                            <div className='input-container2'>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    onChange={handlechange}
                                    required
                                />
                            </div>

                            <button className='signin-btn' type="submit">Sign Up</button>
                            <p>Do you have account? <a href="/login" >Sign in </a></p>


                            <button className="google-btn" type="submit" onClick={handleGoogleLogin}  ><img className="google-logo" src={google} alt="" />  Continue with Google </button>
                        </form>

                    </div>
                </div>}
        </div>
    );
};

export default SignupForm;
