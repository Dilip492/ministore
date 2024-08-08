import React from 'react'
import logo from "../images/main-logo.png";
import cart from "../images/cart.png"
import user from "../images/user.png"
import search from "../images/search.png"
import { Link as ScrollLink } from 'react-scroll';
import ham from "../images/menu.png"
import wrong from "../images/wrong.png"
import { useNavigate } from 'react-router-dom';

import { useCart } from '../context/CartContext';





export const MobileNav = () => {


    const navigate = useNavigate();

    
    const { count } = useCart();

    const navbarslide = () => {

        const element = document.querySelector(".M-navbar-slide");
        element.classList.remove('show')
    }


    const remove = () => {

        const element = document.querySelector(".M-navbar-slide");
        element.classList.add('show')
    }

    const handle = () => {

        navigate('/')
    }




    return (
        <div>

            <div className="mobile-nav">

                <div className="Mnavbar">
                    <div className="Mlogo">
                        <img src={logo} onClick={handle} alt="img" />

                    </div>
                    <div className="ham">
                        <img src={ham} onClick={navbarslide} alt="ham" />
                    </div>

                </div>

                <div className="M-navbar-slide show ">
                    <div className="Mlogo-m">
                        <img src={logo} onClick={handle} alt="img" />


                        <div className="wrong-img">
                            <img src={wrong} onClick={remove} alt="" />
                        </div>

                    </div>



                    <ul>
                        <li><ScrollLink to="main" smooth={true} duration={300}  >HOME</ScrollLink></li>
                        <li><ScrollLink to="container-service" smooth={true} duration={300}>SERVICES</ScrollLink></li>
                        <li><ScrollLink to="product-container" smooth={true} duration={300}>PRODUCTS</ScrollLink></li>
                        <li><ScrollLink to="watch-header" smooth={true} duration={300}>WATCHES</ScrollLink></li>
                        <li><ScrollLink to="sale-container" smooth={true} duration={300}>SALE</ScrollLink></li>
                        <li><ScrollLink to="blog-container" smooth={true} duration={300}>BLOG</ScrollLink></li>

                    </ul>


                    <div className="user-item">


                        <img src={search} alt="img" />
                        <img onClick={() => { navigate("/login") }} src={user} alt="img" />
                        <div className="cart-btn-icon">

                            <img onClick={() => { navigate("/cart") }} src={cart} alt="img" />
                            <span className="badge">{count}</span>



                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
