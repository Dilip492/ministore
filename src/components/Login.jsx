import React, { useState } from "react";
import google from "../images/google.png"
import img from "../images/userlock.jpg"
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";

import { UserProfile } from "./UserProfile";




const Login = () => {



    const [loader, setLoader] = useState(false)

    const [userdata, setUserdata] = useState({ email: " ", password: " " });

    const navigate = useNavigate();


    const handlechange = (e) => {

        const { name, value } = e.target;

        setUserdata({ ...userdata, [name]: value })

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoader(true)
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userdata)
            });

            const data = await response.json();
            setLoader(false)
            if (data.message) {
                alert(data.message)
            }

            console.log(data.Token)
            if (data.Token) {
                localStorage.setItem('token', data.Token);
                navigate('/popup')
            }

            console.log(data)


        } catch (error) {


            alert("server not responde")
        }

    };



    const handleGoogleLogin = () => {
        window.open("http://localhost:5000/auth/google")
    }


    return (

        <div>



      

            {localStorage.getItem('token') ? <UserProfile /> :
                loader ? <Loader /> :
                    <div className="login-container">

                        <div className="image-section">
                            <img src={img} alt="Signup" />
                        </div>
                        <div className="display-container">



                        </div>

                        <form className="login-form" onSubmit={handleSubmit}>
                            <h2>Welcome Back!</h2>
                            <h3>Please login to your account</h3>
                            <div className="input-container">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handlechange}
                                    required
                                />
                            </div>
                            <div className="input-container">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handlechange}
                                    required
                                    placeholder=""
                                />
                            </div>
                            <button className="signin-btn" type="submit">Sign in </button>

                            <p>Not register yet? <a href="/signup" >Create an account</a></p>

                            <button className="google-btn" onClick={handleGoogleLogin} type="submit"><img className="google-logo" src={google} alt="" />  Sign in with Google </button>
                        </form>

                    </div>}
        </div>
    );
};


export default Login;